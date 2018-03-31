import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appPositiveNumber]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PositiveNumberDirective, multi: true }],
})
export class PositiveNumberDirective implements Validator {
  validate(c: AbstractControl): { [key: string]: any } | null {
    return positiveNumberValidator()(c);
  }
}

export function positiveNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    return Number(control.value) < 0 ? { nonPositive: { value: control.value } } : null;
  };
}
