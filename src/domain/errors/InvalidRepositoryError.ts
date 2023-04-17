export class InvalidRepositoryError extends Error {
  constructor() {
    super('Repositório Inválido');
    this.name = 'InvalidRepositoryError';
  }
}
