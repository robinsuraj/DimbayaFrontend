import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { SignupComponent } from '../app/components/signup-component/signup-component.component';
import { LoginComponent } from '../app/components/login-component/login-component.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { HomeComponent } from '../app/components/home/home.component';
import { AuthGuardService } from '../app/services/auth-guard.service';
import { OtpComponent } from './components/otp/otp.component';
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  { path: 'services', loadChildren: './payment/payment.module#PaymentModule' },
  
  // {path: 'pay', component: SignupComponent,canActivate : [AuthGuardService]},
  {path: 'login', component: LoginComponent,canActivate : [AuthGuardService]},
  // {path: 'payment', component: PaymentComponent},
  // {path: 'dashboard', component: DashboardComponent, canActivate : [AuthGuardService]},
  {path: 'otp', component: OtpComponent,canActivate : [AuthGuardService]},
  {path: '**', redirectTo:'home'}];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
