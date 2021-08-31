import { AbstractControl } from '@angular/forms';

export function nameValidator(control: AbstractControl) {
  const value = control.value as string;
  const letters = 'qwertyuiopasdfghjklçzxcvbnm ';
  let check = false;

  for (let i = 0; i < value.length; i++) {
    for (let k = 0; k < letters.length; k++) {
      if (value[i].toLowerCase() === letters[k]) {
        check = true;
        break;
      }
      check = false;
    }

    if(value.length <= 2){
      return { nameValidator: true };
    }

    if (!check) {
      return { nameValidator: true };
    }
  }

  return null;
}
