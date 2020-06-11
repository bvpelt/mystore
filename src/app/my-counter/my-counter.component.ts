import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { IncrementCounter, DecrementCounter, ResetCounter } from '../actions/counter.actions';
import { selectCounter, CounterState } from '../reducers/counter.reducer';
import { AppState } from '../reducers/index';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {

  count$: Observable<number>;
  count: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.count$ = this.store.pipe(select(selectCounter));
  }

  increment(): void {
    this.store.dispatch(new IncrementCounter());
  }

  decrement(): void {
    this.store.dispatch(new DecrementCounter());
  }

  reset(): void {
    this.store.dispatch(new ResetCounter());
  }
}
