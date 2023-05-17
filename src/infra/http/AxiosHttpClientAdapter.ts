import axios, { AxiosError, AxiosResponse } from 'axios'
import {
  HttpClientProtocol,
  HttpRequest,
  HttpResponse,
} from '../../data/protocols/http/HttpClientProtocol'

export class AxiosHttpClientAdapter implements HttpClientProtocol {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let axiosResponse: AxiosResponse
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        headers: data.headers,
        data: data.body,
      })
    } catch (error) {
      const axiosError = error as AxiosError
      axiosResponse = axiosError.response as AxiosResponse
    }

    return this.adapt(axiosResponse)
  }

  private adapt(axiosResponse: AxiosResponse): HttpResponse {
    return {
      body: axiosResponse.data,
      statusCode: axiosResponse.status,
    }
  }
}
