import {NgModel} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {WelcomeComponent} from '../welcome/welcome.component';
import {LoginPageComponent} from '../login-page/login-page.component';
import {SignupPageComponent} from '../signup-page/signup-page.component';
import {ReservationDetailComponent} from '../reservation/reservation-detail/reservation-detail.component';

const  routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'signup', component: SignupPageComponent},
  {path: 'reversation-detail', component: ReservationDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRouting {}
