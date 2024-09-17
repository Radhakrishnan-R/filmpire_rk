import {configureStore} from "@reduxjs/toolkit";

import { tmdbApi } from "../services/TMDB";
import  genreOrCategoryReducer  from "../features/currentGenreOrCategory";
import  tmdbAuthReducer  from "../features/auth";

export default configureStore({
    reducer: {
        [tmdbApi.reducerPath]: tmdbApi.reducer,
        currentGenreOrCategory: genreOrCategoryReducer,
        tmdbAuth: tmdbAuthReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});