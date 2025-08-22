import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CounterModule } from './counter/counter.module';

import { AppComponent } from './app.component';
// import { CounterComponent } from './counter/components/counter/counter.component';
import { HeroComponent } from './heroes/hero/hero';
import { ListComponent } from './heroes/list/list';

@NgModule({
  declarations: [
    AppComponent,
    // CounterComponent,
    HeroComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
