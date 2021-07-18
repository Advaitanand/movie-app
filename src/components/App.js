import React from 'react';

import {data} from '../data'
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies } from '../actions'

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

  

  render(){
    console.log(this.props.store.getState())
    
    const { list } = this.props.store.getState()
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {list.map((movie, index) => {
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