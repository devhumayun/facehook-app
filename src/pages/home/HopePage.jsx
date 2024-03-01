import { useAuth } from "../../hooks/useAuth";

const HopePage = () => {
    const { auth } = useAuth()

    return (
        <div>
            Home Page
            <br />
            {auth?.user?.firstName}
        </div>
    )
}

export default HopePage
