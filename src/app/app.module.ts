import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiariosComponent } from './diarios/diarios.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthService } from './login/auth.service';
import { RegisterService } from './register/register.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent,
    RegisterComponent,
    DiariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
