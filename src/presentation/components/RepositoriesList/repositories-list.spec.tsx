/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import RepositoryList from '.'
import { Repository } from '../../../domain/models/Repository'

type sutParams = {
  repositoriesMock: Repository[]
}
const makeSut = ({ repositoriesMock }: sutParams) => {
  render(<RepositoryList repositories={repositoriesMock} />, {
    wrapper: BrowserRouter,
  })
}

describe('RepositoriesList', () => {
  it('should generate the correct redirect link to the selected repository', () => {
    const repositoriesMock: Repository[] = [
      {
        description: 'repository-description-1',
        name: 'repository-name-1',
        owner: {
          avatar: 'avatar_url_1',
          login: 'owner-1',
        },
      },
      {
        description: 'repository-description-2',
        name: 'repository-name-2',
        owner: {
          avatar: 'avatar_url_2',
          login: 'owner-2',
        },
      },
    ]
    makeSut({ repositoriesMock })

    const [firstRepository, secondRepository] = screen.getAllByRole('link')

    expect(firstRepository).toHaveAttribute(
      'href',
      `/repositories/owner-1/repository-name-1`,
    )
    expect(secondRepository).toHaveAttribute(
      'href',
      `/repositories/owner-2/repository-name-2`,
    )
  })
})
