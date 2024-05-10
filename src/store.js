import articleSlice from "./pages/article/articleSlice";
import homeSlice from "./pages/home/homeSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        home: homeSlice,
        article: articleSlice,
    }
});


export default store;