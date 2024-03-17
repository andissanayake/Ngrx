import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, incrementAsync, incrementAsyncSuccess, incrementAsyncFailure } from './counter.actions';

export interface CounterState {
  count:number,
  isLoading: boolean,
  error: string;
}

export const initialState:CounterState = {
  count:0,
  isLoading: false,
  error:""

};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => { return {...state,count:state.count+1};}),
  on(decrement, (state) => { return {...state,count:state.count+1};}),
  on(reset, () => { return {count:0,isLoading:false,error:""};}),
  on(incrementAsync, (state) => { return {...state,isLoading:true,error:""};}),
  on(incrementAsyncSuccess, (state,action) => { return {...state,count:action.state};}),
  on(incrementAsyncFailure, (state,action) => { return {...state,error:action.error};}),
);