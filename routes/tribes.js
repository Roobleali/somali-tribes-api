const express = require("express");
const router = express.Router();

// Dummy data
const abtirsiData = {
  Daarood: {
    Laamood: {
      Harti: [
        "Majeerteen",
        "Dhulbahante",
        "Warsangeli",
        "Kaskiqabe",
        "Kumade",
        "Isse Mahamoud",
      ],
      Ogaden: [
        "Aulihan",
        "Makabul",
        "Absame",
        "Jidwaaq",
        "Maalin",
        "Wardey",
        "Bahgari",
        "Reer Abdille",
        "Reer Isaaq",
        "Reer Mohamed",
        "Reer Hassan",
      ],
      Mareexaan: [
        "Ali Dheere",
        "Hassan Gure",
        "Reer Ugaas",
        "Reer Dalal",
        "Reer Siyaad",
      ],
      Leelkase: ["Fiqi Yaquub", "Fiqi Ismail", "Fiqi Ahmed"],
      Awrtable: [],
      Dashiishe: [],
      Absame: [],
      Other: ["Kabalah", "Jidwaaq", "Bursuuk", "Reer Zubeir"],
    },
    Gobollada: [
      "Puntland",
      "Jubaland",
      "Gedo",
      "Mudug",
      "Kismaayo",
      "Bari",
      "Nugaal",
      "Galgaduud",
      "Qeybaha Ogadenia (Ethiopia)",
      "Waqooyi Bari Kenya",
    ],
  },
  Hawiye: {
    Laamood: {
      Abgaal: [
        "Wacbudhan",
        "Hartii",
        "Hilibi",
        "Warsangeli",
        "Agoonyar",
        "Isman",
        "Wabudhan",
        "Waceysle",
      ],
      "Habar Gidir": ["Sacad", "Saleebaan", "Ayr", "Saruur", "Suleiman"],
      Murursade: ["Habar Idinle", "Habar Ceyne", "Habar Afar"],
      Gugundhabe: [
        "Jidle",
        "Baadicade",
        "Duduble",
        "Xawaadle",
        "Gaaljecel",
        "Degodia",
        "Jajeele",
        "Ajuran",
      ],
      Hawadle: ["Cumar", "Yuusuf", "Samatar", "Abdalle"],
      Other: ["Sheekhaal", "Gorgaarte", "Baadicade"],
    },
    Gobollada: [
      "Muqdisho",
      "Hiiraan",
      "Shabeellaha Dhexe",
      "Shabeellaha Hoose",
      "Galgaduud",
      "Jowhar",
      "Baladweyne",
      "Qeybo ka mid ah Jubaland",
    ],
  },
  Dir: {
    Laamood: {
      Gadabuursi: ["Jibriil Yoonis", "Makahiil", "Faarax"],
      Ciise: [],
      Biimaal: [],
      Gurgure: [],
      Akisho: [],
      Surre: ["Qubeys", "Abdalle"],
      Barsuug: [],
      Other: ["Madhibaan", "Garre", "Magaadle"],
    },
    Gobollada: [
      "Somaliland (Awdal, Salal)",
      "Jabuuti",
      "Shabeellaha Hoose",
      "Waqooyi Galbeed",
      "Ethiopia (Harar, Somali Region)",
      "Koonfurta Soomaaliya",
    ],
  },
  Isaaq: {
    Laamood: {
      "Habar Awal": ["Saad Musa", "Issa Musa"],
      "Habar Jeclo": ["Muse Abokor", "Samaale Abokor"],
      "Habar Yoonis": ["Sugulle", "Muse Ismail"],
      Arap: [],
      Ayub: [],
      Idagale: [],
      Garhajis: ["Habar Yonis", "Idagale"],
      "Tol Jelo": [],
    },
    Gobollada: [
      "Somaliland (Maroodi Jeex, Togdheer, Sanaag, Saaxil)",
      "Qeybo ka mid ah Ethiopia",
    ],
  },
  Raxanweyn: {
    Laamood: {
      Digil: [
        "Tunni",
        "Garre",
        "Jiddu",
        "Dabare",
        "Geledi",
        "Bagadi",
        "Shanta Caleemood",
      ],
      Mirifle: [
        "Eelay",
        "Hadame",
        "Luway",
        "Hariin",
        "Jiron",
        "Hubeer",
        "Sagaal",
        "Yantar",
        "Irmud",
        "Leysan",
        "Jilible",
        "Elay",
        "Dabarre",
        "Jiddu",
        "Disow",
      ],
    },
    Gobollada: [
      "Bay",
      "Bakool",
      "Shabeellaha Hoose",
      "Jubbooyinka",
      "Qeybo ka mid ah Gedo",
    ],
  },
  Benadiri: {
    Laamood: {
      Reer_Xamar: [
        "Shanshiyo",
        "Bandhawow",
        "Reer Hamar Weyne",
        "Reer Shingani",
        "Reer Marka",
        "Reer Baraawe",
      ],
    },
    Gobollada: ["Muqdisho", "Marka", "Baraawe", "Koonfurta Soomaaliya"],
  },
  Jareerweyne: {
    Laamood: {
      Bantu: ["Gosha", "Makane", "Shidle", "Reer Shabelle", "Zigua", "Makua"],
    },
    Gobollada: ["Jubbooyinka", "Shabeellaha Hoose", "Bay", "Bakool"],
  },
  Gabooye: {
    Laamood: {
      Midgan: ["Tumal", "Yibir", "Muse Dheryo", "Madhibaan", "Galgala"],
    },
    Gobollada: ["Soomaaliya oo dhan"],
  },
  Ashraaf: {
    Laamood: {
      Reer_Ashraaf: [
        "Barawani",
        "Bajuni",
        "Arabs",
        "Eyle",
        "Boni",
        "Wardey",
        "Shambara",
        "Reer Faqi",
      ],
    },
    Gobollada: ["Soomaaliya oo dhan"],
  },
};

// Get all tribes
router.get("/", (req, res) => {
  res.json(abtirsiData);
});

// Get a single tribe
router.get("/:name", (req, res) => {
  const tribe = abtirsiData[req.params.name];
  if (!tribe) {
    return res.status(404).json({ fariin: "Qoyska lama helin" });
  }
  res.json(tribe);
});

// Get sub-clans of a tribe
router.get("/:name/laamood", (req, res) => {
  const tribe = abtirsiData[req.params.name];
  if (!tribe) {
    return res.status(404).json({ fariin: "Qoyska lama helin" });
  }
  res.json(tribe.Laamood);
});

// Get regions of a tribe
router.get("/:name/gobollada", (req, res) => {
  const tribe = abtirsiData[req.params.name];
  if (!tribe) {
    return res.status(404).json({ fariin: "Qoyska lama helin" });
  }
  res.json(tribe.Gobollada);
});

module.exports = router;
