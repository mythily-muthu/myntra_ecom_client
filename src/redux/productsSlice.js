import { createSlice } from "@reduxjs/toolkit"


let initialState = {
    products: []
}
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getProducts: (state, action) => {
            state.products = action.payload;

        }
    }
})
export const { getProducts } = productsSlice.actions;
export default productsSlice.reducer;