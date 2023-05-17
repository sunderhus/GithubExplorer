import styled, { css } from 'styled-components'
import { shade } from 'polished'

interface FormProps {
  hasError: boolean
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;

  @media (max-width: 600px) {
    font-size: 38px;
    word-wrap: break-word;
  }
`

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;
  width: 100%;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    color: #3a3a3a;
    border-radius: 5px 0 0 5px;
    border-right: 0px;
    border: 2px solid #fff;

    ${window.innerWidth.valueOf() <= 600 &&
    css`
      border-radius: 5px;
    `}

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8a8b3;
    }
  }
  button {
    width: 210px;
    background-color: #04d361;
    border: 0px;
    height: 70px;
    border-radius: 0px 5px 5px 0px;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
  }

  @media (max-width: 500px) {
    display: grid;
    width: 100%;

    button {
      margin-top: 16px;
      width: inherit;
      border-radius: 5px;
    }
  }
`

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`
