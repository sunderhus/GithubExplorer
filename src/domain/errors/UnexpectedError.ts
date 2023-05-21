export class UnexpectedError extends Error {
  constructor() {
    super('Something unexpected happened. Please try again later.')
    this.name = 'UnexpectedError'
  }
}
