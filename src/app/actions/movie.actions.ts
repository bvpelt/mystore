import { Action } from '@ngrx/store';
import { Movie } from '../shared/model/movies.model';

export enum MovieActionTypes {
  LoadMovies = '[Movies Page] Load Movies',
  LoadMoviesSuccess = '[Movies API] Movies Loaded Success',
  LoadMoviesFailure = '[Movies API] Movies Loaded Error',
}

export class MovieAction implements Action {
  type: MovieActionTypes;
  payload: {
    movies: Movie[];
    error: string;
  };
}

export class LoadMovies implements Action {
  readonly type = MovieActionTypes.LoadMovies;
  payload: { movies: [], error: null }
}

export class LoadMoviesSuccess implements Action {
  readonly type = MovieActionTypes.LoadMoviesSuccess;
  payload: { movies: Movie[], error: null }
}

export class LoadMoviesFailure implements Action {
  readonly type = MovieActionTypes.LoadMoviesFailure;
  payload: { movies: null, error: any }
}


export type MovieActions = LoadMovies | LoadMoviesSuccess | LoadMoviesFailure;

