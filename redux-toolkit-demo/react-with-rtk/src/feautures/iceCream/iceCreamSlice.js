import { createSlice } from "@reduxjs/toolkit";
// import { ordered as cakeOrdered } from "../../../../feautures/cake/cakeSlice";
import {ordered as cakeOrdered} from "../cake/cakeSlice"
const initialState = {
  iceCream: 10,
};

const iceCreamSlice = createSlice({
  name: "iceCream", //is required
  initialState,
  reducers: {
    //you should define in reducers
    ordered: (state) => {
      state.iceCream--;
    },
    restocked: (state, action) => {
      state.iceCream += action.payload;
    },
  },
  //   extraReducers: {
  //     ["cake/ordered"]: (state) => {
  //       state.iceCream--;
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.iceCream--;
    });
  },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
