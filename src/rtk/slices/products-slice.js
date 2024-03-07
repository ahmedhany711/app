import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchproducts = createAsyncThunk(
    "productsSlice/fetchproducts",
    async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        return data;
    }
);
export const productsSlice = createSlice({
    name: "productsSlice",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchproducts.fulfilled, (state, action) => {
            return (state = action.payload);
        });
    },
});

export const { } = productsSlice.actions;
export default productsSlice.reducer;
