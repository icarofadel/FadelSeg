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

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`

export const Title = styled.h1`
  color: ${cores.logo};
  margin: 0;
  font-size: 28px;
`

export const SinistroId = styled.div`
  color: #666;
  font-size: 16px;
  font-weight: bold;

  span {
    color: ${cores.logo};
    margin-left: 10px;
  }
`

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const FormSection = styled.div`
  background-color: white;
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

export const SectionTitle = styled.h2`
  color: ${cores.logo};
  font-size: 18px;
  margin: 0 0 20px 0;
  padding-bottom: 15px;
  border-bottom: 3px solid ${cores.slogan};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
`

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  color: #333;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 14px;
`

export const Input = styled.input`
  padding: 12px;
  border: 2px solid ${cores.slogan};
  border-radius: 5px;
  font-size: 14px;
  font-family: inherit;
  transition: all 0.3s;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${cores.logo};
    box-shadow: 0 0 8px rgba(77, 62, 252, 0.3);
  }

  &::placeholder {
    color: #ccc;
  }
`

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`

export const CurrencySymbol = styled.span`
  position: absolute;
  left: 12px;
  color: #666;
  font-weight: 600;
  pointer-events: none;
`

export const TextArea = styled.textarea`
  padding: 12px;
  border: 2px solid ${cores.slogan};
  border-radius: 5px;
  font-size: 14px;
  font-family: inherit;
  resize: vertical;
  transition: all 0.3s;

  &:focus {
    outline: none;
    border-color: ${cores.logo};
    box-shadow: 0 0 8px rgba(77, 62, 252, 0.3);
  }

  &::placeholder {
    color: #ccc;
  }
`

export const CheckboxGroup = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #333;
  font-weight: 600;
  cursor: pointer;
  font-size: 14px;
`

export const Checkbox = styled.input`
  cursor: pointer;
  width: 18px;
  height: 18px;
  accent-color: ${cores.logo};
`

export const ActionButtons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  flex-wrap: wrap;
`

export const ActionButton = styled.button`
  padding: 12px 20px;
  background-color: ${cores.logo};
  color: white;
  border: none;
  border-radius: 25px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${cores.slogan};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(77, 62, 252, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`
