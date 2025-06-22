import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import categoryReducer from './slices/categorySlice'

export const projectStore = configureStore({
  reducer: {
    cart: cartReducer,
    category:categoryReducer
  },
})