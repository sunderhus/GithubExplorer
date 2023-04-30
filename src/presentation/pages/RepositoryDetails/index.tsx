import React, { useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import logoImage from '../../assets/logo.svg'
import Footer from '../../components/Footer'

import { Header, Issues, RespositoryInfo } from './styles'
import { GetRepositoryDetails } from '../../../domain/use-cases/GetRepositoryDetails'
import { RepositoryDetails } from '../../../domain/models/RepositoryDetails'

interface Issue {
  id: number
  title: string
  html_url: string
  user: {
    login: string
  }
}
/**
 * Desafio API
 *  - Crie os dois casos de uso necessários para esta view.
 *  - Desacoplar esta view do Axios.
 *  - Milha extra:
 *  -- Crie componentes menores para essa View.
 *  -- Crie Testes unitários
 *  -- Aplique recomendações do Clean Code no projeto.
 *
 */

interface Props {
  getRepositoryDetails: GetRepositoryDetails
}

const RepositoryDetailsPage: React.FC<Props> = ({
  getRepositoryDetails,
}: Props) => {
  const { owner = '', repositoryName = '' } = useParams<{
    owner: string
    repositoryName: string
  }>()
  const [repository, setRepository] = useState<RepositoryDetails | null>(null)
  const [issues, setIssues] = useState<Issue[]>([])

  useEffect(() => {
    getRepositoryDetails
      .get(owner, repositoryName)
      .then((repository) => {
        setRepository(repository)
      })
      .catch(() => {
        setRepository(null)
      })

    axios
      .get(`https://api.github.com/repos/${owner}/${repositoryName}/issues`)
      .then((response) => {
        setIssues(response.data)
      })
  }, [getRepositoryDetails, owner, repositoryName])

  return (
    <>
      <Header>
        <img src={logoImage} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} color="#3D3D4D" />
          <strong>Voltar</strong>
        </Link>
      </Header>
      {repository ? (
        <RespositoryInfo>
          <header>
            <img src={repository.owner.avatar} alt="Owner profile avatar" />
            <div>
              <strong>{repository.name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stars}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.issues}</strong>
              <span>Issues abertos</span>
            </li>
          </ul>
        </RespositoryInfo>
      ) : (
        <p>Carregando informações.</p>
      )}

      <Issues>
        {issues.map((issue) => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Issues>

      <Footer />
    </>
  )
}

export default RepositoryDetailsPage
