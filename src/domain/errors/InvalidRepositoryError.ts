export class InvalidRepositoryError extends Error {
  constructor() {
    super('Invalid Repository')
    this.name = 'InvalidRepositoryError'
  }
}
