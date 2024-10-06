import { configureStore } from '@reduxjs/toolkit';

import writingSlice from './features/write/writingSlice';

const store = configureStore({
  reducer: {
    writing: writingSlice,
  },
});

export default store;
