// {
//     type: 'ADD_MOVIES',
//     movies: []
// } 

// Action types
export const ADD_MOVIES = 'ADD_MOVIES'
export const ADD_FAVOURITE = 'ADD_FAVOURITE'
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE'

// Acrion creators
export function addMovies (movies){
    return {
        type: 'ADD_MOVIES',
        movies
    }
}

export function addFavourite (movie){
    return {
        type: 'ADD_FAVOURITE',
        movie
    }
}

export function removeFromFavourites(movie) {
    return{
        type: REMOVE_FROM_FAVOURITE,
        movie
    }
}