import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';

import { counterReducer } from './counter/counter.reducer';
import { CounterComponent } from './counter/counter.component';
import { EffectsModule } from '@ngrx/effects';
import { CounterEffects } from './counter/counter.effects';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer }, {}),
    EffectsModule.forRoot([
      CounterEffects,
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
