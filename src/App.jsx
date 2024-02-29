import { Route, Routes } from 'react-router-dom'
import Notfound from './pages/Notfound'
import HopePage from './pages/home/HopePage'
import LoginPage from './pages/login/LoginPage'
import ProfilePage from './pages/profile/ProfilePage'
import RegisterPage from './pages/register/RegisterPage'

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<HopePage />} path='/' />
        <Route element={<LoginPage />} path='/login' />
        <Route element={<RegisterPage />} path='/register' />
        <Route element={<ProfilePage />} path='/me' />
        <Route element={<Notfound />} path='*' />
      </Routes>
    </>
  )
}