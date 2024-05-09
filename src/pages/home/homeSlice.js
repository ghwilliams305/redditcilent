import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getArticleCards from "../../resources/js/getArticleCards";

export const loadArticles = createAsyncThunk('home/loadArticles', async (nothing, thunkAPI) => {
    try {
        const articles = await getArticleCards();

        return articles;
    } catch(e) {
        return e;
    }
});

const homeSlice = createSlice({
    name: 'home',
    initialState: {
        isLoading: true,
        isError: false,
        articles: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadArticles.fulfilled, (state, action) => {
            return {
                ...state,
                isLoading: false,
                isError: false,
                articles: action.payload
            }
        });
        builder.addCase(loadArticles.pending, (state, action) => {
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        });
        builder.addCase(loadArticles.rejected, (state, action) => {
            return {
                ...state,
                isError: true,
                isLoading: false,
            }
        });
    }
});

export default homeSlice.reducer;