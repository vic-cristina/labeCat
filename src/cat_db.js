class Cat {
  constructor(name, breed, weight, age, img, myKittens) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.age = age;
    this.img = img;
    this.myKittens = myKittens;
  }
}

const artemis = new Cat(
  "Artemis",
  "Mixed Russian Blue",
  3.7,
  6,
  "/artemis.png",
  true
);

const galatea = new Cat(
  "Galatea",
  "Mixed Turkish Angora",
  5.2,
  1,
  "/galatea.png",
  true
);

const merlin = new Cat(
  "Merlin",
  "Brazilian Shorthair",
  4.5,
  9,
  "/merlin.png",
  true
);

const morgana = new Cat(
  "Morgana",
  "Brazilian Tabby",
  6.5,
  8,
  "/morgana.png",
  true
);

const weslyn = new Cat(
  "Weslyn",
  "Korat",
  7.1,
  6,
  "https://cdn2.thecatapi.com/images/8k6.jpg"
);
const cloud = new Cat(
  "Cloud",
  "Turkish Angora",
  4,
  4,
  "https://cdn2.thecatapi.com/images/ee9.jpg"
);
const longfang = new Cat(
  "Longfang",
  "Persian",
  5,
  3,
  "https://cdn2.thecatapi.com/images/5h9.jpg"
);
const twinkle = new Cat(
  "Twinkle",
  "Havana",
  4,
  4,
  "https://cdn2.thecatapi.com/images/7ku.jpg"
);
const wombat = new Cat(
  "Wombat",
  "Scottish Fold",
  5,
  3,
  "https://cdn2.thecatapi.com/images/9j6.jpg"
);

const abby = new Cat(
  "Abby",
  "York",
  4,
  2,
  "https://cdn2.thecatapi.com/images/9j5.jpg"
);
const lugs = new Cat(
  "Lugs",
  "Somali",
  7.2,
  9,
  "https://cdn2.thecatapi.com/images/9j4.jpg"
);
const jeanie = new Cat(
  "Jeanie",
  "Scottish Fold",
  5,
  10,
  "https://cdn2.thecatapi.com/images/9j3.jpg"
);
const skitty = new Cat(
  "Skitty",
  "Scottish Fold",
  6,
  7,
  "https://cdn2.thecatapi.com/images/7k4.jpg"
);
const twister = new Cat(
  "Twister",
  "Cyrmic",
  4,
  3,
  "https://cdn2.thecatapi.com/images/5i8.jpg"
);
const sharptooth = new Cat(
  "Sharptooth",
  "Persian",
  5,
  3,
  "https://cdn2.thecatapi.com/images/7k9.jpg"
);
const hooch = new Cat(
  "Hooch",
  "LaPerm",
  4.5,
  6,
  "https://cdn2.thecatapi.com/images/1f9.jpg"
);
const bobbyboucher = new Cat(
  "Bobby Boucher",
  "Burmese",
  4.3,
  2,
  "https://cdn2.thecatapi.com/images/7k0.jpg"
);
const selva = new Cat(
  "Selva",
  "Russian Blue",
  4,
  2,
  "https://cdn2.thecatapi.com/images/8j0.jpg"
);
const glameow = new Cat(
  "Glameow",
  "Bombay",
  3,
  3,
  "https://cdn2.thecatapi.com/images/9l7.jpg"
);
const scratchalot = new Cat(
  "Scratchalot",
  "Himalayan",
  3,
  3,
  "https://cdn2.thecatapi.com/images/9l1.jpg"
);
const kitkat = new Cat(
  "Kitkat",
  "Japanese Bobtail",
  4,
  6,
  "https://cdn2.thecatapi.com/images/9l2.jpg"
);
const koolkat = new Cat(
  "Koolkat",
  "Turkish Angora",
  4.5,
  7,
  "https://cdn2.thecatapi.com/images/9l3.jpg"
);
const booberry = new Cat(
  "Booberry",
  "Somali",
  4.3,
  2,
  "https://cdn2.thecatapi.com/images/9l4.jpg"
);
const chadwick = new Cat(
  "Chadwick",
  "Siberian",
  5.1,
  4,
  "https://cdn2.thecatapi.com/images/9l5.jpg"
);
const moley = new Cat(
  "Moley",
  "Nebelung",
  4.2,
  8,
  "https://cdn2.thecatapi.com/images/9l6.jpg"
);
const roadkill = new Cat(
  "Roadkill",
  "Egyptian Mau",
  5.2,
  2,
  "https://cdn2.thecatapi.com/images/9l8.jpg"
);
const mittens = new Cat(
  "Mittens",
  "Devon Rex",
  4.5,
  2,
  "https://cdn2.thecatapi.com/images/8i9.jpg"
);
const dj = new Cat(
  "DJ",
  "Brazilian Shorthair",
  4,
  6,
  "https://cdn2.thecatapi.com/images/8i1.jpg"
);
const elephant = new Cat(
  "Elephant",
  "Brazilian Shorthair",
  4.5,
  3,
  "https://cdn2.thecatapi.com/images/8i5.jpg"
);
const hobbes = new Cat(
  "Hobbes",
  "Turkish Angora",
  5.2,
  5,
  "https://cdn2.thecatapi.com/images/7i4.jpg"
);
const bast = new Cat(
  "Bast",
  "Chartreux",
  5,
  5,
  "https://cdn2.thecatapi.com/images/6i1.jpg"
);

const athena = new Cat(
  "Athena",
  "Norwegian Forest Cat",
  3.5,
  2,
  "https://cdn2.thecatapi.com/images/6i3.jpg"
);

export const cat_db = [
  artemis,
  galatea,
  merlin,
  morgana,
  weslyn,
  cloud,
  longfang,
  twinkle,
  wombat,
  abby,
  lugs,
  jeanie,
  skitty,
  twister,
  sharptooth,
  hooch,
  bobbyboucher,
  selva,
  glameow,
  scratchalot,
  kitkat,
  koolkat,
  booberry,
  chadwick,
  moley,
  roadkill,
  mittens,
  dj,
  elephant,
  hobbes,
  bast,
  athena,
];
