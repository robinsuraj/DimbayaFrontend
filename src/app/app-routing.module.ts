import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { SignupComponent } from '../app/components/signup-component/signup-component.component';
import { LoginComponent } from '../app/components/login-component/login-component.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { HomeComponent } from '../app/components/home/home.component';
import { PaymentComponent } from '../app/components/payment/payment.component';
import { AuthGuardService } from '../app/services/auth-guard.service';
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'pay', component: SignupComponent,canActivate : [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'payment', component: PaymentComponent,canActivate : [AuthGuardService]},
  {path: 'dashboard', component: DashboardComponent, canActivate : [AuthGuardService]},
  {path: '**', redirectTo:'home'}];
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
