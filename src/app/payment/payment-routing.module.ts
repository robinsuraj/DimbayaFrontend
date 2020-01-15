import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { PayCreditCardDetailsComponent } from './pay-credit-card-details/pay-credit-card-details.component';


const routes: Routes = [
  {path: '', redirectTo:'mobile_recharge'},
  {path: 'mobile_recharge', component:PaymentComponent},
  {path: 'payment_details', component:PayCreditCardDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
