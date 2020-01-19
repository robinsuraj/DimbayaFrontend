import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment/payment.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PayCreditCardDetailsComponent } from './pay-credit-card-details/pay-credit-card-details.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PaymentComponent, PayCreditCardDetailsComponent],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class PaymentModule { }
