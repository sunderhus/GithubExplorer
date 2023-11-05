import { LocalStorageSaveCacheClienteAdapter } from "./LocalStorageSaveCacheClienteAdapter";
import { describe, beforeEach, vi, afterEach, it, expect } from "vitest";

const makeSut = (): { sut: LocalStorageSaveCacheClienteAdapter } => {
  const sut = new LocalStorageSaveCacheClienteAdapter();

  return {
    sut,
  };
};

describe("LocalStorageSaveCacheClienteAdapter", () => {
  beforeEach(() => {
    Storage.prototype.setItem = vi.fn();
  });
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should call localStorage with correct params", () => {
    const setItemSpy = vi.spyOn(Storage.prototype, "setItem");
    const cacheKeyMock = "Cloud-Test-key";
    const cacheMock = "612387-%nsdj-$!@%BN";
    const { sut } = makeSut();

    sut.save(cacheKeyMock, cacheMock);

    expect(setItemSpy).toHaveBeenCalledWith(cacheKeyMock, `"${cacheMock}"`);
  });
});
