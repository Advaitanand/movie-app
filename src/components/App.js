import React from 'react';

import {data} from '../data'
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, setShowFavourite } from '../actions'

class App extends React.Component {

  componentDidMount() {

    this.props.store.subscribe(() => {
      // console.log('UPDATED')
      this.forceUpdate()
    })

    this.props.store.dispatch(addMovies(data))

  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState()

    const index = movies.favourites.indexOf(movie)

    if(index !== -1){
      
      // Found the movie
      return true
    }

    return false
  }

  onChangeTab = (value) => {
    this.props.store.dispatch(setShowFavourite(value))
  }

  render(){
    // console.log(this.props.store.getState())

    const { movies, search } = this.props.store.getState()
    
    const { list, favourites, showFavourites } = movies
    
    const displayMovies = showFavourites ? favourites : list
    // console.log('search from app', search )

    return (
      <div className="App">
        <Navbar dispatch={this.props.store.dispatch} search={search}/>
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick={() => this.onChangeTab(true)}>Favourites</div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => {
              return( 
                <MovieCard 
                  movie={movie} 
                  key={`movies-${index}`} 
                  dispatch={this.props.store.dispatch}
                  isFavourite = {this.isMovieFavourite(movie)}
                />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
  
}

export default App;
