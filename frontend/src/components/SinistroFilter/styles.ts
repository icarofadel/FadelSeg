import styled from 'styled-components'
import { cores } from '../../styles'

export const FilterContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h2 {
    color: ${cores.logo};
    margin-bottom: 20px;
    font-size: 20px;
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

export const FilterGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const FilterInput = styled.input`
  padding: 10px;
  border: 2px solid ${cores.slogan};
  border-radius: 5px;
  font-size: 14px;
  font-family: inherit;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: ${cores.logo};
    box-shadow: 0 0 5px rgba(77, 62, 252, 0.3);
  }

  &::placeholder {
    color: #999;
  }
`

export const FilterSelect = styled.select`
  padding: 10px;
  border: 2px solid ${cores.slogan};
  border-radius: 5px;
  font-size: 14px;
  font-family: inherit;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: ${cores.logo};
    box-shadow: 0 0 5px rgba(77, 62, 252, 0.3);
  }

  option {
    background-color: white;
    color: #333;
  }
`

export const FilterButton = styled.button<{ secundario?: boolean }>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;

  background-color: ${props => props.secundario ? '#f0f0f0' : cores.logo};
  color: ${props => props.secundario ? '#333' : 'white'};
  border: ${props => props.secundario ? `2px solid ${cores.slogan}` : 'none'};

  &:hover {
    background-color: ${props => props.secundario ? '#e0e0e0' : cores.slogan};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`
