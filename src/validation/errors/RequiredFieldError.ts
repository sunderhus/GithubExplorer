export class RequiredFieldError extends Error {
  constructor() {
    super('Campo Obrigatório')
    this.name = 'RequiredFieldError'
  }
}
