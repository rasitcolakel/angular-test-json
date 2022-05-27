const names = [
  {
    name: "Yagiz",
    lastName: "Kuru",
  },
  {
    name: "Vatan",
    lastName: "Altan",
  },
  {
    name: "Akbay",
    lastName: "Demirel",
  },
  {
    name: "Kai",
    lastName: "Onaral",
  },
  {
    name: "Kudret",
    lastName: "Ocal",
  },
  {
    name: "Olsan",
    lastName: "Elmas",
  },
  {
    name: "Toprak",
    lastName: "Dilmen",
  },
  {
    name: "Osman",
    lastName: "Kiraz",
  },
  {
    name: "Eyup",
    lastName: "Buruk",
  },
  {
    name: "Akcay",
    lastName: "Yagmur",
  },
  {
    name: "Rustu",
    lastName: "Gunaydin",
  },
  {
    name: "Yoldas",
    lastName: "Konca",
  },
  {
    name: "Ceviker",
    lastName: "Gulpinar",
  },
  {
    name: "Baran",
    lastName: "Zaimoglu",
  },
  {
    name: "Gunel",
    lastName: "Gokce",
  },
  {
    name: "Han",
    lastName: "Cimen",
  },
  {
    name: "Gurbuz",
    lastName: "Yasar",
  },
  {
    name: "Tarkan",
    lastName: "Sokullu",
  },
  {
    name: "Yazik",
    lastName: "Izzet",
  },
  {
    name: "Adil",
    lastName: "Boztepe",
  },
  {
    name: "Gurkan",
    lastName: "Calik",
  },
  {
    name: "Musa",
    lastName: "Basar",
  },
  {
    name: "Cihan",
    lastName: "Suleymanoglu",
  },
  {
    name: "Akkurt",
    lastName: "Aydogan",
  },
  {
    name: "Yipar",
    lastName: "Arikan",
  },
  {
    name: "Omur",
    lastName: "Guvenc",
  },
  {
    name: "Tumkor",
    lastName: "Oktem",
  },
  {
    name: "Toydeniz",
    lastName: "Denkel",
  },
  {
    name: "Erim",
    lastName: "Kutay",
  },
  {
    name: "Ozakar",
    lastName: "Onaral",
  },
  {
    name: "Hilmi",
    lastName: "Gundogdu",
  },
  {
    name: "Mehmet Emin",
    lastName: "Asik",
  },
  {
    name: "Cevher",
    lastName: "Berker",
  },
  {
    name: "Erim",
    lastName: "Tuna",
  },
  {
    name: "Deger",
    lastName: "Dursun",
  },
  {
    name: "Ata",
    lastName: "Enver",
  },
  {
    name: "Aykut",
    lastName: "Murat",
  },
  {
    name: "Bulent",
    lastName: "Bucak",
  },
  {
    name: "Naim",
    lastName: "Karagoz",
  },
  {
    name: "Kilic",
    lastName: "Demirtas",
  },
  {
    name: "Arbas",
    lastName: "Erentoz",
  },
  {
    name: "Sumer",
    lastName: "Ozil",
  },
  {
    name: "Turkol",
    lastName: "Bahadir",
  },
  {
    name: "Tigin",
    lastName: "Aktuna",
  },
  {
    name: "Dinc",
    lastName: "Ozcan",
  },
  {
    name: "Saglam",
    lastName: "Bardakci",
  },
  {
    name: "Altay",
    lastName: "Balci",
  },
  {
    name: "Akyon",
    lastName: "Ozer",
  },
  {
    name: "Oktay",
    lastName: "Koray",
  },
  {
    name: "Aysoy",
    lastName: "Akinci",
  },
  {
    name: "Altinhan",
    lastName: "Izzet",
  },
  {
    name: "Ercelik",
    lastName: "Dagdelen",
  },
  {
    name: "Acatay",
    lastName: "Terim",
  },
  {
    name: "Onder",
    lastName: "Soysal",
  },
  {
    name: "Atmaca",
    lastName: "Demirci",
  },
  {
    name: "Ozhan",
    lastName: "Samet",
  },
  {
    name: "Ucan",
    lastName: "Tansel",
  },
  {
    name: "Erdin",
    lastName: "Erdinc",
  },
  {
    name: "Serhan",
    lastName: "Gumus",
  },
  {
    name: "Turkmen",
    lastName: "Bayram",
  },
  {
    name: "Goktug",
    lastName: "Aydinlar",
  },
  {
    name: "Beri",
    lastName: "Yavuz ",
  },
  {
    name: "Toran",
    lastName: "Hasim",
  },
  {
    name: "Alan",
    lastName: "Budak",
  },
  {
    name: "Ege",
    lastName: "Ersoy",
  },
  {
    name: "Ozbek",
    lastName: "Tansu",
  },
  {
    name: "Arsal",
    lastName: "Yavuz ",
  },
  {
    name: "Zobu",
    lastName: "Sabanci",
  },
  {
    name: "Un",
    lastName: "Atay",
  },
  {
    name: "Okan",
    lastName: "Yildizoglu",
  },
  {
    name: "Sakin",
    lastName: "Poyraz",
  },
  {
    name: "Caliskan",
    lastName: "Albayrak",
  },
  {
    name: "Aysu",
    lastName: "Sporel",
  },
  {
    name: "Alkis",
    lastName: "Karaduman",
  },
  {
    name: "Karaman",
    lastName: "Sen",
  },
  {
    name: "Asim",
    lastName: "Gungor",
  },
  {
    name: "Yahya",
    lastName: "Ekici",
  },
  {
    name: "Tay",
    lastName: "Ozkok",
  },
  {
    name: "Ocak",
    lastName: "Agcay",
  },
  {
    name: "Soylu",
    lastName: "Korkut",
  },
  {
    name: "Gocer",
    lastName: "Fahri",
  },
  {
    name: "Emek",
    lastName: "Karan",
  },
  {
    name: "Necip",
    lastName: "Avni",
  },
  {
    name: "Cuneyt",
    lastName: "Toner",
  },
  {
    name: "Tanman",
    lastName: "Durak",
  },
  {
    name: "Erdener",
    lastName: "Dereli",
  },
  {
    name: "Haldun",
    lastName: "Kose",
  },
  {
    name: "Zeki",
    lastName: "Hayrettin",
  },
  {
    name: "Tekozer",
    lastName: "Gokmen",
  },
  {
    name: "Sansal",
    lastName: "Dal",
  },
  {
    name: "Altaner",
    lastName: "Guler",
  },
  {
    name: "Ufuk",
    lastName: "Erkoc",
  },
  {
    name: "Velit",
    lastName: "Dalman",
  },
  {
    name: "Tamkut",
    lastName: "Turgut",
  },
  {
    name: "Guclu",
    lastName: "Arikan",
  },
  {
    name: "Mut",
    lastName: "Akcatepe",
  },
  {
    name: "Gunduzhan",
    lastName: "Dervis",
  },
  {
    name: "Ataergin",
    lastName: "Safak",
  },
  {
    name: "Tansel",
    lastName: "Necmi",
  },
  {
    name: "Basbug",
    lastName: "Unal",
  },
];

module.exports = {
  getRandomName: function () {
    return (
      names[Math.floor(Math.random() * names.length)].name +
      " " +
      names[Math.floor(Math.random() * names.length)].lastName
    );
  },
};
