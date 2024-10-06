import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  blocks: [],
};

const writingSlice = createSlice({
  name: 'writing',
  initialState,
  reducers: {
    text(state) {
      state.blocks.push({
        type: 'text',
        order: state.blocks.length + 1,
      });
    },
    headingH1(state) {
      state.blocks.push({
        type: 'h1',
        order: state.blocks.length + 1,
      });
    },
    headingH2(state) {
      state.blocks.push({
        type: 'h2',
        order: state.blocks.length + 1,
      });
    },
    headingH3(state) {
      state.blocks.push({
        type: 'h3',
        order: state.blocks.length + 1,
      });
    },
  },
});

export const { text, headingH1, headingH2, headingH3 } = writingSlice.actions;
export default writingSlice.reducer;
