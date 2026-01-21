import { useState, useEffect } from 'react'
import SinistroFilters from '../SinistroFilter/SinistroFilters'
import {
  TableContainer,
  TableHeader,
  StyledTable,
  StatusBadge,
  TipoBadge,
  AcoesContainer,
  BotaoAcao,
  LoadingContainer,
  ErrorContainer,
  EmptyStateContainer,
  PaginationContainer,
} from './styles'

interface Sinistro {
  id: number
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

// Dados mockados - Substituir pela chamada à API quando o backend estiver pronto
const SINISTROS_MOCK: Sinistro[] = [
  {
    id: 1,
    numero: 'SIN-2024-001',
    notafiscal: 'NF-001',
    dataAbertura: '2024-01-15',
    cliente: 'João Silva',
    status: 'em_analise',
    Submenus: 'sinistro',
    motivo: 'Roubo de veículo',
    segmento: 'Automóvel',
    responsavel: 'Carlos',
  },
  {
    id: 2,
    numero: 'SIN-2024-002',
    notafiscal: 'NF-002',
    dataAbertura: '2024-01-18',
    cliente: 'Maria Santos',
    status: 'aberto',
    Submenus: 'sinistro',
    motivo: 'Acidente de trânsito',
    segmento: 'Automóvel',
    responsavel: 'Ana',
  },
  {
    id: 3,
    numero: 'SIN-2024-003',
    notafiscal: 'NF-003',
    dataAbertura: '2024-01-20',
    cliente: 'Pedro Costa',
    status: 'fechado',
    Submenus: 'seguradora',
    motivo: 'Vandalismo',
    segmento: 'Residencial',
    responsavel: 'Pedro',
  },
  {
    id: 4,
    numero: 'SIN-2024-004',
    notafiscal: 'NF-004',
    dataAbertura: '2024-01-22',
    cliente: 'Ana Oliveira',
    status: 'rejeitado',
    Submenus: 'parceiro',
    motivo: 'Dano material',
    segmento: 'Comercial',
    responsavel: 'Lucas',
  },
  {
    id: 5,
    numero: 'SIN-2024-005',
    notafiscal: 'NF-005',
    dataAbertura: '2024-01-25',
    cliente: 'Carlos Mendes',
    status: 'em_analise',
    Submenus: 'sinistro',
    motivo: 'Roubo de equipamentos',
    segmento: 'Comercial',
    responsavel: 'Mariana',
  },
]

export default function SinistroTable() {
  const [sinistros, setSinistros] = useState<Sinistro[]>(SINISTROS_MOCK)
  const [sinistrosFiltrados, setSinistrosFiltrados] = useState<Sinistro[]>(SINISTROS_MOCK)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [paginaAtual, setPaginaAtual] = useState(1)
  const [itensPorPagina] = useState(5)

  // Simular carregamento de dados do backend
  useEffect(() => {
    // Aqui você faria a chamada à API quando estiver pronta
  }, [])

  // Função para filtrar dados
  const handleFiltrar = (filtros: Filtros) => {
    setLoading(true)
    setPaginaAtual(1)

    // Simular delay de requisição
    setTimeout(() => {
      try {
        let resultados = [...sinistros]

        // Aplicar filtros
        if (filtros.numero) {
          resultados = resultados.filter(s =>
            s.numero.toLowerCase().includes(filtros.numero.toLowerCase())
          )
        }

        if (filtros.notafiscal) {
          resultados = resultados.filter(s =>
            s.notafiscal.toLowerCase().includes(filtros.notafiscal.toLowerCase())
          )
        }

        if (filtros.dataAbertura) {
          resultados = resultados.filter(s => s.dataAbertura === filtros.dataAbertura)
        }

        if (filtros.cliente) {
          resultados = resultados.filter(s =>
            s.cliente.toLowerCase().includes(filtros.cliente.toLowerCase())
          )
        }

        if (filtros.status) {
          resultados = resultados.filter(s => s.status === filtros.status)
        }

        if (filtros.Submenus) {
          resultados = resultados.filter(s => s.Submenus === filtros.Submenus)
        }

        if (filtros.motivo) {
          resultados = resultados.filter(s =>
            s.motivo.toLowerCase().includes(filtros.motivo.toLowerCase())
          )
        }

        if (filtros.segmento) {
          resultados = resultados.filter(s =>
            s.segmento.toLowerCase().includes(filtros.segmento.toLowerCase())
          )
        }

        if (filtros.responsavel) {
          resultados = resultados.filter(s =>
            s.responsavel.toLowerCase().includes(filtros.responsavel.toLowerCase())
          )
        }

        setSinistrosFiltrados(resultados)
        setError(null)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('Erro ao filtrar dados')
      } finally {
        setLoading(false)
      }
    }, 500)
  }

  // Calcular paginação
  const indexUltimo = paginaAtual * itensPorPagina
  const indexPrimeiro = indexUltimo - itensPorPagina
  const sinistrosPaginados = sinistrosFiltrados.slice(indexPrimeiro, indexUltimo)
  const totalPaginas = Math.ceil(sinistrosFiltrados.length / itensPorPagina)

  // Função para mudar de página
  const irParaPagina = (numeroPagina: number) => {
    setPaginaAtual(numeroPagina)
  }

  // Funções de ações
  const handleEditar = (id: number) => {
    console.log('Editar sinistro:', id)
  }

  const handleDeletar = (id: number) => {
    if (window.confirm('Tem certeza que deseja deletar este sinistro?')) {
      const novaLista = sinistros.filter(s => s.id !== id)
      setSinistros(novaLista)
      handleFiltrar({
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
    }
  }

  const handleVisualizar = (id: number) => {
    console.log('Visualizar sinistro:', id)
  }

  return (
    <div>
      <SinistroFilters onFiltrarChange={handleFiltrar} />

      {error && <ErrorContainer>{error}</ErrorContainer>}

      <TableContainer>
        <TableHeader>
          <h2>Sinistros Cadastrados</h2>
          <span>Total: {sinistrosFiltrados.length} registros</span>
        </TableHeader>

        {loading ? (
          <LoadingContainer>
            <p>Carregando dados...</p>
          </LoadingContainer>
        ) : sinistrosPaginados.length === 0 ? (
          <EmptyStateContainer>
            <p>Nenhum sinistro encontrado</p>
          </EmptyStateContainer>
        ) : (
          <>
            <StyledTable>
              <thead>
                <tr>
                  <th>Número</th>
                  <th>Nota Fiscal</th>
                  <th>Data Abertura</th>
                  <th>Cliente</th>
                  <th>Status</th>
                  <th>Tipo</th>
                  <th>Motivo</th>
                  <th>Segmento</th>
                  <th>Responsável</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {sinistrosPaginados.map(sinistro => (
                  <tr key={sinistro.id}>
                    <td>{sinistro.numero}</td>
                    <td>{sinistro.notafiscal}</td>
                    <td>{new Date(sinistro.dataAbertura).toLocaleDateString('pt-BR')}</td>
                    <td>{sinistro.cliente}</td>
                    <td>
                      <StatusBadge status={sinistro.status}>{sinistro.status}</StatusBadge>
                    </td>
                    <td>
                      <TipoBadge>{sinistro.Submenus}</TipoBadge>
                    </td>
                    <td>{sinistro.motivo}</td>
                    <td>{sinistro.segmento}</td>
                    <td>{sinistro.responsavel}</td>
                    <td>
                      <AcoesContainer>
                        <BotaoAcao onClick={() => handleVisualizar(sinistro.id)}>
                          Ver
                        </BotaoAcao>
                        <BotaoAcao tipo="editar" onClick={() => handleEditar(sinistro.id)}>
                          Editar
                        </BotaoAcao>
                        <BotaoAcao tipo="deletar" onClick={() => handleDeletar(sinistro.id)}>
                          Deletar
                        </BotaoAcao>
                      </AcoesContainer>
                    </td>
                  </tr>
                ))}
              </tbody>
            </StyledTable>

            {totalPaginas > 1 && (
              <PaginationContainer>
                <button
                  onClick={() => irParaPagina(paginaAtual - 1)}
                  disabled={paginaAtual === 1}
                >
                  Anterior
                </button>

                {Array.from({ length: totalPaginas }, (_, i) => i + 1).map(numero => (
                  <button
                    key={numero}
                    onClick={() => irParaPagina(numero)}
                    style={{
                      backgroundColor: paginaAtual === numero ? '#4D3EFC' : 'white',
                      color: paginaAtual === numero ? 'white' : '#4D3EFC',
                    }}
                  >
                    {numero}
                  </button>
                ))}

                <button
                  onClick={() => irParaPagina(paginaAtual + 1)}
                  disabled={paginaAtual === totalPaginas}
                >
                  Próxima
                </button>
              </PaginationContainer>
            )}
          </>
        )}
      </TableContainer>
    </div>
  )
}
