import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RootState {
  name: string;
  age: number;
  email: string;
}

const initialState: RootState = {
  name: "",
  age: 0,
  email: "",
};

export const rootSlice = createSlice({
  name: "rootSlice",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setAge: (state, action: PayloadAction<string>) => {
      state.age = Number(action.payload);
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { setName, setAge, setEmail } = rootSlice.actions;
export default rootSlice.reducer;
