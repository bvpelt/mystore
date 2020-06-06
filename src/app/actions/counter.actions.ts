import { createAction, props, Action } from '@ngrx/store';

export enum CounterActionTypes {
  CounterIncrement = '[Counter] Increment',
  CounterDecrement = '[Counter] Decrement',
  CounterReset = '[Counter] Reset'
}

export class CounterAction implements Action {
  type: string;
}

export class IncrementCounter implements Action {
  readonly type = CounterActionTypes.CounterIncrement;

  constructor() {

  }
}

export class DecrementCounter implements Action {
  readonly type = CounterActionTypes.CounterDecrement;

  constructor() {

  }
}

export class ResetCounter implements Action {
  readonly type = CounterActionTypes.CounterReset;

  constructor() {

  }
}

export type CounterActions = IncrementCounter | DecrementCounter | ResetCounter;



