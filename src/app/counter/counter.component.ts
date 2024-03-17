import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset,incrementByAmount as incrementByAmountAction,incrementAsync } from './counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  incrementAmount:number;
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
    this.incrementAmount = 0;
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }
  incrementByAmount() {
    this.store.dispatch(incrementByAmountAction());
  }
  incrementAsync() {
    this.store.dispatch(incrementAsync({amount:this.incrementAmount,state:0}));
  }

  reset() {
    this.store.dispatch(reset());
  }
}