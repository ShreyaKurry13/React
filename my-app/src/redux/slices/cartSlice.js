import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartData: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   addInCart: (state,action) => {
        console.log('addInCart called');
        console.log(action.payload)
        state.cartData.push(action.payload);
   },
   removeFromCart: (state,action) => {
        console.log('removeFromCart called');
        console.log(action.payload);
        state.cartData = state.cartData.filter( obj=> obj.id != action.payload )
   }
  },
})

export const { addInCart,removeFromCart } = cartSlice.actions

export default cartSlice.reducer