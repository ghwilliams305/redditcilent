import homeSlice from "./pages/home/homeSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        home: homeSlice,
    }
});


export default store;