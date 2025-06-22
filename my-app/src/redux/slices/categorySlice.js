import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryName: 'Shoes',
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
   categoryDataTransferAction: (state , action) => {
        console.log('categoryDataTransferAction called');
        console.log(action);
        state.categoryName = action.payload;
   }
  },
})

// Action creators are generated for each case reducer function
export const { categoryDataTransferAction } = categorySlice.actions

export default categorySlice.reducer