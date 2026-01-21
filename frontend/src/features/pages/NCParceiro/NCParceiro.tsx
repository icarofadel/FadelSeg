import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import * as A from '../../../styles'
import Botao from '../../../components/Button'

interface FormDataNCParceiro {
  // Informações do sinistro
  dataOcorrencia: string
  notafiscal: string
  nomeCliente: string
  segmento: string
  motivo: string
  valorSinistro: string
  // Empresa do grupo
  sacador: string
  sacado: string
  cnpjSacado: string
  // Finalização
  envioControladora: string
  numeroFatura: string
}

export default function NovaPagina() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<FormDataNCParceiro>({
    dataOcorrencia: '',
    notafiscal: '',
    nomeCliente: '',
    segmento: '',
    motivo: '',
    valorSinistro: '',
    sacador: '',
    sacado: '',
    cnpjSacado: '',
    envioControladora: '',
    numeroFatura: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSalvar = () => {
    console.log('Dados salvos:', formData)
    // TODO: Implementar lógica de salvamento
  }

  const handleImprimir = () => {
    window.print()
  }

  const handleExcluir = () => {
    if (window.confirm('Tem certeza que deseja excluir?')) {
      console.log('NC Parceiro excluída')
      // TODO: Implementar lógica de exclusão
    }
  }

  const handleVoltar = () => {
    navigate(-1)
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>NC Parceiro</S.Title>
        <S.NumberBadge>1</S.NumberBadge>
      </S.Header>

      <S.Content>
        {/* Informações do sinistro */}
        <S.Section>
          <S.SectionTitle>Informações do sinistro</S.SectionTitle>
          <S.FormGrid>
            <S.FormGroup>
              <label>Data da ocorrência</label>
              <S.Input
                type="date"
                name="dataOcorrencia"
                value={formData.dataOcorrencia}
                onChange={handleInputChange}
                placeholder="Data da ocorrência"
              />
            </S.FormGroup>

            <S.FormGroup>
              <label>Nota fiscal</label>
              <S.Input
                type="text"
                name="notafiscal"
                value={formData.notafiscal}
                onChange={handleInputChange}
                placeholder="Nota fiscal"
              />
            </S.FormGroup>

            <S.FormGroup>
              <label>Nome do cliente</label>
              <S.Input
                type="text"
                name="nomeCliente"
                value={formData.nomeCliente}
                onChange={handleInputChange}
                placeholder="Nome do cliente"
              />
            </S.FormGroup>

            <S.FormGroup>
              <label>Segmento</label>
              <S.Input
                type="text"
                name="segmento"
                value={formData.segmento}
                onChange={handleInputChange}
                placeholder="Segmento"
              />
            </S.FormGroup>

            <S.FormGroup>
              <label>Motivo</label>
              <S.Input
                type="text"
                name="motivo"
                value={formData.motivo}
                onChange={handleInputChange}
                placeholder="Motivo"
              />
            </S.FormGroup>

            <S.FormGroup>
              <label>Valor do sinistro</label>
              <S.InputWrapper>
                <S.CurrencySymbol>R$</S.CurrencySymbol>
                <S.Input
                  type="text"
                  name="valorSinistro"
                  value={formData.valorSinistro}
                  onChange={handleInputChange}
                  placeholder="0,00"
                />
              </S.InputWrapper>
            </S.FormGroup>
          </S.FormGrid>
        </S.Section>

        {/* Empresa do grupo */}
        <S.Section>
          <S.SectionTitle>Empresa do grupo</S.SectionTitle>
          <S.FormGrid>
            <S.FormGroup>
              <label>Sacador</label>
              <S.Input
                type="text"
                name="sacador"
                value={formData.sacador}
                onChange={handleInputChange}
                placeholder="Sacador"
              />
            </S.FormGroup>

            <S.FormGroup>
              <label>Sacado</label>
              <S.Input
                type="text"
                name="sacado"
                value={formData.sacado}
                onChange={handleInputChange}
                placeholder="Sacado"
              />
            </S.FormGroup>

            <S.FormGroup>
              <label>CNPJ Sacado</label>
              <S.Input
                type="text"
                name="cnpjSacado"
                value={formData.cnpjSacado}
                onChange={handleInputChange}
                placeholder="CNPJ Sacado"
              />
            </S.FormGroup>
          </S.FormGrid>
        </S.Section>

        {/* Finalização */}
        <S.Section>
          <S.SectionTitle>Finalização</S.SectionTitle>
          <S.FormGrid>
            <S.FormGroup>
              <label>Envio para a controladoria</label>
              <S.Input
                type="text"
                name="envioControladora"
                value={formData.envioControladora}
                onChange={handleInputChange}
                placeholder="Envio para a controladoria"
              />
            </S.FormGroup>

            <S.FormGroup>
              <label>Nº da fatura</label>
              <S.Input
                type="text"
                name="numeroFatura"
                value={formData.numeroFatura}
                onChange={handleInputChange}
                placeholder="Nº da fatura"
              />
            </S.FormGroup>
          </S.FormGrid>
        </S.Section>


      {/* Botões de Ação */}
      <A.FooterButtons>
        <A.ButtonWrapper>
          <Botao type="button" title="Salvar sinistro" onClick={handleSalvar}>
            Salvar
          </Botao>
        </A.ButtonWrapper>

        <A.ButtonWrapper>
          <Botao type="button" title="Imprimir" onClick={handleImprimir}>
            Imprimir
          </Botao>
        </A.ButtonWrapper>
        <A.ButtonWrapperDanger>
          <Botao type="button" title="Excluir" onClick={handleExcluir}>
            Excluir
          </Botao>
        </A.ButtonWrapperDanger>

        <A.ButtonWrapper>
          <Botao type="button" title="Voltar" onClick={handleVoltar}>
            Voltar
          </Botao>
        </A.ButtonWrapper>
      </A.FooterButtons>
      </S.Content>
    </S.Container>
  )
}