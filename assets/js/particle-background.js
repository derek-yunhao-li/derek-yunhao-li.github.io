(() => {
    "use strict";

    const canvas = document.getElementById("particle-background");

    if (!canvas) {
        return;
    }

    const context = canvas.getContext("2d", {
        alpha: true
    });

    if (!context) {
        return;
    }

    const settings = {
        // Particle density is also adjusted automatically for screen size.
        minimumParticles: 36,
        maximumParticles: 100,
        pixelsPerParticle: 13000,

        // Movement speed in CSS pixels per second.
        minimumSpeed: 11,
        maximumSpeed: 23,

        // Maximum distance for lines between ordinary particles.
        particleConnectionRadius: 85,

        // Maximum distance for lines extending from the cursor.
        cursorConnectionRadius: 148,

        // Higher values make the visual cursor catch up more quickly.
        cursorSmoothing: 18,

        // Rendering appearance.
        dotSize: 1.2,
        dotAlpha: 0.58,
        maximumLineAlpha: 0.48,

        // Avoid excessively large canvas buffers on very high-DPI screens.
        maximumDevicePixelRatio: 2
    };

    let viewportWidth = 0;
    let viewportHeight = 0;
    let devicePixelRatio = 1;
    let particles = [];

    let previousTimestamp = performance.now();
    let animationFrameId = null;

    const reducedMotionQuery = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    const pointer = {
        active: false,
        x: 0,
        y: 0,
        targetX: 0,
        targetY: 0
    };

    function randomBetween(minimum, maximum) {
        return minimum + Math.random() * (maximum - minimum);
    }

    function createParticle() {
        const angle = Math.random() * Math.PI * 2;
        const speed = randomBetween(
            settings.minimumSpeed,
            settings.maximumSpeed
        );

        return {
            x: Math.random() * viewportWidth,
            y: Math.random() * viewportHeight,
            velocityX: Math.cos(angle) * speed,
            velocityY: Math.sin(angle) * speed
        };
    }

    function calculateParticleCount() {
        const screenArea = viewportWidth * viewportHeight;

        return Math.round(
            Math.min(
                settings.maximumParticles,
                Math.max(
                    settings.minimumParticles,
                    screenArea / settings.pixelsPerParticle
                )
            )
        );
    }

    function synchronizeParticleCount() {
        const desiredCount = calculateParticleCount();

        while (particles.length < desiredCount) {
            particles.push(createParticle());
        }

        if (particles.length > desiredCount) {
            particles.length = desiredCount;
        }
    }

    function resizeCanvas() {
        viewportWidth = window.innerWidth;
        viewportHeight = window.innerHeight;

        devicePixelRatio = Math.min(
            window.devicePixelRatio || 1,
            settings.maximumDevicePixelRatio
        );

        canvas.width = Math.round(
            viewportWidth * devicePixelRatio
        );

        canvas.height = Math.round(
            viewportHeight * devicePixelRatio
        );

        canvas.style.width = `${viewportWidth}px`;
        canvas.style.height = `${viewportHeight}px`;

        /*
         * Drawing commands continue to use CSS-pixel coordinates,
         * while the browser uses the denser backing canvas internally.
         */
        context.setTransform(
            devicePixelRatio,
            0,
            0,
            devicePixelRatio,
            0,
            0
        );

        particles.forEach((particle) => {
            particle.x = Math.min(
                Math.max(particle.x, 0),
                viewportWidth
            );

            particle.y = Math.min(
                Math.max(particle.y, 0),
                viewportHeight
            );
        });

        synchronizeParticleCount();
    }

    function updatePointer(deltaSeconds) {
        if (!pointer.active) {
            return;
        }

        /*
         * Exponential interpolation makes cursor movement smooth and
         * independent of the display's refresh frequency.
         */
        const interpolation =
            1 -
            Math.exp(
                -settings.cursorSmoothing * deltaSeconds
            );

        pointer.x +=
            (pointer.targetX - pointer.x) * interpolation;

        pointer.y +=
            (pointer.targetY - pointer.y) * interpolation;
    }

    function updateParticle(particle, deltaSeconds) {
        if (!reducedMotionQuery.matches) {
            particle.x +=
                particle.velocityX * deltaSeconds;

            particle.y +=
                particle.velocityY * deltaSeconds;
        }

        if (particle.x <= 0) {
            particle.x = 0;
            particle.velocityX = Math.abs(
                particle.velocityX
            );
        } else if (particle.x >= viewportWidth) {
            particle.x = viewportWidth;
            particle.velocityX = -Math.abs(
                particle.velocityX
            );
        }

        if (particle.y <= 0) {
            particle.y = 0;
            particle.velocityY = Math.abs(
                particle.velocityY
            );
        } else if (particle.y >= viewportHeight) {
            particle.y = viewportHeight;
            particle.velocityY = -Math.abs(
                particle.velocityY
            );
        }
    }

    function drawLine(
        firstPoint,
        secondPoint,
        connectionRadius
    ) {
        const differenceX =
            firstPoint.x - secondPoint.x;

        const differenceY =
            firstPoint.y - secondPoint.y;

        const distanceSquared =
            differenceX * differenceX +
            differenceY * differenceY;

        const radiusSquared =
            connectionRadius * connectionRadius;

        if (distanceSquared >= radiusSquared) {
            return;
        }

        /*
         * Strength approaches 1 when the points are close and
         * approaches 0 at the connection-radius boundary.
         */
        const strength =
            1 - distanceSquared / radiusSquared;

        const lineAlpha =
            strength * settings.maximumLineAlpha;

        context.beginPath();
        context.moveTo(firstPoint.x, firstPoint.y);
        context.lineTo(secondPoint.x, secondPoint.y);

        context.lineWidth =
            0.3 + strength * 0.55;

        context.strokeStyle =
            `rgba(0, 0, 0, ${lineAlpha})`;

        context.stroke();
    }

    function drawParticle(particle) {
        const halfDotSize = settings.dotSize / 2;

        context.fillStyle =
            `rgba(0, 0, 0, ${settings.dotAlpha})`;

        context.fillRect(
            particle.x - halfDotSize,
            particle.y - halfDotSize,
            settings.dotSize,
            settings.dotSize
        );
    }

    function drawScene(deltaSeconds) {
        context.clearRect(
            0,
            0,
            viewportWidth,
            viewportHeight
        );

        updatePointer(deltaSeconds);

        for (
            let particleIndex = 0;
            particleIndex < particles.length;
            particleIndex += 1
        ) {
            const particle =
                particles[particleIndex];

            updateParticle(
                particle,
                deltaSeconds
            );

            drawParticle(particle);

            /*
             * Connect this particle only to later particles,
             * preventing the same pair from being drawn twice.
             */
            for (
                let otherIndex = particleIndex + 1;
                otherIndex < particles.length;
                otherIndex += 1
            ) {
                drawLine(
                    particle,
                    particles[otherIndex],
                    settings.particleConnectionRadius
                );
            }

            /*
             * The cursor participates only as a line endpoint.
             * It does not alter particle positions, which eliminates
             * the oscillation in the original implementation.
             */
            if (pointer.active) {
                drawLine(
                    particle,
                    pointer,
                    settings.cursorConnectionRadius
                );
            }
        }
    }

    function animate(timestamp) {
        /*
         * Use elapsed time rather than movement per frame.
         * Capping the interval prevents a large jump after a pause.
         */
        const deltaSeconds = Math.min(
            (timestamp - previousTimestamp) / 1000,
            1 / 30
        );

        previousTimestamp = timestamp;

        drawScene(deltaSeconds);

        animationFrameId =
            window.requestAnimationFrame(animate);
    }

    function startAnimation() {
        if (animationFrameId !== null) {
            return;
        }

        previousTimestamp = performance.now();

        animationFrameId =
            window.requestAnimationFrame(animate);
    }

    function stopAnimation() {
        if (animationFrameId === null) {
            return;
        }

        window.cancelAnimationFrame(
            animationFrameId
        );

        animationFrameId = null;
    }

    window.addEventListener(
        "resize",
        resizeCanvas,
        { passive: true }
    );

    window.addEventListener(
        "pointermove",
        (event) => {
            /*
             * Ignore touch movement; the effect is intended for
             * mouse and stylus pointers.
             */
            if (event.pointerType === "touch") {
                return;
            }

            const wasInactive = !pointer.active;

            pointer.active = true;
            pointer.targetX = event.clientX;
            pointer.targetY = event.clientY;

            if (wasInactive) {
                pointer.x = pointer.targetX;
                pointer.y = pointer.targetY;
            }
        },
        { passive: true }
    );

    document.documentElement.addEventListener(
        "pointerleave",
        () => {
            pointer.active = false;
        },
        { passive: true }
    );

    window.addEventListener(
        "blur",
        () => {
            pointer.active = false;
        }
    );

    document.addEventListener(
        "visibilitychange",
        () => {
            if (document.hidden) {
                stopAnimation();
            } else {
                startAnimation();
            }
        }
    );

    resizeCanvas();
    startAnimation();
})();
