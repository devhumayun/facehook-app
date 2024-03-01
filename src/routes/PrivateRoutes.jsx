import { Navigate, Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import { useAuth } from '../hooks/useAuth'
import ProfileProvider from '../provider/ProfileProvider'

const PrivateRoutes = () => {

    const { auth } = useAuth()

    return (
        <>
            <ProfileProvider>
                <Header />
                {
                    auth?.user ? (
                        <main className='mx-auto max-w-[1020px] py-8'>
                            <div className='container'>
                                <Outlet />
                            </div>
                        </main>
                    ) : (
                        <Navigate to="/login" />
                    )
                }
            </ProfileProvider>
        </>
    )
}

export default PrivateRoutes
