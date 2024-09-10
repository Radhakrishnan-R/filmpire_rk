import { Select } from "@mui/material";
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
        },
    },
});

export const {selectGenreOrCategoryName} = genreOrCategory.actions;

export default genreOrCategory.reducer;