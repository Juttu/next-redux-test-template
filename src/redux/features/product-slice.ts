import { fetchAllProductsService, fetchProductService } from "@/services/product-service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  value: ProductState;
  currentProduct: CompleteProductDetails | null;
};
type CompleteProductDetails = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
};

type ProductDetails = {
  id: number;
  title: string;
  description: string;
  price: number;
};

type ProductState = {
  productDetails: ProductDetails[];
  status: "idle" | "loading" | "succeeded" | "failed";
};

const initialState: InitialState = {
  value: {
    productDetails: [],
    status: "idle",
  },
  currentProduct: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state, action) => {
        // state.value.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        // state.value.status = "succeeded";
        state.currentProduct = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        // state.value.status = "failed";
      });
    builder
      .addCase(fetchAllProducts.pending, (state, action) => {
        state.value.status = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.value.status = "succeeded";
        state.value.productDetails = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.value.status = "failed";
      });
  },
});

export const fetchProduct = createAsyncThunk("products/fetchProduct", async (id: number) => {
  console.log("fetching product by ID");
  const res: CompleteProductDetails = (await fetchProductService(id)) as unknown as CompleteProductDetails;
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return res;
});

export const fetchAllProducts = createAsyncThunk("products/fetchAllProducts", async () => {
  console.log("fetching all the products");
  const res: CompleteProductDetails[] = await fetchAllProductsService();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return res;
});

export default productSlice.reducer;
