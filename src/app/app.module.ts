import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './login/auth.service';
import { LoginComponent } from './login/login.component';

import { FormComponent } from './form/form.component';
import { RegisterComponent } from './register/register.component';
import { RegisterService } from './register/register.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [AuthService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
