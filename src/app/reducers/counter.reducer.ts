import { Action, createReducer, on, ActionReducerMap } from '@ngrx/store';
import { CounterAction, CounterActionTypes } from '../actions/counter.actions';
import { AppState } from './index';

export const counterFeatureKey = 'counter';

export interface CounterState {
  counter: number | null;
}

export const initialState: CounterState = {
  counter: 0
};

export function counterReducer(state: CounterState = initialState, action: CounterAction): CounterState {
  console.log('counterReducer state: ', state, ' action payload: ', (action !== null) ? '' : action);
  switch (action.type) {
    case CounterActionTypes.CounterIncrement:
      console.log('counterReducer action: CounterIncrement');
      return {
        counter: state.counter + 1
      };
    case CounterActionTypes.CounterDecrement:
      console.log('counterReducer action: CounterDecrement');
      return {
        counter: state.counter - 1
      };
    case CounterActionTypes.CounterReset:
      console.log('counterReducer action: CounterReset');
      return {
        counter: 0
      };

    default:
      console.log('counterReducer action: default');
      return state;
  }
}


export const selectCounter = (state: AppState) => state.counter.counter;