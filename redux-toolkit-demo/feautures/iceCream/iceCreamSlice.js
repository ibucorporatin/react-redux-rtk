const { cakeAction } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

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
extraReducers:(builder)=>{
    builder.addCase(cakeAction.ordered,(state)=>{
        state.iceCream--;
    })
}
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamAction = iceCreamSlice.actions;
