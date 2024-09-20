
import { createSlice } from "@reduxjs/toolkit";

export const genreOrCategory = createSlice({
    name: "genreOrCategory",
    initialState: {
        genreOrCategoryName: "",
        page: 1,
        searchQuery: "",
    },
    reducers: {
        selectGenreOrCategoryName: (state, action) => {
            
            state.genreOrCategoryName = action.payload;
            state.searchQuery = "";
            
        },
        selectSearchQuery: (state,action) => {
            // 
            state.searchQuery = action.payload;
        },
    },
});

export const {selectGenreOrCategoryName, selectSearchQuery,} = genreOrCategory.actions;

export default genreOrCategory.reducer;