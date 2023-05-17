export const makeApiUrl = (path: string): string => {
  return `https://api.github.com/${path}`

  /** Fica a dica
   * - Em projetos reais a base url será via environment.
   * - passar por parâmetro se forem APIs diferentes
   * ou criar diferentes factories para cada API.
   */
}
