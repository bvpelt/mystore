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


import * as fromRouter from '@ngrx/router-store';
import { routerReducer } from '@ngrx/router-store';

export interface AppState {
  counter: CounterState,
  movies: MovieState
}

export const reducers: any = {
  counter: counterReducer,
  movies: movieReducer
} | routerReducer;

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

// Router

export interface RouterState {
  router: fromRouter.RouterReducerState<any>;
}

export const selectRouter = createFeatureSelector<
  RouterState,
  fromRouter.RouterReducerState<any>
>('router');


export const {
  selectCurrentRoute,   // select the current route
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = fromRouter.getSelectors(selectRouter);