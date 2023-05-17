import React from 'react'
import { FiLinkedin } from 'react-icons/fi'
import { Container } from './styles'

const Footer: React.FC = () => {
  return (
    <Container>
      <a href="https://www.linkedin.com/in/matheus-sunderhus/">
        <FiLinkedin />
        <p>Matheus Sunderhus</p>
      </a>
    </Container>
  )
}

export default Footer
