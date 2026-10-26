// The single numerical source for game mechanics and generated documentation.
export const RULES = {
  "_help": "Edit numbers here, then start a NEW game. Existing saves retain their original rules. A dice field is [number_of_dice, sides]. Money is silver shekels; bulk goods use minas (60 shekels of weight).",
  "title": "YATS · The Assur Caravan",
  "year": "1895 BCE",
  "starting_silver": 7200,
  "season": {
    "base_days": 196,
    "dice": [
      3,
      4
    ],
    "foot_grace_base": 21,
    "foot_grace_dice": [
      2,
      4
    ]
  },
  "finance": {
    "annual_interest": 0.33,
    "living_per_week": 1,
    "emergency_fee": 0.1,
    "remittance_fee": 0.03,
    "remittance_days": 21
  },
  "caravan": {
    "minimum_export_share": 0.1,
    "leader_fee": 0.05,
    "tin_shekels_per_donkey_day": 2,
    "stabling_tin_shekels": 1,
    "hotel_tin_shekels": 2,
    "donkey_weekly_mortality": 0.01,
    "hard_driving_weekly_mortality": 0.05,
    "hard_driving_speed_bonus": 0.1,
    "escort_cost_per_day": 1.25,
    "escort_loss_multiplier": 0.5,
    "escort_arrest_multiplier": 0.75,
    "incident_chance_per_day": 0.018,
    "guide_fee": 18,
    "repair_fee": 12,
    "guide_delay_days": 2,
    "repair_delay_days": 1,
    "nightly_replacement_dice": [
      1,
      2
    ]
  },
  "markets": {
    "quote_days": 7,
    "assur_resale_factor": 0.85,
    "import_purchase_factor": 1.12,
    "tin_early_ratio_base": 12,
    "tin_late_ratio_base": 9,
    "tin_ratio_dice": [
      1,
      2
    ],
    "tin_change_day_base": 25,
    "tin_change_day_spread": 3,
    "textile_base": 15,
    "textile_dice": [
      1,
      2
    ],
    "fine_textile_base": 22,
    "fine_textile_dice": [
      1,
      3
    ],
    "fine_restock_loads": 2,
    "fine_restock_dice": [
      3,
      4
    ],
    "fine_restock_days_per_roll": 7,
    "donkey_restock_days": 28,
    "donkey_stock_base": 12,
    "donkey_stock_dice": [
      1,
      4
    ],
    "donkey_assur_price_base": 20,
    "donkey_assur_price_spread": 1,
    "donkey_other_price_base": 20,
    "donkey_other_price_dice": [
      1,
      4
    ],
    "donkey_sale_base": 20,
    "donkey_sale_dice": [
      1,
      2
    ],
    "copper_ratio_base": 180,
    "copper_ratio_dice": [
      1,
      20
    ],
    "copper_markup_base": 1.0,
    "copper_markup_dice": [
      1,
      10
    ],
    "iron_offer_chance": 0.1,
    "iron_offer_minas": 1,
    "iron_silver_per_mina": 600,
    "iron_markup_base": 0.8,
    "iron_markup_dice": [
      1,
      4
    ]
  },
  "taxes": {
    "kanes_tin": 0.1,
    "kanes_textiles": 0.05,
    "purushhaddum_sales": 0.05,
    "clearance_dice": [
      1,
      3
    ]
  },
  "wool": {
    "buy_start": 90,
    "buy_end": 120,
    "sale_day": 180,
    "silver_per_mina": 0.5,
    "markup_base": 0.33,
    "markup_dice": [
      1,
      10
    ]
  },
  "wagons": {
    "small": {
      "name": "Small wagon",
      "capacity_minas": 600,
      "weekly_rent": 5
    },
    "large": {
      "name": "Large wagon",
      "capacity_minas": 1200,
      "weekly_rent": 9
    }
  },
  "goods": {
    "tin": {
      "name": "Tin",
      "unit": "mina",
      "step": 1,
      "units_per_donkey": 120,
      "description": "Lightly priced in Assur, valuable to Anatolian buyers. One donkey carries 120 minas."
    },
    "textile": {
      "name": "Textiles",
      "unit": "piece",
      "step": 1,
      "units_per_donkey": 30,
      "description": "Ordinary cloth. A legal export from Assur needs both tin and textiles."
    },
    "fine_textile": {
      "name": "Fine textiles",
      "unit": "piece",
      "step": 1,
      "units_per_donkey": 30,
      "description": "Limited supply in Assur: two donkey loads arrive at irregular intervals."
    },
    "copper": {
      "name": "Copper",
      "unit": "mina",
      "step": 1,
      "units_per_donkey": 120,
      "description": "Buy in Durhumit; seek buyers in Purušhaddum. Heavy cargo suits rented wagons."
    },
    "iron": {
      "name": "Iron",
      "unit": "mina",
      "step": 1,
      "units_per_donkey": 120,
      "description": "An occasional illicit consignment at the Euphrates. Only the Smuggler’s Track accepts it."
    }
  },
  "cities": {
    "assur": {
      "name": "Assur",
      "subtitle": "Your house on the Tigris",
      "description": "Bales are being sealed and tin is arriving from the east. Assemble a balanced consignment, keep money for the road, and bring your earnings home.",
      "markup_base": 0,
      "markup_dice": [
        1,
        1
      ],
      "map": [
        0.87,
        0.8
      ],
      "report": "Tin and cloth leave this city; early tin arrivals can offer favorable buying terms. Keep a road reserve."
    },
    "euphrates": {
      "name": "Euphrates crossing",
      "subtitle": "Where caravans change roads",
      "description": "Ferries, toll collectors, and competing reports. Sell here for a shorter venture, follow the legal road to Kaneš, or take your chances on the track.",
      "markup_base": 0.4,
      "markup_dice": [
        1,
        12
      ],
      "map": [
        0.62,
        0.57
      ],
      "report": "Buyers offer modest premiums over Assur. A shorter venture ties up less time, but tolls can absorb much of the gain."
    },
    "kanes": {
      "name": "Kaneš",
      "subtitle": "The merchants’ quarter",
      "description": "The kārum offers a deep market and a gateway to the interior. Imported tin and cloth must clear customs before the caravan continues.",
      "markup_base": 1.0,
      "markup_dice": [
        1,
        20
      ],
      "map": [
        0.36,
        0.37
      ],
      "report": "A deep market for imports, with substantial premiums over Assur. Tin and cloth must clear local customs."
    },
    "durhumit": {
      "name": "Durhumit",
      "subtitle": "The copper market",
      "description": "Copper can fill a wagon cheaply, but the road to its buyers is long. Hire transport here and weigh a second venture against the shrinking season.",
      "markup_base": 1.5,
      "markup_dice": [
        1,
        20
      ],
      "map": [
        0.6,
        0.15
      ],
      "report": "Import premiums are usually stronger than in Kaneš. Copper and wagon hire offer a second venture to Purušhaddum."
    },
    "purushhaddum": {
      "name": "Purušhaddum",
      "subtitle": "The western market",
      "description": "High prices draw merchants west. Copper buyers, wool agents, and a sales tax await. The return to Assur will take time.",
      "markup_base": 2.0,
      "markup_dice": [
        2,
        12
      ],
      "map": [
        0.12,
        0.65
      ],
      "report": "The largest import premiums lie here, with a long journey and a sales levy. Wool contracts open during days 90–120."
    }
  },
  "routes": [
    {
      "id": "assur_crossing",
      "a": "assur",
      "b": "euphrates",
      "name": "The western road",
      "days_base": 14,
      "days_dice": [
        1,
        2
      ],
      "days_signed": false,
      "loss_chance": 0.03,
      "toll": 0.05,
      "smuggling": false,
      "risk": "Exposed",
      "description": "Ferries and road fees; occasional attacks on isolated caravans."
    },
    {
      "id": "crossing_kanes",
      "a": "euphrates",
      "b": "kanes",
      "name": "The mountain road",
      "days_base": 21,
      "days_dice": [
        1,
        6
      ],
      "days_signed": false,
      "loss_chance": 0.07,
      "toll": 0.05,
      "smuggling": false,
      "risk": "Dangerous",
      "description": "The most exposed legal leg. Customs clearance adds time on arrival in Kaneš."
    },
    {
      "id": "kanes_durhumit",
      "a": "kanes",
      "b": "durhumit",
      "name": "The northern road",
      "days_base": 21,
      "days_dice": [
        1,
        4
      ],
      "days_signed": false,
      "loss_chance": 0.01,
      "toll": 0,
      "smuggling": false,
      "risk": "Relatively sheltered",
      "description": "A legal road into the copper country."
    },
    {
      "id": "kanes_purushhaddum",
      "a": "kanes",
      "b": "purushhaddum",
      "name": "The western uplands",
      "days_base": 28,
      "days_dice": [
        1,
        8
      ],
      "days_signed": false,
      "loss_chance": 0.01,
      "toll": 0,
      "smuggling": false,
      "risk": "Relatively sheltered",
      "description": "A long legal journey to the western buyers."
    },
    {
      "id": "durhumit_purushhaddum",
      "a": "durhumit",
      "b": "purushhaddum",
      "name": "The copper road",
      "days_base": 35,
      "days_dice": [
        1,
        6
      ],
      "days_signed": true,
      "loss_chance": 0.01,
      "toll": 0,
      "smuggling": false,
      "risk": "Relatively sheltered",
      "description": "The only road passable by the rented copper wagons."
    },
    {
      "id": "smugglers_track",
      "a": "euphrates",
      "b": "durhumit",
      "name": "Smuggler’s Track",
      "days_base": 30,
      "days_dice": [
        2,
        4
      ],
      "days_signed": false,
      "loss_chance": 0.09,
      "toll": 0.02,
      "smuggling": true,
      "arrest_dice": [
        6,
        6
      ],
      "risk": "Severe · arrest possible",
      "description": "Bypasses Kaneš and its customs. Patrols can jail the entire enterprise."
    }
  ],
  "version": "2.1.0",
  "scenario_id": "YATS-WEB-2.1.0"
};
