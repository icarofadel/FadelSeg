import styled from 'styled-components'
import { cores } from '../../styles'

export const TableContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 30px;
`

export const TableHeader = styled.div`
  background-color: ${cores.logo};
  color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin: 0;
    font-size: 20px;
  }

  span {
    font-size: 14px;
    opacity: 0.9;
  }
`

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    background-color: ${cores.slogan};
    color: white;
  }

  th {
    padding: 15px;
    text-align: left;
    font-weight: bold;
    font-size: 14px;
  }

  tbody tr {
    border-bottom: 1px solid #e0e0e0;
    transition: background-color 0.3s;

    &:hover {
      background-color: #f9f9f9;
    }

    &:last-child {
      border-bottom: none;
    }
  }

  td {
    padding: 15px;
    font-size: 14px;
    color: #333;
  }
`

export const StatusBadge = styled.span<{ status: string }>`
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  text-transform: uppercase;

  background-color: ${props => {
    switch (props.status) {
      case 'aberto':
        return '#FFF3CD'
      case 'em_analise':
        return '#D1ECF1'
      case 'fechado':
        return '#D4EDDA'
      case 'rejeitado':
        return '#F8D7DA'
      default:
        return '#E2E3E5'
    }
  }};

  color: ${props => {
    switch (props.status) {
      case 'aberto':
        return '#856404'
      case 'em_analise':
        return '#0C5460'
      case 'fechado':
        return '#155724'
      case 'rejeitado':
        return '#721C24'
      default:
        return '#383D41'
    }
  }};
`

export const TipoBadge = styled.span`
  padding: 5px 12px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: bold;
  display: inline-block;
  background-color: ${cores.slogan};
  color: white;
`

export const ValorFormatado = styled.span`
  font-weight: bold;
  color: ${cores.logo};
  font-size: 15px;
`

export const AcoesContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`

export const BotaoAcao = styled.button<{ tipo?: string }>`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;

  background-color: ${props => {
    switch (props.tipo) {
      case 'editar':
        return '#17A2B8'
      case 'deletar':
        return '#DC3545'
      default:
        return cores.logo
    }
  }};
  color: white;

  &:hover {
    opacity: 0.8;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  color: ${cores.logo};
  font-weight: bold;
`

export const ErrorContainer = styled.div`
  padding: 20px;
  background-color: #F8D7DA;
  border: 1px solid #F5C6CB;
  border-radius: 4px;
  color: #721C24;
  margin-bottom: 20px;
`

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;
  color: #999;

  svg {
    font-size: 48px;
    margin-bottom: 20px;
    opacity: 0.5;
  }

  p {
    font-size: 18px;
    margin: 0;
  }
`

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background-color: #fafafa;
  border-top: 1px solid #e0e0e0;

  button {
    padding: 8px 12px;
    border: 1px solid ${cores.slogan};
    background-color: white;
    color: ${cores.logo};
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s;

    &:hover:not(:disabled) {
      background-color: ${cores.slogan};
      color: white;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  span {
    color: #666;
    font-weight: bold;
  }
`
