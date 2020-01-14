import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { PayCreditCardDetailsComponent } from './pay-credit-card-details/pay-credit-card-details.component';


const routes: Routes = [

  {path: 'payment1', component:PaymentComponent},
  {path: 'payment2', component:PayCreditCardDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
