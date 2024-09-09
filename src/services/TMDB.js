import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const tmdbApi = createApi({
    reducerPath: "tmdbApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://api.themoviedb.org/3"}),
    endpoints: (builder) => ({
        //Get movies by [type]
        getMovies: builder.query({
            query: () => "trending/movie/day?api_key=2aa5d79c4682e4f1c21ed2b6b71264b7",
        }),
    }),
});

export const {useGetMoviesQuery} = tmdbApi;
