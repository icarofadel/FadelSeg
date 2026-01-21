import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import * as A from '../../../../../styles'
import Botao from '../../../../../components/Button'

type TipoComplementar = 'ciaAerea' | 'motorista' | null

interface FormData {
  dataOcorrencia: string
  notafiscal: string
  cliente: string
  segmento: string
  motivo: string
  valorSinistro: string
  responsavel1: string
  responsavel2: string
  andamento: string
  nomeCiaAerea: string
  numeroAwb: string
  nomeMotoista: string
  cpfMotoista: string
  placaVeiculo: string
  manifesto: string
  localSinistro: string
  entregaFinanceiro: boolean
  dataEntrega: string
}

// Função para formatar CPF
const formatarCPF = (valor: string): string => {
  const apenasNumeros = valor.replace(/\D/g, '')
  return apenasNumeros.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}

// Função para remover máscara de CPF
const removerMascaraCPF = (valor: string): string => {
  return valor.replace(/\D/g, '')
}

// Função para formatar valor em moeda
const formatarMoeda = (valor: string): string => {
  const apenasNumeros = valor.replace(/\D/g, '')
  const numeroFormatado = (parseInt(apenasNumeros || '0') / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
  return numeroFormatado
}

// Função para remover formatação de moeda
const removerFormatacaoMoeda = (valor: string): string => {
  return valor.replace(/\D/g, '')
}

export default function NovoCadastroSinistro() {
  const navigate = useNavigate()
  const [tipoComplementar, setTipoComplementar] = useState<TipoComplementar>(null)
  const [formData, setFormData] = useState<FormData>({
    dataOcorrencia: '',
    notafiscal: '',
    cliente: '',
    segmento: '',
    motivo: '',
    valorSinistro: '',
    responsavel1: '',
    responsavel2: '',
    andamento: '',
    nomeCiaAerea: '',
    numeroAwb: '',
    nomeMotoista: '',
    cpfMotoista: '',
    placaVeiculo: '',
    manifesto: '',
    localSinistro: '',
    entregaFinanceiro: false,
    dataEntrega: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const inputElement = e.target as HTMLInputElement
    
    let novoValor: any = value
    
    // Aplicar máscara de CPF
    if (name === 'cpfMotoista') {
      novoValor = formatarCPF(value)
    }
    
    // Aplicar formatação de moeda
    if (name === 'valorSinistro') {
      novoValor = value
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? inputElement.checked : novoValor,
    }))
  }

  const handleTipoComplementar = (tipo: TipoComplementar) => {
    setTipoComplementar(tipo)
  }

  const handleSalvar = () => {
    console.log('Salvando novo sinistro:', formData)
    alert('Sinistro cadastrado com suceAo!')
    navigate('/sinistro')
  }

  const handleImprimir = () => {
    window.print()
  }

  const handleExcluir = () => {
    if (window.confirm('Tem certeza que deseja excluir este formulário?')) {
      navigate('/sinistro')
    }
  }

  const handleVoltar = () => {
    navigate('/sinistro')
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>Cadastro de Novo Sinistro</S.Title>
        <S.SinistroId>ID do sinistro: <span>1</span></S.SinistroId>
      </S.Header>

      <S.Content>
        {/* Informações do Sinistro */}
        <S.FormSection>
          <S.SectionTitle>Informações do sinistro</S.SectionTitle>

          <S.FormGrid>
            <S.FormGroup>
              <S.Label>Data da ocorrência *</S.Label>
              <S.Input
                type="date"
                name="dataOcorrencia"
                value={formData.dataOcorrencia}
                onChange={handleInputChange}
              />
            </S.FormGroup>

            <S.FormGroup>
              <S.Label>Nota Fiscal</S.Label>
              <S.Input
                type="text"
                name="notafiscal"
                value={formData.notafiscal}
                onChange={handleInputChange}
                placeholder="NF-001"
              />
            </S.FormGroup>

            <S.FormGroup>
              <S.Label>Nome do cliente *</S.Label>
              <S.Input
                type="text"
                name="cliente"
                value={formData.cliente}
                onChange={handleInputChange}
                placeholder="Nome completo"
              />
            </S.FormGroup>

            <S.FormGroup>
              <S.Label>Segmento</S.Label>
              <S.Input
                type="text"
                name="segmento"
                value={formData.segmento}
                onChange={handleInputChange}
                placeholder="Ex: Automóvel, Residencial"
              />
            </S.FormGroup>
          </S.FormGrid>

          <S.FormGrid>
            <S.FormGroup>
              <S.Label>Motivo</S.Label>
              <S.Input
                type="text"
                name="motivo"
                value={formData.motivo}
                onChange={handleInputChange}
                placeholder="Ex: Roubo, Acidente"
              />
            </S.FormGroup>

            <S.FormGroup>
              <S.Label>Valor do sinistro</S.Label>
              <S.InputWrapper>
                <S.CurrencySymbol>R$</S.CurrencySymbol>
                <S.Input
                  type="text"
                  name="valorSinistro"
                  value={formData.valorSinistro}
                  onChange={(e) => {
                    const apenasNumeros = removerFormatacaoMoeda(e.target.value)
                    setFormData(prev => ({
                      ...prev,
                      valorSinistro: apenasNumeros,
                    }))
                  }}
                  onBlur={(e) => {
                    const valor = removerFormatacaoMoeda(e.target.value)
                    if (valor) {
                      const valorFormatado = formatarMoeda(valor)
                      setFormData(prev => ({
                        ...prev,
                        valorSinistro: valorFormatado,
                      }))
                    }
                  }}
                  placeholder="0,00"
                  style={{ paddingLeft: '40px' }}
                />
              </S.InputWrapper>
            </S.FormGroup>
          </S.FormGrid>
        </S.FormSection>

        {/* Responsabilidade */}
        <S.FormSection>
          <S.SectionTitle>Responsabilidade</S.SectionTitle>

          <S.FormGrid>
            <S.FormGroup>
              <S.Label>Responsável 1</S.Label>
              <S.Input
                type="text"
                name="responsavel1"
                value={formData.responsavel1}
                onChange={handleInputChange}
                placeholder="Nome do responsável"
              />
            </S.FormGroup>

            <S.FormGroup>
              <S.Label>Responsável 2</S.Label>
              <S.Input
                type="text"
                name="responsavel2"
                value={formData.responsavel2}
                onChange={handleInputChange}
                placeholder="Nome do responsável"
              />
            </S.FormGroup>
          </S.FormGrid>

          <S.ActionButtons>
            <S.ActionButton onClick={() => navigate('/sinistro/nc-parceiro', { state: { formData } })}>Gerar NC Parceiro</S.ActionButton>
            <S.ActionButton onClick={() => navigate('/sinistro/proc-seguradora', { state: { formData } })}>Gerar proc. seguradora</S.ActionButton>
          </S.ActionButtons>
        </S.FormSection>

        {/* Andamento */}
        <S.FormSection>
          <S.SectionTitle>Andamento</S.SectionTitle>

          <S.FormGroup>
            <S.Label>Observações</S.Label>
            <S.TextArea
              name="andamento"
              value={formData.andamento}
              onChange={handleInputChange}
              placeholder="Adicione observações sobre o progreAo do sinistro"
              rows={4}
            />
          </S.FormGroup>
        </S.FormSection>

        {/* Informações Complementares */}
        <S.FormSection>
          <S.SectionTitle>Informações complementares</S.SectionTitle>

          <S.CheckboxGroup>
            <S.CheckboxLabel>
              <S.Checkbox
                type="radio"
                name="tipoComplementar"
                checked={tipoComplementar === 'ciaAerea'}
                onChange={() => handleTipoComplementar('ciaAerea')}
              />
              Cia. Aérea
            </S.CheckboxLabel>

            <S.CheckboxLabel>
              <S.Checkbox
                type="radio"
                name="tipoComplementar"
                checked={tipoComplementar === 'motorista'}
                onChange={() => handleTipoComplementar('motorista')}
              />
              Motorista
            </S.CheckboxLabel>

            <S.CheckboxLabel>
              <S.Checkbox
                type="radio"
                name="tipoComplementar"
                checked={tipoComplementar === null}
                onChange={() => handleTipoComplementar(null)}
              />
              Nenhum
            </S.CheckboxLabel>
          </S.CheckboxGroup>

          {tipoComplementar === 'ciaAerea' && (
            <S.FormGrid>
              <S.FormGroup>
                <S.Label>Nome da Cia. Aérea</S.Label>
                <S.Input
                  type="text"
                  name="nomeCiaAerea"
                  value={formData.nomeCiaAerea}
                  onChange={handleInputChange}
                  placeholder="Nome da companhia aérea"
                />
              </S.FormGroup>

              <S.FormGroup>
                <S.Label>Número do AWB</S.Label>
                <S.Input
                  type="text"
                  name="numeroAwb"
                  value={formData.numeroAwb}
                  onChange={handleInputChange}
                  placeholder="Número do Air Waybill"
                />
              </S.FormGroup>
            </S.FormGrid>
          )}

          {tipoComplementar === 'motorista' && (
            <S.FormGrid>
              <S.FormGroup>
                <S.Label>Nome do motorista</S.Label>
                <S.Input
                  type="text"
                  name="nomeMotoista"
                  value={formData.nomeMotoista}
                  onChange={handleInputChange}
                  placeholder="Nome completo"
                />
              </S.FormGroup>

              <S.FormGroup>
                <S.Label>CPF do motorista</S.Label>
                <S.Input
                  type="text"
                  name="cpfMotoista"
                  value={formData.cpfMotoista}
                  onChange={handleInputChange}
                  placeholder="000.000.000-00"
                />
              </S.FormGroup>

              <S.FormGroup>
                <S.Label>Placa do veículo</S.Label>
                <S.Input
                  type="text"
                  name="placaVeiculo"
                  value={formData.placaVeiculo}
                  onChange={handleInputChange}
                  placeholder="ABC-1234"
                />
              </S.FormGroup>

              <S.FormGroup>
                <S.Label>Manifesto</S.Label>
                <S.Input
                  type="text"
                  name="manifesto"
                  value={formData.manifesto}
                  onChange={handleInputChange}
                  placeholder="Número do manifesto"
                />
              </S.FormGroup>
            </S.FormGrid>
          )}

          {tipoComplementar === 'motorista' && (
            <S.FormGroup>
              <S.Label>Local do sinistro</S.Label>
              <S.Input
                type="text"
                name="localSinistro"
                value={formData.localSinistro}
                onChange={handleInputChange}
                placeholder="Endereço completo"
              />
            </S.FormGroup>
          )}
        </S.FormSection>

        {/* Finalização */}
        <S.FormSection>
          <S.SectionTitle>Finalização</S.SectionTitle>

          <S.CheckboxLabel>
            <S.Checkbox
              type="checkbox"
              name="entregaFinanceiro"
              checked={formData.entregaFinanceiro}
              onChange={handleInputChange}
            />
            Entrega no financeiro
          </S.CheckboxLabel>

          <S.FormGroup>
            <S.Label>Data da entrega</S.Label>
            <S.Input
              type="date"
              name="dataEntrega"
              value={formData.dataEntrega}
              onChange={handleInputChange}
            />
          </S.FormGroup>
        </S.FormSection>
      </S.Content>

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
    </S.Container>
  )
}
