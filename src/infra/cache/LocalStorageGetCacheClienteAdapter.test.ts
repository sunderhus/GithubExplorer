import { LocalStorageGetCacheClienteAdapter } from './LocalStorageGetCacheClienteAdapter'

const makeSut = (): { sut: LocalStorageGetCacheClienteAdapter } => {
  const sut = new LocalStorageGetCacheClienteAdapter()

  return {
    sut,
  }
}

describe('LocalStorageGetCacheClienteAdapter', () => {
  beforeEach(() => {
    Storage.prototype.getItem = jest.fn()
  })
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should call get the cache content with correct key', () => {
    const getItemSpy = jest.spyOn(Storage.prototype, 'getItem')
    const cacheKeyMock = 'Service-Storage-key'
    const { sut } = makeSut()

    sut.getItem(cacheKeyMock)

    expect(getItemSpy).toHaveBeenCalledWith(cacheKeyMock)
  })
  it('should parse returned content to the provided key', () => {
    const cacheMock = 'ABC_123_%$#'
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValueOnce('ABC_123_%$#')
    const cacheKeyStub = 'Service-Storage-key'
    const { sut } = makeSut()

    const result = sut.getItem(cacheKeyStub)

    expect(result).toStrictEqual({ content: cacheMock })
  })

  it('should return default content when provided key is not found in the cache', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementationOnce(() => null)
    const cacheKeyStub = 'Service-Storage-key'
    const { sut } = makeSut()

    const result = sut.getItem(cacheKeyStub)

    expect(result).toStrictEqual({ content: '[]' })
  })
})
