/* =========================================================
   SCAMMER DATABASE ENTRIES
   Add a new object to this array for each report.
   category: pick one from CATEGORIES below (or add a new one there too)
   proofs: array of { url, label } — label is optional.
           Use label: "ONGOING" for proof that's still being added to.
   ========================================================= */

const CATEGORIES = [
  "All",
  "Art Theft",
  "Trading Scam",
  "Impersonation",
  "Harassment",
  "Other",
];

const CASES = [
  {
    username: "silves_.",
    id: "703628170854662195",
    category: "Art Theft",
    explanation:
      "Failed to upload a user's animations (most likely stolen) and blocked the user + left the community when confronted about it.",
    proofs: [
      { url: "https://imgur.com/a/9DC30Ir", label: "Proof" },
    ],
  },
  {
    username: "brandonfanpage",
    id: "1498150936772874372",
    category: "Other",
    explanation:
      "Report under review — details being added as proof comes in.",
    proofs: [
      { url: "https://imgur.com/a/Nkh9Lst", label: "ONGOING" },
    ],
  },
];
