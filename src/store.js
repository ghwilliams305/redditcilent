import homeSlice from "./pages/home/homeSlice";

const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
    reducer: {
        home: homeSlice,
    }
});


export default store;