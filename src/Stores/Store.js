import { configureStore } from '@reduxjs/toolkit';
import Login from './Reducers/Login/Login';

export default configureStore({
  reducer: {
      Auth:Login
  }
})