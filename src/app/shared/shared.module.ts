import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberOnlyDirective } from './directives/number-only.directive';
import { AlphabetsOnlyDirective } from './directives/alphabets-only.directive';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';

@NgModule({
  imports: [
    CommonModule,
    MatSelectCountryModule
  ],
  exports:[NumberOnlyDirective,AlphabetsOnlyDirective,MatSelectCountryModule],
  declarations: [NumberOnlyDirective, AlphabetsOnlyDirective]
})
export class SharedModule { }
