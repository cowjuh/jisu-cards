// Transparent Images
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
import imgBR002 from "@/images/product-transparent/BR002_Hero.png";

// Display Discipline Images
import imgDispDiscBR005 from "@/images/product-display-discipline/BR005.png";
import imgDispDiscBR002 from "@/images/product-display-discipline/BR002.png";
import imgDispDiscER007 from "@/images/product-display-discipline/ER007.png";
import imgDispDiscER011 from "@/images/product-display-discipline/ER011.png";
import imgDispDiscER013 from "@/images/product-display-discipline/ER013.png";
import imgDispDiscER014 from "@/images/product-display-discipline/ER014.png";
import imgDispDiscNR002 from "@/images/product-display-discipline/NR002.png";
import imgDispDiscNR003 from "@/images/product-display-discipline/NR003.png";
import imgDispDiscNR005 from "@/images/product-display-discipline/NR005.png";
import imgDispDiscRG001 from "@/images/product-display-discipline/RG001.png";
import imgDispDiscRG010 from "@/images/product-display-discipline/RG010.png";
import imgDispDiscRG011 from "@/images/product-display-discipline/RG011.png";

// Display Freedom Images
import imgDispFreeER007 from "@/images/product-display-freedom/ER007.png";
import imgDispFreeER011 from "@/images/product-display-freedom/ER011.png";
import imgDispFreeER013 from "@/images/product-display-freedom/ER013.png";
import imgDispFreeER014 from "@/images/product-display-freedom/ER014.png";
import imgDispFreeNR002 from "@/images/product-display-freedom/NR002.png";
import imgDispFreeNR003 from "@/images/product-display-freedom/NR003.png";
import imgDispFreeNR005 from "@/images/product-display-freedom/NR005.png";
import imgDispFreeRG001 from "@/images/product-display-freedom/RG001.png";
import imgDispFreeRG010 from "@/images/product-display-freedom/RG010.png";
import imgDispFreeRG011 from "@/images/product-display-freedom/RG011.png";
import imgDispFreeBR005 from "@/images/product-display-freedom/BR005.png";
import imgDispFreeBR002 from "@/images/product-display-freedom/BR002.png";

// Supporting Discipline Images
import imgSupDiscRG001 from "@/images/product-supporting-discipline/RG001 DSC00741.jpeg";
import imgSupDiscRG005 from "@/images/product-supporting-discipline/RG005 DSC00233.jpeg";
import imgSupDiscRG010 from "@/images/product-supporting-discipline/RG010 DSC01146.jpeg";
import imgSupDiscRG011 from "@/images/product-supporting-discipline/RG011 DSC01127.jpg";
import imgSupDiscER001 from "@/images/product-supporting-discipline/ER001 DSC09901.jpeg";
import imgSupDiscER007 from "@/images/product-supporting-discipline/ER007 DSC09455.jpeg";
import imgSupDiscER014 from "@/images/product-supporting-discipline/ER014 DSC00688.jpeg";
import imgSupDiscBR005 from "@/images/product-supporting-discipline/BR005 DSC00355.jpeg";
import imgSupDiscBR002 from "@/images/product-supporting-discipline/BR002 DSC00526.jpeg";

// Supporting Freedom Images
import imgSupFreeRG001 from "@/images/product-supporting-freedom/RG001 DSC09332.jpeg";
import imgSupFreeNR003A from "@/images/product-supporting-freedom/NR003 DSC09523.jpeg";
import imgSupFreeNR003B from "@/images/product-supporting-freedom/NR003 DSC09045 (2).jpeg";
import imgSupFreeNR005 from "@/images/product-supporting-freedom/NR005 DSC09257.jpeg";
import imgSupFreeER007 from "@/images/product-supporting-freedom/ER007 edit2-21.jpeg";
import imgSupFreeER013 from "@/images/product-supporting-freedom/ER013 DSC08974.jpeg";
import imgSupFreeBR002 from "@/images/product-supporting-freedom/BR002 DSC09423.jpeg";

import { StaticImageData } from "next/image";

export type Product = {
  name: string;
  sku: string;
  materials: string;
  price: string;
  type: ProductTypeEnum;
  displayImgDiscipline: StaticImageData;
  displayImgFreedom: StaticImageData;
  supportingDisciplineImgs: StaticImageData[];
  supportingFreedomImgs: StaticImageData[];
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
    description: "What happened before, when the doors were closed?",
    additionalDetails: ADDITIONAL_DETAILS,
    displayImgDiscipline: imgDispDiscRG011,
    displayImgFreedom: imgDispFreeRG011,
    supportingDisciplineImgs: [imgSupDiscRG011],
    supportingFreedomImgs: [],
  },
  {
    name: "mutually beneficial deception",
    sku: "RG010",
    materials: "925 sterling silver.\nMade in New York.",
    price: "340",
    type: ProductTypeEnum.RINGS,
    description: "What secrets do the black bars hold?",
    additionalDetails: ADDITIONAL_DETAILS,
    displayImgDiscipline: imgDispDiscRG010,
    displayImgFreedom: imgDispFreeRG010,
    supportingDisciplineImgs: [imgSupDiscRG010],
    supportingFreedomImgs: [],
  },
  {
    name: "cherish the transition",
    sku: "RG001",
    materials: "925 sterling silver.\nMade in New York.",
    price: "340",
    type: ProductTypeEnum.RINGS,
    description: "A long-awaited coronation.",
    additionalDetails: ADDITIONAL_DETAILS,
    displayImgDiscipline: imgDispDiscRG001,
    displayImgFreedom: imgDispFreeRG001,
    supportingDisciplineImgs: [imgSupDiscRG001],
    supportingFreedomImgs: [imgSupFreeRG001],
  },
  {
    name: "which? regression or transcendence",
    sku: "RG005",
    materials: "925 sterling silver.\nCarat total weight .01 (VS clarity).\nMade in New York.",
    price: "360",
    type: ProductTypeEnum.RINGS,
    description:
      "In which direction does the cross-crescent choose to tilt? Do you regress, or do you rise to transcend?",
    additionalDetails: ADDITIONAL_DETAILS,
    displayImgDiscipline: imgRG005,
    displayImgFreedom: imgRG005,
    supportingDisciplineImgs: [imgSupDiscRG005],
    supportingFreedomImgs: [],
  },
  {
    name: "carven mirror",
    sku: "NR002",
    materials: "925 sterling silver. \nCarat total weight .07 (VS clarity).\nMade in New York",
    price: "1250",
    type: ProductTypeEnum.NECKLACES,
    description: `Some see a crescent moon and cross. Some see a sickle and hammer. Together, does that take us to the Mirror of Production? (cr: Baudrillard)`,
    additionalDetails: ADDITIONAL_DETAILS,
    displayImgDiscipline: imgDispDiscNR002,
    displayImgFreedom: imgDispFreeNR002,
    supportingDisciplineImgs: [],
    supportingFreedomImgs: [],
  },
  {
    name: "unassailable mystery",
    sku: "NR005",
    materials: "925 sterling silver.\nMade in New York.",
    price: "500",
    type: ProductTypeEnum.NECKLACES,
    description: `All the selves.`,
    additionalDetails: ADDITIONAL_DETAILS,
    displayImgDiscipline: imgDispDiscNR005,
    displayImgFreedom: imgDispFreeNR005,
    supportingDisciplineImgs: [],
    supportingFreedomImgs: [imgSupFreeNR005],
  },
  {
    name: "veiled chimes",
    sku: "NR003",
    materials: "925 sterling silver. \nCarat total weight .14 (VS clarity).\nMade in New York",
    price: "700",
    type: ProductTypeEnum.NECKLACES,
    description: `The clock chimes left, right, left, left, and then right.  Time: “deceiver on a metaphysical level” (quote cr: Cioran)`,
    additionalDetails: ADDITIONAL_DETAILS,
    displayImgDiscipline: imgDispDiscNR003,
    displayImgFreedom: imgDispFreeNR003,
    supportingDisciplineImgs: [],
    supportingFreedomImgs: [imgSupFreeNR003A, imgSupFreeNR003B],
  },
  {
    name: "fragrant purification, extended",
    sku: "ER011",
    materials: "925 sterling silver. \n14k white gold.\nCarat total weight .09 (VS clarity).\nMade in New York",
    price: "520",
    type: ProductTypeEnum.EARRINGS,
    description: "Imagine a censer, swinging slowly, rousing a purple-grey scent around you.",
    additionalDetails: ADDITIONAL_DETAILS,
    displayImgDiscipline: imgDispDiscER011,
    displayImgFreedom: imgDispFreeER011,
    supportingFreedomImgs: [],
    supportingDisciplineImgs: [imgSupDiscER001],
  },
  {
    name: "tethered crescent",
    sku: "ER007",
    materials: "925 sterling silver.\n14k white gold. \nCarat total weight .03 (VS clarity).\nMade in New York",
    price: "480",
    type: ProductTypeEnum.EARRINGS,
    description: `"Never alone."`,
    additionalDetails: ADDITIONAL_DETAILS,
    displayImgDiscipline: imgDispDiscER007,
    displayImgFreedom: imgDispFreeER007,
    supportingDisciplineImgs: [imgSupDiscER007],
    supportingFreedomImgs: [imgSupFreeER007],
  },
  {
    name: "everyday ashes",
    sku: "ER014",
    materials: "925 sterling silver. \n14k white gold.\nCarat total weight .03 (VS clarity).\nMade in New York",
    price: "420",
    type: ProductTypeEnum.EARRINGS,
    description: `Passing ashes of time.`,
    additionalDetails: ADDITIONAL_DETAILS,
    displayImgDiscipline: imgDispDiscER014,
    displayImgFreedom: imgDispFreeER014,
    supportingDisciplineImgs: [imgSupDiscER014],
    supportingFreedomImgs: [],
  },
  {
    name: "suspended desire",
    sku: "ER013",
    materials: "925 sterling silver. \n14k white gold.\nCarat total weight .03 (VS clarity).\nMade in New York",
    price: "440",
    type: ProductTypeEnum.EARRINGS,
    description: `“A shiver knits her flesh to mine.” (cr: Arthur Symons)`,
    additionalDetails: ADDITIONAL_DETAILS,
    displayImgDiscipline: imgDispDiscER013,
    displayImgFreedom: imgDispFreeER013,
    supportingDisciplineImgs: [],
    supportingFreedomImgs: [imgSupFreeER013],
  },
  {
    name: "shifting sutures",
    sku: "BR005",
    materials: "925 sterling silver.\nMade in New York.",
    price: "720",
    type: ProductTypeEnum.BRACELETS,
    description: `“Along these corridors and through these rooms…silent rooms where the sound of footsteps is absorbed by carpets so heavy, so thick, that all sound escapes the ear, as if the very ear of him walks on…” (cr: Last Year at Marienbad, Resnais)`,
    additionalDetails: ADDITIONAL_DETAILS,
    displayImgDiscipline: imgDispDiscBR005,
    displayImgFreedom: imgDispFreeBR005,
    supportingDisciplineImgs: [imgSupDiscBR005],
    supportingFreedomImgs: [],
  },
  {
    name: "roots of tears",
    sku: "BR002",
    materials: "925 sterling silver.\nMade in New York.",
    price: "600",
    type: ProductTypeEnum.BRACELETS,
    description: `Slender roots stem from a cross, whose center is framed by eight delicate thorns. Two roots glide from one side of the cross, one root on the other.`,
    additionalDetails: ADDITIONAL_DETAILS,
    displayImgDiscipline: imgDispDiscBR002,
    displayImgFreedom: imgDispFreeBR002,
    supportingDisciplineImgs: [imgSupDiscBR002],
    supportingFreedomImgs: [imgSupFreeBR002],
  },
];
