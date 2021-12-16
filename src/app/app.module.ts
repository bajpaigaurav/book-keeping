import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookRegistrationComponent } from './book-registration/book-registration.component';
import { RegistrationCompletedComponent } from './registration-completed/registration-completed.component';
import { BookApiService } from './book-api.service';
import { HomeComponent } from './home/home.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    BookRegistrationComponent,
    RegistrationCompletedComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    AppRoutingModule,
   
    
  ],
  providers: [DatePipe,BookApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
