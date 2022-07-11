import { Navigate, Route, Routes } from "react-router-dom"
import { SalonesPage } from "../pages/SalonesPage"


export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <SalonesPage /> } />

        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
