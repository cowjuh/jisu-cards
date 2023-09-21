import imgRG011 from "@/images/product-transparent/RG011_Hero_100.png";
import imgRG010 from "@/images/product-transparent/RG010_Hero.png";
import imgRG001 from "@/images/product-transparent/RG001_Hero.png";
import imgRG005 from "@/images/product-transparent/DSC00233.jpg";
import imgNR002 from "@/images/product-transparent/NR002_Hero_edited.png";
import imgNR005 from "@/images/product-transparent/NR005_Hero.png";
import imgNR003 from "@/images/product-transparent/NR003_Hero.png";
import imgER011 from "@/images/product-transparent/ER011_D_MAIN.png";
import imgER007 from "@/images/product-transparent/ER007_D_MAIN (1).png";
import imgER014 from "@/images/product-transparent/ER014_D_MAIN.png";
import imgER013 from "@/images/product-transparent/ER013_D_MAIN_2.png";
import imgBR005 from "@/images/product-transparent/BR005 - Hero- chain.png";
import { StaticImageData } from "next/image";

export type Product = {
  name: string;
  sku: string;
  materials: string;
  price: string;
  type: ProductTypeEnum;
  image: StaticImageData;
  description: string;
  additionalDetails: string;
};

export enum ProductTypeEnum {
  EARRINGS = "earrings",
  RINGS = "rings",
  NECKLACES = "necklaces",
  BRACELETS = "bracelets",
}

const ADDITIONAL_DETAILS = `Custom made - To keep our jewelry intricate yet lightweight & comfortable, our designs are delicate (e.g., details of <1mm protrusion).\nGiven this, each piece of jewelry is created with a new mold of its own.\n\nCustom finishing - Each piece is polished by hand; no two pieces are the same.`;

export const PRODUCTS: Product[] = [
  {
    name: "mutual affection",
    sku: "RG011",
    materials: "925 sterling silver.\nMade in New York.",
    price: "340",
    type: ProductTypeEnum.RINGS,
    description:
      "What happened before, when the doors were closed?” \n\nFive pairs of silver doors lie slightly ajar, revealing pairs of black horizontal bars within.",
    additionalDetails: ADDITIONAL_DETAILS,
    image: imgRG011,
  },
  {
    name: "mutually beneficial deception",
    sku: "RG010",
    materials: "925 sterling silver.\nMade in New York.",
    price: "340",
    type: ProductTypeEnum.RINGS,
    description:
      "What secrets do the black bars hold?\n\nFive pairs of silver doors languidly close, to conceal a pair of black horizontal bars within.",
    additionalDetails: ADDITIONAL_DETAILS,
    image: imgRG010,
  },
  {
    name: "cherish the transition",
    sku: "RG001",
    materials: "925 sterling silver.\nMade in New York.",
    price: "340",
    type: ProductTypeEnum.RINGS,
    description:
      "A long-awaited coronation.\n\nFive august dagger-crosses* unfurl their wings. Each cross is flanked by an assembly of curved bars. Below rests a circle that wreathes through the bottom tip of each cross.\n\n*A cross that resembles a dagger in outline and sharpness.",
    additionalDetails: ADDITIONAL_DETAILS,
    image: imgRG001,
  },
  {
    name: "which? regression or transcendence",
    sku: "RG005",
    materials: "925 sterling silver.\nCarat total weight .01 (VS clarity).\nMade in New York.",
    price: "360",
    type: ProductTypeEnum.RINGS,
    description:
      "In which direction does the cross-crescent choose to tilt? Do you regress, or do you rise to transcend?\n\nTwo bands support a tilted cross-crescent formation. A diamond lies in wait, in the middle.",
    additionalDetails: ADDITIONAL_DETAILS,
    image: imgRG005,
  },
  {
    name: "carven mirror",
    sku: "NR002",
    materials: "925 sterling silver. \nCarat total weight .07 (VS clarity).\nMade in New York",
    price: "1300",
    type: ProductTypeEnum.NECKLACES,
    description: `Some see a crescent moon and cross. Some see a sickle and hammer. Together, does that take us to the Mirror of Production? (cr: Baudrillard)`,
    additionalDetails: ADDITIONAL_DETAILS,
    image: imgNR002,
  },
  {
    name: "unassailable mystery",
    sku: "NR005",
    materials: "925 sterling silver.\nMade in New York.",
    price: "500",
    type: ProductTypeEnum.NECKLACES,
    description: `All the selves.`,
    additionalDetails: ADDITIONAL_DETAILS,
    image: imgNR005,
  },
  {
    name: "veiled chimes",
    sku: "NR003",
    materials: "925 sterling silver. \nCarat total weight .14 (VS clarity).\nMade in New York",
    price: "700",
    type: ProductTypeEnum.NECKLACES,
    description: `The clock chimes left, right, left, left, and then right.  Time: “deceiver on a metaphysical level” (quote cr: Cioran)`,
    additionalDetails: ADDITIONAL_DETAILS,
    image: imgNR003,
  },
  {
    name: "fragrant purification, extended",
    sku: "ER011",
    materials: "925 sterling silver. \n14k white gold.\nCarat total weight .09 (VS clarity).\nMade in New York",
    price: "520",
    type: ProductTypeEnum.EARRINGS,
    description: "Imagine a censer, swinging slowly, rousing a purple-grey scent around you.",
    additionalDetails: ADDITIONAL_DETAILS,
    image: imgER011,
  },
  {
    name: "tethered crescent",
    sku: "ER007",
    materials: "925 sterling silver.\n14k white gold. \nCarat total weight .03 (VS clarity).\nMade in New York",
    price: "480",
    type: ProductTypeEnum.EARRINGS,
    description: `"Never alone."`,
    additionalDetails: ADDITIONAL_DETAILS,
    image: imgER007,
  },
  {
    name: "everyday ashes",
    sku: "ER014",
    materials: "925 sterling silver. \n14k white gold.\nCarat total weight .03 (VS clarity).\nMade in New York",
    price: "420",
    type: ProductTypeEnum.EARRINGS,
    description: `Passing ashes of time.`,
    additionalDetails: ADDITIONAL_DETAILS,
    image: imgER014,
  },
  {
    name: "suspended desire",
    sku: "ER013",
    materials: "925 sterling silver. \n14k white gold.\nCarat total weight .03 (VS clarity).\nMade in New York",
    price: "440",
    type: ProductTypeEnum.EARRINGS,
    description: `“A shiver knits her flesh to mine.” (cr: Arthur Symons)`,
    additionalDetails: ADDITIONAL_DETAILS,
    image: imgER013,
  },
  {
    name: "shifting sutures",
    sku: "BR005",
    materials: "925 sterling silver.\nMade in New York.",
    price: "720",
    type: ProductTypeEnum.BRACELETS,
    description: `“Along these corridors and through these rooms…silent rooms where the sound of footsteps is absorbed by carpets so heavy, so thick, that all sound escapes the ear, as if the very ear of him walks on…” (cr: Last Year at Marienbad, Resnais)\n\nSutures slink across your wrist. One side of the sutures is smooth. The other side is carved in and carpeted with a layer of shadow.`,
    additionalDetails: ADDITIONAL_DETAILS,
    image: imgBR005,
  },
];
