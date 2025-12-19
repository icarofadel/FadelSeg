import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Sinistro from '../pages/Sinistro'

function AppRoutes() {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sinistro" element={<Sinistro />} />
    </Routes>
    )
}

export default AppRoutes
