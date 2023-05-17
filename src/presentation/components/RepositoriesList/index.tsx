import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { Repository } from '../../../domain/models/Repository'
import { Container } from './styles'

interface Props {
  repositories: Repository[]
}
const RepositoriesList: React.FC<Props> = ({ repositories }: Props) => {
  return (
    <Container>
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
    </Container>
  )
}

export default RepositoriesList
