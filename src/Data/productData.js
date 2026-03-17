import {
  Airman1550,
  Airman185,
  AsphaltCutters,
  BackhoeLoader,
  ConcreteMixers,
  CoreCutters,
  Cummins,
  Denyo,
  Excavator,
  Forklift,
  JackHammers,
  Komatsu,
  TowerLight,
  WheelLoader,
} from "../assets";

const categoriesData = {
  Generators: {
    type: "Capacity",
    description:
      "Generators are essential for providing backup power during outages and ensuring continuous operation in various settings. Silverline Enterprises offers a selection of generators from trusted brands like Honda and Kirloskar, known for their durability and efficiency.",
    data: {
      "10 KVA": [
        { brand: "Airman", image: Airman185 },
        { brand: "Denyo", image: Denyo },
      ],
      "100 KVA": [
        { brand: "Airman", image: Airman185 },
        { brand: "Denyo", image: Denyo },
      ],
      "125 KVA": [
        { brand: "Airman", image: Airman185 },
        { brand: "Denyo", image: Denyo },
      ],
      "13 KVA": [
        { brand: "Airman", image: Airman185 },
        { brand: "Denyo", image: Denyo },
      ],
      "15 KVA": [{ brand: "Denyo", image: Denyo }],
      "150 KVA": [
        { brand: "Airman", image: Denyo },
      ],
      "160 KVA": [{ brand: "Airman", image: Airman185 }],
      "20 KVA": [
        { brand: "Airman", image: Airman185 },
        { brand: "Denyo", image: Airman185 },
      ],
      "200 KVA": [
        { brand: "Airman", image: Airman185 },
        { brand: "Denyo", image: Airman185 },
      ],
      "220 KVA": [
        { brand: "Airman", image: Airman185 },
        { brand: "Denyo", image: Airman185 },
      ],
      "25 KVA": [
        { brand: "Denyo", image: Airman185 },
      ],
      "250 KVA": [
        { brand: "Generac", image: Airman185 },
      ],
      "30 KVA": [
        { brand: "Airman", image: Airman185 },
        { brand: "Denyo", image: Airman185 },
      ],
      "300 KVA": [
        { brand: "Airman", image: Airman185 },
        { brand: "Denyo", image: Airman185 },
      ],
      "35 KVA": [
        { brand: "Denyo", image: Airman185 },
      ],
      
      "400 KVA": [
        { brand: "Denyo", image: Airman185 },
      ],
      "45 KVA": [
        { brand: "Airman", image: Airman185 },
        { brand: "Denyo", image: Airman185 },
      ],
      "50 KVA": [{ brand: "Airman", image: Airman185 }],
      "500 KVA": [
        { brand: "Airman", image: Airman185 },
        { brand: "Denyo", image: Airman185 },
      ],
      "6 KVA": [
        { brand: "Denyo", image: Airman185 },
      ],
      "6.5 KVA": [{ brand: "Denyo", image: Airman185 }],
      "60 KVA": [
        { brand: "Airman", image: Airman185 },
        { brand: "Denyo", image: Airman185 },
      ],
      "75 KVA": [{ brand: "Denyo", image: Airman185 }],
    },
  },
  "Air Compressors": {
    type: "Capacity",
    description:
      " Wide range of portable and stationary air compressors with multiple capacities for different industrial needs.",
    data: {
      "190 CFM": [{ brand: "CF AIR", image: Airman1550 }],
      "275 CFM": [{ brand: "CF AIR", image: Airman1550 }],
      "390 CFM": [
        { brand: "CF AIR", image: Airman1550 },
      ],
      "830 CFM": [
        { brand: "CF AIR", image: Airman1550 },
      ],
    },
  },

  TowerLights: {
    type: "Brand",
    description:
      "Durable and powerful tower lights available in multiple watt capacities from leading brands.",
    data: {
      GENERAC: [
        { capacity: "1000 WATT", image: Cummins },
        { capacity: "320 WATT", image: Cummins },
      ],
      "TRIME XSTART": [{ capacity: "150 WATT", image: Cummins }],
    },
  },
  "Electrical Welding Machines": {
    type: "Capacity",
    description:
      " Heavy-duty electrical welding machines with different ampere capacities from top brands.",
    data: {
      ESAB: [
        { capacity: "200 AMPS", image: TowerLight },
        { capacity: "410 AMPS", image: TowerLight },
      ],
      BOSS: [{ capacity: "400 AMPS", image: TowerLight }],
      TELWIN: [
        { capacity: "410 AMPS", image: TowerLight },
        { capacity: "500 AMPS", image: TowerLight },
        { capacity: "530 AMPS", image: TowerLight },
      ],
    },
  },
  "MIG Welding Machines": {
    type: "Brand",
    description:
      "MIG welding machines with stable performance, designed for industrial use.",
    data: {
      ELECTREX: [{ capacity: "400 VOLTAGE", image: TowerLight }],
    },
  },

  "TIG Welding Machines": {
    type: "Capacity",
    description:
      "TIG welding machines for precision welding with durable performance.",
    data: {
      ESAB: [{ capacity: "300 AMPS", image: TowerLight }],
    },
  },
  "Roller Compactors": {
    type: "Capacity",
    description:
      "Heavy-duty roller compactors available in different ton capacities from leading brands.",
    data: {
      "2 TON": [
        { brand: "MIKASA", image: TowerLight },
      ],
      "3 TON": [
        { brand: "MIKASA", image: TowerLight },
      ],
    },
  },
  "Reversible Plate Compactors": {
    type: "Brand",
    description:
      "Durable reversible plate compactors from top brands, available in various weight capacities.",
    data: {
      MIKASA: [
        { capacity: "150 KG", image: TowerLight },
        { capacity: "162 KG", image: TowerLight },
        { capacity: "237 KG", image: TowerLight },
        { capacity: "238 KG", image: TowerLight },
        { capacity: "275 KG", image: TowerLight },
        { capacity: "400 KG", image: TowerLight },
        { capacity: "450 KG", image: TowerLight },
      ],
    },
  },
  "Forward Plate Compactors": {
    type: "Brand",
    description:
      "Reliable forward plate compactors from trusted brands, available in 1 ton capacity.",
    data: {
      MIKASA: [{ capacity: "1 TON", image: TowerLight }],
    },
  },
  "Power Float": {
    type: "Brand",
    description:
      "High-performance power floats from top brands, available in various KW capacities.",
    data: {
      "ATLAS COPCO": [
        { capacity: "3.6 KW", image: TowerLight },
        { capacity: "3.7 KW", image: TowerLight },
      ],
      ENERGY: [
        { capacity: "3.6 KW", image: TowerLight },
        { capacity: "3.7 KW", image: TowerLight },
        { capacity: "4.8 KW", image: TowerLight },
        { capacity: "4.8 KW", image: TowerLight },
      ],
      BELLE: [
        { capacity: "4.2 KW", image: TowerLight },
        { capacity: "5.5 KW", image: TowerLight },
      ],
    },
  },
  "Asphalt Cutters": {
    type: "Brand",
    description:
      "Durable asphalt cutters from leading brands, available in multiple cutting sizes.",
    data: {
      ENERGY: [{ capacity: "170 MM", image: TowerLight }],
      KAMA: [{ capacity: "350 MM", image: TowerLight }],
      MIKASA: [{ capacity: "400 MM", image: TowerLight }],
      IMER: [{ capacity: "450 MM", image: TowerLight }],
      LUTIAN: [{ capacity: "450 MM", image: TowerLight }],
      YANMAR: [{ capacity: "450 MM", image: TowerLight }],
      LISSMAC: [{ capacity: "600 MM", image: TowerLight }],
    },
  },
  "Circular Saw Cutters": {
    type: "Brand",
    description:
      "High-quality circular saw cutters from trusted brands, available in various cutting sizes.",
    data: {
      KEYANG: [{ capacity: "7 INCHES", image: TowerLight }],
      MAKITA: [{ capacity: "7 INCHES", image: TowerLight }],
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
    },
  },
  "Electric Breakers": {
    type: "Brand",
    description:
      "Electric breakers from top brands, available in various weight capacities for different applications.",
    data: {
      MAKITA: [
        { capacity: "110V", image: ConcreteMixers },
        { capacity: "115V", image: ConcreteMixers },
        { capacity: "220V", image: ConcreteMixers },
      ],}
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
      "350 LTR": [
        { brand: "IMER", image: ConcreteMixers },
      ],
      "750 LTR": [{ brand: "IMER", image: ConcreteMixers }],
    },
  },
  "Drilling Machine": {
    type: "Brand",
    description:
      "High-performance drilling machines from trusted brands, available in various voltage capacities.",
    data: {
      DEWALT: [{ capacity: "127V", image: AsphaltCutters }],
    },
  },
  "Jumping Rammer": {
    type: "Brand",
    description:
      "Durable jumping rammers from leading brands, available in various weight capacities for different compaction needs.",
    data: {
      MIKASA: [{ capacity: "77 KG", image: AsphaltCutters }],
    },
  },
  "Floor Grinding Machine": {
    type: "Brand",
    description:
      "Reliable floor grinding machines from trusted brands, available in different voltage capacities for various applications.",
    data: {
      TRELAWNY: [
        { capacity: "110V", image: AsphaltCutters },
        { capacity: "220V", image: AsphaltCutters },
      ],
    },
  },
  "Floor Scarifier": {
    type: "Brand",
    description:
      "Heavy-duty floor scarifiers from top brands, designed for efficient surface preparation.",
    data: {
      AIRTEC: [{ capacity: "57 KG", image: AsphaltCutters }],
      HUSQVARNA: [{ capacity: "72 KG", image: AsphaltCutters }],
    },
  },
  "Bar Cutting Machines": {
    type: "Brand",
    description:
      "Durable bar cutting machines from leading brands, available in various capacity sizes for different construction needs.",
    data: {
      ICARO: [{ capacity: "40 MM", image: AsphaltCutters }],
      "LA ROCHE": [{ capacity: "40 MM", image: AsphaltCutters }],
    },
  },
  "Bar Bending Machines": {
    type: "Brand",
    description:
      "Reliable bar bending machines from trusted brands, available in various capacity sizes for different construction needs.",
    data: {
      ICARO: [{ capacity: "36 MM", image: AsphaltCutters }],
      "LA ROCHE": [
        { capacity: "36 MM", image: AsphaltCutters },
        { capacity: "40 MM", image: AsphaltCutters },
      ],
      KAPRIOL: [{ capacity: "36 MM", image: AsphaltCutters }],
    },
  },
  "Block Cutting Machine": {
    type: "Brand",
    description:
      "Heavy-duty block cutting machines from top brands, designed for efficient cutting of concrete blocks.",
    data: {
      EXPERT: [
        { capacity: "600 MM", image: AsphaltCutters },
        { capacity: "700 MM", image: AsphaltCutters },
      ],
      GOLZ: [{ capacity: "600 MM", image: AsphaltCutters }],
      IMER: [
        { capacity: "600 MM", image: AsphaltCutters },
        { capacity: "750 MM", image: AsphaltCutters },
      ],
      SYNOVA: [{ capacity: "600 MM", image: AsphaltCutters }],
      NORTON: [{ capacity: "650 MM", image: AsphaltCutters }],
      TYROLIT: [{ capacity: "650 MM", image: AsphaltCutters }],
      LISSMAC: [{ capacity: "700 MM", image: AsphaltCutters }],
    },
  },
  "Core Cutting Machine": {
    type: "Brand",
    description:
      "Durable core cutting machines suitable for concrete and asphalt coring applications.",
    data: {
      SHIBUYA: [{ capacity: "110 KVA", image: AsphaltCutters }],
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
      MAKITA: [
        { capacity: "110 VOLTAGE", image: CoreCutters },
        { capacity: "220 VOLTAGE", image: CoreCutters },
        { capacity: "240 VOLTAGE", image: CoreCutters },
      ],
    },
  },
  "Submersible Pump": {
  type: "Capacity",
  description:
    "Reliable submersible pumps designed for efficient water transfer, available in multiple capacities.",
  data: {
    "2 INCH": [
      { brand: "EASY POWER", image: CoreCutters },
      { brand: "SHIMGE", image: CoreCutters },
      { brand: "HAPPY", image: CoreCutters },
    ],
    "4 INCH": [
      { brand: "EASY POWER", image: CoreCutters },
    ],
  },
},

"Water Pumps": {
  type: "Capacity",
  description:
    "High-performance water pumps suitable for diverse applications, offered in various capacities.",
  data: {
    "2 INCH": [
      { brand: "COMAX PRO", image: WheelLoader },
      { brand: "FOXCO", image: WheelLoader },
      { brand: "LUTIAN", image: WheelLoader },
      { brand: "POTEREN", image: WheelLoader },
      { brand: "SPELYAMA", image: WheelLoader },
      { brand: "VACKSON", image: WheelLoader },
    ],
    "3 INCH": [
      { brand: "KAMA", image: WheelLoader },
      { brand: "LUTIAN", image: WheelLoader },
    ],
    "4 INCH": [
      { brand: "KAMA", image: WheelLoader },
      { brand: "POTEREN", image: WheelLoader },
    ],
  },
},

  "Vaccum Cleaner": {
    type: "Brand",
    description:
      "High-performance vacuum cleaners from leading brands, designed for efficient cleaning in various environments.",
    data: {
      BLASTRAC: [{ capacity: "40 LTR", image: CoreCutters }],
      DIAMATIC: [{ capacity: "40 LTR", image: CoreCutters }],
      TRELAWNY: [{ capacity: "45 LTR", image: CoreCutters }],
    },
  },
   "Security Cabin": {
    type: "Capacity",
    description:
      "Durable cabins and units including security cabins, office cabins, and ablution units, available in multiple sizes.",
    data: {
      "1.50 MTR": [{ brand: "Security Cabin", image: Airman185 }],
      "2.4 MTR": [{ brand: "Security Cabin", image: Airman185 }],
      "3.4 MTR": [{ brand: "Security Cabin", image: Airman185 }],
      "20 FEET": [{ brand: "Office Cabin", image: ConcreteMixers }],
      "40 FEET": [{ brand: "Office Cabin", image: ConcreteMixers }],
      "04 FEET": [{ brand: "Ablution Unit", image: ConcreteMixers }],
      "08 FEET": [{ brand: "Ablution Unit", image: ConcreteMixers }],
      "10 FEET": [{ brand: "Ablution Unit", image: ConcreteMixers }],
      "20 FEET (Ablution)": [{ brand: "Ablution Unit", image: ConcreteMixers }],
      "40 FEET (Ablution)": [{ brand: "Ablution Unit", image: ConcreteMixers }],
    },
  },

  "Backhoe Loader": {
    type: "Capacity",
    description:
      "Versatile backhoe loaders for construction and digging, available in multiple capacities.",
    data: {
      "3 TON": [{ brand: "JCB", image: BackhoeLoader }],
    },
  },

  "Boom Loader": {
    type: "Capacity",
    description:
      "Reliable boom loaders designed for material handling applications.",
    data: {
      "3 TON": [{ brand: "JCB", image: Komatsu }],
    },
  },

  "Excavator": {
    type: "Capacity",
    description:
      "High-power excavators for heavy-duty operations, offered in various capacities.",
    data: {
      
      "20 TON": [
        { brand: "Komatsu", image: Excavator },
      ],
      "40 TON": [{ brand: "Komatsu", image: Excavator }],
    },
  },

  "Wheel Loader": {
    type: "Capacity",
    description:
      "Efficient wheel loaders designed for construction and industrial use.",
    data: {
      "3 TON": [
        { brand: "Komatsu", image: WheelLoader },
      ],
    },
  },

  "Forklift": {
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
//
