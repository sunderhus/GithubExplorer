import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react'

import { SearchRepository } from '../../../domain/use-cases/SearchRepository'
import logoImage from '../../assets/logo.svg'
import Footer from '../../components/Footer'
import { Error, Form, Title } from './styles'
import { Validation } from '../../protocols/validation'
import { LoadRepositories } from '../../../domain/use-cases/LoadRepositories'
import { SaveRepositories } from '../../../domain/use-cases/SaveRepositories'
import RepositoriesList from '../../components/RepositoriesList'
import { Repository } from '../../../domain/models/Repository'

interface Props {
  searchRepository: SearchRepository
  validation: Validation
  loadRepositories: LoadRepositories
  saveRepositories: SaveRepositories
}

const Home: React.FC<Props> = ({
  searchRepository,
  validation,
  loadRepositories,
  saveRepositories,
}: Props) => {
  const [searchText, setSearchText] = useState('')
  const [inputError, setInputError] = useState('')
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = loadRepositories.load()

    return storagedRepositories
  })

  const isDuplicated = useCallback(() => {
    const savedRepositories = repositories.map((repo) =>
      `${repo.owner.login}/${repo.name}`.toLowerCase(),
    )
    const parsedSeachText = searchText.toLowerCase()

    return savedRepositories.includes(parsedSeachText)
  }, [repositories, searchText])

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }, [])

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault()

    const validationError = validation.validate(searchText)
    if (validationError) {
      setInputError(validationError.message)
      return
    }

    if (isDuplicated()) {
      setInputError('Este repositório já está na listagem.')
      return
    }

    try {
      const response = await searchRepository.search(`${searchText}`)
      setRepositories([...repositories, response])

      setSearchText('')
      setInputError('')
    } catch (error) {
      const parsedError = error as Error
      setInputError(parsedError.message)
    }
  }

  useEffect(() => {
    saveRepositories.save(repositories)
  }, [repositories, saveRepositories])

  return (
    <>
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore repositórios no github.</Title>

      <Form hasError={!!inputError} onSubmit={(event) => handleSubmit(event)}>
        <input
          value={searchText}
          onChange={(event) => handleChange(event)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <RepositoriesList repositories={repositories} />

      <Footer />
    </>
  )
}

export default Home
