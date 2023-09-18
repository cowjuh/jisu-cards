export type Product = {
  name: string;
  sku: string;
  materials: string;
  price: string;
  type: string;
  image: string;
  description: string;
  additionalDetails: string;
};

const ADDITIONAL_DETAILS = `Custom made - To keep our jewelry intricate yet lightweight & comfortable, our designs are delicate (e.g., details of <1mm protrusion).\nGiven this, each piece of jewelry is created with a new mold of its own.\n\nCustom finishing - Each piece is polished by hand; no two pieces are the same.`;

export const PRODUCTS: Product[] = [
  {
    name: "mutual affection",
    sku: "RG011",
    materials: "925 sterling silver.\nMade in New York.",
    price: "340",
    type: "rings",
    description:
      "What happened before, when the doors were closed?” \n\nFive pairs of silver doors lie slightly ajar, revealing pairs of black horizontal bars within.",
    additionalDetails: ADDITIONAL_DETAILS,
    image:
      "https://v5.airtableusercontent.com/v1/20/20/1695031200000/qDlBE6hLqlrv04ZuSKSCkg/tJVi_zyw7kCfqN0byNL3wQwX5Xg6zqbadKs3qSmz3_8Fqc2qTlUfsNtpIUzt67Bbcgyp2yLMNkNWGKclxdim35eWxHNAhwTzldh-N0Nx08g/ztQdCAwNuEl6QDMyhkGi0umoqEg5i8LB_c7Hd6LxzZc",
  },
  {
    name: "mutually beneficial deception",
    sku: "RG010",
    materials: "925 sterling silver.\nMade in New York.",
    price: "340",
    type: "rings",
    description:
      "What secrets do the black bars hold?\n\nFive pairs of silver doors languidly close, to conceal a pair of black horizontal bars within.",
    additionalDetails: ADDITIONAL_DETAILS,
    image:
      "https://v5.airtableusercontent.com/v1/20/20/1695031200000/HR-dfIBlbPsV6UrhvxyqqQ/371L2XVzq0Q2SwKew1wpGq3P7Mj_K9M4sCh65MY2HfN5wB8_cIbOBfVEMtlOBZ9_5ukMiiLz7ht8DrtFu96w6jrLpHNH51JXPyJVwEvhRH0/CwYlItPDkiwJ_2xV2SbZjchBdEL4tEnJSVNr0i8nWKI",
  },
  {
    name: "cherish the transition",
    sku: "RG001",
    materials: "925 sterling silver.\nMade in New York.",
    price: "340",
    type: "rings",
    description:
      "A long-awaited coronation.\n\nFive august dagger-crosses* unfurl their wings. Each cross is flanked by an assembly of curved bars. Below rests a circle that wreathes through the bottom tip of each cross.\n\n*A cross that resembles a dagger in outline and sharpness.",
    additionalDetails: ADDITIONAL_DETAILS,
    image:
      "https://v5.airtableusercontent.com/v1/20/20/1695031200000/e8iqW8sFT7EdhqiVA_gHgA/xGEpxmQgwDtKzbstD_WAremnd2vlmpa9HtQbS7PDy3UoES-ionhHVfHR92H1lv2WzSOsRX9DiHwQLoswvUWzxtOZWUXu--rTu5QXlmKCthE/g1dgGuZSLGaXot-MD6RK0tYoD4QPZ3xBhpZ8Ga-kVSw",
  },
  {
    name: "which? regression or transcendence",
    sku: "RG005",
    materials: "925 sterling silver.\nCarat total weight .01 (VS clarity).\nMade in New York.",
    price: "360",
    type: "rings",
    description:
      "In which direction does the cross-crescent choose to tilt? Do you regress, or do you rise to transcend?\n\nTwo bands support a tilted cross-crescent formation. A diamond lies in wait, in the middle.",
    additionalDetails: ADDITIONAL_DETAILS,
    image:
      "https://v5.airtableusercontent.com/v1/20/20/1695031200000/xuwLmlakHIdqDjqW6XLaFQ/srVWBzi_VnIJ24r16vNJMtl4xVn5m-o-tnIVqCDNvy8nTBex7QjH_vzZAoJexUCy-6pAyHhv8RslNksZ5WYZJe9FEy232QFxA18s4--cmPA/IUfCVkNkpRA0hIXAwq8cIV5bkoV5fZ_WDfVEiU5a0_E",
  },
  {
    name: "carven mirror",
    sku: "NR002",
    materials: "925 sterling silver. \nCarat total weight .07 (VS clarity).\nMade in New York",
    price: "1300",
    type: "necklaces",
    description: `Some see a crescent moon and cross. Some see a sickle and hammer. Together, does that take us to the Mirror of Production? (cr: Baudrillard)`,
    additionalDetails: ADDITIONAL_DETAILS,
    image:
      "https://v5.airtableusercontent.com/v1/20/20/1695031200000/RJWmKJGGqUaG1s7RPxavqg/cyDjL0mrn2VmDm1UGZrP8G2h4pNQ_lwp8rDVwfiRNCq0HDfaHqFw2USFm4Mmbht-4cCPl9XgHsLHjUeZlV4R_MoVyLx4nNwB7m7Xnm3r_Mw/9UphvZK8cBp4t8z3L7hG5S0eTl9eBewY8Y9Hv8H5Lfs",
  },
  {
    name: "unassailable mystery",
    sku: "NR005",
    materials: "925 sterling silver.\nMade in New York.",
    price: "500",
    type: "necklaces",
    description: `1: “Which of those selves is the real me?” 2: “Why, all of them, of course” 3: “What will it take to shield them all?"`,
    additionalDetails: ADDITIONAL_DETAILS,
    image:
      "https://v5.airtableusercontent.com/v1/20/20/1695031200000/GhVDdIcHn9emfQ5TgxKoWw/Y8EeG0xjVAmcN6plkwu4wpYJYNP_BJt8xzA4GKsv6KJ19bG3fM-cndWQgY0LTK5AfyywU-u1IMBsdN8mdty0tH9vLkZoqKcMgNjvTnUfzLI/2Tj3g9KQ4FfBTRRLzIzBw1IRi0V8FC2dKQgDIN1kG6s",
  },
  {
    name: "veiled chimes",
    sku: "NR003",
    materials: "925 sterling silver. \nCarat total weight .14 (VS clarity).\nMade in New York",
    price: "700",
    type: "necklaces",
    description: `The clock chimes left, right, left, left, and then right. How much time has moved? Time, “deceiver on a metaphysical level” (quote cr: Cioran)`,
    additionalDetails: ADDITIONAL_DETAILS,
    image:
      "https://v5.airtableusercontent.com/v1/20/20/1695031200000/Y3M1G7CJgXQGm1YhDgYUWQ/ir0pyQgE7r2m6fO6RZSb1uM0xOh_Mx4wwro0owhCxZ6e8MwqfJPXJlPzCz2kFkI4Htwna-Hz1q_4c-4G4Y3QsEQuUzW0ZEcTPM-AwYjOeBQs/KcPn_1X5xq-uKDE4g7rY5VBLQuS9pUQWBDv6ZUHbRz0",
  },
  {
    name: "fragrant purification, extended",
    sku: "ER011",
    materials: "925 sterling silver. \n14k white gold.\nCarat total weight .09 (VS clarity).\nMade in New York",
    price: "520",
    type: "earrings",
    description: "Imagine a censer, swinging slowly, rousing a purple-grey scent around you.",
    additionalDetails: ADDITIONAL_DETAILS,
    image:
      "https://v5.airtableusercontent.com/v1/20/20/1695031200000/KZk2kW0XZl0r5tCJwW9TWA/0eNUTYs4hfoK6m3a9iGx8zJcvc0Kmlu-5RQkQ6d7C-lNpg5wTm9sJsdR3KgWfOfMufbMjVbc8oXZC6Rg3OQKjF0Y1znj92X9iX1Kbwuc9yQ/BU3H5JGG4iDxwzGeFt0GpB9RrgT5nYDcO5r6J2zzm1M",
  },
  {
    name: "tethered crescent",
    sku: "ER007",
    materials: "925 sterling silver.\n14k white gold. \nCarat total weight .03 (VS clarity).\nMade in New York",
    price: "480",
    type: "earrings",
    description: `“Never will I be alone?” questions the moon. “Never!”`,
    additionalDetails: ADDITIONAL_DETAILS,
    image:
      "https://v5.airtableusercontent.com/v1/20/20/1695031200000/ifX6pnwqNnDQE4ESvoHtLg/H_tJBKbjWh5VbPQFqJTX_QwrjK2G0I1FDSKfcjeNWW5L4aPGdnv-gs9AVhvKmyNZBC374UxHyZkxuykSUatHaf0Hv7OHwsd79E2vHE4ouSk/8YxpA7kGzo2zpxl2jJIcark_gpi2hJGwFvp6m3wMVDs",
  },
  {
    name: "everyday ashes",
    sku: "ER014",
    materials: "925 sterling silver. \n14k white gold.\nCarat total weight .03 (VS clarity).\nMade in New York",
    price: "420",
    type: "earrings",
    description: `the passing ashes of time`,
    additionalDetails: ADDITIONAL_DETAILS,
    image:
      "https://v5.airtableusercontent.com/v1/20/20/1695031200000/TsrreE0vCRDzO-fEiXEQAw/dP64S-udppjol29J5mk4ibmN5DMPQwF4F6o19AA8Tvq91DQUeGd9PF9kVhs0g50db3Q2gKnt1lqx2BkQRRLPKAq5SWnrGK7IZ25FFpvMJdw/WXGVUoPX8QMeFAdkTfI17HW72c7HArWNRNRBRXs-y6I",
  },
  {
    name: "suspended desire",
    sku: "ER013",
    materials: "925 sterling silver. \n14k white gold.\nCarat total weight .03 (VS clarity).\nMade in New York",
    price: "440",
    type: "earrings",
    description: `“A shiver knits her flesh to mine.” (cr: Arthur Symons)`,
    additionalDetails: ADDITIONAL_DETAILS,
    image:
      "https://v5.airtableusercontent.com/v1/20/20/1695031200000/AdkIte2bu6eqkCXh6W4COQ/Q_vrqZcmhaZ4kQgGnwX8eMDZ6D5rf00h8G_D6Ri4Swlaptlbn3IRJUgeDwHrjuNVbLHdjGXHR00k87DsPwsqVLp5ZDxbOCg0DuF3IfHwJs4/qlPclGFAx_rA4B8ZjlYDfQXtkx6vjsnCS1o2FGkxSEY",
  },
  {
    name: "shifting sutures",
    sku: "BR005",
    materials: "925 sterling silver.\nMade in New York.",
    price: "850",
    type: "bracelets",
    description: `“Along these corridors and through these rooms…silent rooms where the sound of footsteps is absorbed by carpets so heavy, so thick, that all sound escapes the ear, as if the very ear of him walks on…” (cr: Last Year at Marienbad, Resnais)\n\nSutures slink across your wrist. One side of the sutures is smooth. The other side is carved in and carpeted with a layer of shadow.`,
    additionalDetails: ADDITIONAL_DETAILS,
    image:
      "https://v5.airtableusercontent.com/v1/20/20/1695031200000/J__Ie1ayaJMZcuy4O03QFg/n4Xb5N9gy_bbH8WLjjHMEu9te4arU3Op1DVFmqu1X9NWwPErQiBrJ_NbN1iJpUm4gL5wZ_YG0nyOhwDSXozOXWPHHp3TRTA5KKj7VFjYYIo/UIk-CIq6WFt2dD1jTduFsFmVFSA0XGN6TdN7sYhqPEw",
  },
];
