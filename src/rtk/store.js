import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/products-slice";
import CartSlice from "./slices/CartSlice";
import DetailsSlice from "./slices/DetailsSlice";
import SaveProductSlice from "./slices/SaveProductSlice";

export const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: CartSlice,
        Detail: DetailsSlice,
        save: SaveProductSlice,
    }

})