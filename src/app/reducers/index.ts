import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { CounterState, counterReducer } from './counter.reducer';


export interface State {
  counter: CounterState
}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
