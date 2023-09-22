import { configureStore } from '@reduxjs/toolkit';

import studentReducer from './features/student/studentSlice';

export default configureStore({
    reducer: {
      student : studentReducer
  }
});