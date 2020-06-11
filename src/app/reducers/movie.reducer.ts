import { Action } from '@ngrx/store';
import { Movie } from '../shared/model/movies.model';
import { MovieActionTypes, MovieActions, LoadMovies } from '../actions/movie.actions';


export const movieFeatureKey = 'movie';

export interface MovieState {
  movies: Movie[];
  error: string | null;
}

export const initialMovieState: MovieState = {
  movies: [],
  error: null
};

export function movieReducer(state = initialMovieState, action: MovieActions): MovieState {
  switch (action.type) {
    case MovieActionTypes.LoadMovies: {
      return state /* { 
        movies: action.payload.movies,
        error: null
      } */
    }
    case MovieActionTypes.LoadMoviesSuccess: {
      return {
        movies: action.payload.movies,
        error: null
      }
    }
    case MovieActionTypes.LoadMoviesFailure: {
      return {
        movies: [],
        error: action.payload.error
      }
    }
    default:
      return state;
  }
}
