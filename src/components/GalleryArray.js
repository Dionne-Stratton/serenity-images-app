import icon from "../images/originalsIcon.png";

const GalleryArray = [
  {
    title: "Splendid Fairy Wren",
    id: 1,
    category: "birds sky sunset splendid wren",
    medium: "canvas sheet acrylic",
    baseImage:
      "https://user-interface-ii-5fl9n5s96.vercel.app/images/art/splnd%20wren.jpg",
    size: "small 9 x 12",
    description: "Acrylic paint on 9x12 inch canvas sheet.",
    price: 50,
    page:
      "https://user-interface-ii-5fl9n5s96.vercel.app/images/art/splnd%20wren.jpg",
  },
  {
    title: "Sun Parakeet",
    id: 2,
    category: "birds flowers sun parakeet",
    medium: "canvas sheet acrylic",
    baseImage:
      "https://user-interface-ii-5fl9n5s96.vercel.app/images/art/sun%20parakeet.jpg",
    size: "small 9 x 12",
    description: "Acrylic paint on 9x12 inch canvas sheet.",
    price: 50,
  },
  {
    title: "Red-rumped Parakeet",
    id: 3,
    category: "birds sunset sky red parakeet",
    medium: "canvas sheet acrylic",
    baseImage:
      "https://user-interface-ii-5fl9n5s96.vercel.app/images/art/redrumpd.jpg",
    size: "small 9 x 12",
    description: "Acrylic paint on 9x12 inch canvas sheet.",
    price: 50,
  },
  {
    title: "Cannon Ball Flowers",
    id: 4,
    category: "flowers cannon",
    medium: "canvas sheet acrylic",
    baseImage:
      "https://user-interface-ii-5fl9n5s96.vercel.app/images/art/cannonballflwrs.jpg",
    size: "small 9 x 12",
    description: "Acrylic paint on 9x12 inch canvas sheet.",
    price: 50,
  },
  {
    title: "Acaia Tree",
    id: 5,
    category: "landscape tree acaia",
    medium: "canvas sheet acrylic",
    baseImage:
      "https://user-interface-ii-5fl9n5s96.vercel.app/images/art/acaia%20tree.jpg",
    sizes: "small 9 x 12",
    description: "Acrylic paint on 9x12 inch canvas sheet.",
    price: 50,
  },
  {
    title: "Celestial Gate",
    id: 7,
    category: "fantasy landscape sunset night ocean celestial gates tori",
    medium: "canvas wrap acrylic",
    baseImage:
      "https://user-interface-ii-5fl9n5s96.vercel.app/images/art/celestial%20gate.jpg",
    size: "small 11 x 14",
    description: "Acrylic paint on 11x14 inch wrapped canvas.",
    price: 70,
  },
  {
    title: "Cherry Blossoms",
    id: 9,
    category: "flowers sky flower cherry blossom sakura",
    medium: "canvas wrap acrylic",
    baseImage:
      "https://user-interface-ii-5fl9n5s96.vercel.app/images/art/cherry%20blossoms.jpg",
    size: "small 9 x 12",
    description: "Acrylic paint on 9x12 inch wrapped canvas.",
    price: 50,
  },
  {
    title: "Palm Tree Beach",
    id: 8,
    category: "ocean beach seascape palmtree palm tree",
    medium: "canvas wrap acrylic",
    baseImage:
      "https://user-interface-ii-5fl9n5s96.vercel.app/images/art/beach.jpg",
    size: "medium 16 x 20",
    description: "Acrylic paint on 16x20 inch wrapped canvas.",
    price: 200,
  },
  {
    title: "Fairy Gate",
    id: 6,
    category: "fantasy landscape night sunset tree fairy gate",
    medium: "canvas sheet acrylic",
    baseImage:
      "https://user-interface-ii-5fl9n5s96.vercel.app/images/art/fairy%20gate.jpg",
    size: "small 9 x 12",
    description: "Acrylic paint on 9x12 inch canvas paper.",
    price: 50,
  },
  {
    title: "Blue Macaw",
    id: 10,
    category: "birds night macaw bird blue",
    medium: "canvas sheet acrylic",
    baseImage:
      "https://user-interface-ii-5fl9n5s96.vercel.app/images/art/blue%20macaw.jpg",
    size: "small 9 x 12",
    description: "Acrylic paint on 9x12 inch canvas paper.",
    price: 50,
  },
  {
    title: "Owl on Cherry Tree",
    id: 11,
    category: "birds flowers night owl cherry tree blossoms",
    medium: "canvas sheet acrylic",
    baseImage:
      "https://user-interface-ii-5fl9n5s96.vercel.app/images/art/owl.jpg",
    size: "small 9 x 12",
    description: "Acrylic paint on 9x12 inch canvas paper.",
    price: 50,
  },
  {
    title: "Luna Moth",
    id: 12,
    category: "moths night luna",
    medium: "canvas sheet acrylic",
    baseImage:
      "https://user-interface-ii-5fl9n5s96.vercel.app/images/art/luna%20moth.jpg",
    size: "small 9 x 12",
    description: "Acrylic paint on 9x12 inch canvas paper.",
    price: 50,
  },
  {
    title: "King Fisher",
    id: 13,
    category: "birds flowers sunset king fisher",
    medium: "canvas wrap acrylic",
    baseImage:
      "https://user-interface-ii-5fl9n5s96.vercel.app/images/art/king%20fisher.jpg",
    size: "medium 11 x 14 ",
    description: "Acrylic paint on 11x14 inch wrapped canvas.",
    price: 70,
  },
  {
    title: "Joy Comes in the Morning",
    id: 14,
    category: "sunset butterfly monarch joy morning butterfly butterflies",
    medium: "canvas wrap acrylic",
    baseImage:
      "https://user-interface-ii-5fl9n5s96.vercel.app/images/art/joy.jpg",
    size: "medium 16 x 20",
    description: "Acrylic paint on 16x20 inch wrapped canvas.",
    price: 200,
  },
  {
    title: "Magnolias",
    id: 15,
    category: "flowers magnolia flower",
    medium: "canvas sheet acrylic",
    baseImage:
      "https://user-interface-ii-5fl9n5s96.vercel.app/images/art/magnolias.jpg",
    size: "small 9 x 12",
    description: "Acrylic paint on 9x12 inch canvas sheet.",
    price: 21,
  },
  // {
  //   title: "Icon",
  //   id: 15,
  //   category: "flowers magnolia flower",
  //   medium: "canvas sheet acrylic",
  //   baseImage: { icon },
  //   description: "Acrylic paint on 9x12 inch canvas sheet.",
  //   price: 21,
  // },
];

export default GalleryArray;
