import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  value: ProductState;
};

type ProductState = {
  productTitle: string;
  status: "idle" | "loading" | "succeeded" | "failed";
};

const initialState: InitialState = {
  value: {
    productTitle: "fetch product title",
    status: "idle",
  },
};

export const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state, action) => {
        state.value.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.value.status = "succeeded";
        state.value.productTitle = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.value.status = "failed";
      });
  },
});

export const fetchProduct = createAsyncThunk("products/fetchProduct", async (id: number) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  return data["title"];
});

export default productSlice.reducer;
