import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Repository } from '../../../domain/models/Repository'
import { SearchRepository } from '../../../domain/use-cases/SearchRepository'
import logoImage from '../../assets/logo.svg'
import Footer from '../../components/Footer'
import { Error, Form, Repositories, Title } from './styles'
import { Validation } from '../../protocols/validation'

interface Props {
  searchRepository: SearchRepository
  validation: Validation
}

const Home: React.FC<Props> = ({ searchRepository, validation }: Props) => {
  const [searchText, setSearchText] = useState('')
  const [inputError, setInputError] = useState('')
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GihubExplorer:repositories',
    )

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories)
    }
    return []
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
    localStorage.setItem(
      '@GihubExplorer:repositories',
      JSON.stringify(repositories),
    )
  }, [repositories])

  return (
    <>
      <img src={logoImage} alt="Github Explorer" />
      <Title>Explore repositórios no github.</Title>

      <Form hasError={!!inputError} onSubmit={handleSubmit}>
        <input
          value={searchText}
          onChange={(event) => handleChange(event)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map(({ name, description, owner }) => (
          <Link key={`${name}`} to={`/repositories/${owner.login}/${name}`}>
            <img src={owner.avatar} alt={owner.login} />
            <div>
              <strong>{name}</strong>
              <p>{description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>

      <Footer />
    </>
  )
}

export default Home
