import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null => {
    const value = control.value;
    const regex = /(\+84|0[0-9])+([0-9]{8})\b/g;
    if(!value) {
      return null;
    }

    const hasPhone = regex.test(value);
    return !hasPhone ? {hasPhone: true} : null;
  }
}