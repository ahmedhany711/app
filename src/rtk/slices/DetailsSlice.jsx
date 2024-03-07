
import { createSlice } from "@reduxjs/toolkit";

export const DetailsSlice = createSlice({
    initialState: [],
    name: "DetailsSlice",
    reducers: {
        Details: (state, action) => {

            if (state.length === 0) {
                state.push(action.payload);

            }
            else {

                state.pop()
                state.push(action.payload)

            }

        },
        DeleteFromCart: (state, action) => {
            return state.filter((product) => product.id !== action.payload.id)
        },
        Clear: (state, action) => {
            return []
        },
    }
})



export const { DeleteFromCart, Details, reload, Clear } = DetailsSlice.actions;
export default DetailsSlice.reducer;
