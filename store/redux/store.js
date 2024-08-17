import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites";

// 2. create store
export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});
