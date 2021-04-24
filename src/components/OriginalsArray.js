import winend from "../images/salePics/winters-end3829175-framed-prints.webp";
import sfwren from "../images/salePics/sunset-fairy-wren-bird-framed-prints.webp";
import atree from "../images/salePics/acaia-tree-framed-prints.webp";
import rrp from "../images/salePics/red-rumped-parrot-at-sunset-framed-prints.webp";
import cbflwr from "../images/salePics/cannonball-flowers-framed-prints.webp";
import bpeli from "../images/salePics/brown-pelican4805939-framed-prints.webp";
import sunp from "../images/salePics/sun-parakeet-mimosa-flowers-framed-prints.webp";
import ntflt from "../images/salePics/night-flight4477694-framed-prints.webp";
// import atree from "../images/salePics/acaia-tree-framed-prints.webp";
// import winend from "../images/salePics/winters-end3829175-framed-prints.webp";
// import sfwren from "../images/salePics/sunset-fairy-wren-bird-framed-prints.webp";
// import atree from "../images/salePics/acaia-tree-framed-prints.webp";
// import winend from "../images/salePics/winters-end3829175-framed-prints.webp";
// import sfwren from "../images/salePics/sunset-fairy-wren-bird-framed-prints.webp";
// import atree from "../images/salePics/acaia-tree-framed-prints.webp";

const OriginalsArray = [
  {
    title: "Winter's End",
    id: 1,
    category:
      "winter end cold snow abstract lonely grey gray flower pink spring",
    medium: "acrylic",
    baseImage: winend,
    size: "small 9x12 in.",
    description: "Acrylic paint on canvas sheet.",
    price: "$60 - 9x12 in.",
    etsy:
      "https://www.etsy.com/listing/992896520/winters-end-acrylic-painting?ref=shop_home_active_1&frs=1",
  },
  {
    title: "Splendid Fairy Wren",
    id: 2,
    category: "birds sky sunset splendid tree wren",
    medium: "acrylic",
    baseImage: sfwren,
    size: "small 9x12 in.",
    description: "Acrylic paint on canvas sheet.",
    price: "$60 - 9x12 in.",
    etsy:
      "https://www.etsy.com/listing/993109978/splendid-fairy-wren-acrylic-painting?ref=shop_home_active_7&frs=1",
  },
  {
    title: "Red-rumped Parakeet",
    id: 3,
    category: "birds sunset sky tree leaves red parakeet",
    medium: "acrylic",
    baseImage: rrp,
    size: "small 9x12 in.",
    description: "Acrylic paint on canvas sheet.",
    price: "$60 - 9x12 in.",
    etsy:
      "https://www.etsy.com/listing/1007144707/red-rumped-parakeet-acrylic-painting?ref=shop_home_active_1&frs=1",
  },
  {
    title: "Cannon Ball Flowers",
    id: 4,
    category: "flowers cannon tree sky",
    medium: "acrylic",
    baseImage: cbflwr,
    size: "small 9x12 in.",
    description: "Acrylic paint on canvas sheet.",
    price: "$60 - 9x12 in.",
    etsy:
      "https://www.etsy.com/listing/1007087849/cannon-ball-flowers-acrylic-painting?ref=shop_home_active_3&frs=1",
  },
  {
    title: "Acaia Tree",
    id: 5,
    category: "landscape tree acaia africa",
    medium: "acrylic",
    baseImage: atree,
    size: "small 9x12 in.",
    description: "Acrylic paint on canvas sheet.",
    price: "$60 - 9x12 in.",
    etsy:
      "https://www.etsy.com/listing/993122050/acaia-tree-acrylic-painting?ref=shop_home_active_6&frs=1",
  },
  {
    title: "Brown Pelican",
    id: 6,
    category: "brown birds pelican ocean sea palm trees beach",
    medium: "acrylic",
    baseImage: bpeli,
    size: "small 9x12 in.",
    description: "Acrylic paint on canvas sheet.",
    price: "$60 - 9x12 in.",
    etsy:
      "https://www.etsy.com/listing/1007085391/brown-pelican-acrylic-painting?ref=shop_home_active_6&frs=1",
  },
  {
    title: "Sun Parakeet",
    id: 7,
    category: "birds flowers mimosa tree sun parakeet",
    medium: "acrylic",
    baseImage: sunp,
    size: "small 9x12 in.",
    description: "Acrylic paint on canvas sheet.",
    price: "$60 - 9x12 in.",
    etsy:
      "https://www.etsy.com/listing/993195028/sun-parakeet-acrylic-painting?ref=shop_home_active_1&frs=1",
  },
  {
    title: "Night Flight",
    id: 8,
    category: "night moon owls flight trees",
    medium: "acrylic",
    baseImage: ntflt,
    size: "small 9x12 in.",
    description: "Acrylic paint on canvas sheet.",
    price: "$60 - 9x12 in.",
    etsy:
      "https://www.etsy.com/listing/993206864/night-flight-owls-acrylic-painting?ref=shop_home_active_1&frs=1",
  },
  //   {
  //     title: "",
  //     id: 9,
  //     category: "",
  //     medium: "acrylic",
  //     baseImage: null,
  //     size: "small 9x12 in.",
  //     description: "Acrylic paint on canvas sheet.",
  //     price: "$60 - on Etsy",
  //     etsy: "",
  //   },
  //   {
  //     title: "",
  //     id: 10,
  //     category: "",
  //     medium: "acrylic",
  //     baseImage: null,
  //     size: "small 9x12 in.",
  //     description: "Acrylic paint on canvas sheet.",
  //     price: "$60 - on Etsy",
  //     etsy: "",
  //   },
  //   {
  //     title: "",
  //     id: 11,
  //     category: "birds sunset sky tree leaves red parakeet",
  //     medium: "acrylic",
  //     baseImage: null,
  //     size: "small 9x12 in.",
  //     description: "Acrylic paint on canvas sheet.",
  //     price: "$60 - on Etsy",
  //     etsy: "",
  //   },
  //   {
  //     title: "",
  //     id: 12,
  //     category: "",
  //     medium: "acrylic",
  //     baseImage: null,
  //     size: "small 9x12 in.",
  //     description: "Acrylic paint on canvas sheet.",
  //     price: "$60 - on Etsy",
  //     etsy: "",
  //   },
  //   {
  //     title: "",
  //     id: 13,
  //     category: "",
  //     medium: "acrylic",
  //     baseImage: null,
  //     size: "small 9x12 in.",
  //     description: "Acrylic paint on canvas sheet.",
  //     price: "$60 - on Etsy",
  //     etsy: "",
  //   },
  //   {
  //     title: "",
  //     id: 14,
  //     category: "birds sky sunset splendid tree wren",
  //     medium: "acrylic",
  //     baseImage: null,
  //     size: "small 9x12 in.",
  //     description: "Acrylic paint on canvas sheet.",
  //     price: "$60 - on Etsy",
  //     etsy: "",
  //   },
  //   {
  //     title: "",
  //     id: 15,
  //     category: "",
  //     medium: "acrylic",
  //     baseImage: null,
  //     size: "small 9x12 in.",
  //     description: "Acrylic paint on canvas sheet.",
  //     price: "$60 - on Etsy",
  //     etsy: "",
  //   },
  //   {
  //     title: "",
  //     id: 16,
  //     category: "",
  //     medium: "acrylic",
  //     baseImage: null,
  //     size: "small 9x12 in.",
  //     description: "Acrylic paint on canvas sheet.",
  //     price: "$60 - on Etsy",
  //     etsy: "",
  //   },
  //   {
  //     title: "",
  //     id: 17,
  //     category: "",
  //     medium: "acrylic",
  //     baseImage: null,
  //     size: "small 9x12 in.",
  //     description: "Acrylic paint on canvas sheet.",
  //     price: "$60 - on Etsy",
  //     etsy: "",
  //   },
];

export default OriginalsArray;
