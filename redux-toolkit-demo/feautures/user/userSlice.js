const { default: axios } = require("axios");

const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const initialState = {
  loding: false,
  users: [],
  error: "",
};
const fetchUsers = createAsyncThunk("user/fetchUser", () => {
  return axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    return res.data.map((user) => {
      return user.id;
    });
  })
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

module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;
