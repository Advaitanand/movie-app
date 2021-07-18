import React from 'react';

import {data} from '../data'
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, setShowFavourite } from '../actions'

class App extends React.Component {

  componentDidMount() {

    this.props.store.subscribe(() => {
      console.log('UPDATED')
      this.forceUpdate()
    })

    this.props.store.dispatch(addMovies(data))

  }

  isMovieFavourite = (movie) => {
    const { favourites } = this.props.store.getState()

    const index = favourites.indexOf(movie)

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
    console.log(this.props.store.getState())
    
    const { list, favourites, showFavourites } = this.props.store.getState()
    
    const displayMovies = showFavourites ? favourites : list

    return (
      <div className="App">
        <Navbar />
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
