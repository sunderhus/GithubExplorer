export class UnexpectedError extends Error {
  constructor() {
    super('Algo inesperado ocorreu, tente novamente mais tarde.');
    this.name = 'UnexpectedError';
  }
}
