import { CacheSaveRepositories } from "@/data/use-cases/CacheSaveRepositories";
import { SaveRepositories } from "@/domain/use-cases/SaveRepositories";
import { makeLocalStorageSaveCacheAdapter } from "../cache/local-storage-save-cache-client-adapter-factory";
import { makeRepositoriesCacheKey } from "../cache/repositories-cache-key-factory";

export const makeCacheSaveRepositories = (): SaveRepositories => {
  return new CacheSaveRepositories(
    makeRepositoriesCacheKey(),
    makeLocalStorageSaveCacheAdapter()
  );
};
