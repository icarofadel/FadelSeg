import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Sinistro from '../pages/Sinistro'
import NovoCadastroSinistro from '../features/Sinistro/sinistros/pages/NovoCadastroSinistro'

function AppRoutes() {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sinistro" element={<Sinistro />} />
        <Route path="/sinistro/novo" element={<NovoCadastroSinistro />} />
    </Routes>
    )
}

export default AppRoutes
