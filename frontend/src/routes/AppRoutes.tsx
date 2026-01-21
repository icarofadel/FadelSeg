import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Sinistro from '../pages/Sinistro'
import NovoCadastroSinistro from '../features/Sinistro/sinistros/pages/Sinistro/NovoCadastroSinistro'
import NovaPagina from '../features/Sinistro/sinistros/pages/NCParceiro/NCParceiro'

function AppRoutes() {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sinistro" element={<Sinistro />} />
        <Route path="/sinistro/novo" element={<NovoCadastroSinistro />} />
        <Route path="/sinistro/nc-parceiro" element={<NovaPagina />} />
    </Routes>
    )
}

export default AppRoutes
