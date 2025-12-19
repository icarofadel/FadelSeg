import { createGlobalStyle } from 'styled-components'

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
