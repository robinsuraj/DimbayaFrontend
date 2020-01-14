import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayCreditCardDetailsComponent } from './pay-credit-card-details.component';

describe('PayCreditCardDetailsComponent', () => {
  let component: PayCreditCardDetailsComponent;
  let fixture: ComponentFixture<PayCreditCardDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayCreditCardDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayCreditCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
