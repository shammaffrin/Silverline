import {
  Ablusion,
  AGG,
  Airman1550,
  Airman185,
  AirmanGenerator,
  AsphaltCutters,
  BackhoeLoader,
  BackhoeLoaderCase570T,
  BackhoeLoaderJcb3Cx,
  BackhoeLoaderJcb3Dx,
  BlockCutting,
  BoomLoaderJcb540170,
  BOSS,
  Cabin,
  ConcreteMixers,
  CoreCutters,
  CoreCuttingMachine,
  Cummins,
  Denyo,
  DrillingMachineDewalt,
  ELECTREX,
  ESAB,
  Excavator,
  ExcavatorCat320,
  ExcavatorJcbJs205,
  ExcavatorKomatsuPc210,
  ExcavatorKomatsuPc400,
  ExcavatorYanmarVio35,
  FGWilson,
  FloorGrindingMachine,
  FloorScarifier,
  Forklift,
  Generac,
  Generator,
  Gesan,
  HandGrindersBosch,
  JackHammers,
  JET,
  PISILVER,
  PlateCompactors,
  PowerFloat,
  RollerCompactors,
  SAW,
  SteelBarBendingMachine,
  SubmersiblePumps,
  TELWIN,
  TowerLight,
  VacuumCleaners,
  WaterPumps3Inch,
  WheelLoader,
  WheelLoaderKomatsuCat966L,
  WheelLoaderKomatsuWa470,
} from "../assets";

const categoriesData = {
  Generators: {
    type: "Capacity",
    hasRange: true,
    description:
      "Generators are essential for providing backup power during outages and ensuring continuous operation in various settings. Silverline Enterprises offers a selection of generators from trusted brands like Honda and Kirloskar, known for their durability and efficiency.",

    ranges: {
      "0-100 KVA": {
        image: Denyo,
        capacities: [
          "5 KVA",
          "10 KVA",
          "15 KVA",
          "25 KVA",
          "35 KVA",
          "40 KVA",
          "45 KVA",
          "65 KVA",
          "75 KVA",
        ],
      },

      "100-250 KVA": {
        image: AGG,
        capacities: ["100 KVA", "125 KVA", "150 KVA", "200 KVA"],
      },

      "250-650 KVA": {
        image: Generac,
        capacities: ["250 KVA", "300 KVA", "400 KVA", "500 KVA"],
      },

      "650-1500 KVA": {
        image: PISILVER,
        capacities: ["650 KVA", "800 KVA", "1100 KVA", "1400 KVA"],
      },
    },

    data: {
      "5 KVA": [{ brand: "Denyo", image: Denyo }],
      "5.5 KVA": [{ brand: "Honda" }],

      "6 KVA": [
        { brand: "Demin" },
        { brand: "Denyo" },
        { brand: "Easy Power" },
        { brand: "Ford" },
        { brand: "Hi-Earns" },
        { brand: "Honda" },
        { brand: "Lutian" },
        { brand: "Powerobib" },
        { brand: "Rato" },
        { brand: "Robin" },
        { brand: "Strongmax" },
        { brand: "Vackson" },
        { brand: "Yanmar" },
      ],

      "6.5 KVA": [{ brand: "Denyo", image: Denyo }],

      "10 KVA": [
        { brand: "Denyo", image: Denyo },
        { brand: "Airman", image: AirmanGenerator },
        { brand: "FG Wilson", image: FGWilson },
      ],

      "12.5 KVA": [{ brand: "JET", image: Airman185 }],

      "13 KVA": [
        { brand: "Airman", image: Airman185 },
        { brand: "Denyo", image: Denyo },
        { brand: "JET", image: Cummins },
      ],

      "15 KVA": [
        { brand: "Airman", image: AirmanGenerator },
        { brand: "Denyo", image: Denyo },
      ],

      "20 KVA": [
        { brand: "Airman", image: Airman185 },
        { brand: "Denyo", image: Airman185 },
        { brand: "JET", image: Airman185 },
        { brand: "Marapco", image: Airman185 },
      ],

      "25 KVA": [
        { brand: "Airman", image: AirmanGenerator },
        { brand: "Denyo", image: Denyo },
        { brand: "JET", image: JET },
      ],

      "30 KVA": [
        { brand: "Airman", image: Airman185 },
        { brand: "Denyo", image: Airman185 },
        { brand: "FG Wilson", image: Airman185 },
        { brand: "JET", image: Airman185 },
        { brand: "Kirloskar", image: Airman185 },
        { brand: "Weber", image: Airman185 },
        { brand: "Yo Power", image: Airman185 },
      ],

      "35 KVA": [
        { brand: "Denyo", image: Denyo },
        { brand: "Gesan", image: Gesan },
      ],
      "40 KVA": [{ brand: "Denyo", image: Denyo }],

      "45 KVA": [
        { brand: "Airman", image: AirmanGenerator },
        { brand: "FG Wilson", image: FGWilson },
        { brand: "JET", image: JET },
      ],

      "50 KVA": [{ brand: "Airman", image: Airman185 }],

      "60 KVA": [
        { brand: "Airman", image: Airman185 },
        { brand: "Denyo", image: Airman185 },
        { brand: "FG Wilson", image: Airman185 },
        { brand: "Gesan", image: Airman185 },
        { brand: "JET", image: Airman185 },
        { brand: "Komatsu", image: Airman185 },
        { brand: "Weber", image: Airman185 },
      ],

      "62.5 KVA": [
        { brand: "Kirloskar", image: Airman185 },
        { brand: "Tata", image: Airman185 },
      ],

      "65 KVA": [
        { brand: "Airman", image: AirmanGenerator },
        { brand: "FG Wilson", image: FGWilson },
        { brand: "Gesan", image: Gesan },
        { brand: "JET", image: JET },
        { brand: "Khonaysser", image: Generator },
      ],

      "70 KVA": [{ brand: "BW International", image: Airman185 }],
      "75 KVA": [{ brand: "Denyo", image: Denyo }],
      "80 KVA": [{ brand: "JET", image: Airman185 }],

      "100 KVA": [
        { brand: "Airman", image: AirmanGenerator },
        { brand: "BW International", image: Generator },
        { brand: "Denyo", image: Denyo },
        { brand: "FG Wilson", image: FGWilson },
        { brand: "Gesan", image: Gesan },
        { brand: "JET", image: JET },
        { brand: "Kirloskar", image: Generator },
        { brand: "Weber", image: Generator },
      ],

      "110 KVA": [{ brand: "FG Wilson", image: FGWilson }],

      "125 KVA": [
        { brand: "Denyo", image: Denyo },
        { brand: "Airman", image: AirmanGenerator },
        { brand: "BW International", image: Denyo },
      ],

      "135 KVA": [{ brand: "JET", image: JET }],

      "150 KVA": [
        { brand: "Airman", image: AirmanGenerator },
        { brand: "BW International", image: Generator },
        { brand: "Dagartech", image: Generator },
        { brand: "Denyo", image: Denyo },
        { brand: "FG Wilson", image: FGWilson },
        { brand: "Gesan", image: Gesan },
        { brand: "Inmesol", image: Generator },
        { brand: "JET", image: JET },
        { brand: "Kirloskar", image: Generator },
        { brand: "Weber", image: Generator },
      ],

      "160 KVA": [{ brand: "Airman", image: Airman185 }],

      "200 KVA": [
        { brand: "AGG", image: AGG },
        { brand: "Airman", image: AirmanGenerator },
        { brand: "Denyo", image: Denyo },
        { brand: "Inmesol", image: Generator },
        { brand: "JET", image: JET },
        { brand: "Kirloskar", image: Generator },
        { brand: "Weber", image: Generator },
      ],

      "220 KVA": [
        { brand: "Airman", image: Airman185 },
        { brand: "Denyo", image: Airman185 },
        { brand: "Kirloskar", image: Airman185 },
      ],

      "230 KVA": [
        { brand: "FG Wilson", image: Airman185 },
        { brand: "Dagartech", image: Airman185 },
        { brand: "Weber", image: Airman185 },
        { brand: "Yo Power", image: Airman185 },
      ],

      "250 KVA": [
        { brand: "AGG", image: AGG },
        { brand: "Caterpillar", image: Generator },
        { brand: "Dagartech", image: Generator },
        { brand: "Exigen", image: Generator },
        { brand: "Generac", image: Generac },
        { brand: "Inmesol", image: Generator },
        { brand: "JET", image: JET },
        { brand: "Khonaysser", image: Generator },
        { brand: "Kirloskar", image: Generator },
        { brand: "Weber", image: Generator },
      ],

      "275 KVA": [{ brand: "GES", image: Airman185 }],

      "300 KVA": [
        { brand: "Generac", image: Generac },
        { brand: "Airman", image: AirmanGenerator },
        { brand: "Denyo", image: Denyo },
        { brand: "JET", image: JET },
      ],

      "320 KVA": [{ brand: "Weber", image: Airman185 }],

      "350 KVA": [
        { brand: "FG Wilson", image: Airman185 },
        { brand: "GES", image: Airman185 },
        { brand: "JET", image: Airman185 },
        { brand: "Khonaysser", image: Airman185 },
        { brand: "Komatsu", image: Airman185 },
        { brand: "Marapco", image: Airman185 },
        { brand: "Weber", image: Airman185 },
      ],

      "400 KVA": [
        { brand: "Denyo", image: Denyo },
        { brand: "Dagartech", image: Generator },
        { brand: "JET", image: JET },
        { brand: "Marapco", image: Generator },
        { brand: "Weber", image: Generator },
      ],

      "450 KVA": [
        { brand: "Dagartech", image: Airman185 },
        { brand: "FG Wilson", image: Airman185 },
      ],

      "500 KVA": [
        { brand: "AGG", image: AGG },
        { brand: "Dagartech", image: Generator },
        { brand: "Denyo", image: Denyo },
        { brand: "Exigen", image: Generator },
        { brand: "FG Wilson", image: FGWilson },
        { brand: "JET", image: JET },
        { brand: "Khonaysser", image: Generator },
        { brand: "Komatsu", image: Generator },
        { brand: "Weber", image: Generator },
      ],

      "600 KVA": [{ brand: "JET", image: Airman185 }],

      "650 KVA": [
        { brand: "JET", image: JET },
        { brand: "FG Wilson", image: FGWilson },
        { brand: "Komatsu", image: Generator },
      ],

      "770 KVA": [{ brand: "Caterpillar", image: Airman185 }],

      "800 KVA": [
        { brand: "AGG", image: AGG },
        { brand: "Weber", image: Generator }],

      "1100 KVA": [{ brand: "PI Silverline", image: PISILVER }],
      "1400 KVA": [{ brand: "AGG", image: AGG }],
    },
  },
  "Air Compressors": {
    type: "Capacity",
    hasRange: true,
    description:
      "Wide range of portable and stationary air compressors with multiple capacities for different industrial needs.",

    ranges: {
      "0-200 CFM": {
        image: Airman1550,
        capacities: ["175 CFM", "185 CFM", "190 CFM"],
      },

      "200-400 CFM": {
        image: Airman1550,
        capacities: [
          "250 CFM",
          "265 CFM",
          "275 CFM",
          "330 CFM",
          "360 CFM",
          "375 CFM",
          "390 CFM",
          "400 CFM",
        ],
      },

      "400-600 CFM": {
        image: Airman1550,
        capacities: ["420 CFM", "435 CFM"],
      },

      "600-1000 CFM": {
        image: Airman1550,
        capacities: ["750 CFM", "830 CFM"],
      },

      "1000+ CFM": {
        image: Airman1550,
        capacities: ["1550 CFM"],
      },
    },

    data: {
      "1550 CFM": [{ brand: "AIRMAN", image: Airman1550 }],

      "175 CFM": [
        { brand: "ATLAS COPCO", image: Airman1550 },
        { brand: "CHICAGO PNEUMATIC", image: Airman1550 },
      ],

      "185 CFM": [{ brand: "AIRMAN", image: Airman1550 }],

      "190 CFM": [{ brand: "CF AIR", image: Airman1550 }],

      "250 CFM": [
        { brand: "ATLAS COPCO", image: Airman1550 },
        { brand: "CHICAGO PNEUMATIC", image: Airman1550 },
      ],

      "265 CFM": [{ brand: "AIRMAN", image: Airman1550 }],

      "275 CFM": [{ brand: "CF AIR", image: Airman1550 }],

      "330 CFM": [
        { brand: "AIRMAN", image: Airman1550 },
        { brand: "LUKENS", image: Airman1550 },
      ],

      "360 CFM": [{ brand: "CHICAGO PNEUMATIC", image: Airman1550 }],

      "375 CFM": [{ brand: "CHICAGO PNEUMATIC", image: Airman1550 }],

      "390 CFM": [
        { brand: "AIRMAN", image: Airman1550 },
        { brand: "CF AIR", image: Airman1550 },
      ],

      "400 CFM": [{ brand: "AIRMAN", image: Airman1550 }],

      "420 CFM": [{ brand: "CHICAGO PNEUMATIC", image: Airman1550 }],

      "435 CFM": [{ brand: "DOOSAN", image: Airman1550 }],

      "750 CFM": [{ brand: "AIRMAN", image: Airman1550 }],

      "830 CFM": [
        { brand: "AIRMAN", image: Airman1550 },
        { brand: "CF AIR", image: Airman1550 },
      ],
    },
  },

  TowerLights: {
    type: "Brand",
    description:
      "Durable and powerful tower lights available in multiple watt capacities from leading brands.",
    data: {
      ARBOR: [
        { capacity: "1000 WATT", image: TowerLight },
        { capacity: "300 WATT", image: TowerLight },
        { capacity: "320 WATT", image: TowerLight },
      ],
      "ATLAS COPCO": [{ capacity: "1000 WATT", image: TowerLight }],
      "CHICAGO PNEUMATIC": [
        { capacity: "1000 WATT", image: TowerLight },
        { capacity: "320 WATT", image: TowerLight },
      ],
      GENERAC: [
        { capacity: "1000 WATT", image: TowerLight },
        { capacity: "320 WATT", image: TowerLight },
      ],
      PRAMAC: [
        { capacity: "1000 WATT", image: TowerLight },
        { capacity: "300 WATT", image: TowerLight },
        { capacity: "320 WATT", image: TowerLight },
      ],
      "TRIME XSTART": [{ capacity: "150 WATT", image: TowerLight }],
      "WACKER NEUSON": [
        { capacity: "320 WATT", image: TowerLight },
        { capacity: "400 WATT", image: TowerLight },
      ],
    },
  },
  "Electrical Welding Machines": {
    type: "Brand",
    description:
      " Heavy-duty electrical welding machines with different ampere capacities from top brands.",
    data: {
      ESAB: [
        { capacity: "200 AMPS", image: ESAB },
        { capacity: "410 AMPS", image: ESAB },
      ],
      BOSS: [{ capacity: "400 AMPS", image: BOSS }],
      TELWIN: [
        { capacity: "410 AMPS", image: TELWIN },
        { capacity: "500 AMPS", image: TELWIN },
        { capacity: "530 AMPS", image: TELWIN },
      ],
    },
  },
  "MIG Welding Machines": {
    type: "Brand",
    description:
      "MIG welding machines with stable performance, designed for industrial use.",
    data: {
      ELECTREX: [{ capacity: "400 VOLTAGE", image: ELECTREX }],
    },
  },

  "TIG Welding Machines": {
    type: "Capacity",
    description:
      "TIG welding machines for precision welding with durable performance.",
    data: {
      ESAB: [{ capacity: "300 AMPS", image: ESAB }],
    },
  },
  "Roller Compactors": {
    type: "Capacity",
    description:
      "Heavy-duty roller compactors available in different ton capacities from leading brands.",
    data: {
      "10 TON": [{ brand: "BOMAG", image: RollerCompactors }],
      "2 TON": [
        { brand: "AMMANN", image: RollerCompactors },
        { brand: "ATLAS COPCO", image: RollerCompactors },
        { brand: "BELLE", image: RollerCompactors },
        { brand: "CHICAGO PNEUMATIC", image: RollerCompactors },
        { brand: "HUSQVARNA", image: RollerCompactors },
        { brand: "MIKASA", image: RollerCompactors },
        { brand: "SAKAI", image: RollerCompactors },
      ],
      "3 TON": [
        { brand: "ATLAS COPCO", image: RollerCompactors },
        { brand: "BELLE", image: RollerCompactors },
        { brand: "BOMAG", image: RollerCompactors },
        { brand: "MIKASA", image: RollerCompactors },
        { brand: "SAKAI", image: RollerCompactors },
      ],
      "5 TON": [{ brand: "AMMANN", image: RollerCompactors }],
    },
  },
  "Reversible Plate Compactors": {
    type: "Brand",
    description:
      "Durable reversible plate compactors from top brands, available in various weight capacities.",
    data: {
      BATMATIC: [{ capacity: "150 KG", image: PlateCompactors }],
      MIKASA: [
        { capacity: "150 KG", image: PlateCompactors },
        { capacity: "162 KG", image: PlateCompactors },
        { capacity: "237 KG", image: PlateCompactors },
        { capacity: "238 KG", image: PlateCompactors },
        { capacity: "275 KG", image: PlateCompactors },
        { capacity: "400 KG", image: PlateCompactors },
        { capacity: "450 KG", image: PlateCompactors },
      ],
      AMMANN: [{ capacity: "215 KG", image: PlateCompactors }],
      "ATLAS COPCO": [{ capacity: "400 KG", image: PlateCompactors }],
    },
  },
  "Forward Plate Compactors": {
    type: "Brand",
    description:
      "Reliable forward plate compactors from trusted brands, available in 1 ton capacity.",
    data: {
      MIKASA: [{ capacity: "1 TON", image: PlateCompactors }],
      ROBIN: [{ capacity: "1 TON", image: PlateCompactors }],
    },
  },
  "Power Float": {
    type: "Brand",
    description:
      "High-performance power floats from top brands, available in various KW capacities.",
    data: {
      "ATLAS COPCO": [
        { capacity: "3.6 KW", image: PowerFloat },
        { capacity: "3.7 KW", image: PowerFloat },
      ],
      ENERGY: [
        { capacity: "3.6 KW", image: PowerFloat },
        { capacity: "3.7 KW", image: PowerFloat },
        { capacity: "4.8 KW", image: PowerFloat },
        { capacity: "4.8 KW", image: PowerFloat },
      ],
      BELLE: [
        { capacity: "4.2 KW", image: PowerFloat },
        { capacity: "5.5 KW", image: PowerFloat },
      ],
    },
  },
  "Asphalt Cutters": {
    type: "Brand",
    description:
      "Durable asphalt cutters from leading brands, available in multiple cutting sizes.",
    data: {
      ENERGY: [{ capacity: "170 MM", image: AsphaltCutters }],
      HOPPT: [
        { capacity: "170 MM", image: AsphaltCutters },
        { capacity: "170 MM", image: AsphaltCutters },
      ],
      SWIPAC: [{ capacity: "170 MM", image: AsphaltCutters }],
      "ATLAS COPCO": [{ capacity: "350 MM", image: AsphaltCutters }],
      KAMA: [{ capacity: "350 MM", image: AsphaltCutters }],
      MIKASA: [{ capacity: "400 MM", image: AsphaltCutters }],
      BELLE: [
        { capacity: "440 MM", image: AsphaltCutters },
        { capacity: "450 MM", image: AsphaltCutters },
      ],
      IMER: [{ capacity: "450 MM", image: AsphaltCutters }],
      LUTIAN: [{ capacity: "450 MM", image: AsphaltCutters }],
      YANMAR: [{ capacity: "450 MM", image: AsphaltCutters }],
      LISSMAC: [{ capacity: "600 MM", image: AsphaltCutters }],
    },
  },
  "Circular Saw Cutters": {
    type: "Brand",
    description:
      "High-quality circular saw cutters from trusted brands, available in various cutting sizes.",
    data: {
      KEYANG: [{ capacity: "7 INCHES", image: SAW }],
      MAKITA: [{ capacity: "7 INCHES", image: SAW }],
    },
  },
  "Pneumatic Jack Hammers": {
    type: "Brand",
    description:
      "Durable pneumatic jack hammers from leading brands, designed for heavy-duty applications.",
    data: {
      TOKU: [
        { capacity: "5 KG", image: JackHammers },
        { capacity: "10 KG", image: JackHammers },
        { capacity: "15 KG", image: JackHammers },
        { capacity: "20 KG", image: JackHammers },
        { capacity: "25 KG", image: JackHammers },
        { capacity: "30 KG", image: JackHammers },
        { capacity: "35 KG", image: JackHammers },
      ],
      "ATLAS COPCO": [
        { capacity: "20 KG", image: JackHammers },
        { capacity: "35 KG", image: JackHammers },
      ],
      FURUKAWA: [
        { capacity: "20 KG", image: JackHammers },
        { capacity: "35 KG", image: JackHammers },
        { capacity: "36 KG", image: JackHammers },
        { capacity: "50 KG", image: JackHammers },
      ],
      ENERGY: [
        { capacity: "30 KG", image: JackHammers },
        { capacity: "32 KG", image: JackHammers },
        { capacity: "35 KG", image: JackHammers },
      ],
      "CHICAGO PNEUMATIC": [
        { capacity: "35 KG", image: JackHammers },
        { capacity: "37 KG", image: JackHammers },
        { capacity: "50 KG", image: JackHammers },
      ],
      TUSKAIR: [
        { capacity: "31 KG", image: JackHammers },
        { capacity: "35 KG", image: JackHammers },
      ],
      MACDONALD: [{ capacity: "35 KG", image: JackHammers }],
    },
  },
  "Electric Breakers": {
    type: "Brand",
    description:
      "Electric breakers from top brands, available in various weight capacities for different applications.",
    data: {
      BOSCH: [
        { capacity: "110V", image: ConcreteMixers },
        { capacity: "220V", image: ConcreteMixers },
      ],
      DEWALT: [
        { capacity: "110V", image: ConcreteMixers },
        { capacity: "220V", image: ConcreteMixers },
      ],
      HITACHI: [
        { capacity: "110V", image: ConcreteMixers },
        { capacity: "220V", image: ConcreteMixers },
      ],
      IPT: [{ capacity: "110V", image: ConcreteMixers }],
      KEYANG: [
        { capacity: "110V", image: ConcreteMixers },
        { capacity: "220V", image: ConcreteMixers },
        { capacity: "230V", image: ConcreteMixers },
      ],
      MAKITA: [
        { capacity: "110V", image: ConcreteMixers },
        { capacity: "115V", image: ConcreteMixers },
        { capacity: "220V", image: ConcreteMixers },
      ],
      METABO: [
        { capacity: "110V", image: ConcreteMixers },
        { capacity: "120V", image: ConcreteMixers },
        { capacity: "220V", image: ConcreteMixers },
      ],
      MILWAUKEE: [
        { capacity: "110V", image: ConcreteMixers },
        { capacity: "220V", image: ConcreteMixers },
      ],
      HIKOKI: [{ capacity: "220V", image: ConcreteMixers }],
      MIKASA: [{ capacity: "240V", image: ConcreteMixers }],
    },
  },
  "Concrete Mixers": {
    type: "Capacity",
    description:
      "Durable concrete mixers from leading brands, available in various capacities to suit different construction needs.",
    data: {
      "150 LTR": [
        {
          brand: "IMER",
          image: ConcreteMixers,
        },
      ],
      "315 LTR": [{ brand: "SIRL", image: ConcreteMixers }],
      "350 LTR": [
        { brand: "ENERGY", image: ConcreteMixers },
        { brand: "IMER", image: ConcreteMixers },
        { brand: "PORTUGAL", image: ConcreteMixers },
        { brand: "SILLA", image: ConcreteMixers },
      ],
      "750 LTR": [{ brand: "IMER", image: ConcreteMixers }],
    },
  },
  "Drilling Machine": {
    type: "Brand",
    description:
      "High-performance drilling machines from trusted brands, available in various voltage capacities.",
    data: {
      DEWALT: [{ capacity: "127V", image: DrillingMachineDewalt }],
    },
  },
  "Jumping Rammer": {
    type: "Brand",
    description:
      "Durable jumping rammers from leading brands, available in various weight capacities for different compaction needs.",
    data: {
      MAXITO: [{ capacity: "77 KG", image: AsphaltCutters }],
      MIKASA: [{ capacity: "77 KG", image: AsphaltCutters }],
    },
  },
  "Floor Grinding Machine": {
    type: "Brand",
    description:
      "Reliable floor grinding machines from trusted brands, available in different voltage capacities for various applications.",
    data: {
      TRELAWNY: [
        { capacity: "110V", image: FloorGrindingMachine },
        { capacity: "220V", image: FloorGrindingMachine },
      ],
    },
  },
  "Floor Scarifier": {
    type: "Brand",
    description:
      "Heavy-duty floor scarifiers from top brands, designed for efficient surface preparation.",
    data: {
      AIRTEC: [{ capacity: "57 KG", image: FloorScarifier }],
      HUSQVARNA: [{ capacity: "72 KG", image: FloorScarifier }],
    },
  },
  "Bar Cutting Machines": {
    type: "Brand",
    description:
      "Durable bar cutting machines from leading brands, available in various capacity sizes for different construction needs.",
    data: {
      SILLA: [
        { capacity: "34 MM", image: SteelBarBendingMachine },
        { capacity: "36 MM", image: SteelBarBendingMachine },
      ],
      ICARO: [{ capacity: "40 MM", image: SteelBarBendingMachine }],
      "LA ROCHE": [{ capacity: "40 MM", image: SteelBarBendingMachine }],
    },
  },
  "Bar Bending Machines": {
    type: "Brand",
    description:
      "Reliable bar bending machines from trusted brands, available in various capacity sizes for different construction needs.",
    data: {
      SILLA: [
        { capacity: "36 MM", image: SteelBarBendingMachine },
        { capacity: "42 MM", image: SteelBarBendingMachine },
        { capacity: "50 MM", image: SteelBarBendingMachine },
      ],
      ICARO: [{ capacity: "36 MM", image: SteelBarBendingMachine }],
      "LA ROCHE": [
        { capacity: "36 MM", image: SteelBarBendingMachine },
        { capacity: "40 MM", image: SteelBarBendingMachine },
      ],
      KAPRIOL: [{ capacity: "36 MM", image: SteelBarBendingMachine }],
    },
  },
  "Block Cutting Machine": {
    type: "Brand",
    description:
      "Heavy-duty block cutting machines from top brands, designed for efficient cutting of concrete blocks.",
    data: {
      EXPERT: [
        { capacity: "600 MM", image: BlockCutting },
        { capacity: "700 MM", image: BlockCutting },
      ],
      GOLZ: [{ capacity: "600 MM", image: BlockCutting }],
      IMER: [
        { capacity: "600 MM", image: BlockCutting },
        { capacity: "750 MM", image: BlockCutting },
      ],
      SYNOVA: [{ capacity: "600 MM", image: BlockCutting }],
      NORTON: [{ capacity: "650 MM", image: BlockCutting }],
      TYROLIT: [{ capacity: "650 MM", image: BlockCutting }],
      LISSMAC: [{ capacity: "700 MM", image: BlockCutting }],
    },
  },
  "Core Cutting Machine": {
    type: "Brand",
    description:
      "Durable core cutting machines suitable for concrete and asphalt coring applications.",
    data: {
      SHIBUYA: [{ capacity: "110 KVA", image: CoreCuttingMachine }],
    },
  },

  "Interlock Tile Cutter": {
    type: "Brand",
    description:
      "Specialized tile cutters designed for precision cutting of interlock and ceramic tiles.",
    data: {
      MONTOLIT: [{ capacity: "31 CENTIMETER", image: CoreCutters }],
    },
  },

  "Hand Grinders": {
    type: "Brand",
    description:
      "Portable hand grinders from trusted brands, ideal for grinding and cutting tasks.",
    data: {
      BOSCH: [{ capacity: "110 VOLTAGE", image: HandGrindersBosch }],
      DEWALT: [
        { capacity: "110 VOLTAGE", image: HandGrindersBosch },
        { capacity: "115 VOLTAGE", image: HandGrindersBosch },
        { capacity: "220 VOLTAGE", image: HandGrindersBosch },
      ],
      KEYANG: [
        { capacity: "110 VOLTAGE", image: HandGrindersBosch },
        { capacity: "220 VOLTAGE", image: HandGrindersBosch },
      ],
      MAKITA: [
        { capacity: "110 VOLTAGE", image: HandGrindersBosch },
        { capacity: "220 VOLTAGE", image: HandGrindersBosch },
        { capacity: "240 VOLTAGE", image: HandGrindersBosch },
      ],
      METABO: [{ capacity: "220 VOLTAGE", image: HandGrindersBosch }],
      TRELAWNY: [{ capacity: "220 VOLTAGE", image: HandGrindersBosch }],
    },
  },
  "Submersible Pump": {
    type: "Capacity",
    description:
      "Reliable submersible pumps designed for efficient water transfer, available in multiple capacities.",
    data: {
      "2 INCH": [
        { brand: "EASY POWER", image: SubmersiblePumps },
        { brand: "SHIMGE", image: SubmersiblePumps },
        { brand: "HAPPY", image: SubmersiblePumps },
      ],
      "4 INCH": [{ brand: "EASY POWER", image: SubmersiblePumps }],
    },
  },

  "Water Pumps": {
    type: "Capacity",
    description:
      "High-performance water pumps suitable for diverse applications, offered in various capacities.",
    data: {
      "2 INCH": [
        { brand: "COMAX PRO", image: WaterPumps3Inch },
        { brand: "FOXCO", image: WaterPumps3Inch },
        { brand: "LUTIAN", image: WaterPumps3Inch },
        { brand: "POTEREN", image: WaterPumps3Inch },
        { brand: "SPELYAMA", image: WaterPumps3Inch },
        { brand: "VACKSON", image: WaterPumps3Inch },
      ],
      "3 INCH": [
        { brand: "KAMA", image: WaterPumps3Inch },
        { brand: "LUTIAN", image: WaterPumps3Inch },
      ],
      "4 INCH": [
        { brand: "KAMA", image: WaterPumps3Inch },
        { brand: "POTEREN", image: WaterPumps3Inch },
      ],
    },
  },

  "Vaccum Cleaner": {
    type: "Brand",
    description:
      "High-performance vacuum cleaners from leading brands, designed for efficient cleaning in various environments.",
    data: {
      BLASTRAC: [{ capacity: "40 LTR", image: VacuumCleaners }],
      DIAMATIC: [{ capacity: "40 LTR", image: VacuumCleaners }],
      TRELAWNY: [{ capacity: "45 LTR", image: VacuumCleaners }],
    },
  },
  "Security Cabin": {
    type: "Capacity",
    description:
      "Durable cabins and units including security cabins, office cabins, and ablution units, available in multiple sizes.",
    data: {
      "1.50 MTR": [{ brand: "Security Cabin", image: Cabin }],
      "2.4 MTR": [{ brand: "Security Cabin", image: Cabin }],
      "3.4 MTR": [{ brand: "Security Cabin", image: Cabin }],
      "20 FEET": [{ brand: "Office Cabin", image: Cabin }],
      "40 FEET": [{ brand: "Office Cabin", image: Cabin }],
      "04 FEET": [{ brand: "Ablution Unit", image: Cabin }],
      "08 FEET": [{ brand: "Ablution Unit", image: Cabin }],
      "10 FEET": [{ brand: "Ablution Unit", image: Cabin }],
      "20 FEET (Ablution)": [{ brand: "Ablution Unit", image: Ablusion }],
      "40 FEET (Ablution)": [{ brand: "Ablution Unit", image: Ablusion }],
    },
  },

  "Backhoe Loader": {
    type: "Capacity",
    description:
      "Versatile backhoe loaders for construction and digging, available in multiple capacities.",
    data: {
      "3 TON": [{ brand: "JCB", image: BackhoeLoaderJcb3Cx }],
      "5 TON": [{ brand: "CASE", image: BackhoeLoaderCase570T }],
    },
  },

  "Boom Loader": {
    type: "Capacity",
    description:
      "Reliable boom loaders designed for material handling applications.",
    data: {
      "3 TON": [{ brand: "JCB", image: BoomLoaderJcb540170 }],
    },
  },

  Excavator: {
    type: "Capacity",
    description:
      "High-power excavators for heavy-duty operations, offered in various capacities.",
    data: {
      "5 TON": [{ brand: "Yanmar", image: ExcavatorYanmarVio35 }],
      "20 TON": [
        { brand: "Caterpillar", image: ExcavatorCat320 },
        { brand: "JCB", image: ExcavatorJcbJs205 },
        { brand: "Komatsu", image: ExcavatorKomatsuPc210 },
      ],
      "40 TON": [{ brand: "Komatsu", image: ExcavatorKomatsuPc400 }],
    },
  },

  "Wheel Loader": {
    type: "Capacity",
    description:
      "Efficient wheel loaders designed for construction and industrial use.",
    data: {
      "3 TON": [
        { brand: "Caterpillar", image: WheelLoaderKomatsuCat966L },
        { brand: "Komatsu", image: WheelLoaderKomatsuWa470 },
      ],
    },
  },

  Forklift: {
    type: "Capacity",
    description:
      "Reliable forklifts available in different load capacities for warehouse and industrial use.",
    data: {
      "3 TON": [{ brand: "HELI", image: Forklift }],
      "5 TON": [{ brand: "HELI", image: Forklift }],
      "10 TON": [{ brand: "HELI", image: Forklift }],
    },
  },
};

export default categoriesData;
