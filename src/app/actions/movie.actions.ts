import { Action } from '@ngrx/store';
import { Movie } from '../shared/model/movies.model';

export enum MovieActionTypes {
  LoadMovies = '[Movies Page] Load Movies',
  LoadMoviesSuccess = '[Movies API] Movies Loaded Success',
  LoadMoviesError = '[Movies API] Movies Loaded Error'
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

  constructor(payload: { movies: Movie[] }) {

  }
}

export class LoadMoviesSuccess implements Action {
  readonly type = MovieActionTypes.LoadMoviesSuccess;

  constructor(payload: { movies: Movie[] }) {

  }
}

export class LoadMoviesError implements Action {
  readonly type = MovieActionTypes.LoadMoviesError;

  constructor(payload: { error: string }) {

  }
}

// export type MovieActions = LoadMovies | LoadMoviesSuccess | LoadMoviesError;
