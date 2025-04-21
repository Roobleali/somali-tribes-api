import { Router, Request, Response } from "express";

const router = Router();

interface TribeData {
  [key: string]: {
    Laamood?: {
      [key: string]: string[];
    };
    Gobollada?: string[];
  };
}

// Dummy data
const abtirsiData: TribeData = {
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
  // ... rest of the tribes data
};

// Get all tribes
router.get("/", (req: Request, res: Response) => {
  res.json(abtirsiData);
});

// Get a single tribe
router.get("/:name", (req: Request, res: Response) => {
  const tribe = abtirsiData[req.params.name];
  if (!tribe) {
    return res.status(404).json({ fariin: "Qoyska lama helin" });
  }
  res.json(tribe);
});

// Get sub-clans of a tribe
router.get("/:name/laamood", (req: Request, res: Response) => {
  const tribe = abtirsiData[req.params.name];
  if (!tribe) {
    return res.status(404).json({ fariin: "Qoyska lama helin" });
  }
  res.json(tribe.Laamood);
});

// Get regions of a tribe
router.get("/:name/gobollada", (req: Request, res: Response) => {
  const tribe = abtirsiData[req.params.name];
  if (!tribe) {
    return res.status(404).json({ fariin: "Qoyska lama helin" });
  }
  res.json(tribe.Gobollada);
});

export default router;
