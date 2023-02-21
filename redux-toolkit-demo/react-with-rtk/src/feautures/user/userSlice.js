import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loding: false,
  users: [],
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUser", (d,{getState}) => {
  // console.log(getState())
  return axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    // console.log(res.data)
    return res.data

    // return res.data.map((user) => {
    //   return user.id;
    // });
    // return res.data
  });

  
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (buider) => {
    buider.addCase(fetchUsers.pending, (state) => {
      state.loding = true;
    });
    buider.addCase(fetchUsers.fulfilled, (state, action) => {
      (state.loding = false), (state.users = action.payload);
      state.error = "";
    });
    buider.addCase(fetchUsers.rejected, (state, action) => {
      (state.loding = false), (state.users = []);
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
