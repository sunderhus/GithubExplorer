export interface Validation {
  validate: (value: string) => null | Error
}
