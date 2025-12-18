import * as S from './styles'
import Botao from '../Button'

const Header = () => (
    <>
        <S.HeaderContainer>
            <img src="https://placehold.co/150x50" alt="FadelSeg" />
            <Botao type={'button'} title={'Cadastro de Sinistro'}>Sinistro</Botao>
            <Botao type={'button'} title={'Cadastro de Seguro'}>Seguro</Botao>
            <Botao type={'button'} title={'Relatórios'}>Relatórios</Botao>
            <Botao type={'button'} title={'Dashboard'}>Dashboard</Botao>
            <img src="https://placehold.co/50x50" alt="Usuário" />
        </S.HeaderContainer>
    </>
)

export default Header