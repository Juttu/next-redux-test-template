import * as baseService from "./base-service";

export const fetchProductService = async (id: number) => {
  console.log("fetching product by ID");
  return await baseService.search<any>(`/products/${id}`, {});
};

export const fetchAllProductsService = async () => {
  return await baseService.search<any>(`/products`, {});
};
