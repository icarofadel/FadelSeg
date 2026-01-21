import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalCss = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: expletus sans, sans-serif;
}

  body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #F6FCFF;
  }

  .logo {
    width: 500px;
    margin: 50px auto;
    display: block;
  }
}
`

export const cores = {
  slogan: '#8C83ED',
  fundo: '#F6FCFF',
  logo: '#4D3EFC',
}


export const FooterButtons = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  padding: 30px 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;

  button {
    padding: 12px 30px;
    background-color: ${cores.logo};
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
    width: 100%;

    &:hover {
      background-color: ${cores.slogan};
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(77, 62, 252, 0.3);
    }

    &:active {
      transform: translateY(0);
    }

    @media (max-width: 768px) {
      padding: 14px 20px;
    }
  }
`

export const ButtonWrapperDanger = styled.div`
  display: flex;

  button {
    padding: 12px 30px;
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s;
    width: 100%;

    &:hover {
      background-color: #c82333;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);
    }

    &:active {
      transform: translateY(0);
    }

    @media (max-width: 768px) {
      padding: 14px 20px;
    }
  }
`