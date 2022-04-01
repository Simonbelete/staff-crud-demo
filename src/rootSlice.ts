import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Staff } from "types.d";

interface RootState {
  name: string;
  age: number;
  email: string;
  staffs: Staff[];
  loading: boolean;
}

const initialState: RootState = {
  name: "",
  age: 0,
  email: "",
  staffs: [],
  loading: true,
};

export const rootSlice = createSlice({
  name: "rootSlice",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setStaffs: (state, action: PayloadAction<Staff[]>) => {
      state.staffs = action.payload;
    },
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

export const { setName, setAge, setEmail, setStaffs, setLoading } =
  rootSlice.actions;
export default rootSlice.reducer;
