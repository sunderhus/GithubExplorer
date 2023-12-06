import {
  HttpClientProtocol,
  HttpRequest,
  HttpResponse,
} from "@/data/protocols/http/HttpClientProtocol";

export class FetchHttpClientAdapter implements HttpClientProtocol {
  async request(data: HttpRequest): Promise<HttpResponse> {
    let fetchResponse: Response;
    try {
      fetchResponse = await fetch(data.url, {
        method: data.method,
        body: data.body ? JSON.stringify(data.body) : null,
        headers: data.headers,
      });
    } catch (error) {
      const fetchError = error as Response;
      fetchResponse = fetchError;
    }

    const parsedResponse = await this.adapt(fetchResponse);
    return parsedResponse;
  }

  async adapt(fetchResponse: Response): Promise<HttpResponse> {
    return {
      statusCode: fetchResponse.status,
      body: await fetchResponse.json(),
    };
  }
}
