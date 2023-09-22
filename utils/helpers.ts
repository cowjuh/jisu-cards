import { PRODUCTS, ProductTypeEnum } from "./constants";

export function getFirstProduct(category: ProductTypeEnum) {
  const products = PRODUCTS.filter((product) => product.type === category);
  return products[0];
}
