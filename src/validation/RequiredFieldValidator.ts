import { Validation } from '../presentation/protocols/validation'
import { RequiredFieldError } from './errors/RequiredFieldError'

export class RequiredFieldValidator implements Validation {
  validate = (value: string): null | Error => {
    if (!value || /^\s*$/.test(value)) {
      return new RequiredFieldError()
    }
    return null
  }
}
