
import { createSlice } from "@reduxjs/toolkit";

export const SaveProduct = createSlice({
    initialState: [],
    name: "SaveProduct",
    reducers: {
        addToSaved: (state, action) => {
            state.push(action.payload);
        },
        Details: (state, action) => {
            state.push(action.payload);
        },
        DeleteFromSaved: (state, action) => {
            return state.filter((product) => product.id !== action.payload.id)
        },
        Clear: (state, action) => {
            localStorage.removeItem('clickedHearts');
            return []
        },
    }
})

export const { addToSaved, DeleteFromSaved, Details, Clear } = SaveProduct.actions;
export default SaveProduct.reducer;
