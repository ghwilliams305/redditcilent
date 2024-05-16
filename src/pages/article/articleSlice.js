import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getArticles from "../../resources/js/getArticles";

export const loadArticle = createAsyncThunk('article/loadArticle', async (articleId, {rejectWithValue}) => {
    const articles = await getArticles(articleId);
    if(!articles[0]) {
        return rejectWithValue(articles[1]);
    }

    return articles[1];
});

const articleSlice = createSlice({
    name: 'article',
    initialState: {
        isError: false,
        isLoading: true,
        articleObj: {}
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadArticle.fulfilled, (state, action) => {
            return {
                ...state,
                isError: false,
                isLoading: false,
                articleObj: action.payload
            }
        });
        builder.addCase(loadArticle.pending, (state, action) => {
            return {
                ...state,
                isError: false,
                isLoading: true
            }
        });
        builder.addCase(loadArticle.rejected, (state, action) => {
            return {
                ...state,
                isError: true,
                isLoading: false,
                articleObj: action.payload
            }
        });
    }
});

export default articleSlice.reducer;