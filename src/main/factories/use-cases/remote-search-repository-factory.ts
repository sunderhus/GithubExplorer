import { RemoteSearchRepository } from "@/data/use-cases/RemoteSearchRepository";
import { SearchRepository } from "@/domain/use-cases/SearchRepository";
import { makeApiUrl } from "../http/api-url-factory";
import { makeAxiosHttpClientAdapter } from "../http/axios-http-client-adapter-factory";

export const makeRemoteSearchRepository = (): SearchRepository => {
  return new RemoteSearchRepository(
    makeApiUrl("repos"),
    makeAxiosHttpClientAdapter()
  );
};
