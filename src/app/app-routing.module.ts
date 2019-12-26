import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { SignupComponent } from '../app/components/signup-component/signup-component.component';
import { LoginComponent } from '../app/components/login-component/login-component.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { HomeComponent } from '../app/components/home/home.component';
import { PaymentComponent } from '../app/components/payment/payment.component';
import { AuthGuardService } from '../app/services/auth-guard.service';
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'signup'},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate : [AuthGuardService]},
  {path: '**', redirectTo:'signup'}];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
