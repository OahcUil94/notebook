import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoneyInputComponent } from './money-input/money-input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MoneyInputDirective } from './money-input/money-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    MoneyInputComponent,
    MoneyInputDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
