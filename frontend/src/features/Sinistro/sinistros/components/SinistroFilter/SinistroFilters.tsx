import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import Botao from '../../../../../components/Button'

interface Filtros {
  numero: string
  notafiscal: string
  dataAbertura: string
  cliente: string
  status: string
  Submenus: string
  motivo: string
  segmento: string
  responsavel: string
}

interface SinistroFiltersProps {
  onFiltrarChange: (filtros: Filtros) => void
}

export default function SinistroFilters({ onFiltrarChange }: SinistroFiltersProps) {
  const navigate = useNavigate()
  const [filtros, setFiltros] = useState<Filtros>({
  numero: '',
  notafiscal: '',
  dataAbertura: '',
  cliente: '',
  status: '',
  Submenus: '',
  motivo: '',
  segmento: '',
  responsavel: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    const novosFiltros = { ...filtros, [name]: value }
    setFiltros(novosFiltros)
  }

  const handleFiltrar = () => {
    onFiltrarChange(filtros)
  }

  const handleLimpar = () => {
    const filtrosLimpos = {
    numero: '',
    notafiscal: '',
    dataAbertura: '',
    cliente: '',
    status: '',
    Submenus: '',
    motivo: '',
    segmento: '',
    responsavel: '',
    }
    setFiltros(filtrosLimpos)
    onFiltrarChange(filtrosLimpos)
  }

  return (
    <S.FilterContainer>
      
      <S.ContainerTitulo>
      <h2>Cadastro de sinistros</h2>
      <Botao type={"button"} title={"Novo sinistro"} onClick={() => navigate('/sinistro/novo')}>+ Novo sinistro</Botao>
      </S.ContainerTitulo>
      
      <S.FilterGroup>
        <S.FilterInput
          type="text"
          name="numero"
          placeholder="Número do Sinistro"
          value={filtros.numero}
          onChange={handleInputChange}
        />

        <S.FilterInput
          type="text"
          name="nota"
          placeholder="Nosta Fiscal"
          value={filtros.notafiscal}
          onChange={handleInputChange}
        />

        <S.FilterInput
          type="date"
          name="dataAbertura"
          value={filtros.dataAbertura}
          onChange={handleInputChange}
        />

        <S.FilterInput
          type="text"
          name="cliente"
          placeholder="Nome do Cliente"
          value={filtros.cliente}
          onChange={handleInputChange}
        />

        <S.FilterSelect
          name="status"
          value={filtros.status}
          onChange={handleInputChange}
        >
          <option value="">Selecione o Status</option>
          <option value="aberto">Aberto</option>
          <option value="em_analise">Em Análise</option>
          <option value="fechado">Fechado</option>
          <option value="rejeitado">Rejeitado</option>
        </S.FilterSelect>

        <S.FilterSelect
          name="Submenus"
          value={filtros.Submenus}
          onChange={handleInputChange}
        >
          <option value="sinistro">Sinistro</option>
          <option value="seguradora">Seguradora</option>
          <option value="parceiro">Parceiro</option>
          </S.FilterSelect>

        <S.FilterInput
          type="text"
          placeholder="Motivo"
          name="motivo"
          value={filtros.motivo}
          onChange={handleInputChange}
        />

        <S.FilterInput
          type="text"
          name="segmento"
          placeholder="Segmento"
          value={filtros.segmento}
          onChange={handleInputChange}
        />

        <S.FilterInput
          type="text"
          name="responsavel"
          placeholder="Responsável"
          value={filtros.responsavel}
          onChange={handleInputChange}
        />
      </S.FilterGroup>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '20px' }}>
        <S.FilterButton onClick={handleFiltrar}>Filtrar</S.FilterButton>
        <S.FilterButton secundario onClick={handleLimpar}>Limpar Filtros</S.FilterButton>
      </div>
    </S.FilterContainer>
  )
}
