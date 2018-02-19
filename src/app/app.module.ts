import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WarningAlert } from './warning/warning.component';
import { SuccessAlert } from './success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlert,
    //SuccessComponent,
    SuccessAlert,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 