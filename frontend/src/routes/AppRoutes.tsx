import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Sinistro from '../pages/Sinistro'
import NovoCadastroSinistro from '../features/pages/Sinistro/NovoCadastroSinistro'
import NovaPagina from '../features/pages/NCParceiro/NCParceiro'
import ProcSeguradora from '../features/pages/Seguradora/ProcSeguradora'

function AppRoutes() {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sinistro" element={<Sinistro />} />
        <Route path="/sinistro/novo" element={<NovoCadastroSinistro />} />
        <Route path="/sinistro/nc-parceiro" element={<NovaPagina />} />
        <Route path="/sinistro/proc-seguradora" element={<ProcSeguradora />} />
    </Routes>
    )
}

export default AppRoutes
