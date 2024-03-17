import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
export const incrementByAmount = createAction('[Counter Component] Increment by Amount');
export const incrementAsync = createAction('[Counter Component] Increment Async',props<{ state:number,amount:number }>());
export const incrementAsyncSuccess = createAction('[Counter Component] Increment Async Success',props<{ state:number }>());
export const incrementAsyncFailure = createAction('[Counter Component] Increment Async Failure',props<{ error:string }>());