import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';



import { AppComponent } from './app.component';
import { CalculatorInputsComponent } from './components/calculator-inputs/calculator-inputs.component';
import { CalculatorHistoryComponent } from './components/calculator-history/calculator-history.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorInputsComponent,
    CalculatorHistoryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
