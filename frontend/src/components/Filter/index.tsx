import type { ReactNode } from 'react'
import * as S from './styles'

interface FilterContainerProps {
    children: ReactNode
}

const FilterContainer = ({ children }: FilterContainerProps) => {
    return (
    <S.Container>
        {children}
    </S.Container>
    )
}

export default FilterContainer
