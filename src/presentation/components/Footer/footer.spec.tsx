/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '.'

const makeSut = () => {
  render(<Footer />)
}

describe('Footer', () => {
  it('should render redirectLink with correct url', () => {
    makeSut()

    const redirectLink = screen.getByRole('link')

    expect(redirectLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/matheus-sunderhus/',
    )
  })
})
