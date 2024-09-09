import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const tmdbApiKey = "2aa5d79c4682e4f1c21ed2b6b71264b7";

export const tmdbApi = createApi({
    reducerPath: "tmdbApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://api.themoviedb.org/3"}),
    endpoints: (builder) => ({
        //Get type of [Gneres]
        getGenres: builder.query({
            query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
        }),
        //Get movies by [type]
        getMovies: builder.query({
            query: () => `trending/movie/day?api_key=${tmdbApiKey}`,
        }),
    }),
});

export const {useGetMoviesQuery, useGetGenresQuery,} = tmdbApi;
