import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'


export const Buttons = styled.button`
    color: ${cores.slogan};
    padding: 16px;
    font-size: 16px;
    font-weight: bold;
    margin: 16px;
    border-radius: 50px;
    cursor: pointer;
    border: none;

    &:hover {
    background-color: ${cores.logo};
    color: ${cores.fundo};
}

    &.botaoFechar {
    background-color: red;
}
`
export const ButtonLink = styled(Link)`
    color: ${cores.slogan};
    padding: 16px;
    font-size: 16px;
    font-weight: bold;
    margin: 16px;
    border-radius: 50px;
    text-decoration: none;
    text-align: center;
    border: none;
    
    &:hover {
    background-color: ${cores.logo};
    color: ${cores.fundo};
}

    &.botaoFechar {
    background-color: red;
}
`
