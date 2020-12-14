//kelimelerin ilk harfini büyütme fonksiyonu
let cumle = "eren önder";

function kelimebuyutme(str) {
  let parcalar = str.split(" ");
  for (let i = 0; i < parcalar.length; i++) {
    let j = parcalar[i].charAt(0).toUpperCase();
    parcalar[i] = j + parcalar[i].substr(1).toLowerCase();
  }
  return parcalar.join(" ");
}
console.log(kelimebuyutme(cumle));

/*0-100 arası sayı listesi*/
let sayi = "";

for (i = 1; i <= 100; i++) {
  sayi += i;

  if (i % 10 === 0) {
    console.log(sayi);
    sayi = "";
  } else {
    sayi += ",";
  }
}

/*asal sayı listesi*/
let asal = [];
let asaldegil = false;
for (i = 2; i <= 100; i++) {
  asaldegil = false;
  for (j = 2; j <= i / 2; j++) {
    if (i % j == 0) {
      asaldegil = true;
      break;
    }
  }
  if (asaldegil === false) {
    asal.push(i);
  }
}
console.log(asal);

//güvenli şifre

let rakam = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let sembol = ["!", "”", "#", "$", "%", "&", "‘", "(", ")", "*", "+", ","];

let kharf = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "s",
  "t",
  "ü",
  "v",
  "y",
  "z",
];

let bharf = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "R",
  "S",
  "T",
  "U",
  "V",
  "Y",
  "Z",
];

let a = 2;
let b = 5;
let dongu = function (a, b) {
  return Math.floor(Math.random() * (b - a)) + a;
};

/*let dongu = (Math.floor(Math.random() * 3);
dongu=dongu+2;               şeklindede fonksiyon oluşturulabilir.  */
sifre = [];
for (i = 1; i <= 50; i++) {
  let s = "";
  for (j = 1; j <= dongu(a, b); j++) {
    let nummer = rakam[Math.floor(Math.random() * rakam.length)];
    let isaret = sembol[Math.floor(Math.random() * sembol.length)];
    let kücükharf = kharf[Math.floor(Math.random() * kharf.length)];
    let büyükharf = bharf[Math.floor(Math.random() * bharf.length)];
    s += nummer + isaret + kücükharf + büyükharf;
  }
  sifre.push(s);
}
console.log(sifre);

//yıldız ödevi
for (i = 1; i <= 6; i++) {
  console.log("*".repeat(i));
  // console.log("\n"); araya daha fazla boşluk koymak için.
}
