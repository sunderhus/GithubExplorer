import { LocalStorageGetCacheClienteAdapter } from "./LocalStorageGetCacheClienteAdapter";
import { describe, beforeEach, vi, afterEach, it, expect } from "vitest";
const makeSut = (): { sut: LocalStorageGetCacheClienteAdapter } => {
  const sut = new LocalStorageGetCacheClienteAdapter();

  return {
    sut,
  };
};

describe("LocalStorageGetCacheClienteAdapter", () => {
  beforeEach(() => {
    Storage.prototype.getItem = vi.fn();
  });
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should call get the cache content with correct key", () => {
    const getItemSpy = vi.spyOn(Storage.prototype, "getItem");
    const cacheKeyMock = "Service-Storage-key";
    const { sut } = makeSut();

    sut.getItem(cacheKeyMock);

    expect(getItemSpy).toHaveBeenCalledWith(cacheKeyMock);
  });
  it("should parse returned content to the provided key", () => {
    const cacheMock = "ABC_123_%$#";
    vi.spyOn(Storage.prototype, "getItem").mockReturnValueOnce("ABC_123_%$#");
    const cacheKeyStub = "Service-Storage-key";
    const { sut } = makeSut();

    const result = sut.getItem(cacheKeyStub);

    expect(result).toStrictEqual({ content: cacheMock });
  });

  it("should return default content when provided key is not found in the cache", () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementationOnce(() => null);
    const cacheKeyStub = "Service-Storage-key";
    const { sut } = makeSut();

    const result = sut.getItem(cacheKeyStub);

    expect(result).toStrictEqual({ content: "[]" });
  });
});
