import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { CounterState, counterReducer } from './counter.reducer';
import { MovieState, movieReducer } from './movie.reducer';

/*
export interface State {
  counter: CounterState,
  movies: MovieState
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer,
  movies: movieReducer
};
*/

export interface AppState {
  counter: CounterState;
  movies: MovieState;
}

export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer,
  movies: movieReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
