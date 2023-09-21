import { PRODUCTS, ProductTypeEnum } from "./constants";

export function getFirstProduct(category: ProductTypeEnum) {
  const products = PRODUCTS.filter((product) => product.type === category);
  console.log(products[0]);
  return products[0];
}
