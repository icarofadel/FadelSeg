import Botao from "../../../../../components/Button"
import * as S from "./styles"

const SinistroSearch = () => {
    return (
        <>
        <S.Fundo>
            <S.ContainerTitulo>
                <h2>Cadastro de Sinistros</h2>
                <Botao type={"button"} title={"Novo sinistro"}>+ Novo sinistro</Botao>
            </S.ContainerTitulo>
                <S.ContainerInputs> 
                    <S.FilterItem>
                        <label>
                            Nº do Sinistro
                        </label>
                            <input type="number" />
                        </S.FilterItem>
                        <S.FilterItem>
                        <label>
                            Nota fiscal
                        </label>
                        <input type="number" />
                    </S.FilterItem>
                    <S.FilterItem>
                        <label>
                            Data de abertura
                        </label>
                        <input type="date" />
                    </S.FilterItem>
                    <S.FilterItem>
                        <label>
                            Cliente
                        </label>
                        <input type="text" />
                    </S.FilterItem>
                        <S.FilterItem>
                        <label>
                            Submenus
                        </label>
                        <select>
                            <option value="">Sinistro</option>
                            <option value="">Seguro</option>
                            <option value="">Parceiro</option>
                        </select>
                    </S.FilterItem>
                    <S.FilterItem>
                        <label>
                            Motivo
                        </label>
                        <input type="text" />
                    </S.FilterItem>
                    <S.FilterItem>
                        <label>
                            Segmento
                        </label>
                        <input type="text" />
                    </S.FilterItem>
                        <S.FilterItem>
                        <label>
                            Responsável
                        </label>
                        <input type="text" />
                    </S.FilterItem>
            </S.ContainerInputs>
            <div className="botao">
                <Botao type={"submit"} title={"Buscar"}>Buscar</Botao>
            </div>
        </S.Fundo>
        </>
    )
}

export default SinistroSearch