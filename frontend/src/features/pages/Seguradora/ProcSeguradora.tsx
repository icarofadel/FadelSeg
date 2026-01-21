import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import * as S from './styles'
import * as A from '../../../../../styles'
import Botao from '../../../../../components/Button'

interface FormDataProcSeguradora {
  // Dados básicos
  segurado: string
  numeroApolice: string
  // Informações do sinistro
  dataOcorrencia: string
  notafiscal: string
  nomeCliente: string
  segmento: string
  motivo: string
  valorEmbarcado: string
  valorNF: string
  estimativaPrejuizo: string
  conhecimento: string
  manifesto: string
  // Dados da entrega
  pagador: string
  remetente: string
  cidadeOrigem: string
  destinatario: string
  cidadeDestino: string
  // Andamento
  andamento: string
  // Informações complementares
  ciaAerea: string
  motorista: string
  nomeMotoista: string
  cpfMotoista: string
  placaVeiculo: string
  localSinistro: string
  // Finalização
  statusProcesso: string
}

export default function ProcSeguradora() {
  const navigate = useNavigate()
  const location = useLocation()
  const [formData, setFormData] = useState<FormDataProcSeguradora>({
    segurado: '',
    numeroApolice: '',
    dataOcorrencia: location.state?.formData?.dataOcorrencia || '',
    notafiscal: location.state?.formData?.notafiscal || '',
    nomeCliente: location.state?.formData?.cliente || '',
    segmento: location.state?.formData?.segmento || '',
    motivo: location.state?.formData?.motivo || '',
    valorEmbarcado: '',
    valorNF: '',
    estimativaPrejuizo: location.state?.formData?.valorSinistro || '',
    conhecimento: '',
    manifesto: location.state?.formData?.manifesto || '',
    pagador: '',
    remetente: '',
    cidadeOrigem: '',
    destinatario: '',
    cidadeDestino: '',
    andamento: location.state?.formData?.andamento || '',
    ciaAerea: location.state?.formData?.nomeCiaAerea || '',
    motorista: '',
    nomeMotoista: location.state?.formData?.nomeMotoista || '',
    cpfMotoista: location.state?.formData?.cpfMotoista || '',
    placaVeiculo: location.state?.formData?.placaVeiculo || '',
    localSinistro: location.state?.formData?.localSinistro || '',
    statusProcesso: '',
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
    alert('Processo Seguradora salvo com sucesso!')
  }

  const handleImprimir = () => {
    window.print()
  }

  const handleExcluir = () => {
    if (window.confirm('Tem certeza que deseja excluir?')) {
      console.log('Processo Seguradora excluída')
    }
  }

  const handleVoltar = () => {
    navigate(-1)
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>Proc. Seguradora</S.Title>
        <S.NumberBadge>1</S.NumberBadge>
      </S.Header>

      <S.Content>
        {/* Dados Básicos */}
        <S.Section>
          <S.FormGrid>
            <S.FormGroup>
              <label>Segurado</label>
              <S.Input
                type="text"
                name="segurado"
                value={formData.segurado}
                onChange={handleInputChange}
                placeholder="Segurado"
              />
            </S.FormGroup>

            <S.FormGroup>
              <label>Nº da Apólice</label>
              <S.Input
                type="text"
                name="numeroApolice"
                value={formData.numeroApolice}
                onChange={handleInputChange}
                placeholder="Nº da Apólice"
              />
            </S.FormGroup>
          </S.FormGrid>
        </S.Section>

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
              <label>Valor embarcado</label>
              <S.InputWrapper>
                <S.CurrencySymbol>R$</S.CurrencySymbol>
                <S.Input
                  type="text"
                  name="valorEmbarcado"
                  value={formData.valorEmbarcado}
                  onChange={handleInputChange}
                  placeholder="0,00"
                />
              </S.InputWrapper>
            </S.FormGroup>

            <S.FormGroup>
              <label>Valor NF</label>
              <S.InputWrapper>
                <S.CurrencySymbol>R$</S.CurrencySymbol>
                <S.Input
                  type="text"
                  name="valorNF"
                  value={formData.valorNF}
                  onChange={handleInputChange}
                  placeholder="0,00"
                />
              </S.InputWrapper>
            </S.FormGroup>

            <S.FormGroup>
              <label>Estimativa de prejuízo</label>
              <S.InputWrapper>
                <S.CurrencySymbol>R$</S.CurrencySymbol>
                <S.Input
                  type="text"
                  name="estimativaPrejuizo"
                  value={formData.estimativaPrejuizo}
                  onChange={handleInputChange}
                  placeholder="0,00"
                />
              </S.InputWrapper>
            </S.FormGroup>

            <S.FormGroup>
              <label>Conhecimento</label>
              <S.Input
                type="text"
                name="conhecimento"
                value={formData.conhecimento}
                onChange={handleInputChange}
                placeholder="Conhecimento"
              />
            </S.FormGroup>

            <S.FormGroup>
              <label>Manifesto</label>
              <S.Input
                type="text"
                name="manifesto"
                value={formData.manifesto}
                onChange={handleInputChange}
                placeholder="Manifesto"
              />
            </S.FormGroup>
          </S.FormGrid>
        </S.Section>

        {/* Dados da entrega */}
        <S.Section>
          <S.SectionTitle>Dados da entrega</S.SectionTitle>
          <S.FormGrid>
            <S.FormGroup>
              <label>Pagador</label>
              <S.Input
                type="text"
                name="pagador"
                value={formData.pagador}
                onChange={handleInputChange}
                placeholder="Pagador"
              />
            </S.FormGroup>

            <S.FormGroup>
              <label>Remetente</label>
              <S.Input
                type="text"
                name="remetente"
                value={formData.remetente}
                onChange={handleInputChange}
                placeholder="Remetente"
              />
            </S.FormGroup>

            <S.FormGroup>
              <label>Cidade origem</label>
              <S.Input
                type="text"
                name="cidadeOrigem"
                value={formData.cidadeOrigem}
                onChange={handleInputChange}
                placeholder="Cidade origem"
              />
            </S.FormGroup>

            <S.FormGroup>
              <label>Destinatário</label>
              <S.Input
                type="text"
                name="destinatario"
                value={formData.destinatario}
                onChange={handleInputChange}
                placeholder="Destinatário"
              />
            </S.FormGroup>

            <S.FormGroup>
              <label>Cidade destino</label>
              <S.Input
                type="text"
                name="cidadeDestino"
                value={formData.cidadeDestino}
                onChange={handleInputChange}
                placeholder="Cidade destino"
              />
            </S.FormGroup>
          </S.FormGrid>
        </S.Section>

        {/* Andamento */}
        <S.Section>
          <S.SectionTitle>Andamento</S.SectionTitle>
          <S.FormGroup>
            <S.TextArea
              name="andamento"
              value={formData.andamento}
              onChange={handleInputChange}
              placeholder="Observações sobre o andamento"
              rows={4}
            />
          </S.FormGroup>
        </S.Section>

        {/* Informações complementares */}
        <S.Section>
          <S.SectionTitle>Informações complementares</S.SectionTitle>
          <S.FormGrid>
            <S.FormGroup>
              <label>Cia. Aérea</label>
              <S.Input
                type="text"
                name="ciaAerea"
                value={formData.ciaAerea}
                onChange={handleInputChange}
                placeholder="Cia. Aérea"
              />
            </S.FormGroup>

            <S.FormGroup>
              <label>Motorista</label>
              <S.Input
                type="text"
                name="motorista"
                value={formData.motorista}
                onChange={handleInputChange}
                placeholder="Motorista"
              />
            </S.FormGroup>

            <S.FormGroup>
              <label>Nome do motorista</label>
              <S.Input
                type="text"
                name="nomeMotoista"
                value={formData.nomeMotoista}
                onChange={handleInputChange}
                placeholder="Nome do motorista"
              />
            </S.FormGroup>

            <S.FormGroup>
              <label>CPF do motorista</label>
              <S.Input
                type="text"
                name="cpfMotoista"
                value={formData.cpfMotoista}
                onChange={handleInputChange}
                placeholder="CPF do motorista"
              />
            </S.FormGroup>

            <S.FormGroup>
              <label>Placa do veículo</label>
              <S.Input
                type="text"
                name="placaVeiculo"
                value={formData.placaVeiculo}
                onChange={handleInputChange}
                placeholder="Placa do veículo"
              />
            </S.FormGroup>

            <S.FormGroup>
              <label>Local do sinistro</label>
              <S.Input
                type="text"
                name="localSinistro"
                value={formData.localSinistro}
                onChange={handleInputChange}
                placeholder="Local do sinistro"
              />
            </S.FormGroup>
          </S.FormGrid>
        </S.Section>

        {/* Finalização */}
        <S.Section>
          <S.SectionTitle>Finalização</S.SectionTitle>
          <S.FormGrid>
            <S.FormGroup>
              <label>Status do processo</label>
              <S.Input
                type="text"
                name="statusProcesso"
                value={formData.statusProcesso}
                onChange={handleInputChange}
                placeholder="Status do processo"
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
