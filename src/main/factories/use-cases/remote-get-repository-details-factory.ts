import { RemoteGetRepositoryDetails } from "@/data/use-cases/RemoteGetRepositoryDetails";
import { GetRepositoryDetails } from "@/domain/use-cases/GetRepositoryDetails";
import { makeApiUrl } from "../http/api-url-factory";
import { makeFetchHttpClientAdapter } from "../http/fetch-http-client-adapter-factory";
// import { makeAxiosHttpClientAdapter } from '../http/axios-http-client-adapter-factory'

// You can change to use Axios or Fetch, it is up to you.
export const makeRemoteGetRepositoryDetails = (): GetRepositoryDetails => {
  return new RemoteGetRepositoryDetails(
    makeApiUrl("repos"),
    makeFetchHttpClientAdapter()
  );
};
