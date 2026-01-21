import styled from 'styled-components'
import { cores } from '../../../../../styles'

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${cores.fundo};
  padding: 20px;
`

export const Header = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h1`
  color: ${cores.logo};
  margin: 0;
  font-size: 28px;
  flex: 1;
`

export const NumberBadge = styled.div`
  background-color: ${cores.fundo};
  color: ${cores.texto};
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
`

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const Section = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

export const SectionTitle = styled.h2`
  color: ${cores.logo};
  margin: 0 0 20px 0;
  font-size: 18px;
  padding-bottom: 12px;
  border-bottom: 2px solid ${cores.logo};
`

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-weight: 600;
    color: ${cores.texto};
    margin-bottom: 8px;
    font-size: 14px;
  }
`

export const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  font-family: inherit;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${cores.logo};
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const CurrencySymbol = styled.span`
  position: absolute;
  left: 12px;
  color: ${cores.texto};
  font-weight: 600;
  pointer-events: none;
  font-size: 14px;

  & + ${Input} {
    padding-left: 40px;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 30px;
  flex-wrap: wrap;

  button {
    min-width: 150px;
  }
`