# The Assur Caravan — website 2.2.0

Play through GitHub Pages. No player installation is required.

## Editing

- `rules.js`: prices, fees, cargo capacity, relative map positions, and other scenario values.
- `engine.js`: game mechanics and save validation.
- `guide.js`: text shared by How to play and the Guide tab.
- `app.js` and `style.css`: the interface and route diagram.

Run `node --test tests/*.test.js` for developer checks. Node is not needed to play.

This release uses a starting loan of 7,200 silver shekels with no interest calculation. Repayment and final accounting deduct only the remaining starting loan and emergency debt. A necessary unpaid bill still carries its stated one-time emergency handling fee.

The map is redrawn from the supplied location reference. No reference image is included. All roads and travel times are schematic.

`student-design.md` is a text copy of the current in-game instructions. The alignment manifest identifies the website code for this release. The previously supplied Word documents have not been updated for this website revision.

Each player or team has a separate browser-local game. Use one active tab per game. Download a save to back up progress or move to another device. Earlier rules versions require a new game; existing files are not overwritten until you start or import a game.

57 behavioral tests pass, including complete-season simulations, the fixed starting loan through final accounting, emergency debt, repayment order, and save validation.
