import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getArticleCards, { getSearchResults } from "../../resources/js/getArticleCards";

export const loadArticles = createAsyncThunk('home/loadArticles', async (nothing, {rejectWithValue}) => {
    const articles = await getArticleCards();
    if(!articles[0]) {
        return rejectWithValue(articles[1]);
    }

    return articles[1];
});

export const loadSearchResults = createAsyncThunk('home/loadSearchResults', async (searchQuestion, {rejectWithValue}) => {
    const articles = await getSearchResults(searchQuestion);
    if(!articles[0]) {
        return rejectWithValue(articles[1]);
    }

    return articles[1];
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
                articles: action.payload
            }
        });

        builder.addCase(loadSearchResults.fulfilled, (state, action) => {
            return {
                ...state,
                isLoading: false,
                isError: false,
                articles: action.payload
            }
        });
        builder.addCase(loadSearchResults.pending, (state, action) => {
            return {
                ...state,
                isLoading: true,
                isError: false,
            }
        });
        builder.addCase(loadSearchResults.rejected, (state, action) => {
            return {
                ...state,
                isError: true,
                isLoading: false,
                articles: action.payload
            }
        });
    }
});

export default homeSlice.reducer;