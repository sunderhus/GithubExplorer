import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  a {
    font-size: 16px;
    color: #3d3d4d;
    text-decoration: none;
    display: flex;
    &:hover svg {
      color: #2867b2;
    }

    svg {
      transition: color 0.2s linear;
      margin-right: 5px;
    }
  }
`
