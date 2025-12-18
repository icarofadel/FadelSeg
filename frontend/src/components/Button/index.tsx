import { ButtonLink, Buttons } from "./styles"

type Props = {
    type: 'button' | 'submit' | 'link'
    title: string
    to?: string
    onClick?: () => void
    children?: string
    className?: string 
}

const Botao = ({ type, title, to, onClick, children, className }: Props) => {
    if (type === 'button' || type === 'submit') {
        return (
            <Buttons
                type={type}
                title={title}
                onClick={onClick}
                className={className}
            >
                {children}
            </Buttons>
        )
    }

    return (
        <ButtonLink to={to as string} title={title} className={className}>
            {children}
        </ButtonLink>
    )
}

export default Botao