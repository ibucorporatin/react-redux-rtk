const { fetchUsers } = require("../user/userSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfCakes: 10,
};
const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchUsers.fulfilled,(state)=>{
        state.numOfCakes--;
    })
}
});

module.exports = cakeSlice.reducer;
module.exports.cakeAction = cakeSlice.actions;
