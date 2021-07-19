// {
//     type: 'ADD_MOVIES',
//     movies: []
// } 

// Action types
export const ADD_MOVIES = 'ADD_MOVIES'
export const ADD_FAVOURITE = 'ADD_FAVOURITE'
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE'
export const SET_SHOW_FAVOURITE = 'SET_SHOW_FAVOURITE'
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT'
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST'

// Action creators
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

export function setShowFavourite(value) {
    return{
        type: SET_SHOW_FAVOURITE,
        value
    }
}

export function handleMovieSearch(movie){
    const url = `https://www.omdbapi.com/?apikey=a6e676b0&t=${movie}`

    return function (dispatch){

        fetch(url)
        .then(response => response.json())
        .then(movie => {
            dispatch(addMovieSearchResult(movie))
        })
        
        
    }
}

export function addMoviesToList(movie) {
    return{
        type: ADD_MOVIE_TO_LIST,
        movie
    }
}

export function  addMovieSearchResult(movie){
    return {
        type: ADD_SEARCH_RESULT,
        movie
    }
}
