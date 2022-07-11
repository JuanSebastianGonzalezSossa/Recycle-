import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'


export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />

      <Route path='/*' element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}