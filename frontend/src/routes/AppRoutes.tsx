import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Sinistros from '../pages/Sinistro'

function AppRoutes() {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sinistros" element={<Sinistros />} />
    </Routes>
    )
}

export default AppRoutes
