
import { Link, NavLink } from 'react-router-dom'
import HomeSvg from '../../assets/icons/home.svg'
import Notification from '../../assets/icons/notification.svg'
import Logo from '../../assets/images/logo.svg'
import { useAuth } from '../../hooks/useAuth'
import { useProfile } from '../../hooks/useProfile'
import Logout from '../auth/Logout'


const Header = () => {

    const { auth } = useAuth()
    const { state } = useProfile()
    const user = state?.user ?? auth?.user

    return (
        <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
            <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
                <NavLink to="/">
                    <img className="max-w-[100px] rounded-full lg:max-w-[130px]" src={Logo} />
                </NavLink>

                <div className="flex items-center space-x-4">
                    <Link to="/" className="btn-primary">
                        <img src={HomeSvg} alt="Home" />
                        Home
                    </Link>
                    <button className="icon-btn">
                        <img src={Notification} alt="Notification" />
                    </button>
                    <Logout />
                    <button className="flex-center !ml-8 gap-3">
                        <Link to="/me" className='flex justify-center items-center gap-2'>
                            <span className="text-lg font-medium lg:text-xl">{user?.firstName} {user?.lastName}</span>
                            <img
                                className="w-[40px] h-[40px] rounded-full object-cover"
                                src={`${import.meta.env.VITE_SERVER_BASE_URL}/${user?.avatar
                                    }`}
                                alt="avatar"
                            />
                        </Link>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Header
