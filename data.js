/* =========================================================
   SCAMMER DATABASE ENTRIES
   Add a new object to this array for each report.
   category: pick one from CATEGORIES below (or add a new one there too)
   proofs: array of { url, label } — label is optional.
           Use label: "ONGOING" for proof that's still being added to.
   ========================================================= */

const CATEGORIES = [
  "All",
  "Scamming",
  "Art / UGC Theft",
  "Account Theft",
  "Alt Account",
  "Impersonation",
  "Other",
];

const CASES = [
  {
    username: "silves_.",
    id: "703628170854662195",
    category: "Art / UGC Theft",
    explanation:
      "failed to upload a user’s animations (most likely stolen) & blocked + left community when confronted",
    proofs: [{ url: "https://imgur.com/a/9DC30Ir", label: "Proof" }],
  },
  {
    username: "sacrficedera",
    id: "932098767644147763",
    category: "Art / UGC Theft",
    explanation:
      "scammed member out of 47k rhubarbs for ugc comms + didn’t respond to ticket",
    proofs: [{ url: "https://imgur.com/a/X6vmH31", label: "Proof 1" }, { url: "https://imgur.com/a/c0w3RFh", label: "Proof 2" }],
  },
  {
    username: "k3pq",
    id: "1189598245480042498",
    category: "Scamming",
    explanation:
      "scamming multiple users acting as a trusted mm in trusted mm communities / damaging other trusted mm reps so that victims would do no mm for their deals with him",
    proofs: [{ url: "https://imgur.com/a/IjUVg92", label: "Proof" }],
  },
  {
    username: "canyoubleed",
    id: "930200118957850665",
    category: "Scamming",
    explanation:
      "scamming $15 for Roblox group proof",
    proofs: [{ url: "https://imgur.com/a/M2zUGcv", label: "Proof" }],
  },
  {
    username: "twisttrades",
    id: "1131225280955027586",
    category: "Scamming",
    explanation:
      "reported in ksf for hiring hitters for a scam community + attempting to direct member to scam community",
    proofs: [{ url: "https://imgur.com/a/mHtcG5I", label: "Proof" }],
  },
  {
    username: "lilahbigboss",
    id: "1474078847799660837",
    category: "Art / UGC Theft",
    explanation:
      "stealing ugc necklaces meshes + stealing ugc tiara and using it for your ap",
    proofs: [{ url: "https://imgur.com/a/wCkHBHO", label: "Proof" }],
  },
  {
    username: "sexxyvalentin",
    id: "1337429629488857110",
    category: "Scamming",
    explanation:
      "scammed user out of 600 rhubarbs",
    proofs: [{ url: "https://imgur.com/a/lrfZPtj", label: "Proof" }],
  },
  {
    username: "whv0",
    id: "1163515108467671111",
    category: "Scamming",
    explanation:
      "attempted to scam a user out of a group + sent fake halal mm link",
    proofs: [{ url: "https://imgur.com/a/botS1h4", label: "Proof" }],
  },
  {
    username: "latesanhusbanddd",
    id: "887977270487167056",
    category: "Scamming",
    explanation:
      "charge backing multiple payment transactions after receiving service",
    proofs: [{ url: "https://imgur.com/a/5evcWj3", label: "Proof" }],
  },
  {
    username: "deathlyblossoms",
    id: "874081156155469825",
    category: "Scamming",
    explanation:
      "scamming a member out of rhubarbs after member paid for Pinterest PNGs + provider left the community & ghosted shortly after receiving payment without completing their side",
    proofs: [{ url: "https://imgur.com/a/TBe2jEd", label: "Proof" }],
  },
  {
    username: "brandonfanpage",
    id: "1498150936772874372",
    category: "Scamming",
    explanation:
      "scamming multiple members out of $$ and blocked them after receiving payment + left to avoid being confronted",
    proofs: [{ url: "https://imgur.com/a/lz9VyyX", label: "Proof 1" }, { url: "https://imgur.com/a/DlMvDrd", label: "Proof 2" }, { url: "https://imgur.com/a/q8exVAb", label: "Proof 3" }, { url: "https://imgur.com/a/8ZCrVDP", label: "Proof 4" }, { url: "https://imgur.com/a/heiam0E", label: "Proof 5" }],
  },
  {
    username: "benjy6666, melanietx",
    id: "544525809252302868, 1510600711312769045",
    category: "Scamming",
    explanation:
      "owns fake auto mm community + DMed to release funds claiming it never went through and then ghosting + blocking user after getting the adopt me pets",
    proofs: [{ url: "https://imgur.com/a/zu63f9y", label: "Proof" }],
  },
  {
    username: "diillqn",
    id: "1188429897270558812",
    category: "Scamming",
    explanation:
      "scamming bladeball items + Valkyrie toy code and removing the user after asking for payment",
    proofs: [{ url: "https://imgur.com/a/gDv6YVQ", label: "Proof" }],
  },
  {
    username: "lanadelreyandherboyfriends",
    id: "1374541132968497194",
    category: "Scamming",
    explanation:
      "ghosted a member after they paid for a commission and failed to answer in the ticket they were added to",
    proofs: [{ url: "https://imgur.com/a/OSk26M7", label: "Proof" }],
  },
  {
    username: "elt",
    id: "341007732452884483",
    category: "Art / UGC Theft",
    explanation:
      "scamming a member out of an exchange ( designs for a tik tok promo ) + member did their end by sending designs but scammer backed out last minute by leaving the server & never giving updates about the tik tok & never posted it",
    proofs: [{ url: "https://imgur.com/a/REcSOBC", label: "Proof" }],
  },
  {
    username: "starburn_starfall_starlight",
    id: "1150471314121949355",
    category: "Scamming",
    explanation:
      "falsely advertising to multiple members, ignored staff and continued to advertise services she was told not to, borderline scamming multiple members via exchanges, flooding a group without getting actual permission to do so, as well as changing payment methods to exchanges in order to avoid real payment",
    proofs: [{ url: "https://imgur.com/a/wpp8ZQH", label: "Proof 1" }, { url: "https://imgur.com/a/star-proofs-AhkL5Lu", label: "Proof 2" }],
  },
  {
    username: "boody_mansour",
    id: "1158866835765207040",
    category: "Art / UGC Theft",
    explanation:
      "provided the same emote to two members, when confronted, claimed the first person didn't pay even though they did, then left the community",
    proofs: [{ url: "https://imgur.com/a/Ke4FLv8", label: "Proof" }],
  },
  {
    username: "icecreamcakez_ + reven6e",
    id: "1051285449722839161 + 1299891528969486358",
    category: "Scamming",
    explanation:
      "scamming / failing to provide user after receiving payment + ghosting ticket",
    proofs: [{ url: "https://imgur.com/a/yrCpsg8", label: "Proof" }],
  },
  {
    username: "imarxch",
    id: "1080479741200580689",
    category: "Scamming",
    explanation:
      "scamming a member out of a Roblox account + valorant account + blocked when logged them out + trying to charge money from cards saved on accounts",
    proofs: [{ url: "https://imgur.com/a/6GFvMTe", label: "Proof" }],
  },
  {
    username: "dfycare",
    id: "958505724479156225",
    category: "Art / UGC Theft",
    explanation:
      "reproviding ugc models that’s 1:1 from another creators group without permission",
    proofs: [{ url: "https://imgur.com/a/P8QiRfU", label: "Proof" }],
  },
  {
    username: "lianugc",
    id: "723732201329393674",
    category: "Scamming",
    explanation:
      "taking payment upfront and only finishing half of the commision and refusing to do the other half / refund the other half and ghosting ticket and customer",
    proofs: [{ url: "https://imgur.com/a/LUFdyjk", label: "Proof" }],
  },
  {
    username: "ghost_ly2",
    id: "1467514693664116902",
    category: "Scamming",
    explanation:
      "got made a community and blocked users when it was time to pay",
    proofs: [{ url: "https://docs.google.com/document/d/1sBe064pHll7Qlx48uxtBRrmIabQq7W0vfQhLLF9UxUo/edit?usp=sharing", label: "Proof" }],
  },
  {
    username: "toxictraits.",
    id: "1445395486302273741",
    category: "Impersonation",
    explanation:
      "impersonating a middleman community",
    proofs: [{ url: "https://imgur.com/a/4ohXXvU", label: "Proof" }],
  },
  {
    username: "reven6e",
    id: "1299891528969486358",
    category: "Scamming",
    explanation:
      "Racist comments and scammed a member",
    proofs: [{ url: "https://imgur.com/a/thcFsGK", label: "Proof 1" }, { url: "https://imgur.com/a/hipSk6z", label: "Proof 2" }],
  },
  {
    username: "visjjxv",
    id: "1477088245149077545",
    category: "Scamming",
    explanation:
      "blocked user after they finished their commission",
    proofs: [{ url: "https://imgur.com/a/TjKvJvz", label: "Proof" }],
  },
  {
    username: "bbyrlhot",
    id: "774480526269612053",
    category: "Scamming",
    explanation:
      "scammed member out of their items and refused to pay them back / give items",
    proofs: [{ url: "https://imgur.com/a/thflPDh", label: "Proof" }],
  },
  {
    username: "zoulzplays3761",
    id: "1004022886157254667",
    category: "Scamming",
    explanation:
      "scammed member out of 50$ for a headless account and blocked them after money was sent",
    proofs: [{ url: "https://imgur.com/a/1URQXWt", label: "Proof" }],
  },
  {
    username: "veransie",
    id: "1235653529675501580",
    category: "Scamming",
    explanation:
      "scamming user out of 35$ by not finishing the script they were paid for, ghosting dms+ icy ticket.",
    proofs: [{ url: "https://imgur.com/a/GXKQeLC", label: "Proof" }],
  },
  {
    username: "shadesis",
    id: "532975180813959168",
    category: "Art / UGC Theft",
    explanation:
      "stealing ugcs and pretending they have permission to use them + left server once confronted",
    proofs: [{ url: "https://imgur.com/a/HuncIWA", label: "Proof" }],
  },
  {
    username: "cuteabl",
    id: "820438723828383744",
    category: "Account Theft",
    explanation:
      "Sold a roblox acc, rolled back the acc and left the server once confronted",
    proofs: [{ url: "https://imgur.com/a/sMaDZM9", label: "Proof" }],
  },
  {
    username: "rhinoplastyyy",
    id: "1276549268265766975",
    category: "Scamming",
    explanation:
      "admitted to scamming people",
    proofs: [{ url: "https://imgur.com/a/I6Nrw4k", label: "Proof" }],
  },
  {
    username: "pokemongirl69",
    id: "1434190826631594141",
    category: "Alt Account",
    explanation:
      "alt evading",
    proofs: [{ url: "https://imgur.com/a/O60azT6", label: "Proof" }],
  },
  {
    username: "byeforgoodbye",
    id: "727105488277340200",
    category: "Scamming",
    explanation:
      "scamming a member out of adopt me pets + sshf after attempting to gamble money to pay back member but lost",
    proofs: [{ url: "https://imgur.com/a/fwOLpaB", label: "Proof" }],
  },
  {
    username: "playakeyy",
    id: "606464403277086747",
    category: "Account Theft",
    explanation:
      "rolled back group while they were supposed to provide a certain % of all income and scammed the victim out of 2.5k$. Left the community later to avoid confrontation.",
    proofs: [{ url: "https://imgur.com/a/gCV8bGp", label: "Proof" }],
  },
  {
    username: "pittylea",
    id: "656869684767096833",
    category: "Scamming",
    explanation:
      "Having multiple tickets opened on them about not completing paid commissions (over 13) by deleting their community & not paying their staff",
    proofs: [{ url: "https://imgur.com/a/NuVAjvX", label: "Proof" }],
  },
  {
    username: "xiaoseo_",
    id: "386333950861115394",
    category: "Scamming",
    explanation:
      "provided a broken map and failed to fix it for the customer in time and ghosted ticket",
    proofs: [{ url: "https://imgur.com/a/BXEcM4X", label: "Proof" }],
  },
  {
    username: "money_runs",
    id: "1433055471824011344",
    category: "Other",
    explanation:
      "failed to provide a working file to the person they sold and didn't add some of the stuff they asked for",
    proofs: [{ url: "https://imgur.com/a/mhVHzdh", label: "Proof" }],
  },
  {
    username: "riveqaz",
    id: "753793238007152781",
    category: "Scamming",
    explanation:
      "attempting to scam user by getting them banned then sending a fake appeal",
    proofs: [{ url: "https://imgur.com/a/0Wrih1f", label: "Proof" }],
  },
  {
    username: "daftjayy",
    id: "910556368124129311",
    category: "Scamming",
    explanation:
      "scammed user out of mm2 items",
    proofs: [{ url: "https://imgur.com/a/2W4oFNO", label: "Proof" }],
  },
  {
    username: "czlxin",
    id: "971483473107898418",
    category: "Scamming",
    explanation:
      "scammed user out of 200k rhubarbs and blocked them after",
    proofs: [{ url: "https://imgur.com/a/Y3hXbvO", label: "Proof" }],
  },
  {
    username: "26sx.",
    id: "920752189373296680",
    category: "Alt Account",
    explanation:
      "alt of 979294060051300403",
    proofs: [{ url: "https://imgur.com/a/FC7pEox", label: "Proof" }],
  },
  {
    username: "urlove.ivy",
    id: "413050744648892416",
    category: "Scamming",
    explanation:
      "scammed users out of rhubarbs and dollhairs & failed to provide their part of the exchange",
    proofs: [{ url: "https://imgur.com/a/rrY2fh2", label: "Proof" }],
  },
  {
    username: "anyawashere",
    id: "979294060051300403",
    category: "Scamming",
    explanation:
      "scammed users out of rhubarbs and dollhairs & failed to provide their part of the exchange",
    proofs: [{ url: "https://imgur.com/a/rrY2fh2", label: "Proof" }],
  },
  {
    username: "ohnomaybe",
    id: "1424056772406022325",
    category: "Scamming",
    explanation:
      "failed to provide updates to a customer, many commissions left unfinished.",
    proofs: [{ url: "https://imgur.com/a/PlD8THW", label: "Proof" }],
  },
  {
    username: "d5le",
    id: "275673475027304448",
    category: "Scamming",
    explanation:
      "scammed user out of ptsf (borrowed it & didnt give it back)",
    proofs: [{ url: "https://imgur.com/a/rhaCZq5", label: "Proof" }],
  },
  {
    username: "vexleythepumpkin",
    id: "1013810592630448138",
    category: "Art / UGC Theft",
    explanation:
      "admitting to stealing clothes + left community once added to ticket to avoid confrontation",
    proofs: [{ url: "https://imgur.com/a/TPu6XO4", label: "Proof" }],
  },
  {
    username: "thornlife",
    id: "637459989962948618",
    category: "Scamming",
    explanation:
      "Scammed a person out of 1k robux and did not provide their end of deal where they were supposed to provide with adopt me pets, active in other tickets while ignoring dms + icy ticket.",
    proofs: [{ url: "https://imgur.com/a/YpP5JW2", label: "Proof" }],
  },
  {
    username: "snowcupcake",
    id: "1274408783094874143",
    category: "Scamming",
    explanation:
      "scammed user out of 40 dollhairs.",
    proofs: [{ url: "https://imgur.com/a/VYsBiyj", label: "Proof" }],
  },
  {
    username: "uqd",
    id: "157692162404777985",
    category: "Alt Account",
    explanation:
      "alt of 859533236833484800",
    proofs: [{ url: "https://imgur.com/a/lJkgnvl", label: "Proof" }],
  },
  {
    username: "sfcu",
    id: "833298407681818635",
    category: "Alt Account",
    explanation:
      "alt of 859533236833484800",
    proofs: [{ url: "https://imgur.com/a/lJkgnvl", label: "Proof" }],
  },
  {
    username: "leaafeon",
    id: "859533236833484800",
    category: "Scamming",
    explanation:
      "scammed out of limiteds.",
    proofs: [{ url: "https://imgur.com/a/lJkgnvl", label: "Proof" }],
  },
  {
    username: "muskerte",
    id: "802155921588355082",
    category: "Account Theft",
    explanation:
      "attempting to hack/scam user via zoom method",
    proofs: [{ url: "https://imgur.com/a/evH2u46", label: "Proof" }],
  },
  {
    username: "swuspects",
    id: "‘1255555999574659204",
    category: "Alt Account",
    explanation:
      "alt of `1488872536971280545`",
    proofs: [{ url: "https://imgur.com/a/f8WBjta", label: "Proof" }],
  },
  {
    username: "gamblingaddictlol / ketback",
    id: "617166416646242304 // 1151025226675654666",
    category: "Scamming",
    explanation:
      "scammed user out of adm pets",
    proofs: [{ url: "https://imgur.com/a/UW1bFce", label: "Proof" }],
  },
  {
    username: "psrfume",
    id: "1488872536971280545",
    category: "Art / UGC Theft",
    explanation:
      "attempting to provide stolen clothing (not sending speed paint / layers when asked) + scamming member out of rhubarb for adopt me pets + attempting to scam multiple other members",
    proofs: [{ url: "https://imgur.com/a/vN4D3KU", label: "Proof" }],
  },
  {
    username: "wzzstev",
    id: "1402652331983503390",
    category: "Account Theft",
    explanation:
      "scamming members out of a roblox account , reverting it then ghosting after promising a refund",
    proofs: [{ url: "https://imgur.com/a/kim6sKG", label: "Proof" }],
  },
  {
    username: "frostyfnut",
    id: "690215940037673030",
    category: "Account Theft",
    explanation:
      "using zoom as a way to get victim into a call to rat their pc and steal their accounts.",
    proofs: [{ url: "https://imgur.com/a/NMTn9EE", label: "Proof" }],
  },
  {
    username: "blacklistedfromnothing",
    id: "1105506575180902430",
    category: "Scamming",
    explanation:
      "scammed user out of $300+",
    proofs: [{ url: "https://imgur.com/a/Lw5KHna", label: "Proof" }],
  },
  {
    username: "vui.",
    id: "1070560201146630236",
    category: "Scamming",
    explanation:
      "failure to meet promised deadline & refund + failure to fix a commission.",
    proofs: [{ url: "https://imgur.com/a/OGfXfMK", label: "Proof" }],
  },
  {
    username: "cheesesmwear",
    id: "1138773576552558722",
    category: "Account Theft",
    explanation:
      "using bought TikTok account to beam people with a fake Roblox link",
    proofs: [{ url: "https://imgur.com/a/wD5lyo6", label: "Proof" }],
  },
  {
    username: "aapledagoat",
    id: "760084032624656395",
    category: "Scamming",
    explanation:
      "Requesting a refund through pp after receiving their rhubarbs.",
    proofs: [{ url: "https://imgur.com/a/4NWa3bb", label: "Proof" }],
  },
  {
    username: "ccutei / deleted_user_46728_3882",
    id: "785561894617481236",
    category: "Scamming",
    explanation:
      "scammed multiple users (blocked after payment was sent)",
    proofs: [{ url: "https://imgur.com/a/sOQ5GFc", label: "Proof" }],
  },
  {
    username: "scsythe",
    id: "1374833517170528360",
    category: "Art / UGC Theft",
    explanation:
      "providing ai generated work and claiming it as their own.",
    proofs: [{ url: "https://imgur.com/a/DBqmKn2", label: "Proof" }],
  },
  {
    username: "jaqeevis",
    id: "560874075354955787",
    category: "Scamming",
    explanation:
      "scammed out of 20 dollhairs.",
    proofs: [{ url: "https://imgur.com/a/OCBCfW9", label: "Proof" }],
  },
  {
    username: "auroranimbus",
    id: "820800376923488298",
    category: "Account Theft",
    explanation:
      "attempting to beam / scam using zoom call method",
    proofs: [{ url: "https://imgur.com/a/eioTYOJ", label: "Proof" }],
  },
  {
    username: "flakesin",
    id: "1408140103578157218",
    category: "Alt Account",
    explanation:
      "alt of 1378643177526792202",
    proofs: [{ url: "https://imgur.com/a/SXW09Ea", label: "Proof" }],
  },
  {
    username: "puppieboy",
    id: "1385830573095780413",
    category: "Alt Account",
    explanation:
      "alt of 1345246496848740372",
    proofs: [{ url: "https://imgur.com/a/jD5ZhIa", label: "Proof" }],
  },
  {
    username: "9183281",
    id: "1013948554034815086",
    category: "Alt Account",
    explanation:
      "alt of 1330711039343333459 & 1260201863848923208",
    proofs: [{ url: "https://imgur.com/a/fWuOli3", label: "Proof" }],
  },
  {
    username: "idkvicc",
    id: "1452092294818693272",
    category: "Scamming",
    explanation:
      "taking payment and not proceeding with the deal.",
    proofs: [{ url: "https://imgur.com/a/2BdRaXM", label: "Proof" }],
  },
  {
    username: "poutably",
    id: "1224084117696675910",
    category: "Scamming",
    explanation:
      "scamming + ignoring tickets once added",
    proofs: [{ url: "https://imgur.com/a/nMgEJ7T", label: "Proof" }],
  },
  {
    username: "kkoumas",
    id: "‘1291726400088309793’",
    category: "Impersonation",
    explanation:
      "impersonating another user in attempts to scam",
    proofs: [{ url: "https://imgur.com/a/L2OW8H2", label: "Proof" }],
  },
  {
    username: "harveysgf",
    id: "1434924774055874651",
    category: "Art / UGC Theft",
    explanation:
      "stealing nf2u art & leaving when confronted",
    proofs: [{ url: "https://imgur.com/a/jx4z95w", label: "Proof" }],
  },
  {
    username: "apromisexiuxiu",
    id: "1417393647149649940",
    category: "Account Theft",
    explanation:
      "scammed user out of roblox account then rolled back the account after user said no to giving them more dollhairs.",
    proofs: [{ url: "https://imgur.com/a/QDJcnoW", label: "Proof" }],
  },
  {
    username: "kiourui",
    id: "750767385455231127",
    category: "Scamming",
    explanation:
      "false to provide their half of exchange",
    proofs: [{ url: "https://imgur.com/a/6HQQfjo", label: "Proof" }],
  },
  {
    username: "creztso_",
    id: "1378643177526792202",
    category: "Art / UGC Theft",
    explanation:
      "admitting to stealing work & claiming / providing as own",
    proofs: [{ url: "https://imgur.com/a/mRPImdu", label: "Proof" }],
  },
  {
    username: "shayymins",
    id: "1342885343225184347",
    category: "Scamming",
    explanation:
      "Ghosted commissioner after they sent payment",
    proofs: [{ url: "https://imgur.com/a/uIyptgh", label: "Proof" }],
  },
  {
    username: "quack01294",
    id: "845297234010046495",
    category: "Scamming",
    explanation:
      "blocking provider and charging back 100 dollhairs after gamepass was bought.",
    proofs: [{ url: "https://imgur.com/a/hQ0cxQA", label: "Proof" }],
  },
  {
    username: "visual__design",
    id: "1270942203434373181",
    category: "Art / UGC Theft",
    explanation:
      "Uploaded a UGC hair without paying / crediting & left the community to avoid confrontment",
    proofs: [{ url: "https://imgur.com/a/WHJIuVq", label: "Proof" }],
  },
  {
    username: "cwrybaby",
    id: "1477085941733789894",
    category: "Scamming",
    explanation:
      "scammed member out of 2k rhubarbs for 2 video promos + took the video down after + left community after confronted - adding to ticket",
    proofs: [{ url: "https://imgur.com/a/u7k9wkl", label: "Proof" }],
  },
  {
    username: "cilngy",
    id: "1477323920091910185",
    category: "Alt Account",
    explanation:
      "alt of 1452756873450225727",
    proofs: [{ url: "https://imgur.com/a/NpJmBMN", label: "Proof" }],
  },
  {
    username: "okidcfrlol",
    id: "1260201863848923208",
    category: "Alt Account",
    explanation:
      "alt of 1330711039343333459",
    proofs: [{ url: "https://imgur.com/a/NZmN4ye", label: "Proof" }],
  },
  {
    username: "gyglover20493_97251",
    id: "1386607782589108316",
    category: "Alt Account",
    explanation:
      "alt of 1170627623836196910 1200638326852563035 1386611261948694628",
    proofs: [{ url: "https://imgur.com/a/91uOX7p", label: "Proof" }],
  },
  {
    username: "fragiledollys",
    id: "1459334173134295204",
    category: "Alt Account",
    explanation:
      "alt of 1120427974840307862 1448734629245878314 1414734417804529815 1292623859354308660",
    proofs: [{ url: "https://imgur.com/a/EQmsgAU", label: "Proof" }],
  },
  {
    username: "kazi0348",
    id: "1485875185897701458",
    category: "Alt Account",
    explanation:
      "alt of 1099421528006869112 1233477325148917821 1276184553588916316 1319764377859002468 141356134823467837",
    proofs: [{ url: "https://imgur.com/a/yTBC67Y", label: "Proof 1" }, { url: "https://imgur.com/a/jkaWRSm", label: "Proof 2" }],
  },
  {
    username: "2_000ss",
    id: "1133727675089956884",
    category: "Alt Account",
    explanation:
      "alt of 1391465896412844103 841011054955724871 505890079743541248 311740833944698880",
    proofs: [{ url: "https://imgur.com/a/vONtLoZ", label: "Proof" }],
  },
  {
    username: "c2u8",
    id: "1291795837630025771",
    category: "Scamming",
    explanation:
      "scammed member out of $8.50 for 2k rhubarbs",
    proofs: [{ url: "https://imgur.com/a/NKytvcR", label: "Proof" }],
  },
  {
    username: "polimentia",
    id: "1035344673159520399",
    category: "Scamming",
    explanation:
      "Refusing to refund a member after making a hair 1:1 to a hair uploaded on the marketplace",
    proofs: [{ url: "https://imgur.com/a/6RYxeRM", label: "Proof" }],
  },
  {
    username: "dolipuppii",
    id: "1174038826793046109",
    category: "Scamming",
    explanation:
      "scamming a member out of usd in exchange for a video promo + took the video down after",
    proofs: [{ url: "https://imgur.com/a/PawGfUr", label: "Proof" }],
  },
  {
    username: "elizaiahxz",
    id: "1484471256383230073",
    category: "Scamming",
    explanation:
      "scamming a member out of an adopt me pet.",
    proofs: [{ url: "https://imgur.com/a/52QOUth", label: "Proof" }],
  },
  {
    username: "cwuremel",
    id: "1391453185998323825",
    category: "Scamming",
    explanation:
      "scammer multiple users out of dollhairs.",
    proofs: [{ url: "https://imgur.com/a/0zeaIOF", label: "Proof" }],
  },
  {
    username: "23090412",
    id: "1402524330226749450",
    category: "Impersonation",
    explanation:
      "recommending a scam / impersonation community in dms",
    proofs: [{ url: "https://imgur.com/a/KE49i7p", label: "Proof" }],
  },
  {
    username: "petcried",
    id: "1323644430015528993",
    category: "Scamming",
    explanation:
      "ghosted an edit comm that was paid for.",
    proofs: [{ url: "https://imgur.com/a/8RFMj7w", label: "Proof" }],
  },
  {
    username: "frmalachi",
    id: "989356624261042266",
    category: "Other",
    explanation:
      "failed to pay a user after they invested in their group",
    proofs: [{ url: "https://imgur.com/a/3VMVPVZ", label: "Proof" }],
  },
  {
    username: "pleasemls",
    id: "1330711039343333459",
    category: "Scamming",
    explanation:
      "Scamming a member out of a tiktok account.",
    proofs: [{ url: "https://imgur.com/a/tPeOHp7", label: "Proof" }],
  },
  {
    username: "irunthislilbro",
    id: "1448734629245878314",
    category: "Alt Account",
    explanation:
      "alt of 1292623859354308660 1414734417804529815 & 1120427974840307862",
    proofs: [{ url: "https://imgur.com/a/7FcD87c", label: "Proof" }],
  },
  {
    username: "nsfw || sexrooms ||",
    id: "1228846541876232225",
    category: "Alt Account",
    explanation:
      "alt of 1006329504295305238 & 1404089152726630440",
    proofs: [{ url: "https://imgur.com/a/YcZR9sC", label: "Proof" }],
  },
  {
    username: "urgently",
    id: "1006329504295305238",
    category: "Alt Account",
    explanation:
      "alt of 1404089152726630440",
    proofs: [{ url: "https://imgur.com/a/7EsnUa4", label: "Proof" }],
  },
  {
    username: "remarkable_beagle_53075",
    id: "1427659712744259616",
    category: "Alt Account",
    explanation:
      "alt of 1412247677600665602 1371212074814013542 & 1303456183553757286",
    proofs: [{ url: "https://imgur.com/a/2jewJn3", label: "Proof" }],
  },
  {
    username: "softfawns",
    id: "1370544905646112958",
    category: "Scamming",
    explanation:
      "bought an ap then proceeded to refund, leaving the community.",
    proofs: [{ url: "https://imgur.com/a/7jcIyeL", label: "Proof" }],
  },
  {
    username: "skyhigh5_",
    id: "559362234267074590",
    category: "Scamming",
    explanation:
      "scammed member out of 100$ for group",
    proofs: [{ url: "https://imgur.com/a/N3UKmQb", label: "Proof" }],
  },
  {
    username: "nullglobal",
    id: "919984385883766816",
    category: "Scamming",
    explanation:
      "failure to refund member after having an eta set",
    proofs: [{ url: "https://imgur.com/a/gN25o5N", label: "Proof" }],
  },
  {
    username: "zzz023307",
    id: "1447651031487086721",
    category: "Scamming",
    explanation:
      "ghosting beds & not paying for a map they commissioned.",
    proofs: [{ url: "https://imgur.com/a/TBA6w4D", label: "Proof" }],
  },
  {
    username: "yqbg",
    id: "310556175114698754",
    category: "Scamming",
    explanation:
      "scammed user out of full rights to maps & demanded 50% if resold after user already purchased",
    proofs: [{ url: "https://imgur.com/a/sUabX5c", label: "Proof" }],
  },
  {
    username: "casualwreck",
    id: "1358331232449990776",
    category: "Scamming",
    explanation:
      "scamming a member for usd in exchange for an account",
    proofs: [{ url: "https://imgur.com/a/Hjn4g8g", label: "Proof" }],
  },
  {
    username: "6362793",
    id: "1028711962051354795",
    category: "Scamming",
    explanation:
      "scammed user out of 14.50",
    proofs: [{ url: "https://imgur.com/a/weo9WEV", label: "Proof" }],
  },
  {
    username: "unicornboss67672",
    id: "1211158957175865385",
    category: "Scamming",
    explanation:
      "Scammed user out of 4k rhubarbs on a ban evading account. your main is 1470847148076826696",
    proofs: [{ url: "https://imgur.com/a/fOjKKmS", label: "Proof" }],
  },
  {
    username: "screensave",
    id: "369210080903823363",
    category: "Scamming",
    explanation:
      "scammed member out of 10$ and tried to charge more, when asked to a refund member was banned from their community + posted in KSF files",
    proofs: [{ url: "https://imgur.com/a/rH53S9M", label: "Proof" }],
  },
  {
    username: "xvxxvzzcvxxv",
    id: "1470918318197309460",
    category: "Scamming",
    explanation:
      "scammed user out of two accounts.",
    proofs: [{ url: "https://imgur.com/a/oeSD6DB", label: "Proof" }],
  },
  {
    username: "bluedayznjz",
    id: "1478893872829436035",
    category: "Scamming",
    explanation:
      "scammed user out of 30 dollhairs.",
    proofs: [{ url: "https://imgur.com/a/xPMhA7R", label: "Proof" }],
  },
  {
    username: "draconickittie",
    id: "1216945576004948089",
    category: "Scamming",
    explanation:
      "scammed user out of rhubarbs + fastpass",
    proofs: [{ url: "https://imgur.com/a/861RjZV", label: "Proof 1" }, { url: "https://imgur.com/a/I7bmDFj", label: "Proof 2" }],
  },
  {
    username: "dokidiary",
    id: "1089686180192325742",
    category: "Art / UGC Theft",
    explanation:
      "scammed user out of lim - refuses to finish 25 ugcs / their side of exchange bc lim was poisoned (provider was unaware & warranty was not provided)",
    proofs: [{ url: "https://imgur.com/a/3BhCnag", label: "Proof" }],
  },
  {
    username: "bnistic",
    id: "1470847148076826696",
    category: "Scamming",
    explanation:
      "scammed users out of rhubarbs & left the community",
    proofs: [{ url: "https://imgur.com/a/lMRSbsM", label: "Proof" }],
  },
  {
    username: "huglangihh, lu1z3. & l6iza.",
    id: "1235926624852119652, 1391181903213629440 & 1271447796469207110",
    category: "Other",
    explanation:
      "unfulfilled order of nitr",
    proofs: [{ url: "https://imgur.com/a/Qh2cO3f", label: "Proof" }],
  },
  {
    username: "kingkong341",
    id: "1345312249958502431",
    category: "Scamming",
    explanation:
      "Owner of a fake scamming server/Reported in KSF + refusing to use a trusted mm.",
    proofs: [{ url: "https://imgur.com/a/Y5sKHIj", label: "Proof" }],
  },
  {
    username: "averrh",
    id: "1070386637399400520",
    category: "Scamming",
    explanation:
      "attempting to scam members out of roblox accounts",
    proofs: [{ url: "https://imgur.com/a/pm1SoNv", label: "Proof" }],
  },
  {
    username: "quietpremise",
    id: "1272387392145330257",
    category: "Scamming",
    explanation:
      "staff in scam community",
    proofs: [{ url: "https://imgur.com/a/8wYWPMN", label: "Proof" }],
  },
  {
    username: "nzg6 & gambit_999.",
    id: "1385693081621237891 & 1243603961886539997",
    category: "Scamming",
    explanation:
      "staff of scam community",
    proofs: [{ url: "https://imgur.com/a/DqgFZn2", label: "Proof 1" }, { url: "https://imgur.com/a/DPtRefo", label: "Proof 2" }],
  },
  {
    username: "silva00000",
    id: "1006489904328478760",
    category: "Scamming",
    explanation:
      "planning to scam members investing in big groups",
    proofs: [{ url: "https://imgur.com/a/IbqAYUQ", label: "Proof" }],
  },
  {
    username: "ilovebramsomuch225",
    id: "1425527927906242655",
    category: "Art / UGC Theft",
    explanation:
      "scammed user out of necklaces & stole adopt me pets.",
    proofs: [{ url: "https://imgur.com/a/n3wkrHh", label: "Proof" }],
  },
  {
    username: "margauxx0452",
    id: "1486721694604328971",
    category: "Scamming",
    explanation:
      "hitter for a fake MM community",
    proofs: [{ url: "https://imgur.com/a/PdQgUoQ", label: "Proof" }],
  },
  {
    username: "glockywo",
    id: "721518932661501963",
    category: "Scamming",
    explanation:
      "scammed user out of 70k rhubarbs & admitted to scamming",
    proofs: [{ url: "https://imgur.com/a/AodTEEe", label: "Proof" }],
  },
  {
    username: "saijouten",
    id: "917728228079206430",
    category: "Scamming",
    explanation:
      "Failed to respond to ticket within 24hrs+ & ghosting commissions",
    proofs: [{ url: "https://imgur.com/a/VqzDtlZ", label: "Proof" }],
  },
  {
    username: "tiranyamisu",
    id: "1404089152726630440",
    category: "Scamming",
    explanation:
      "didn’t refund 500$ of a commision from 6 months ago + ghosted logo commission for 3 months",
    proofs: [{ url: "https://imgur.com/a/lsbIlPt", label: "Proof 1" }, { url: "https://imgur.com/a/rwuId63", label: "Proof 2" }],
  },
  {
    username: "khalifeww",
    id: "1054037107234054284",
    category: "Alt Account",
    explanation:
      "alt of scammer your other accounts are akenorblx / ryuzukirbx_81763",
    proofs: [{ url: "https://imgur.com/a/M8uItyw", label: "Proof" }],
  },
  {
    username: "pusheen18s / 0311300 / vamqirebite",
    id: "1124171162671390810 / 1429500619991027923 / 988200286428479488",
    category: "Scamming",
    explanation:
      "scammed user out of lims & blocked user after trade went through",
    proofs: [{ url: "https://imgur.com/a/xlLW77E", label: "Proof" }],
  },
  {
    username: "c4rt.mart_82971",
    id: "1412449030298009670",
    category: "Scamming",
    explanation:
      "scammed member out of $200 worth of rhubarbs.",
    proofs: [{ url: "https://imgur.com/a/R1fhMfd", label: "Proof" }],
  },
  {
    username: "deleted_user_30736293649372",
    id: "960444602249252935",
    category: "Scamming",
    explanation:
      "mm in a fake mm server",
    proofs: [{ url: "https://imgur.com/a/pMB4UuW", label: "Proof" }],
  },
  {
    username: "arkyy088",
    id: "1483849576157810809",
    category: "Scamming",
    explanation:
      "using a fake mm server & scamming user out of ingame items",
    proofs: [{ url: "https://imgur.com/a/pMB4UuW", label: "Proof" }],
  },
  {
    username: "gotemmm1039",
    id: "811322109627334666",
    category: "Alt Account",
    explanation:
      "alt of 1214207783524769812 & 885274735871688705",
    proofs: [{ url: "https://imgur.com/a/fXORZxm", label: "Proof" }],
  },
  {
    username: "kellanih",
    id: "1240127496666746910",
    category: "Alt Account",
    explanation:
      "alt of 803816016307421256",
    proofs: [{ url: "https://imgur.com/a/7nSfWAW", label: "Proof" }],
  },
  {
    username: "sacredscar12",
    id: "1098003988655382529",
    category: "Art / UGC Theft",
    explanation:
      "Scammed member out of payment for a bed they won after clothing temps were sent",
    proofs: [{ url: "https://imgur.com/a/E34CW7V", label: "Proof" }],
  },
  {
    username: "ilovecamalotdttm",
    id: "1367648687873982495",
    category: "Scamming",
    explanation:
      "admitting to scamming someone for in game items",
    proofs: [{ url: "https://imgur.com/a/VfAVXel", label: "Proof" }],
  },
  {
    username: "meowieomwoewi",
    id: "1116380932920840192",
    category: "Scamming",
    explanation:
      "scammed user out of headless acc & never responded to ticket",
    proofs: [{ url: "https://imgur.com/a/5rInJgC", label: "Proof" }],
  },
  {
    username: ".nzanno",
    id: "1331782432856215716",
    category: "Scamming",
    explanation:
      "ghosting bed + leaving the community to avoid payment",
    proofs: [{ url: "https://imgur.com/a/VXm6ts1", label: "Proof" }],
  },
  {
    username: "bunfetii",
    id: "1420864797200617542",
    category: "Scamming",
    explanation:
      "scammed multiple users out of custom commands + never responded to ticket",
    proofs: [{ url: "https://imgur.com/a/EzXKHDu", label: "Proof" }],
  },
  {
    username: "zikl_27",
    id: "865599479708516355",
    category: "Alt Account",
    explanation:
      "alt of 885274735871688705 & 1003465034229354578",
    proofs: [{ url: "https://imgur.com/a/KJvz9ou", label: "Proof" }],
  },
  {
    username: "trustmabu",
    id: "697508527178121307",
    category: "Alt Account",
    explanation:
      "alt of neon, stealing limiteds",
    proofs: [{ url: "https://imgur.com/a/ve9yQKH", label: "Proof" }],
  },
  {
    username: "31cjd",
    id: "1157697749614088315",
    category: "Scamming",
    explanation:
      "leaving the community and ghosting a commission",
    proofs: [{ url: "https://imgur.com/a/ZRUyfoq", label: "Proof" }],
  },
  {
    username: "kttiful",
    id: "1447419593944731709",
    category: "Scamming",
    explanation:
      "scammed user out of 3k Rhubarbs ; never bought gp + blocked & left",
    proofs: [{ url: "https://imgur.com/a/1EabnDw", label: "Proof" }],
  },
  {
    username: "mizsha",
    id: "803816016307421256",
    category: "Art / UGC Theft",
    explanation:
      "scammed user out of designs",
    proofs: [{ url: "https://imgur.com/a/JTNzjmE", label: "Proof" }],
  },
  {
    username: "vein / veinfuls",
    id: "1292623859354308660",
    category: "Alt Account",
    explanation:
      "an alt of 1292623859354308660, banned for scamming a member out of a ugc grouo",
    proofs: [{ url: "https://imgur.com/a/pqF1FVa", label: "Proof" }],
  },
  {
    username: "hello1674 & ihateweirdlife",
    id: "217109902760476673 & 302920707543662592",
    category: "Account Theft",
    explanation:
      "beaming",
    proofs: [{ url: "https://imgur.com/a/LwgX92K", label: "Proof" }],
  },
  {
    username: "zzzxxcxvxv",
    id: "1277582092695375967",
    category: "Scamming",
    explanation:
      "attempting to use a fake halal mm",
    proofs: [{ url: "https://imgur.com/a/5bk0TE4", label: "Proof" }],
  },
  {
    username: "amydolis",
    id: "653001857635188737",
    category: "Other",
    explanation:
      "attempting to provide a game that is not yours and claiming to be the owner",
    proofs: [{ url: "https://imgur.com/a/keTCQMf", label: "Proof" }],
  },
  {
    username: "edeny_. & erickaaonly",
    id: "1389065250749415498 & 1186824517419536486",
    category: "Scamming",
    explanation:
      "Scammed a member out of mm2 + reported in KSF (bloxbuy community)",
    proofs: [{ url: "https://imgur.com/a/Ksu5PXw", label: "Proof" }],
  },
  {
    username: "andr6szvm",
    id: "1452319688913584248",
    category: "Art / UGC Theft",
    explanation:
      "Providing stolen clothes",
    proofs: [{ url: "https://imgur.com/a/i1dfKok", label: "Proof" }],
  },
  {
    username: "x_xxz.",
    id: "1368402055366180916",
    category: "Scamming",
    explanation:
      "Scammed a member out of dollhairs.",
    proofs: [{ url: "https://imgur.com/a/yGzDw5Y", label: "Proof" }],
  },
  {
    username: "pawfll",
    id: "1383135981712048138",
    category: "Scamming",
    explanation:
      "scammed user out of royale high bundle, blocked + kicked from her community& ignored ticket",
    proofs: [{ url: "https://imgur.com/a/SDhzZXW", label: "Proof" }],
  },
  {
    username: ".bobby163",
    id: "1003465034229354578",
    category: "Alt Account",
    explanation:
      "alt of 885274735871688705",
    proofs: [{ url: "https://imgur.com/a/btGRu0j", label: "Proof" }],
  },
  {
    username: "kate2fly",
    id: "885274735871688705",
    category: "Impersonation",
    explanation:
      "impersonating another member trying to get offers on groups you have no ownership to",
    proofs: [{ url: "https://imgur.com/a/fcApUFs", label: "Proof" }],
  },
  {
    username: "akenorblx / ryuzukirbx_81763",
    id: "1325509875895111762 / 1429901265168633870",
    category: "Scamming",
    explanation:
      "scammed user out of group by rolling back & left community when confronted",
    proofs: [{ url: "https://imgur.com/a/QpWr4xi", label: "Proof" }],
  },
  {
    username: "voarer",
    id: "1466111896510922978",
    category: "Art / UGC Theft",
    explanation:
      "blocking a member after they sent payment in exchange for ugc uploads + left community to avoid confrontation",
    proofs: [{ url: "https://imgur.com/a/KBtqaGG", label: "Proof" }],
  },
  {
    username: "tiredsleep_2",
    id: "1448039076778217552",
    category: "Scamming",
    explanation:
      "scammed a user by sending gns & disputing after receiving files",
    proofs: [{ url: "https://imgur.com/a/R3awjbj", label: "Proof" }],
  },
  {
    username: "0188 / vu7",
    id: "1357314069685862430 / 1314989714096525447",
    category: "Scamming",
    explanation:
      "slur usage + supported the scammer & encouraged it",
    proofs: [{ url: "https://imgur.com/a/tO1INQU", label: "Proof" }],
  },
  {
    username: "jadeiana",
    id: "1098781579930771487",
    category: "Alt Account",
    explanation:
      "alt of 1023007957220327434 & 1339839959158362145",
    proofs: [{ url: "https://imgur.com/a/InRaTYm", label: "Proof" }],
  },
  {
    username: "g6ld",
    id: "1231580579527655487",
    category: "Scamming",
    explanation:
      "not paying for commission after receiving the templates + didn't respond to ticket once added",
    proofs: [{ url: "https://imgur.com/a/8NUivlM", label: "Proof" }],
  },
  {
    username: "ronin_52",
    id: "1233477325148917821",
    category: "Other",
    explanation:
      "Ban evading alt of banned user reported in ksf. main is 1413561348234678374 & 1276184553588916316",
    proofs: [{ url: "https://imgur.com/a/ubO0qq2", label: "Proof" }],
  },
  {
    username: "filtikk",
    id: "1201895097008922665",
    category: "Other",
    explanation:
      "Withdrew rhubarb funds from the community after providing ownership to a member.",
    proofs: [{ url: "https://imgur.com/a/78dXssP", label: "Proof" }],
  },
  {
    username: "deadinmycoffin",
    id: "1111371346392400082",
    category: "Scamming",
    explanation:
      "Helped a member get scammed out of $200",
    proofs: [{ url: "https://imgur.com/a/ZRSmFkK", label: "Proof" }],
  },
  {
    username: "lisomoza17",
    id: "530182717111795712",
    category: "Scamming",
    explanation:
      "Affiliated with a scamming community used just to scam people.",
    proofs: [{ url: "https://imgur.com/a/eIrHKAs", label: "Proof" }],
  },
  {
    username: "deleted_user_a95f2c4cf17c / kubzies",
    id: "1167984860065976342 / 1116488052248944743",
    category: "Scamming",
    explanation:
      "scamming a member out of 40 usd and left server to avoid confrontation",
    proofs: [{ url: "https://imgur.com/a/X7a8X0B", label: "Proof 1" }, { url: "https://imgur.com/a/e5l9Xbl", label: "Proof 2" }],
  },
  {
    username: ".minnmi",
    id: "928425272993255467",
    category: "Alt Account",
    explanation:
      "alt of 1271525972155568248",
    proofs: [{ url: "https://imgur.com/a/pI8K7Ib", label: "Proof" }],
  },
  {
    username: "hquni",
    id: "1455284853795717202",
    category: "Alt Account",
    explanation:
      "alt of 1215099603469344859",
    proofs: [{ url: "https://imgur.com/a/QslHgjm", label: "Proof" }],
  },
  {
    username: "babblcat / pvppyliz",
    id: "1342265719622209701 / 1167914102614675526",
    category: "Alt Account",
    explanation:
      "alt of 1271525972155568248",
    proofs: [{ url: "https://imgur.com/a/aTTcVQZ", label: "Proof 1" }, { url: "https://imgur.com/a/ICojVpo", label: "Proof 2" }],
  },
  {
    username: "urgxnt. / d4qv / s6mg / mxresilence",
    id: "748335948248383619 / 1262780424501858347 / 1161058407034409041 / 1388276246583967765",
    category: "Alt Account",
    explanation:
      "alt of 1297649195905318953",
    proofs: [{ url: "https://imgur.com/a/ONfqZSR", label: "Proof 1" }, { url: "https://imgur.com/a/jycOF3v", label: "Proof 2" }, { url: "https://imgur.com/a/0mMPmCO", label: "Proof 3" }, { url: "https://imgur.com/a/xMvb6dK", label: "Proof 4" }],
  },
  {
    username: "yanzel0966",
    id: "1456952239322304525",
    category: "Alt Account",
    explanation:
      "alt of 1272415064305172532 & 1400009988960682055",
    proofs: [{ url: "https://imgur.com/a/lXBd5hB", label: "Proof" }],
  },
  {
    username: "its9cy",
    id: "1427147147383541790",
    category: "Art / UGC Theft",
    explanation:
      "admitted to being associated with someone who mesh steals / steals + providing funds for them to steal technically // proof",
    proofs: [{ url: "https://imgur.com/a/1Pro1Vf", label: "Proof" }],
  },
  {
    username: "fwausto",
    id: "1426334520965070899",
    category: "Scamming",
    explanation:
      "Not finishing a commission requested and paid for by a member and had several unfinished commissions",
    proofs: [{ url: "https://imgur.com/a/yGaN1Lu", label: "Proof" }],
  },
  {
    username: "sinful000",
    id: "1319738288365637702",
    category: "Scamming",
    explanation:
      "sending fake mm community in attempt to scam another user",
    proofs: [{ url: "https://imgur.com/a/FsVndRW", label: "Proof" }],
  },
  {
    username: "itsrexyay // angeidwst",
    id: "1130201255344623657 // 950786833883738142",
    category: "Scamming",
    explanation:
      "attempting to dispute charges after adopt me exchange",
    proofs: [{ url: "https://imgur.com/a/VHqHFZ0", label: "Proof" }],
  },
  {
    username: "crzyk_.",
    id: "1256758910539403356",
    category: "Scamming",
    explanation:
      "scamming a user out of mm2 items & using a fake mm",
    proofs: [{ url: "https://imgur.com/a/w4tmNSd", label: "Proof" }],
  },
  {
    username: "deleted_user_59b0ff89c181",
    id: "823898942269816906",
    category: "Scamming",
    explanation:
      "Scammed member out of 50k+ rhubarbs.",
    proofs: [{ url: "https://imgur.com/a/Fri3cmG", label: "Proof" }],
  },
  {
    username: "frailishh",
    id: "1205291421997867079",
    category: "Scamming",
    explanation:
      "Scammed users out of commissions and refused to refund users.",
    proofs: [{ url: "https://imgur.com/a/mVBAfVG", label: "Proof" }],
  },
  {
    username: "skillfxl",
    id: "1407527958364815593",
    category: "Scamming",
    explanation:
      "Scammed member out of ingame items",
    proofs: [{ url: "https://imgur.com/a/Mprifed", label: "Proof" }],
  },
  {
    username: "kyyi0666 & pwpber",
    id: "1302145874633429015 & 1381767807112446004",
    category: "Art / UGC Theft",
    explanation:
      "Did not finish UGC concept commissions after member paid 17k rhubarbs.",
    proofs: [{ url: "https://imgur.com/a/ZMVlGLM", label: "Proof" }],
  },
  {
    username: "prcgb",
    id: "983914919437156382",
    category: "Scamming",
    explanation:
      "scammed a member out of adm pets (blocked user after providing pets)",
    proofs: [{ url: "https://imgur.com/a/T7y9Sa1", label: "Proof" }],
  },
  {
    username: ".holyyy",
    id: "856438207213076511",
    category: "Art / UGC Theft",
    explanation:
      "stealing outfit system + changing very little & claiming as own",
    proofs: [{ url: "https://imgur.com/a/zq4lyoj", label: "Proof" }],
  },
  {
    username: "bwunny_x",
    id: "1462436908121722993",
    category: "Art / UGC Theft",
    explanation:
      "scammed user out of ugc & noa alt",
    proofs: [{ url: "https://imgur.com/a/YW88dTz", label: "Proof" }],
  },
  {
    username: "dollreys",
    id: "1348726907687932016",
    category: "Art / UGC Theft",
    explanation:
      "stealing clothes for comms & claiming as theirs",
    proofs: [{ url: "https://imgur.com/a/8CTe4o3", label: "Proof" }],
  },
  {
    username: "pawcasing",
    id: "1230649415916585051",
    category: "Scamming",
    explanation:
      "attempted to scam user out of dislikes by editing image & deleting dms when confronted",
    proofs: [{ url: "https://imgur.com/a/g8Ywho9", label: "Proof" }],
  },
  {
    username: "3x91_ , hahahahxdxdxdxd , kailys803",
    id: "769538747125334047 , 1327580657500815401 , 1297693266300371039",
    category: "Scamming",
    explanation:
      "scamming a member out of group",
    proofs: [{ url: "https://imgur.com/a/t6hPkMi", label: "Proof" }],
  },
  {
    username: "zzzzzzxxxxxxxxcccc",
    id: "1203514478327758884",
    category: "Scamming",
    explanation:
      "refusing mm + scammed member out of adm",
    proofs: [{ url: "https://imgur.com/a/6OX14FE", label: "Proof" }],
  },
  {
    username: "nkopwa",
    id: "1127019518460448829",
    category: "Scamming",
    explanation:
      "scammed multiple members out of robux & usd + racist",
    proofs: [{ url: "https://imgur.com/a/C510FRT", label: "Proof" }],
  },
  {
    username: "popularinschool",
    id: "1052965350209245255",
    category: "Art / UGC Theft",
    explanation:
      "providing a group with stolen clothes & ignored ticket",
    proofs: [{ url: "https://imgur.com/a/ff35mYf", label: "Proof" }],
  },
  {
    username: "angetrails",
    id: "1459522134379462868",
    category: "Art / UGC Theft",
    explanation:
      "providing stolen clothes",
    proofs: [{ url: "https://imgur.com/a/YPPLePe", label: "Proof" }],
  },
  {
    username: "qxgf",
    id: "1302752880024879168",
    category: "Alt Account",
    explanation:
      "alt of 1202628961809596439 owns group with a bunch of stolen clothing",
    proofs: [{ url: "https://imgur.com/a/ccTxFwT", label: "Proof" }],
  },
  {
    username: "softnesses",
    id: "1202628961809596439",
    category: "Art / UGC Theft",
    explanation:
      "owns a group with a bunch of stolen clothing",
    proofs: [{ url: "https://imgur.com/a/ccTxFwT", label: "Proof" }],
  },
  {
    username: "phenominl",
    id: "1452756873450225727",
    category: "Scamming",
    explanation:
      "scamming member out of adopt me pets for pv, blocked member when it was time to complete their side of the tr4de. left community once confronted",
    proofs: [{ url: "https://imgur.com/a/j3FWVdg", label: "Proof" }],
  },
  {
    username: "clowneta",
    id: "427466931499565056",
    category: "Alt Account",
    explanation:
      "alt of 1097850419612504084",
    proofs: [{ url: "https://imgur.com/a/9m4JnaA", label: "Proof" }],
  },
  {
    username: "arianascousins_",
    id: "1446126241559347275",
    category: "Alt Account",
    explanation:
      "alt of 1097850419612504084",
    proofs: [{ url: "https://imgur.com/a/LI8KLuv", label: "Proof" }],
  },
  {
    username: "vqoc.",
    id: "1029430481122492426",
    category: "Alt Account",
    explanation:
      "alt of 1097850419612504084",
    proofs: [{ url: "https://imgur.com/a/584igVQ", label: "Proof" }],
  },
  {
    username: "chinitoxo",
    id: "1097850419612504084",
    category: "Account Theft",
    explanation:
      "scammed a member out of a roblox account (reverted the account)",
    proofs: [{ url: "https://imgur.com/a/RDUqzdf", label: "Proof" }],
  },
  {
    username: "sweetdizzy",
    id: "1384616138184331364",
    category: "Scamming",
    explanation:
      "scammed member out of 11$ for a group. Blocked member when time to complete their side of the deal",
    proofs: [{ url: "https://imgur.com/a/zi7T2S8", label: "Proof" }],
  },
  {
    username: "ccracking",
    id: "1105513254203175072",
    category: "Scamming",
    explanation:
      "attempted scamming with fake pp payment screenshot",
    proofs: [{ url: "https://imgur.com/a/vL1l3Jw", label: "Proof" }],
  },
  {
    username: "liy5s",
    id: "1153414484287819786",
    category: "Scamming",
    explanation:
      "attempted to scam user by making them accept the trade after making the trade offer so auth would be bypassed & left once confronted",
    proofs: [{ url: "https://imgur.com/a/SwG8Lb0", label: "Proof" }],
  },
  {
    username: "favice1",
    id: "1318453929201369109",
    category: "Scamming",
    explanation:
      "scammed member out of $200 for a game. sent member an incorrect / unfinished game file. left community after being added to ticket to avoid confrontation",
    proofs: [{ url: "https://imgur.com/a/T4pp52L", label: "Proof" }],
  },
  {
    username: "estr3l",
    id: "1320158358250197009",
    category: "Art / UGC Theft",
    explanation:
      "reselling others face concepts as their own",
    proofs: [{ url: "https://imgur.com/a/fQOGaG9", label: "Proof" }],
  },
  {
    username: "chieyannpowers",
    id: "1120412937874587771",
    category: "Scamming",
    explanation:
      "scamming a member out of $250 & reported in ksf for scamming previously.",
    proofs: [{ url: "https://imgur.com/a/2bTF67r", label: "Proof" }],
  },
  {
    username: "takeme2dubai",
    id: "863868841394176020",
    category: "Alt Account",
    explanation:
      "alt of 1107904052114767922",
    proofs: [{ url: "https://imgur.com/a/fiLyQ1f\\", label: "Proof" }],
  },
  {
    username: "bunnycnddles",
    id: "1341668660053278815",
    category: "Alt Account",
    explanation:
      "alt of 859988128311148574",
    proofs: [{ url: "https://imgur.com/a/lX20Gju", label: "Proof" }],
  },
  {
    username: "sweisdiary",
    id: "1435037236067565699",
    category: "Alt Account",
    explanation:
      "alt of 1196959406181589104",
    proofs: [{ url: "https://imgur.com/a/8uKB51v", label: "Proof" }],
  },
  {
    username: "supercheesemc4743",
    id: "919440761831964705",
    category: "Alt Account",
    explanation:
      "alt of 1412179595423252593 & 937544397317357608",
    proofs: [{ url: "https://imgur.com/a/9JGWId4", label: "Proof" }],
  },
  {
    username: "fzvh",
    id: "582332247198269452",
    category: "Alt Account",
    explanation:
      "alt of 805197303631314994",
    proofs: [{ url: "https://imgur.com/a/WggOS6V", label: "Proof" }],
  },
  {
    username: "sike_bruh1",
    id: "1400009988960682055",
    category: "Alt Account",
    explanation:
      "alt of 1272415064305172532",
    proofs: [{ url: "https://imgur.com/a/SBhPfe1", label: "Proof" }],
  },
  {
    username: "shysignal",
    id: "1175078044961095792",
    category: "Alt Account",
    explanation:
      "alt of 1107904052114767922",
    proofs: [{ url: "https://imgur.com/a/KtL2D6p", label: "Proof" }],
  },
  {
    username: "louie_07931",
    id: "1386611261948694628",
    category: "Alt Account",
    explanation:
      "alt of 1200638326852563035 & 1170627623836196910",
    proofs: [{ url: "https://imgur.com/a/dDehdkM", label: "Proof" }],
  },
  {
    username: "sydnee0362",
    id: "937544397317357608",
    category: "Alt Account",
    explanation:
      "alt of 1412179595423252593",
    proofs: [{ url: "https://imgur.com/a/ZCvRBKs", label: "Proof" }],
  },
  {
    username: "spellweaver6",
    id: "1372973339496157337",
    category: "Alt Account",
    explanation:
      "alt of 1198893380508332086",
    proofs: [{ url: "https://imgur.com/a/ZCvRBKs", label: "Proof" }],
  },
  {
    username: "veinil",
    id: "1427086799930396843",
    category: "Alt Account",
    explanation:
      "alt of 976718717796909067 & 1296033935855325196",
    proofs: [{ url: "https://imgur.com/a/JktZ26e", label: "Proof" }],
  },
  {
    username: "lwuma",
    id: "1200461714915872772",
    category: "Alt Account",
    explanation:
      "alt of 965580421012291585 , 1195818876777279488 & 1411800082004840659",
    proofs: [{ url: "https://imgur.com/a/85bjo2j", label: "Proof" }],
  },
  {
    username: "bossbunnynini",
    id: "854702915150413844",
    category: "Alt Account",
    explanation:
      "alt of 1134861124731412502",
    proofs: [{ url: "https://imgur.com/a/dY3Y3sT", label: "Proof" }],
  },
  {
    username: "suffocatingsilently",
    id: "1195818876777279488",
    category: "Alt Account",
    explanation:
      "alt of 965580421012291585",
    proofs: [{ url: "https://imgur.com/a/K8bqdYg", label: "Proof" }],
  },
  {
    username: "jamalop12",
    id: "1120427974840307862",
    category: "Alt Account",
    explanation:
      "alt of 1292623859354308660",
    proofs: [{ url: "https://imgur.com/a/CCjaufu", label: "Proof" }],
  },
  {
    username: "plvedge",
    id: "833737487368847380",
    category: "Scamming",
    explanation:
      "scammed member out of 21k rhubarbs",
    proofs: [{ url: "https://imgur.com/a/fjXxXwz", label: "Proof" }],
  },
  {
    username: "deleted_user_36479047e4fa",
    id: "692885413102092368",
    category: "Scamming",
    explanation:
      "scammed a user out of 3kusd",
    proofs: [{ url: "https://imgur.com/a/EIhOevL", label: "Proof" }],
  },
  {
    username: "evilxz1",
    id: "1423799814071517245,",
    category: "Scamming",
    explanation:
      "scammed another member on an alt account of his + main 1257471335963127891 (called illegal crimes) being banned for scamming multiple members and had many tickets made on themselves",
    proofs: [{ url: "https://imgur.com/a/ESzu2tp/", label: "Proof" }],
  },
  {
    username: "sedi.e",
    id: "1413886014199697470",
    category: "Scamming",
    explanation:
      "scammed a member out of an account for $$ and blocked them afterwards",
    proofs: [{ url: "https://imgur.com/a/FCdMixc", label: "Proof" }],
  },
  {
    username: "viron_g",
    id: "1448349728608616501",
    category: "Art / UGC Theft",
    explanation:
      "charging back a transaction after repaying victim for their ugc bundles (charged back again after he got banned for unrelated reasons)",
    proofs: [{ url: "https://imgur.com/a/5IbDI4j", label: "Proof" }],
  },
  {
    username: "rsiechaee_24708",
    id: "1456902860506791946",
    category: "Scamming",
    explanation:
      "Scammed member out of 500 rhubarbs for a community, when in reality they had already provided the community to someone else.",
    proofs: [{ url: "https://imgur.com/a/Ka0Cwp4", label: "Proof" }],
  },
  {
    username: "cavorlie alt is sweetiyest",
    id: "1415534274173468672 alt is 1432170903042527277",
    category: "Art / UGC Theft",
    explanation:
      "scamming member out of ugc necklaces by providing examples that weren’t theirs & blocking when payment was sent",
    proofs: [{ url: "https://imgur.com/a/MebRioF", label: "Proof" }],
  },
  {
    username: "tz5e",
    id: "957793148644499516",
    category: "Art / UGC Theft",
    explanation:
      "owns a group with stolen clothing, admitting to stealing clothes once added to ticket",
    proofs: [{ url: "https://imgur.com/a/MIMlqN0", label: "Proof" }],
  },
  {
    username: "beno8386",
    id: "888463421249552425",
    category: "Art / UGC Theft",
    explanation:
      "stealing and reselling people's ugc",
    proofs: [{ url: "https://imgur.com/a/aV8cryP", label: "Proof" }],
  },
  {
    username: "rxptvde",
    id: "914309721786310666",
    category: "Scamming",
    explanation:
      "scamming member out of a group in exchange for tutorials and rhubarbs + ghosting ticket once added to it",
    proofs: [{ url: "https://imgur.com/a/A3Hn7Nv", label: "Proof" }],
  },
  {
    username: "zxvzxvzxvxzv",
    id: "1451655028132679696",
    category: "Scamming",
    explanation:
      "Attempting to get access to roblox accounts by doing a fake giveaway.",
    proofs: [{ url: "https://imgur.com/a/TzTUAa7", label: "Proof" }],
  },
  {
    username: "slanderingmyself",
    id: "311740833944698880",
    category: "Art / UGC Theft",
    explanation:
      "attempting to reprovide a ugc that has been uploaded and published by someone else and claiming they were allowed to but had no proof",
    proofs: [{ url: "https://imgur.com/a/XcdWmxc", label: "Proof" }],
  },
  {
    username: "recyclers",
    id: "505491700240875521",
    category: "Scamming",
    explanation:
      "Scammed member out of playful vampire, immediately blocked user after the transaction was completed.",
    proofs: [{ url: "https://imgur.com/a/UNy9o5W", label: "Proof" }],
  },
  {
    username: "deathinribbons",
    id: "1326698386136629279",
    category: "Art / UGC Theft",
    explanation:
      "stealing clothing and attempting to resell, admitted in ticket",
    proofs: [{ url: "https://imgur.com/a/c1GYlsh", label: "Proof" }],
  },
  {
    username: "baldy7_",
    id: "792496364700827669",
    category: "Art / UGC Theft",
    explanation:
      "has had over 2+ weeks to refund someone for a UGC commision they never finished",
    proofs: [{ url: "https://imgur.com/a/9X0NORX", label: "Proof" }],
  },
  {
    username: "kiopiowio",
    id: "1271525972155568248",
    category: "Scamming",
    explanation:
      "scamming users out of already paid comms by blocking & leaving the serv when asked for updates",
    proofs: [{ url: "https://imgur.com/a/3hTKWMr", label: "Proof" }],
  },
  {
    username: "crybnie",
    id: "1049195732516749363",
    category: "Art / UGC Theft",
    explanation:
      "stole a map & only changed very little changes + sold it + used assets you have no permission to use + refusing to refund after scamming a member out of a map you never made",
    proofs: [{ url: "https://imgur.com/a/lrKVJDQ", label: "Proof" }],
  },
  {
    username: "illegalcrimes",
    id: "1257481335963127891",
    category: "Scamming",
    explanation:
      "scamming members out of usd + a roblox account after making multiple excuses and having multiple tickets made",
    proofs: [{ url: "https://imgur.com/a/RE8apVx", label: "Proof" }],
  },
  {
    username: "_desiredout. , .bbrook1yn",
    id: "1389194447685812226, 1354067634743672873",
    category: "Art / UGC Theft",
    explanation:
      "attempting to resell a **FREE** outfit pack (literally my outfit pack??) for $15, + attempting to resell maps they dont own",
    proofs: [{ url: "https://imgur.com/a/ITtz8Az", label: "Proof" }],
  },
  {
    username: "4img",
    id: "1334669836785287281",
    category: "Account Theft",
    explanation:
      "Scammed user out of roblox account, ended up reverting months later.",
    proofs: [{ url: "https://imgur.com/a/R8N6kzJ", label: "Proof" }],
  },
  {
    username: "noisygf",
    id: "1273737106165862502",
    category: "Art / UGC Theft",
    explanation:
      "Stealing clothing + has stolen clothing in group.",
    proofs: [{ url: "https://imgur.com/a/9uQzXBZ", label: "Proof" }],
  },
  {
    username: "checkcame35",
    id: "1163511722057936896",
    category: "Account Theft",
    explanation:
      "attempting to beam member / get members cookies",
    proofs: [{ url: "https://imgur.com/a/EqsvKVG", label: "Proof" }],
  },
  {
    username: "soulmakeups",
    id: "1163490905848811572",
    category: "Account Theft",
    explanation:
      "attempting to beam members",
    proofs: [{ url: "https://imgur.com/a/WnqtHDd", label: "Proof" }],
  },
  {
    username: "remirsed",
    id: "1277345543831687170",
    category: "Scamming",
    explanation:
      "scamming out of 200+ usdollhairs by sending fake transaction pp screenshots and admitted to their friends",
    proofs: [{ url: "https://imgur.com/a/VrjVdan", label: "Proof" }],
  },
  {
    username: "lup1ne",
    id: "1049773533619830834",
    category: "Art / UGC Theft",
    explanation:
      "scammed user out of 200+ designs - left community when asked for eta",
    proofs: [{ url: "https://imgur.com/a/lcIt5Mh", label: "Proof" }],
  },
  {
    username: "monqira & flopiv",
    id: "1340447746875854918 & 786888881558519818",
    category: "Art / UGC Theft",
    explanation:
      "Attempting to resprovide stolen models in a different community.",
    proofs: [{ url: "https://imgur.com/a/irzMjv2", label: "Proof" }],
  },
  {
    username: "hervoices",
    id: "409455919714402305",
    category: "Scamming",
    explanation:
      "Scamming a member out of 20 L shaped carrots for a pp acc + leaving the community to avoid confrontation",
    proofs: [{ url: "https://imgur.com/a/nrdHK24", label: "Proof" }],
  },
  {
    username: "whymumble",
    id: "020456996668985405",
    category: "Scamming",
    explanation:
      "Scammed user out of 2k rhubarbs.",
    proofs: [{ url: "https://imgur.com/a/r5sVPT5", label: "Proof" }],
  },
  {
    username: "prwfected",
    id: "1117153853620633672",
    category: "Scamming",
    explanation:
      "ghosted member after they paid for a ui commission while active in other communities + unable to refund due to spending the payment he received before ghosting",
    proofs: [{ url: "https://imgur.com/a/bevdMjW", label: "Proof" }],
  },
  {
    username: "mspwrincessa",
    id: "1167582680959954957",
    category: "Scamming",
    explanation:
      "Scammed user out of Roblox account, blocked victim then left.",
    proofs: [{ url: "https://imgur.com/a/pDtD30Z", label: "Proof" }],
  },
  {
    username: "secondshift_nyc",
    id: "1376897181713436692",
    category: "Art / UGC Theft",
    explanation:
      "disputed payment on pp after recieving ugc",
    proofs: [{ url: "https://imgur.com/a/f0tSZHM", label: "Proof" }],
  },
  {
    username: "7xsv.",
    id: "1071440754863525998",
    category: "Scamming",
    explanation:
      "attempting to scam members and owner out of a script you never owned + lied on another members name about it + owner confirmed you never purchased it in the first place",
    proofs: [{ url: "https://imgur.com/a/a3knUza", label: "Proof" }],
  },
  {
    username: "cvvasdf",
    id: "1455472669549138053",
    category: "Account Theft",
    explanation:
      "Sending beam links and hacking roblox accounts",
    proofs: [{ url: "https://imgur.com/a/WGqEKXz", label: "Proof" }],
  },
  {
    username: "patient_v",
    id: "1288620417543835802",
    category: "Scamming",
    explanation:
      "scammed member out of 120k rhubarbs by deleting community when had orders",
    proofs: [{ url: "https://imgur.com/a/GhC7IT6", label: "Proof" }],
  },
  {
    username: "geogdudee",
    id: "1205823255009566752",
    category: "Other",
    explanation:
      "charging back after paying for a bid and leaving the server after",
    proofs: [{ url: "https://imgur.com/a/MvivdZh", label: "Proof" }],
  },
  {
    username: "gablolxd",
    id: "952160771301834762",
    category: "Account Theft",
    explanation:
      "reverting a roblox account after they did a deal with them in exchange for the account, ghosted the member after reverting aswell",
    proofs: [{ url: "https://imgur.com/a/cnWEf4p", label: "Proof" }],
  },
  {
    username: "ertyym",
    id: "1424396049245798623",
    category: "Account Theft",
    explanation:
      "reverted a roblox account & scammed victim out of $115",
    proofs: [{ url: "https://imgur.com/a/G4siveM", label: "Proof" }],
  },
  {
    username: "pinkfriday.",
    id: "583468648862056451",
    category: "Art / UGC Theft",
    explanation:
      "Scammed a member out of $$ during an UGC commission. Ghosted the member and then blocked them.",
    proofs: [{ url: "https://imgur.com/a/HPLug9W", label: "Proof" }],
  },
  {
    username: "08_brax",
    id: "1236729622364946507",
    category: "Art / UGC Theft",
    explanation:
      "disputed payment after winning a ugc bed",
    proofs: [{ url: "https://imgur.com/a/lfYcIvX", label: "Proof" }],
  },
  {
    username: "cokedupcassie",
    id: "1036426293580931092",
    category: "Scamming",
    explanation:
      "scammed member out of $12 for a map, + ghosted ticket",
    proofs: [{ url: "https://imgur.com/a/4SHJJDw", label: "Proof" }],
  },
  {
    username: "icpray",
    id: "572522515419889664",
    category: "Scamming",
    explanation:
      "aided a scammer by letting them use your roblox account to scam adopt me pets",
    proofs: [{ url: "https://imgur.com/a/2k4R1Oj", label: "Proof" }],
  },
  {
    username: "iwqy & meownicolee",
    id: "1256440749059215471 and 1284391190422093865",
    category: "Scamming",
    explanation:
      "scammed member out of adopt me pets.",
    proofs: [{ url: "https://imgur.com/a/2k4R1Oj", label: "Proof" }],
  },
  {
    username: "raceyy_",
    id: "1113081196394598460",
    category: "Scamming",
    explanation:
      "scammed a member out of 500k rhd <:04zyellower:1428722116919951420>",
    proofs: [{ url: "https://imgur.com/a/6mVbc5u", label: "Proof" }],
  },
  {
    username: "c7zi",
    id: "1390464663149482135",
    category: "Alt Account",
    explanation:
      "alt of scammer (alyvies. / 1419356648920846487) & time wasted",
    proofs: [{ url: "https://imgur.com/a/efI0kSw", label: "Proof 1" }, { url: "https://imgur.com/a/KzkKefA", label: "Proof 2" }],
  },
  {
    username: "sscaaarlet",
    id: "1321017934516195370",
    category: "Scamming",
    explanation:
      "scammer + previously banned + admitted to scamming in dms + racist",
    proofs: [{ url: "https://imgur.com/a/4Pgd2xy", label: "Proof" }],
  },
  {
    username: "_dasaniii",
    id: "1432597797030596732",
    category: "Art / UGC Theft",
    explanation:
      "trying to provide clothes already uploaded on the catalog",
    proofs: [{ url: "https://imgur.com/a/aNcJePD", label: "Proof" }],
  },
  {
    username: "9sqn",
    id: "1395134206929146027",
    category: "Impersonation",
    explanation:
      "scammed a user out of adm pets & impersonated the user meant to receive the pets",
    proofs: [{ url: "https://imgur.com/a/Knp5sel", label: "Proof" }],
  },
  {
    username: "t4xco",
    id: "949615433202425876",
    category: "Scamming",
    explanation:
      "scammed user out of a finished build commission worth 70 dollhairs / 13k robarbs, left serv to avoid confrontation ( rejoined and left again)",
    proofs: [{ url: "https://imgur.com/a/WLSanEf", label: "Proof" }],
  },
  {
    username: "tootiredforyoulol",
    id: "701482643891683378",
    category: "Account Theft",
    explanation:
      "sending a user a malicious terraria mod in attempt to steal user data / accounts",
    proofs: [{ url: "https://imgur.com/a/r1n2hCw", label: "Proof" }],
  },
  {
    username: "mhmdibnu_.",
    id: "1177905622939873372",
    category: "Scamming",
    explanation:
      "Scammed member out of a tiktok account.",
    proofs: [{ url: "https://imgur.com/a/abob8HP", label: "Proof" }],
  },
  {
    username: "lostmeows",
    id: "1187833325256192113",
    category: "Scamming",
    explanation:
      "scammed a member out of $90 & admitted to scamming.",
    proofs: [{ url: "https://imgur.com/a/IpCbdvM", label: "Proof" }],
  },
  {
    username: "pronoune",
    id: "1408353771205034044",
    category: "Art / UGC Theft",
    explanation:
      "Admitting to resell people's assets in the UGC community and mesh stealing.",
    proofs: [{ url: "https://imgur.com/a/QzLPxvB", label: "Proof" }],
  },
  {
    username: "alyvies.",
    id: "1419356648920846487",
    category: "Scamming",
    explanation:
      "exit scammed several people for comms, ghosted and ignored when confronted <:06bluezicyshrug:1428722161400549376>",
    proofs: [{ url: "https://imgur.com/a/2Q9EKaM", label: "Proof 1" }, { url: "https://imgur.com/a/zaKsUzJ", label: "Proof 2" }, { url: "https://imgur.com/a/YtWQ1QC", label: "Proof 3" }, { url: "https://imgur.com/a/8LKPvF5", label: "Proof 4" }],
  },
  {
    username: "atellie",
    id: "784456429616496681",
    category: "Scamming",
    explanation:
      "scammed member out of $2 & refused to give it back once added to a ticket, left community when confronted with giving it or back or getting banned",
    proofs: [{ url: "https://imgur.com/a/OJjbH88", label: "Proof" }],
  },
  {
    username: "b44nkz.",
    id: "828353445895209022",
    category: "Scamming",
    explanation:
      "Scammed (me 😔) out of $75 after they completed their commission, left community after being added to ticket to avoid punishment",
    proofs: [{ url: "https://imgur.com/a/KsO6OWw", label: "Proof" }],
  },
  {
    username: "blissfulthoughts",
    id: "924912980091609139",
    category: "Scamming",
    explanation:
      "Scammed member out of adopt me pets.",
    proofs: [{ url: "https://imgur.com/a/zps8If3", label: "Proof" }],
  },
  {
    username: "bonbonpuriin",
    id: "146273803784159232",
    category: "Other",
    explanation:
      "Refusing to pay for an edit when they weren't satisfied with the finishing results.",
    proofs: [{ url: "https://imgur.com/a/mF7mRWo", label: "Proof" }],
  },
  {
    username: ": whymumble",
    id: ": 1020456996668985405",
    category: "Scamming",
    explanation:
      ": not refunding a user for their part of a split ib",
    proofs: [{ url: "https://imgur.com/a/2iOglHJ", label: "Proof" }],
  },
  {
    username: "msk.xx",
    id: "810550153583788054",
    category: "Scamming",
    explanation:
      "scammed member out of rhubarbs for a roblox community, blocked member after receiving payment",
    proofs: [{ url: "https://imgur.com/a/ubH5efB", label: "Proof" }],
  },
  {
    username: "eoudesire",
    id: "1214558638631288844",
    category: "Scamming",
    explanation:
      "providing fits with broken humanoids and never fixed them, member has been waiting for over a month + ghosted dms and ticket when confronted",
    proofs: [{ url: "https://imgur.com/a/msvS5cA", label: "Proof" }],
  },
  {
    username: "edmattytokky",
    id: "317028853224701952",
    category: "Scamming",
    explanation:
      "scamming a member out of usdee",
    proofs: [{ url: "https://imgur.com/a/IhF6341", label: "Proof" }],
  },
  {
    username: "freycomms",
    id: "859281812327759912",
    category: "Scamming",
    explanation:
      "hosting a giveaway with requirements and not giving the winner their prize. ghosted dms for over a month + ignored ticket once added",
    proofs: [{ url: "https://imgur.com/a/MmpuCVT", label: "Proof" }],
  },
  {
    username: "fa/gzs (without the /)",
    id: "1345246496848740372",
    category: "Scamming",
    explanation:
      "scammed member out of green queen after promising to upgrade it for something better. left the community once confronted.",
    proofs: [{ url: "https://imgur.com/a/tFCKB0M", label: "Proof" }],
  },
  {
    username: "marieyaya",
    id: "943645267574554715",
    category: "Scamming",
    explanation:
      "scamming for a headless account + attempting to exchange and scam others",
    proofs: [{ url: "https://imgur.com/a/5WHsdpq", label: "Proof" }],
  },
  {
    username: "fayeee.3",
    id: "1087354161387016284",
    category: "Alt Account",
    explanation:
      "alt of `1106585281156612157`, previously banned for failing to provide speed paint after stealing someone's design and making minor changes",
    proofs: [{ url: "https://imgur.com/a/fYEilNG", label: "Proof 1" }, { url: "https://imgur.com/a/LnWllH0", label: "Proof 2" }],
  },
  {
    username: "y6sir",
    id: "847820888678203414",
    category: "Art / UGC Theft",
    explanation:
      "stealing ugc and blocking the owner of the ugc they stole when confronted",
    proofs: [{ url: "https://imgur.com/a/Kky8X2d", label: "Proof" }],
  },
  {
    username: "teenagenathanael , itsmichert , emilynesdedg",
    id: "1343887070405464105 , 1105506743229878362 , 1342225324682772501",
    category: "Impersonation",
    explanation:
      "impersonating a trader in a mm ticket and scamming a nfr giraffe + has impersonated mms in the past",
    proofs: [{ url: "https://imgur.com/a/jvozKFn", label: "Proof" }],
  },
  {
    username: "bills",
    id: "1358058972707422388",
    category: "Scamming",
    explanation:
      "previously banned in other servers for scamming a silver emperor + ghosting ticket after asked for proof as they were actively changing their pfp",
    proofs: [{ url: "https://imgur.com/a/ODLqqrj", label: "Proof" }],
  },
  {
    username: "realaexiid",
    id: "1016170747850395679",
    category: "Scamming",
    explanation:
      "scamming a member out of a gfx",
    proofs: [{ url: "https://imgur.com/a/1LjP9jA", label: "Proof" }],
  },
  {
    username: "richfromfroundexodus",
    id: "1003951120831496212",
    category: "Art / UGC Theft",
    explanation:
      "providing a stolen game with stolen fits and scripts from an existing game published a year ago + failed to provide proof of it being their fits and scripts",
    proofs: [{ url: "https://imgur.com/a/as2yC7U", label: "Proof" }],
  },
  {
    username: "maddelyns",
    id: "1215099603469344859",
    category: "Scamming",
    explanation:
      "not providing a refund after telling customer the fits importer handmade when they were not + not wanting to provide a full refund and being told to refund.",
    proofs: [{ url: "https://imgur.com/a/q9omDGd", label: "Proof" }],
  },
  {
    username: "daucile",
    id: "1370927831030173818",
    category: "Account Theft",
    explanation:
      "providing an account to another member that was already provided for adopt me pets & account was reverted + could not refund/return the pets due to already providing them when confronted",
    proofs: [{ url: "https://imgur.com/a/RhCqxV4", label: "Proof" }],
  },
  {
    username: "deletedacc46323",
    id: "729483924321075251",
    category: "Scamming",
    explanation:
      "scamming a member out of $7,500 in exchange for their group",
    proofs: [{ url: "https://imgur.com/a/pa9h8Z9", label: "Proof" }],
  },
  {
    username: "x4fu",
    id: "1302798510407811092",
    category: "Other",
    explanation:
      "sharing paid assets when told not to from owner and planning on doing it with other creators",
    proofs: [{ url: "https://imgur.com/a/UjOhkp6", label: "Proof" }],
  },
  {
    username: "sy.en",
    id: "397946870519037954",
    category: "Scamming",
    explanation:
      "scamming a member out of $50 + member was supposed to receive a map but never did + ghosting ticket",
    proofs: [{ url: "https://imgur.com/a/OWd3zT5", label: "Proof" }],
  },
  {
    username: "coldmorguex",
    id: "640967873497399296 alt of 847820888678203414",
    category: "Scamming",
    explanation:
      "scamming a member",
    proofs: [{ url: "https://imgur.com/a/DA4IgDT", label: "Proof" }],
  },
  {
    username: "rroxyneverflopsie",
    id: "1366114514818564156",
    category: "Scamming",
    explanation:
      "scamming member out of an edit that was never made + made them wait 2+ months.",
    proofs: [{ url: "https://imgur.com/a/phoZYtj", label: "Proof" }],
  },
  {
    username: "broccolipan",
    id: "1110671703002062888",
    category: "Art / UGC Theft",
    explanation:
      "reselling hairs with no permission using hair texture they have no access to sell the textures + selling hairbase they have no access to sell either on the same hair",
    proofs: [{ url: "https://imgur.com/a/last-word-min-bigmaddyd-pooron-VC7qJbK", label: "Proof" }],
  },
  {
    username: "sweetcilla",
    id: "762406222367686667",
    category: "Scamming",
    explanation:
      "ghosting a member out of $200 dollhairs after being asked to transfer it to their current holder + ghosting member + ghosting ticket",
    proofs: [{ url: "https://imgur.com/a/ngXDPQR", label: "Proof" }],
  },
  {
    username: "0ll1e_x",
    id: "880850230369714247",
    category: "Scamming",
    explanation:
      "scamming someone out of a gui hub when they paid for it + not giving any updates + ghosting ticket while being confronted about the situation",
    proofs: [{ url: "https://imgur.com/a/W4nkXCr", label: "Proof" }],
  },
  {
    username: "quivall",
    id: "main is 1315550917457608714 alts are 1126817628082667583 1273622465956024371 994595831502094406 1120140239189585951 1114403602543431751 867928653726625822 1076132520652984380 983606847627997254 1237608630321287282 and 1315550917457608714",
    category: "Scamming",
    explanation:
      "reported in ksf for ghosting and blocking members also scamming an item as well as owning a scam community.",
    proofs: [{ url: "https://imgur.com/a/0pkaLE9", label: "Proof" }],
  },
  {
    username: "carol_sx2021685_94343",
    id: "1343966755818704928",
    category: "Impersonation",
    explanation:
      "impersonated a mm in a ticket in which they scammed the equivalent of $875 in adopt me pets, deleted messages once acquiring the pets to hide their scam (dumbass we have message logs <a:clownstink:1153217694108229683> )",
    proofs: [{ url: "https://imgur.com/a/99QAnoU", label: "Proof" }],
  },
  {
    username: "stayhomeandmakemoney",
    id: "497362689824391182",
    category: "Scamming",
    explanation:
      "scammed member out of $52, banning them from community + making excuses.",
    proofs: [{ url: "https://imgur.com/a/74mZvQb", label: "Proof" }],
  },
  {
    username: "gssof",
    id: "757136916771766272",
    category: "Scamming",
    explanation:
      "ghosted members refund request, ghosted ticket with no response for a week.",
    proofs: [{ url: "https://imgur.com/a/IXGQ1dc", label: "Proof" }],
  },
  {
    username: "bails2516",
    id: "755980457828679680",
    category: "Scamming",
    explanation:
      "refusing icyella mm and tried to get member to complete a exchange using a scam community",
    proofs: [{ url: "https://imgur.com/a/2M3fGqj", label: "Proof" }],
  },
  {
    username: "wintterr67",
    id: "1287578223210926152",
    category: "Scamming",
    explanation:
      "admitting to being a hitter for a scam server",
    proofs: [{ url: "https://imgur.com/a/sio8BIT", label: "Proof" }],
  },
  {
    username: "mykori.",
    id: "1386242946915110942",
    category: "Art / UGC Theft",
    explanation:
      "blocked user after user paid for ugc uploads",
    proofs: [{ url: "https://imgur.com/a/bFOBj73", label: "Proof" }],
  },
  {
    username: "1nathanx",
    id: "1360257865801142464",
    category: "Account Theft",
    explanation:
      "attempting to beam members and failed",
    proofs: [{ url: "https://imgur.com/a/ImhaYeM", label: "Proof" }],
  },
  {
    username: "user09285392",
    id: "1023007957220327434 alt of 1339839959158362145",
    category: "Scamming",
    explanation:
      "scamming member o it of adopt me pets + leaving the community when",
    proofs: [{ url: "https://imgur.com/a/Rajx4Nr", label: "Proof" }],
  },
  {
    username: "aquaym",
    id: "900156193593503766",
    category: "Scamming",
    explanation:
      "owner of a scam server + reported in ksf",
    proofs: [{ url: "https://imgur.com/a/RjUCkjI", label: "Proof" }],
  },
  {
    username: "attaches",
    id: "1339031236689002576",
    category: "Scamming",
    explanation:
      "scamming a member out of rhubarbs + leaving the server claiming they 'quit'",
    proofs: [{ url: "https://imgur.com/a/Ltmzt3w", label: "Proof" }],
  },
  {
    username: "ms.sugarbear",
    id: "1033853091470127114",
    category: "Art / UGC Theft",
    explanation:
      "sharing an ap you had no permission to resell + taking heavy inspo off multiple people",
    proofs: [{ url: "https://imgur.com/a/b7jgZfZ", label: "Proof" }],
  },
  {
    username: "vinnvinn._",
    id: "1431999823371833394",
    category: "Scamming",
    explanation:
      "scamming out of t-t-t-t-t-t-t-tw-t-two dollhairs… (2$)",
    proofs: [{ url: "https://imgur.com/a/zhumen4", label: "Proof" }],
  },
  {
    username: "lastword4vain",
    id: "1117648743425118238",
    category: "Scamming",
    explanation:
      "scamming members out of $ + ghosting members + left community to avoid confrontation",
    proofs: [{ url: "https://imgur.com/a/pa5Hzbt", label: "Proof" }],
  },
  {
    username: "meowwmeowmeoow",
    id: "859988128311148574",
    category: "Scamming",
    explanation:
      "scamming someone out of over 240 usdhollairs - ghosting after payment was made",
    proofs: [{ url: "https://imgur.com/a/fSayOhP", label: "Proof" }],
  },
  {
    username: "katty_109",
    id: "1422566963930206288",
    category: "Art / UGC Theft",
    explanation:
      "leaving the community while they were in a ticket — co-owns a group with stolen hairs and continued to upload more stolen hairs after it was confirmed the ones that were gonna be uploaded were stolen",
    proofs: [{ url: "https://imgur.com/a/JJZEu7f", label: "Proof" }],
  },
  {
    username: "siieee_",
    id: "1407254067884855336",
    category: "Art / UGC Theft",
    explanation:
      "continuing to upload a ugc with another uploader after their old uploader told them there’s a dmca risk because the hairs are stolen. was found promoting the stolen hairs on twitter.",
    proofs: [{ url: "https://imgur.com/a/JJZEu7f", label: "Proof" }],
  },
  {
    username: "hpmrv0b6ck",
    id: "1271793614405505056",
    category: "Scamming",
    explanation:
      "attempting to scam + sending a hitter community.",
    proofs: [{ url: "https://imgur.com/a/WVqQ0sD", label: "Proof" }],
  },
  {
    username: "mike_devriezers",
    id: "1327760899536064564",
    category: "Scamming",
    explanation:
      "falsely framing members for scamming that never happened , tried to get them to appeal with a false link.",
    proofs: [{ url: "https://imgur.com/a/LTJBW9Q", label: "Proof" }],
  },
  {
    username: "badgambier2",
    id: "865509759208783882",
    category: "Art / UGC Theft",
    explanation:
      "attempting to provide a hair that they never made to multiple members + had no permission to reprovide , left community when confronted",
    proofs: [{ url: "https://imgur.com/a/HQWf7eZ", label: "Proof" }],
  },
  {
    username: "exivcyyyy",
    id: "1332812430119665775",
    category: "Other",
    explanation:
      "did not complete their side of the service, denied that they had to, and then asked to be banned before leaving the serv",
    proofs: [{ url: "https://imgur.com/a/AyV7R68", label: "Proof" }],
  },
  {
    username: "navianna.",
    id: "1105505376046161981",
    category: "Scamming",
    explanation:
      "scamming member out of adopt me pets + faking screenshots attempting to frame the victim once confronted.",
    proofs: [{ url: "https://imgur.com/a/8Q0h7gW", label: "Proof" }],
  },
  {
    username: ".jally",
    id: "612123675692367873",
    category: "Account Theft",
    explanation:
      "attempting to scam // beam with sending scam links.",
    proofs: [{ url: "https://imgur.com/a/cCCZ2NJ", label: "Proof" }],
  },
  {
    username: "Kianzy121",
    id: "789156263857881108",
    category: "Account Theft",
    explanation:
      "attempting to hack / beam members",
    proofs: [{ url: "https://imgur.com/a/gPOjNIl", label: "Proof" }],
  },
  {
    username: "k8zg",
    id: "1341811122772246541",
    category: "Art / UGC Theft",
    explanation:
      "not sending ugc after customer paid / ghosting dms.",
    proofs: [{ url: "https://imgur.com/a/h8pabo6", label: "Proof" }],
  },
  {
    username: "3xtci",
    id: "1171257944306896937",
    category: "Scamming",
    explanation:
      "promoted providing a limited for a friend who ended up scamming the user out of said limited and proceeded to flex it on TikTok after saying she “had no part”",
    proofs: [{ url: "https://imgur.com/a/CDk6l02", label: "Proof" }],
  },
  {
    username: "guhitsjay",
    id: "563856590189363210",
    category: "Scamming",
    explanation:
      "scammed user out of limited",
    proofs: [{ url: "https://imgur.com/a/CDk6l02", label: "Proof" }],
  },
  {
    username: "nulgatgedev_25345",
    id: "1374218693621321790",
    category: "Art / UGC Theft",
    explanation:
      "heavy ai usage to enhance designs // didn’t tell his bedders that the clothes contained ai + admitted to faking stamps on his website in ticket",
    proofs: [{ url: "https://imgur.com/a/okBVZMK", label: "Proof" }],
  },
  {
    username: "lanzhcezly",
    id: "1397868544116527126",
    category: "Art / UGC Theft",
    explanation:
      "alt account of 606891603231244290 // uploaded and published ugc into own group instead of group they were supposed to upload in",
    proofs: [{ url: "https://imgur.com/a/Z5SwIUs", label: "Proof 1" }, { url: "https://imgur.com/a/8ZRPAGN", label: "Proof 2" }],
  },
  {
    username: "att_support",
    id: "1126249034072473773",
    category: "Alt Account",
    explanation:
      "alt of: 1188133602840563763 scamming multiple people out of money for roblox accounts + admitting to it",
    proofs: [{ url: "https://imgur.com/a/5WQajU0", label: "Proof" }],
  },
  {
    username: "rainbowdash10111_",
    id: "924759145859645451",
    category: "Scamming",
    explanation:
      "was previously banned in old icyella & is reported in KSF for scamming **ME** and another person a year ago for rolling back a roblox acc after the exchange was completed (took my $270 and ran)",
    proofs: [{ url: "https://imgur.com/a/USSgcs4", label: "Proof" }],
  },
  {
    username: "shayeeah",
    id: "1274065360093708350",
    category: "Scamming",
    explanation:
      "scamming member into sending a fake transaction in exchange for mm2 items — $ was never received, took items -> cancelled transaction",
    proofs: [{ url: "https://imgur.com/a/vM1uywH", label: "Proof" }],
  },
  {
    username: "mrsshady0603",
    id: "572907725445660683",
    category: "Art / UGC Theft",
    explanation:
      "Stole avatars from outfit games and claimed they were his own custom avatars to provide to members, then left the community after being confronted.",
    proofs: [{ url: "https://imgur.com/a/UBXtOvs", label: "Proof" }],
  },
  {
    username: "babysales1",
    id: "407288089250365471",
    category: "Scamming",
    explanation:
      "attempting to scam a member out of madness (mm ticket was made , then lied about the $ being sent as exchange was actively going through, once confronted — left community)",
    proofs: [{ url: "https://imgur.com/a/Blzr6SB", label: "Proof" }],
  },
  {
    username: "chrinuh",
    id: "1293959259217985562",
    category: "Art / UGC Theft",
    explanation:
      "providing a ugc asset pack containing stolen ugcs",
    proofs: [{ url: "https://imgur.com/a/5wjmntm", label: "Proof" }],
  },
  {
    username: "xxvxvvxvvxvvxv",
    id: "690942127148105788",
    category: "Art / UGC Theft",
    explanation:
      "reproviding a model that was already sold to a member and didn’t respond to a ticket",
    proofs: [{ url: "https://imgur.com/a/MvEqxPb", label: "Proof" }],
  },
  {
    username: "aidennunyam",
    id: "1392741827702034503",
    category: "Scamming",
    explanation:
      "scamming member and left community",
    proofs: [{ url: "https://imgur.com/a/Rr5Je4H", label: "Proof" }],
  },
  {
    username: "cryxxbaby",
    id: "1008915022547783701",
    category: "Art / UGC Theft",
    explanation:
      "rollbacked a provided account from a member in the community, left the community when added to ticket to avoid confrontation + stole clothing in the past proof",
    proofs: [{ url: "https://imgur.com/a/G0ZQKiH", label: "Proof" }],
  },
  {
    username: "l9nnie",
    id: "1134861124731412502",
    category: "Art / UGC Theft",
    explanation:
      "providing stolen / uploaded ugc + scammed user",
    proofs: [{ url: "https://imgur.com/a/cMrBYjY", label: "Proof" }],
  },
  {
    username: "its.cheese.bro",
    id: "882529941089050665",
    category: "Scamming",
    explanation:
      "ghosting ticket after scamming someone for 4.9k in exchange for a build , never completed the build + banned them from their community.",
    proofs: [{ url: "https://imgur.com/a/9l04p3o", label: "Proof" }],
  },
  {
    username: "adnan8205",
    id: "696849487997435935",
    category: "Scamming",
    explanation:
      "scamming member out of game items + didn’t complete their side of the deal (was supposed to setup a community in exchange for game items) + ghosting ticket once confronted",
    proofs: [{ url: "https://imgur.com/a/da7oQwt", label: "Proof" }],
  },
  {
    username: "katseye.manonie",
    id: "1240021118220238849",
    category: "Scamming",
    explanation:
      "scammed member out of sab items for mm2 -> blocked member when it was time to complete their side of the deal.",
    proofs: [{ url: "https://imgur.com/a/g1ndFlJ", label: "Proof" }],
  },
  {
    username: "ninimonita",
    id: "1075549837627510865",
    category: "Scamming",
    explanation:
      "scamming someone out of a necklace and leaving once confronted in a ticket",
    proofs: [{ url: "https://imgur.com/a/bglh9ZE", label: "Proof" }],
  },
  {
    username: "1stkda",
    id: "770243869773398016",
    category: "Art / UGC Theft",
    explanation:
      "reproviding clothing to multiple people",
    proofs: [{ url: "https://imgur.com/a/BFCcTeI", label: "Proof" }],
  },
  {
    username: "shybunny01001",
    id: "1312902895024345189",
    category: "Art / UGC Theft",
    explanation:
      "scamming a member out of ugc",
    proofs: [{ url: "https://imgur.com/a/J3XgDsw", label: "Proof" }],
  },
  {
    username: "sdsyy",
    id: "708765137968037978",
    category: "Scamming",
    explanation:
      "scamming member out of 50k rhubarbs (was supposed to make faces, never did) + ghosting ticket while actively changing pfp + had weeks to complete",
    proofs: [{ url: "https://imgur.com/a/v92E1kt", label: "Proof" }],
  },
  {
    username: "xuiiarb",
    id: "1027246840183279656",
    category: "Scamming",
    explanation:
      "Has had over a year to complete a map commission (costed $1k usdollhair) and has little to no progress and has not given them little to no updates during the process.",
    proofs: [{ url: "https://docs.google.com/document/d/1-2BIMTkqbyGR6WHyqx9Rlr0BUmz3R5azyyGQvUG7i-Y/edit?tab=t.0#heading=h.6ctk4pjt2xn", label: "Proof" }],
  },
  {
    username: "aescqa",
    id: "1121448889464143934",
    category: "Scamming",
    explanation:
      "not finishing hair comm after making b-yer wait five months & not responding in ticket",
    proofs: [{ url: "https://imgur.com/a/Z3k8VRR", label: "Proof" }],
  },
  {
    username: "s8_k",
    id: "290458343963885568",
    category: "Scamming",
    explanation:
      "scammed member out of 20k rhubarbs and left the community when confronted.",
    proofs: [{ url: "https://imgur.com/a/fsMEZ9v", label: "Proof" }],
  },
  {
    username: "srexfuckingy",
    id: "1102632955882524773",
    category: "Scamming",
    explanation:
      "apart of the icyella scam community / admitted to scamming an adopt me pet from someone, left community to avoid confrontation from a moderator.",
    proofs: [{ url: "https://imgur.com/a/Y4rR02M", label: "Proof" }],
  },
  {
    username: "c_ffed",
    id: "1352734891640356864",
    category: "Scamming",
    explanation:
      "blocked a member when it was time to pay for a commission they had ordered and failed ro respond to the ticket they have been added to.",
    proofs: [{ url: "https://imgur.com/a/1EODxEd", label: "Proof" }],
  },
  {
    username: "wonyangie",
    id: "766962884592795660",
    category: "Scamming",
    explanation:
      "scamming a member, and has fake botted vouches.",
    proofs: [{ url: "https://imgur.com/a/ncA54uK", label: "Proof" }],
  },
  {
    username: "doxdolly",
    id: "864602859776770088",
    category: "Art / UGC Theft",
    explanation:
      "scamming someone out of clothing designs + customer waited over a month with no updates + left the community when a timeframe was set + being insanely disrespectful to staff",
    proofs: [{ url: "https://imgur.com/a/AzwsG3z", label: "Proof" }],
  },
  {
    username: "fire_99666",
    id: "1165897891777351744 main id is 694610266045808780",
    category: "Scamming",
    explanation:
      "previously banned for scamming members out of rhubarbs // ban evading x scamming",
    proofs: [{ url: "https://imgur.com/a/tsYVsTk", label: "Proof" }],
  },
  {
    username: "anythingworks1",
    id: "948477769422082108",
    category: "Scamming",
    explanation:
      "Scammed a member out of $155, attempted to scam another member and left after being confronted.",
    proofs: [{ url: "https://imgur.com/a/vwYmSI6", label: "Proof" }],
  },
  {
    username: "kiarasouls",
    id: "1295519478444195892",
    category: "Scamming",
    explanation:
      "Ghosted and scammed a member out of 5.7k rhubarbs.",
    proofs: [{ url: "https://imgur.com/a/0fTep4O", label: "Proof" }],
  },
  {
    username: "ckittyro",
    id: "1190848574523715688",
    category: "Scamming",
    explanation:
      "member commissioned edits, and never received because they didn’t reply to ticket for 2 or more days with NO ping whatsoever + the customer also reassured them that they don’t receive notis with no pings, but still refused to send what they paid for, while also refused to refunding the customer",
    proofs: [{ url: "https://imgur.com/a/BuMZDnb", label: "Proof" }],
  },
  {
    username: "mademynetworth",
    id: "365246533500665866",
    category: "Scamming",
    explanation:
      "scammed member out of skotn and $6.5k + reported in ksf for scamming",
    proofs: [{ url: "https://imgur.com/a/FTwAgbN", label: "Proof" }],
  },
  {
    username: "val2turnt",
    id: "934518236031098901",
    category: "Scamming",
    explanation:
      "not fulfilling a customers order after weeks of the customer paying, had a 1 week deadline placed and still couldnt complete customers order nor provide a refund. (Has had the same problem in the past)",
    proofs: [{ url: "https://imgur.com/a/CAUeuno", label: "Proof" }],
  },
  {
    username: "hislovediaryy & elgina4",
    id: "1243913122549469224 & 1418263499783536690",
    category: "Scamming",
    explanation:
      "tricked member into thinking her main account was her friend and scammed a member out of $25 for an account.",
    proofs: [{ url: "https://imgur.com/a/ouTjlCK", label: "Proof" }],
  },
  {
    username: "theirpoetry",
    id: "913193441784111145",
    category: "Scamming",
    explanation:
      "saying slurs they cant reclaim, joking about r/pe and scamming a member by revoking their access to a paid ap, after having a fallout with them",
    proofs: [{ url: "https://imgur.com/a/gkARgdL", label: "Proof" }],
  },
  {
    username: "y4a",
    id: "1163482838042153020",
    category: "Scamming",
    explanation:
      "rolling back a roblox account after someone paid for it + ghosting ticket when added to avoid confrontation",
    proofs: [{ url: "https://imgur.com/a/IUdJRng", label: "Proof" }],
  },
  {
    username: "3d_modeller",
    id: "1269623236895965225",
    category: "Art / UGC Theft",
    explanation:
      "supposed to rig a ugc but only duplicated the file, took the payment and didn't complete their end of the deal and left icyella.",
    proofs: [{ url: "https://imgur.com/a/iTIiM2L", label: "Proof" }],
  },
  {
    username: "siavex_",
    id: "1283605107174539294",
    category: "Scamming",
    explanation:
      "scamming a member out of $200, and after doing so deleted their msgs with them and left icyella",
    proofs: [{ url: "https://imgur.com/a/xNblGV2", label: "Proof" }],
  },
  {
    username: "eyeshadowpalette",
    id: "1103347191680090224",
    category: "Scamming",
    explanation:
      "didn’t complete part of deal + made member wait 2 weeks for a gfx when they already had templates sent to them + making disrespectful comments and being rude to staff",
    proofs: [{ url: "https://imgur.com/a/13hUAQY", label: "Proof" }],
  },
  {
    username: "Softcheries",
    id: "1253362750218829906",
    category: "Scamming",
    explanation:
      "scamming a member out of 400 euros, and after doing so deleted all webhooks, forum rules and mm intros.",
    proofs: [{ url: "https://imgur.com/a/YNAA3V1", label: "Proof" }],
  },
  {
    username: "itsmanji",
    id: "1334851083444551682",
    category: "Alt Account",
    explanation:
      "alt of 1334517942402027654",
    proofs: [{ url: "https://imgur.com/a/Goq1wRi", label: "Proof" }],
  },
  {
    username: "flopiv",
    id: "786888881558519818",
    category: "Alt Account",
    explanation:
      "alt of 1114623178329837668",
    proofs: [{ url: "https://imgur.com/a/rXfPDnp", label: "Proof" }],
  },
  {
    username: "agentksh",
    id: "262174560873480192",
    category: "Alt Account",
    explanation:
      "alt of 589569074967609364",
    proofs: [{ url: "https://imgur.com/a/onCScHU", label: "Proof" }],
  },
  {
    username: "jffy123huhu",
    id: "1250172439397269574",
    category: "Alt Account",
    explanation:
      "alt of 490799903237210112",
    proofs: [{ url: "https://imgur.com/a/hs7XOjx", label: "Proof" }],
  },
  {
    username: "user334734738535",
    id: "1330178052004511879 // 1419458106227949710",
    category: "Alt Account",
    explanation:
      "alt of cecedoll / ban evading",
    proofs: [{ url: "https://imgur.com/a/IU2NKRL", label: "Proof" }],
  },
  {
    username: "ezyxia",
    id: "884181764719935538",
    category: "Art / UGC Theft",
    explanation:
      "failing to provide designs to a customer who paid & never received their designs + ghosting the ticket when added to it",
    proofs: [{ url: "https://imgur.com/a/4oqtZ4J", label: "Proof" }],
  },
  {
    username: "gczf",
    id: "805197303631314994",
    category: "Scamming",
    explanation:
      "scamming member(s) out of rhubarbs + reported in ksf",
    proofs: [{ url: "https://imgur.com/a/5GyFNDe", label: "Proof" }],
  },
  {
    username: "pantherupnow",
    id: "543447825745313800 - main: 1168339370810552342",
    category: "Alt Account",
    explanation:
      "alt of scammer previously posted in scammers for scamming multiple members out of adopt me pets. your main id is: 1168339370810552342",
    proofs: [{ url: "https://imgur.com/a/i38Z2lp", label: "Proof" }],
  },
  {
    username: "1repful",
    id: "1292623859354308660",
    category: "Art / UGC Theft",
    explanation:
      "was supposed to pay for ugc group, instead took the group and refused to give the group back to member",
    proofs: [{ url: "https://imgur.com/a/Ua7OVc7", label: "Proof" }],
  },
  {
    username: "nurseimsyck",
    id: "1368491005669675039",
    category: "Art / UGC Theft",
    explanation:
      "Ghosted and left the community after commissioner paid for designs",
    proofs: [{ url: "https://imgur.com/a/s2uUPWd", label: "Proof" }],
  },
  {
    username: "itsiebunnie",
    id: "1054056726980206652",
    category: "Other",
    explanation:
      "putting someone’s work through ai and uploading it as a necklace and providing it",
    proofs: [{ url: "https://imgur.com/a/XVGUIWo", label: "Proof" }],
  },
  {
    username: "inarching",
    id: "1340123984473231411",
    category: "Scamming",
    explanation:
      "blocking a member after receiving money / payment from them + doxxing",
    proofs: [{ url: "https://imgur.com/a/NbDdPdj", label: "Proof" }],
  },
  {
    username: "36s3",
    id: "1127673510911824073",
    category: "Alt Account",
    explanation:
      "alt of scammer - scammed member out of 30k rhubarbs for ugc.",
    proofs: [{ url: "https://imgur.com/a/mArq8kK", label: "Proof" }],
  },
  {
    username: "93074",
    id: "589569074967609364",
    category: "Scamming",
    explanation:
      "scamming members out of dol hairs for rhububs",
    proofs: [{ url: "https://imgur.com/a/GLJ1BcZ", label: "Proof" }],
  },
  {
    username: "r9na.",
    id: "1195755196756795505",
    category: "Scamming",
    explanation:
      "logged into another members account - transferred the users bladeball items + rhubarbs to their personal account **and** failed to provide another user with their rhubarb despite their side of the deal being complete",
    proofs: [{ url: "https://imgur.com/a/K1uniPz", label: "Proof" }],
  },
  {
    username: "incolent",
    id: "1196959406181589104",
    category: "Art / UGC Theft",
    explanation:
      "ugc scamming",
    proofs: [{ url: "https://imgur.com/a/SiGZYHv", label: "Proof" }],
  },
  {
    username: "stake.com & donotdisturblol",
    id: "584101554374836224 & 253030209417117697",
    category: "Account Theft",
    explanation:
      "Rolled back group & refused to refund or give the group back",
    proofs: [{ url: "https://imgur.com/a/joUHnEI", label: "Proof" }],
  },
  {
    username: "sryj",
    id: "714835633645813801",
    category: "Scamming",
    explanation:
      "scamming a member out their community, and providing it afterwards.",
    proofs: [{ url: "https://imgur.com/a/CEwqlm4", label: "Proof" }],
  },
  {
    username: "lovetales // alt: lovetale",
    id: "957062683730006027 alt is 1282871544808345644",
    category: "Scamming",
    explanation:
      "previously banned for running a scam community and failing to pay out customers after various of months",
    proofs: [{ url: "https://imgur.com/a/O7T1SpG", label: "Proof" }],
  },
  {
    username: "dolltale",
    id: "1229994315363778630",
    category: "Scamming",
    explanation:
      "scamming member out of 7.5k rhubarb + ghosting ticket",
    proofs: [{ url: "https://imgur.com/a/UlZjhoS", label: "Proof" }],
  },
  {
    username: "itky",
    id: "1286324848821534753",
    category: "Scamming",
    explanation:
      "scamming out of 750k robux",
    proofs: [{ url: "https://imgur.com/a/YEIWJ9D", label: "Proof" }],
  },
  {
    username: "trulycured",
    id: "1190160495727083590",
    category: "Scamming",
    explanation:
      "blocked a member after receiving item without paying + left when confronted",
    proofs: [{ url: "https://imgur.com/a/QrjymIH", label: "Proof" }],
  },
  {
    username: "bunny031848",
    id: "913181585099079681",
    category: "Art / UGC Theft",
    explanation:
      "stealing clothing + an alt of 1237190842792280126",
    proofs: [{ url: "https://imgur.com/a/zYJndJZ", label: "Proof" }],
  },
  {
    username: "middlemened",
    id: "694610266045808780",
    category: "Scamming",
    explanation:
      "scamming members out of rhubarb + leaving the community to avoid confrontation",
    proofs: [{ url: "https://imgur.com/a/Ac9Nm89", label: "Proof" }],
  },
  {
    username: "0kzy",
    id: "1287111668618362882",
    category: "Account Theft",
    explanation:
      "s3lling account, then reverting and ghosting",
    proofs: [{ url: "https://imgur.com/a/ijuwbmp", label: "Proof" }],
  },
  {
    username: "rjkq",
    id: "1165949826400264192",
    category: "Scamming",
    explanation:
      "blocked the member after receiving rhubarbs first + leaving community when added to ticket to avoid confrontation",
    proofs: [{ url: "https://imgur.com/a/2N8jNAW", label: "Proof" }],
  },
  {
    username: "undetectedp & p9uiz",
    id: "1174008180418813973 & 594152435346571266",
    category: "Art / UGC Theft",
    explanation:
      "Joined on their alt account (undetectedp) to provide stolen clothing",
    proofs: [{ url: "https://imgur.com/a/3ZekqEv", label: "Proof" }],
  },
  {
    username: "lush._",
    id: "1203741062263209984",
    category: "Other",
    explanation:
      "attempting to provide a group to people you don’t even own",
    proofs: [{ url: "https://imgur.com/a/7k9oISx", label: "Proof" }],
  },
  {
    username: "lp432x",
    id: "828926090743250955",
    category: "Scamming",
    explanation:
      "sending gore + saying slurs + scamming",
    proofs: [{ url: "https://imgur.com/a/RLWIsYL", label: "Proof" }],
  },
  {
    username: "bididou",
    id: "770391062123642901",
    category: "Scamming",
    explanation:
      "attempting to scam multiple members with a false message",
    proofs: [{ url: "https://imgur.com/a/ZDSvYMM", label: "Proof" }],
  },
  {
    username: "comely.",
    id: "606891603231244290",
    category: "Art / UGC Theft",
    explanation:
      "uploaded and published ugc into own group instead of group they were supposed to upload in, left community to avoid confrontation",
    proofs: [{ url: "https://imgur.com/a/Z5SwIUs", label: "Proof" }],
  },
  {
    username: "yuzi0164 // jiaoli73",
    id: "1413561348234678374 //1276184553588916316 - main is : 1276184553588916316",
    category: "Other",
    explanation:
      "main is reported in ksf",
    proofs: [{ url: "https://imgur.com/a/VuHTmpg", label: "Proof" }],
  },
  {
    username: "._no00",
    id: "1054366652529123328",
    category: "Scamming",
    explanation:
      "scamming a member out of 250$ by giving them 4/6 hairs promised, the 4 of the hairs that were received were broken and had extremely high tris and merging issues. Once added to the ticket left the community.",
    proofs: [{ url: "https://imgur.com/a/Q40LZfu", label: "Proof" }],
  },
  {
    username: "kittiekafe",
    id: "965580421012291585",
    category: "Scamming",
    explanation:
      "scamming a member out of rhubarb for USDOLLHAIRS and having over two weeks to refund or provide the rhubarb and once asked to show proof that the rhubarbs was pending in her community started ignoring the ticket.",
    proofs: [{ url: "https://imgur.com/a/hWqkl0c", label: "Proof" }],
  },
  {
    username: "kivitie",
    id: "1342730170955730984",
    category: "Other",
    explanation:
      "ban evading, ur main is 1402306876338737292",
    proofs: [{ url: "https://imgur.com/a/yXY469p", label: "Proof" }],
  },
  {
    username: "dropurfunds",
    id: "1004383995359932489",
    category: "Scamming",
    explanation:
      "scamming members out of rhubarbs",
    proofs: [{ url: "https://imgur.com/a/VMzA67p", label: "Proof" }],
  },
  {
    username: "tewiie",
    id: "461579557623824416",
    category: "Scamming",
    explanation:
      "scammed user out of 20k rhubarbs, ghosted ticket",
    proofs: [{ url: "https://imgur.com/a/cPWRf9s", label: "Proof" }],
  },
  {
    username: "blessedlikeholywater",
    id: "1200638326852563035",
    category: "Art / UGC Theft",
    explanation:
      "scamming member (me lol) into making 2 graphic designs, then using the one that he 'didint like' for free + not adding credits",
    proofs: [{ url: "https://imgur.com/a/FiYveXn", label: "Proof" }],
  },
  {
    username: "freshtomb",
    id: "739964109688406159",
    category: "Scamming",
    explanation:
      "scamming out of 11k doll hairs",
    proofs: [{ url: "https://imgur.com/a/ewHfrDn", label: "Proof" }],
  },
  {
    username: "wispvilla",
    id: "1265536703569854514",
    category: "Scamming",
    explanation:
      "scamming member out of 2k rohbubs + leaving community midway confrontation",
    proofs: [{ url: "https://imgur.com/a/z6GSkHR", label: "Proof" }],
  },
  {
    username: "whosaccountisthislol",
    id: "834110993394565130",
    category: "Art / UGC Theft",
    explanation:
      "providing a group to a member with a stolen emotes",
    proofs: [{ url: "https://imgur.com/a/ziasOGz", label: "Proof" }],
  },
  {
    username: "hejaeswife4life",
    id: "1280366683558776863",
    category: "Account Theft",
    explanation:
      "reverting an account back & blocking member when asked about acc being reverted + left the community when confronted",
    proofs: [{ url: "https://imgur.com/a/OD5msNh", label: "Proof" }],
  },
  {
    username: "humanhoney",
    id: "1082034788514414725",
    category: "Scamming",
    explanation:
      "scamming",
    proofs: [{ url: "https://imgur.com/a/KE1wRmu", label: "Proof" }],
  },
  {
    username: "lovezstar",
    id: "1297649195905318953",
    category: "Scamming",
    explanation:
      "scamming a member out of 150$ after agreeing to do half half for geotn.",
    proofs: [{ url: "https://imgur.com/a/Ev3PwZy", label: "Proof" }],
  },
  {
    username: "Cededoll",
    id: "1402306876338737292",
    category: "Scamming",
    explanation:
      "scammed 2 members then left community after taking payment. group promo + rhubarbs",
    proofs: [{ url: "https://imgur.com/a/pGmAexk", label: "Proof" }],
  },
  {
    username: "janafrrr_1",
    id: "727771263556124743",
    category: "Scamming",
    explanation:
      "fucking loser Bye scammed a sshf cus they \"lost the money for it on a gambling site\" then LEFT THE COMMUNITY #logofftwin #embarrassing",
    proofs: [{ url: "https://imgur.com/a/M0DO3mA", label: "Proof" }],
  },
  {
    username: "yc4_",
    id: "370725853014786059",
    category: "Scamming",
    explanation:
      "scamming + blocking & deleting stock community",
    proofs: [{ url: "https://imgur.com/a/IEWigKk", label: "Proof" }],
  },
  {
    username: "2korta",
    id: "1243905584961683524",
    category: "Scamming",
    explanation:
      "sent fake mm community & scammed member out of 500k rhubarbs.",
    proofs: [{ url: "https://imgur.com/a/xXXR2Uh", label: "Proof" }],
  },
  {
    username: "capueet",
    id: "1347108505621889045",
    category: "Art / UGC Theft",
    explanation:
      "attempting to provide a clothing group with stolen clothing + left this community when confronted.",
    proofs: [{ url: "https://imgur.com/a/9bPZHqD", label: "Proof" }],
  },
  {
    username: "dsrspect",
    id: "1224566170750025779",
    category: "Art / UGC Theft",
    explanation:
      "scammed a member by not sending fixed ugc files then blocked",
    proofs: [{ url: "https://imgur.com/a/ZMPoH0Q", label: "Proof" }],
  },
  {
    username: "km.2007",
    id: "1397961352571654144",
    category: "Scamming",
    explanation:
      "scamming member out of 65k rhubarbs",
    proofs: [{ url: "https://imgur.com/a/aARmX49", label: "Proof" }],
  },
  {
    username: "hikipup",
    id: "467892080170106901",
    category: "Scamming",
    explanation:
      "scamming someone out of usdollhairs + blocking them after payment was sent",
    proofs: [{ url: "https://imgur.com/a/JmYoWEl", label: "Proof" }],
  },
  {
    username: ".okkx.",
    id: "1393174888231207056",
    category: "Scamming",
    explanation:
      "providing a script with no permission to provide + not giving credits for it + failing to show \"modified version\" when asked multiple times + leaving the community after being confronted in ticket",
    proofs: [{ url: "https://imgur.com/a/RcGTBgv", label: "Proof" }],
  },
  {
    username: "heyhiterrorhere",
    id: "1067522295528177774",
    category: "Other",
    explanation:
      "giving provider the wrong items after they paid for specific items + lying about it to them + leaving the community to avoid confrontation.",
    proofs: [{ url: "https://imgur.com/a/Iq1USMj", label: "Proof" }],
  },
  {
    username: ".zaevion",
    id: "1283021076405682239",
    category: "Scamming",
    explanation:
      "sending fake screenshots of robubhs in an attempt to scam member",
    proofs: [{ url: "https://imgur.com/a/ZsXmAXX", label: "Proof" }],
  },
  {
    username: "capyes / dwmigr",
    id: "1161836171345793065 - alt of 1214384574222569565",
    category: "Other",
    explanation:
      "banned for providing avatars that were posted for free",
    proofs: [{ url: "https://imgur.com/a/vKpqTLA", label: "Proof 1" }, { url: "https://imgur.com/a/IB5Etzi", label: "Proof 2" }],
  },
  {
    username: "xrkvs",
    id: "1103456668370608189",
    category: "Alt Account",
    explanation:
      "alt of **caesuia,** scamming a member out of a commission by not saying they would use free assets and not refunding the member + racist remarks at the bottom of the imgur",
    proofs: [{ url: "https://imgur.com/a/06emG1x", label: "Proof" }],
  },
  {
    username: "cuffting",
    id: "655853826674262018",
    category: "Art / UGC Theft",
    explanation:
      "reselling stolen ugc to over 2+ people + ban evading",
    proofs: [{ url: "https://imgur.com/a/fekSXUH", label: "Proof" }],
  },
  {
    username: "bunnydiarys - main is; petdiarys",
    id: "1396417165187354684 - main is; 1312245212042760257",
    category: "Scamming",
    explanation:
      "reported in ksf for scamming + your main acc id: 1312245212042760257",
    proofs: [{ url: "https://imgur.com/a/I7EWm0K", label: "Proof" }],
  },
  {
    username: "cwuteoni",
    id: "1059626282482143263",
    category: "Other",
    explanation:
      "rolling back an acc after someone provided for it & trying to provide it within this community",
    proofs: [{ url: "https://imgur.com/a/ccI2Wcc", label: "Proof" }],
  },
  {
    username: "dfwx1",
    id: "367841423652814858",
    category: "Scamming",
    explanation:
      "failing to respond to ticket within 24hrs, and exit-scamming members out of 600+ usdollhairs.",
    proofs: [{ url: "https://imgur.com/a/U1L3QIN", label: "Proof" }],
  },
  {
    username: "alluwres",
    id: "1161803807894806658",
    category: "Scamming",
    explanation:
      "failure to fulfill a refund after customer was waiting + failing to provide any updates after asked multiple times.",
    proofs: [{ url: "https://imgur.com/a/cMWZSvz", label: "Proof" }],
  },
  {
    username: "luvqblossom",
    id: "1254441633701695550",
    category: "Scamming",
    explanation:
      "scamming a member out of payment by sending the wrong files + leaving ticket when confronted",
    proofs: [{ url: "https://imgur.com/a/FMDHIpf", label: "Proof" }],
  },
  {
    username: "merakisouls",
    id: "1195830866799231110",
    category: "Scamming",
    explanation:
      "failing to respond to ticket within 24hrs, was dming people about providing rhubarbs while ghosting ticket + scamming a member out of 17 euros",
    proofs: [{ url: "https://imgur.com/a/LO9Z0UU", label: "Proof" }],
  },
  {
    username: "pencilthin",
    id: "1107904052114767922",
    category: "Art / UGC Theft",
    explanation:
      "involvement in ugc scams + rolling back limiteds after people purchased them + providing rhubarbs from ugc scams",
    proofs: [{ url: "https://imgur.com/a/gm11rvF", label: "Proof" }],
  },
  {
    username: "19x27",
    id: "1136324356692246619",
    category: "Other",
    explanation:
      "marked in ksf ❤️",
    proofs: [{ url: "https://imgur.com/a/k0i994c", label: "Proof" }],
  },
  {
    username: "yanchi_0",
    id: "1272415064305172532",
    category: "Art / UGC Theft",
    explanation:
      "tracing faces from the roblox catalog",
    proofs: [{ url: "https://imgur.com/a/7UbUo8P", label: "Proof" }],
  },
  {
    username: "bricinnabun",
    id: "1208186435740500030",
    category: "Art / UGC Theft",
    explanation:
      "banned in the last community + owns a group with stolen clothes + steals meshes",
    proofs: [{ url: "https://imgur.com/a/BSpz2Q5", label: "Proof" }],
  },
  {
    username: "pupiise",
    id: "1367250104733536387",
    category: "Art / UGC Theft",
    explanation:
      "revoked a lifetime pass for ugc emotes + didn’t refund member + ai on emotes",
    proofs: [{ url: "https://imgur.com/a/050YpXN", label: "Proof" }],
  },
  {
    username: "flopevi.",
    id: "1114623178329837668",
    category: "Art / UGC Theft",
    explanation:
      "providing stolen meshes",
    proofs: [{ url: "https://imgur.com/a/zVuvjTF", label: "Proof" }],
  },
  {
    username: "paitexd.",
    id: "1399596669967929456",
    category: "Art / UGC Theft",
    explanation:
      "trying to provide an ai slop machine for ugc",
    proofs: [{ url: "https://imgur.com/a/c2a0UGi", label: "Proof" }],
  },
  {
    username: "flashsake3333",
    id: "877344570285903873",
    category: "Scamming",
    explanation:
      "attempting to scamm members",
    proofs: [{ url: "https://imgur.com/a/vtp7Mfd", label: "Proof" }],
  },
  {
    username: "ilmbfsmmm",
    id: "1397162392705564693",
    category: "Art / UGC Theft",
    explanation:
      "potentially stolen hairbase, unable to provide proof of making hair when asked",
    proofs: [{ url: "https://imgur.com/a/SRVsxVX", label: "Proof" }],
  },
  {
    username: "cuteslipknotgirl",
    id: "1212064293395243109",
    category: "Art / UGC Theft",
    explanation:
      "reselling a group with stolen clothing",
    proofs: [{ url: "https://imgur.com/a/PJhQuu8", label: "Proof" }],
  },
  {
    username: "braxden.rk",
    id: "1296034893024985133",
    category: "Other",
    explanation:
      "was banned in previous community, His alts user id is 1296033935855325196",
    proofs: [{ url: "https://imgur.com/a/CycCLTa", label: "Proof" }],
  },
  {
    username: "zrxzrzrxz",
    id: "1074423477123174451 / 1218344228250456108",
    category: "Art / UGC Theft",
    explanation:
      "providing stolen art hair clips + ban evading. alt acc is 1218344228250456108",
    proofs: [{ url: "https://imgur.com/a/vmWNo8A", label: "Proof" }],
  },
  {
    username: "gfb7",
    id: "839998620404547604",
    category: "Art / UGC Theft",
    explanation:
      "failed to pay for ugc after being provided with the files",
    proofs: [{ url: "https://imgur.com/a/xy7raWX", label: "Proof" }],
  },
  {
    username: "pinkbunnygf",
    id: "1006994200711155743",
    category: "Other",
    explanation:
      "not paying after their community layout and setup was complete",
    proofs: [{ url: "https://imgur.com/a/nrpfVJM", label: "Proof" }],
  },
  {
    username: "benjy1336",
    id: "544525809252302868",
    category: "Scamming",
    explanation:
      "scammed member of 800 for sshf",
    proofs: [{ url: "https://imgur.com/a/yXfetiQ", label: "Proof" }],
  },
  {
    username: "vcbuni",
    id: "1295250187719151667",
    category: "Scamming",
    explanation:
      "scamming members + ban evading (main is 1378210678967500853)",
    proofs: [{ url: "https://imgur.com/a/WAERD4O", label: "Proof" }],
  },
  {
    username: "phoenicopteridaea",
    id: "1355145671161810948",
    category: "Scamming",
    explanation:
      "scammed member out of limited",
    proofs: [{ url: "https://imgur.com/a/zajEYNt", label: "Proof" }],
  },
  {
    username: "heartsicknotes",
    id: "1322685509239046179",
    category: "Art / UGC Theft",
    explanation:
      "owns a group with stolen clothes & ghosted ticket when requested to takedown stolen clothing",
    proofs: [{ url: "https://imgur.com/a/zpBDJ2v", label: "Proof" }],
  },
  {
    username: "sykiua",
    id: "1377725067261247530",
    category: "Scamming",
    explanation:
      "MM2 for a group. Person then transferred the group. Mm2 person blocked after",
    proofs: [{ url: "https://imgur.com/a/nx2SwWA", label: "Proof" }],
  },
  {
    username: "wavbusted",
    id: "831533778425610260",
    category: "Scamming",
    explanation:
      "scammed out of a game using fake mm n resold it to others after",
    proofs: [{ url: "https://imgur.com/a/ybLdtwb", label: "Proof" }],
  },
  {
    username: "caesuia (**NOT** maesuia)",
    id: "1395502049134772405",
    category: "Other",
    explanation:
      "slur usage, asking for a r3f-und after saving all a5sets in an a5set pack she provided mm2 for, using premades on every bed without changing the premades up making her bye-ers dmcaable",
    proofs: [{ url: "https://imgur.com/a/CAkjGoL", label: "Proof" }],
  },
  {
    username: "deleted_user_209efd859790",
    id: "1361445932801065040",
    category: "Scamming",
    explanation:
      "ghosting n blocking a member after a refund was promised",
    proofs: [{ url: "https://imgur.com/a/nvMB6uZ", label: "Proof" }],
  },
  {
    username: "w9ved",
    id: "543907184321363978",
    category: "Other",
    explanation:
      "reported in ksf",
    proofs: [{ url: "https://imgur.com/a/kfniDlf", label: "Proof" }],
  },
  {
    username: "zpba",
    id: "198181088319766538",
    category: "Scamming",
    explanation:
      "scamming member out of money & leaving to avoid confrontation",
    proofs: [{ url: "https://imgur.com/a/ULVzofG", label: "Proof" }],
  },
  {
    username: "al44na.",
    id: "1355816046652559390",
    category: "Art / UGC Theft",
    explanation:
      "admitting to tracing/stealing clothing & shows in speed paint",
    proofs: [{ url: "https://imgur.com/a/gLtH1Ar", label: "Proof" }],
  },
  {
    username: "npsmsmsmsmsms",
    id: "1378210678967500853",
    category: "Scamming",
    explanation:
      "scamming and leaving the community after",
    proofs: [{ url: "https://imgur.com/a/jKZZhks", label: "Proof" }],
  },
  {
    username: "earthling34",
    id: "1316285669126963320",
    category: "Other",
    explanation:
      "attempting to lead members into a reported mm community / community is reported in ksf",
    proofs: [{ url: "https://imgur.com/a/TyYQsFD", label: "Proof" }],
  },
  {
    username: "gsgsdsdgsgsdgsgsdgs",
    id: "1335760357763055741",
    category: "Account Theft",
    explanation:
      "reverted pp transactions after recieving items multiple times thru gns",
    proofs: [{ url: "https://imgur.com/a/HTvC38Q", label: "Proof" }],
  },
  {
    username: "Usably",
    id: "1298404280889249875",
    category: "Scamming",
    explanation:
      "alt acc of main is 1379085722744651777 + reported in KSF + involved with a fake icyella community.",
    proofs: [{ url: "https://imgur.com/a/SjTTlRa", label: "Proof" }],
  },
  {
    username: "lockislocking",
    id: "1319976314526109698",
    category: "Art / UGC Theft",
    explanation:
      "attempting to scam by providing stolen emotes + leaving the community/blocking user when confronted",
    proofs: [{ url: "https://imgur.com/a/HnmMCPY", label: "Proof" }],
  },
  {
    username: "x8z6",
    id: "1009927582034169877",
    category: "Scamming",
    explanation:
      "blocking users after receiving funds and not fulfilling their part of the deal",
    proofs: [{ url: "https://imgur.com/a/ARIjPZl", label: "Proof" }],
  },
  {
    username: "walkinghearts",
    id: "1114365957683560470",
    category: "Art / UGC Theft",
    explanation:
      "providing emotes to multiple people without stating & refusing to refund. After being confronted, left community after being added to ticket",
    proofs: [{ url: "https://imgur.com/a/GG6VHl1", label: "Proof" }],
  },
  {
    username: "jaenifer",
    id: "672184013619855390",
    category: "Scamming",
    explanation:
      "refusing to refund after not beginning a comm for almost an entire year + ghosted member",
    proofs: [{ url: "https://imgur.com/a/tNUqhJF", label: "Proof" }],
  },
  {
    username: "brivon_rylox",
    id: "1334517942402027654",
    category: "Art / UGC Theft",
    explanation:
      "reselling stolen models",
    proofs: [{ url: "https://imgur.com/a/rxHmKfD", label: "Proof" }],
  },
  {
    username: "deleted_user_7ece246f535c",
    id: "83641577039265795",
    category: "Scamming",
    explanation:
      "Scamming items + deleting the account after the deal was done",
    proofs: [{ url: "https://imgur.com/a/hlKqAOv", label: "Proof" }],
  },
  {
    username: "curedhearts",
    id: "1285095671422255140",
    category: "Scamming",
    explanation:
      "Blocking after payment was sent + left the community when confronted / ghosted the ticket",
    proofs: [{ url: "https://imgur.com/a/k1zCUpK", label: "Proof" }],
  },
  {
    username: "yaku_luke",
    id: "1276648171333746689",
    category: "Scamming",
    explanation:
      "Blocking user after they sent payment",
    proofs: [{ url: "https://imgur.com/a/zIr60sV", label: "Proof" }],
  },
  {
    username: "myealf , strawsid , loveee.",
    id: "1273622465956024371 , 1126817628082667583 , 1114403602543431751",
    category: "Scamming",
    explanation:
      "all are alts of scammer (bunnihss) + previously blacklisted in KSF",
    proofs: [{ url: "https://imgur.com/a/Sf8VH81", label: "Proof" }],
  },
  {
    username: "hiheadache",
    id: "889181650993414145",
    category: "Art / UGC Theft",
    explanation:
      "Providing a stolen base (bow & necklace) putting the provider on DMCA risk.",
    proofs: [{ url: "https://imgur.com/a/b4XU35c", label: "Proof" }],
  },
  {
    username: "gbkm",
    id: "920069417424003122",
    category: "Scamming",
    explanation:
      "Scamming out limiteds + account. Left community after doing so.",
    proofs: [{ url: "https://imgur.com/a/tfZ5s9L", label: "Proof" }],
  },
  {
    username: "xoaful",
    id: "1338769451537010772",
    category: "Art / UGC Theft",
    explanation:
      "stealing clothing n left community once confronted",
    proofs: [{ url: "https://imgur.com/a/aKGkeP2", label: "Proof" }],
  },
  {
    username: "xurc1st",
    id: "1058622160094105672",
    category: "Scamming",
    explanation:
      "ghosted a user after purchasing a promo + ghosted 2 different users after users loaned the scammer money",
    proofs: [{ url: "https://imgur.com/a/Wts20Pp", label: "Proof 1" }, { url: "https://imgur.com/a/dpuelHD", label: "Proof 2" }, { url: "https://imgur.com/a/FHCpMB2", label: "Proof 3" }],
  },
  {
    username: "Lostallwords",
    id: "1190317958313029705",
    category: "Scamming",
    explanation:
      "Attempted to provide rhubarbs . Upon receiving them, they blocked the provider to avoid payment.",
    proofs: [{ url: "https://imgur.com/a/hf7XU4L", label: "Proof" }],
  },
  {
    username: "owchiiii",
    id: "1291141597697937423",
    category: "Art / UGC Theft",
    explanation:
      "reselling ugc w/o perms n scamming a user out of $80",
    proofs: [{ url: "https://imgur.com/a/JwwTIgY", label: "Proof 1" }, { url: "https://imgur.com/a/n2ImGma", label: "Proof 2" }],
  },
  {
    username: "vessury.",
    id: "1340342265146769459",
    category: "Scamming",
    explanation:
      "scamming out of rhubarbs + blocked member + left server",
    proofs: [{ url: "https://imgur.com/a/CW5eav3", label: "Proof" }],
  },
  {
    username: "myreow",
    id: "1159059563136430150",
    category: "Art / UGC Theft",
    explanation:
      "reselling free models from sketchfab",
    proofs: [{ url: "https://imgur.com/a/NnjXRtV", label: "Proof" }],
  },
  {
    username: "haihiihai",
    id: "1058250742827323402",
    category: "Scamming",
    explanation:
      "not completing their end of the trade after the other person has",
    proofs: [{ url: "https://imgur.com/a/CDlwaHg", label: "Proof" }],
  },
  {
    username: "helloleni",
    id: "1104418012234264646",
    category: "Scamming",
    explanation:
      "Blocking users after receiving payment",
    proofs: [{ url: "https://imgur.com/a/KrRDi9f", label: "Proof 1" }, { url: "https://imgur.com/a/JLPkshk", label: "Proof 2" }],
  },
  {
    username: "unsplashed",
    id: "975152098389925928",
    category: "Scamming",
    explanation:
      "Scammed & left server afterwards",
    proofs: [{ url: "https://imgur.com/a/qGYWwiw", label: "Proof" }],
  },
  {
    username: "ewlixz",
    id: "1339677062058741760",
    category: "Art / UGC Theft",
    explanation:
      "Tracing others work and selling it. Then proceeded to leave the server once confronted.",
    proofs: [{ url: "https://imgur.com/a/aWBPJ63", label: "Proof" }],
  },
  {
    username: "cryingonhisgrave",
    id: "949193257945018378",
    category: "Scamming",
    explanation:
      "marked as a scammer in ksf",
    proofs: [{ url: "https://imgur.com/a/DxL7VcB", label: "Proof" }],
  },
  {
    username: "cryptoworks , y5zo",
    id: "1333968382084649073, 323240822424469504",
    category: "Art / UGC Theft",
    explanation:
      "stealing a 4 million member group & extorting and doxxing a members family",
    proofs: [{ url: "https://docs.google.com/document/d/1-RKOf-QqVXPI_sbRX0rg-NN2it3aJTeZ-vPErZhbifE/edit?usp=drivesdk", label: "Proof" }],
  },
  {
    username: "richcat88",
    id: "1219159516147613776",
    category: "Other",
    explanation:
      "admitting to selling poisoned lims",
    proofs: [{ url: "https://imgur.com/a/RN9hcJL", label: "Proof" }],
  },
  {
    username: "walkinsorrow",
    id: "1198315688398422119",
    category: "Scamming",
    explanation:
      "Scammimg member out of USD then blocking & leaving server",
    proofs: [{ url: "https://imgur.com/a/0aKXsCF", label: "Proof" }],
  },
  {
    username: "tightenedknotss",
    id: "490799903237210112",
    category: "Other",
    explanation:
      "reported in ksf, not giving group after the buyer paid",
    proofs: [{ url: "https://imgur.com/a/wzDSj0s", label: "Proof" }],
  },
  {
    username: "ykwp",
    id: "214580911973466113",
    category: "Scamming",
    explanation:
      "scamming members",
    proofs: [{ url: "https://imgur.com/a/HFNMI9y", label: "Proof" }],
  },
  {
    username: "imfullofapathy",
    id: "1216135329036243096",
    category: "Art / UGC Theft",
    explanation:
      "scamming members out of ugc + refusing to pay",
    proofs: [{ url: "https://imgur.com/a/pHAyEwD", label: "Proof" }],
  },
];
