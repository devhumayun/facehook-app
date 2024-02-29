import { useNavigate } from 'react-router-dom'
import logout from '../../assets/icons/logout.svg'

const Logout = () => {
    const navigate = useNavigate()
    // fake logout
    const handleLogout = () => {
        navigate("/login")
    }

    return (
        <button onClick={handleLogout} className="icon-btn">
            <img src={logout} alt="Logout" />
        </button>
    )
}

export default Logout
