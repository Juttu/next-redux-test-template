import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import exp from "constants";

type InitialState = {
  value: AuthState;
};

type AuthState = {
  isAuth: boolean;
  username: string;
  uid: string;
  isModerator: boolean;
  status: "idle" | "loading" | "succeeded" | "failed";
};

const initialState = {
  value: {
    isAuth: false,
    username: "i.....i",
    uid: "",
    isModerator: false,
    status: "idle",
  } as AuthState,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (state, action: PayloadAction<string>) => {
      state.value.username = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchValue.pending, (state, action) => {
        state.value.status = "loading";
      })
      .addCase(fetchValue.fulfilled, (state, action) => {
        state.value.status = "succeeded";
        state.value.username = action.payload;
      })
      .addCase(fetchValue.rejected, (state, action) => {
        state.value.status = "failed";
      });
  },
});

export const fetchValue = createAsyncThunk("posts/fetchPosts", async (username: string) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  //   throw Error("error")
  return username;
});

export const { logIn, logOut } = auth.actions;
export default auth.reducer;
