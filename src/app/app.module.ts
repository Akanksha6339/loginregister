import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {loginComponent } from './login/login.component';
import { registerComponent} from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    loginComponent,
    registerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
