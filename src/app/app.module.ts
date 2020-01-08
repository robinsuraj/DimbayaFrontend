import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { ToastrModule } from 'ngx-toastr';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BsDropdownModule } from 'ngx-bootstrap';
import { HeaderComponent } from './components/header-component/header-component.component';
import { LoginComponent } from './components/login-component/login-component.component';
import { SignupComponent } from './components/signup-component/signup-component.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CustomMaterialModule } from './custom-material.module';   
import { DialogComponent } from './shared/dialog/dialog.component';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { NgHttpLoaderModule } from 'ng-http-loader'; 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HomeComponent,
    PaymentComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    SharedModule,
    CustomMaterialModule,
    BsDropdownModule.forRoot(),
    NgxIntlTelInputModule,
    ToastrModule.forRoot({timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true}) ,
    
      NgHttpLoaderModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  entryComponents: [
    DialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
