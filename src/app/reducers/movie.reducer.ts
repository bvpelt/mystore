import { Action } from '@ngrx/store';
import { Movie } from '../shared/model/movies.model';
import { MovieActionTypes, MovieAction } from '../actions/movie.actions';


export const movieFeatureKey = 'movie';

export interface State {

}

export interface MovieState {
  movies: Movie[] | null;
  error: string | null;
}

const initialMovieState: MovieState = {
  movies: null,
  error: null
};

/*
export const initialState: State = {

};
*/

export function movieReducer(state = initialMovieState, action: MovieAction): MovieState {
  switch (action.type) {
    case MovieActionTypes.LoadMovies: {
      return {
        movies: action.payload.movies,
        error: null
      }
    }
    case MovieActionTypes.LoadMoviesSuccess: {
      return {
        movies: action.payload.movies,
        error: null
      }
    }
    case MovieActionTypes.LoadMoviesError: {
      return {
        movies: [],
        error: action.payload.error
      }
    }
    default:
      return state;
  }
}
