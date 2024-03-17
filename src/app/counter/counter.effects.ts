import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CounterApiService } from './counter.api.service';
import * as CounterActions from './counter.actions';

@Injectable()
export class CounterEffects {

  increment$ = createEffect(() => this.actions$.pipe(
    ofType(CounterActions.incrementAsync),
    mergeMap(action  => this.mounterApiService.increment(action.state,action.amount)
      .pipe(
        map(result => CounterActions.incrementAsyncSuccess({state:result})),
        catchError(error => of(CounterActions.incrementAsyncFailure({error:"Api failure"})))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private mounterApiService: CounterApiService
  ) {}
}
