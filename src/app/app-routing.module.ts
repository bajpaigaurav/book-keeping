import { HomeComponent } from './home/home.component';
import { RegistrationCompletedComponent } from './registration-completed/registration-completed.component';
import { BookRegistrationComponent } from './book-registration/book-registration.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'registration', component: BookRegistrationComponent },
  { path: 'booking-completed', component: RegistrationCompletedComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
