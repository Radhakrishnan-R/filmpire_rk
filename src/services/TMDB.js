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
            query: ({genreOrCategoryName, page, searchQuery}) => {
                if(searchQuery) {
                    return `search/movie?query=${searchQuery}&api_key=${tmdbApiKey}&page=${page}`;
                }

                if(genreOrCategoryName && typeof genreOrCategoryName === "string"){
                    return `movie/${genreOrCategoryName}?page=${page}&api_key=${tmdbApiKey}&page=${page}`;
                }
                if(genreOrCategoryName && typeof genreOrCategoryName === "number"){
                    return `discover/movie?with_genres=${genreOrCategoryName}&api_key=${tmdbApiKey}&page=${page}`;
                }

                return `trending/movie/day?api_key=${tmdbApiKey}&page=${page}`;
            },
        }),
        //Get movie info [id]
        getMovieInfo: builder.query({
            query: (id) => `movie/${id}?api_key=${tmdbApiKey}&append_to_response=videos,credits`,
        }),

        //Get movie based on recomandation
        getMovieSuggestion: builder.query({
            query: ({id, page}) => `movie/${id}/recommendations?api_key=${tmdbApiKey}&page=${page}`,
        }),

        //get actor information and movies
        getActorInfor: builder.query({
            query: (id) => `person/${id}?api_key=${tmdbApiKey}&append_to_response=movie_credits`,
        }),

    }),
});

export const {useGetMoviesQuery, 
    useGetGenresQuery, 
    useGetMovieInfoQuery, 
    useGetMovieSuggestionQuery,
    useGetActorInforQuery,
} = tmdbApi;


//https://api.themoviedb.org/3/person/49265/movie_credits?api_key=732dfe94c237f44327af913ebba97825
//https://api.themoviedb.org/3/person/49265?api_key=732dfe94c237f44327af913ebba97825