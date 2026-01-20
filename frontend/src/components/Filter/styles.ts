import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    gap: 16px;
    padding: 16px;
    background-color: #D9D9D9;
    border-radius: 8px;
    margin-bottom: 16px;
    justify-content: space-between;
    align-items: center;

  /* quebra linha se não couber */
    flex-wrap: wrap;

  /* opcional: sombra leve */
    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
`
