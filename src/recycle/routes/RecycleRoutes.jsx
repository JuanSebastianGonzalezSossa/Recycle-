import { Navigate, Route, Routes } from "react-router-dom"
import { RecyclePage } from "../pages/RecyclePage"
import { RecycleSettings } from "../pages/RecycleSettings"
import { RegistrarReciclaje } from "../pages/RegistrarReciclaje"


export const RecycleRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <RecyclePage /> } />
        <Route path="/RegistrarReciclaje/:id/:nombreDirector/:numEstudiantes" element={ <RegistrarReciclaje /> } />
        <Route path="/RegistrarReciclaje/Configuracion/:id/:nombreDirector/:numEstudiantes" element={ <RecycleSettings /> } />
        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
