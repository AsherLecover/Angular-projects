import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LiInputerComponent } from './components/li-inputer/li-inputer.component';
import { LiListComponent } from './components/li-list/li-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LiInputerComponent,
    LiListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
