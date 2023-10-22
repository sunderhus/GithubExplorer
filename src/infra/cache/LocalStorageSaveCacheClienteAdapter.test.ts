import { LocalStorageSaveCacheClienteAdapter } from './LocalStorageSaveCacheClienteAdapter'

const makeSut = (): { sut: LocalStorageSaveCacheClienteAdapter } => {
  const sut = new LocalStorageSaveCacheClienteAdapter()

  return {
    sut,
  }
}

describe('LocalStorageSaveCacheClienteAdapter', () => {
  beforeEach(() => {
    Storage.prototype.setItem = jest.fn()
  })
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should call localStorage with correct params', () => {
    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem')
    const cacheKeyMock = 'Cloud-Test-key'
    const cacheMock = '612387-%nsdj-$!@%BN'
    const { sut } = makeSut()

    sut.save(cacheKeyMock, cacheMock)

    expect(setItemSpy).toHaveBeenCalledWith(cacheKeyMock, `"${cacheMock}"`)
  })
})
