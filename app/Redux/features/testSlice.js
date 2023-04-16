const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  value: 0,
};

const testSlice = createSlice({
  name: "testSlice",
  initialState,
  reducers: {
    increaseVal: (state) => {
      console.log("s");
      state.value++;
    },
    decreaseVal: (state) => {
      state.value--;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increaseVal, decreaseVal, reset } = testSlice.actions;

export default testSlice.reducer;
