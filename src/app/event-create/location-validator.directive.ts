import { Directive } from '@angular/core';
import { Validator, FormGroup, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appLocationValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: LocationValidatorDirective,
      multi: true,
    },
  ],
  // use multi:true to add LocationValidatorDirective to NG_VALIDATORS
  // which is a list of angular built-in validators, otherwise can replace/override
})
export class LocationValidatorDirective implements Validator {
  constructor() {}

  validate(formGroup: FormGroup): { [key: string]: any } {
    const addressControl = formGroup.controls['address'];
    const cityControl = formGroup.controls['city'];
    const countryControl = formGroup.controls['country'];
    const onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl'];

    // either must fill address, city, country together or onlineUrl
    if (
      (addressControl &&
        addressControl.value &&
        cityControl &&
        cityControl.value &&
        countryControl &&
        countryControl.value) ||
      (onlineUrlControl && onlineUrlControl.value)
    ) {
      return null;
    } else {
      return { appLocationValidator: false };
    }
  }
}
