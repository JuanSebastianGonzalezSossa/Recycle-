import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { JournalRoutes } from "../recycle/routes/JournalRoutes";



export const AppRouter = () => {
    return (
            <Routes>

                {/* Login y Registro */}
                <Route exact path="/auth/*" element={<AuthRoutes />} />

                {/* Recycle  */}
               <Route exact path="/*" element={<JournalRoutes />} />

            </Routes>
    )
}