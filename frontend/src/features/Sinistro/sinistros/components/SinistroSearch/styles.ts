import styled from 'styled-components'

export const Fundo = styled.div`
    background-color: #ffffff;
    padding: 16px;

    .botao{
    display: flex;
    justify-content: flex-end;
    }
`

export const ContainerTitulo = styled.div`
    display: flex;
    gap: 16px;
    padding: 16px;
    background-color: #D9D9D9;
    border-radius: 8px;
    margin-bottom: 16px;
    justify-content: space-between;
    align-items: center;
`

export const ContainerInputs = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 72px;

    input {
    border: none;
    padding-top: 8px;
    border-bottom: 1px solid #000;
}
`

export const FilterItem = styled.div`
    display: flex;
    flex-direction: column;

    option{
        padding: 8px;
        background-color: #D9D9D9;
        border: none;
        }
    `