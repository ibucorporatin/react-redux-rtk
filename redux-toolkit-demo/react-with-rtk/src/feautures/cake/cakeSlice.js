import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../user/userSlice";

const initialState = {
  numOfCakes: 10,
};
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
  //   extraReducers:(builder)=>{
  //     builder.addCase(fetchUsers.fulfilled,(state)=>{
  //         state.numOfCakes--;
  //     })
  // }
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
