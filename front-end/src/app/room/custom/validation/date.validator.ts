import { AbstractControl } from '@angular/forms';

export function dateValidator(control: AbstractControl) {
  let value:any =new Date(control.value)
  let actualDate = new Date

  value.setDate(value.getDate() + 1)

  if(actualDate>value){
    return {dateValidator:true}
  }
  return null
}
