import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CounterApiService {
  constructor() { }

  increment(state:number,amount:number): Observable<number> {
    return of(state+amount).pipe(delay(1000));
  }
}
