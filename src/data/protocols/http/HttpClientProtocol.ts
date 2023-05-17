export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}
export type HttpMethod = 'GET' // | 'POST' | 'PUT' | 'DELETE';

export type HttpRequest = {
  url: string
  method: HttpMethod
  headers?: Record<string, string>
  body?: unknown // valor que é determinado em tempo de execução
}
export type HttpResponse = {
  statusCode: number
  body?: unknown
}

export interface HttpClientProtocol {
  request: (data: HttpRequest) => Promise<HttpResponse>
}
