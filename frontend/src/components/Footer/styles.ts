import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
    background-color: ${cores.fundo};
    color: ${cores.slogan};
    padding: 32px;
    width: 100%;
    font-weight: bold;

div {
    display: flex;
    justify-content: center;
}

span {
    color: red;
    font-size: 16px;
}
`