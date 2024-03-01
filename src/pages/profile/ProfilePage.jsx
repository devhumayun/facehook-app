import { useEffect } from "react"
import { actions } from "../../actions/actions"
import MyPost from "../../components/profile/MyPost"
import ProfileInfo from "../../components/profile/ProfileInfo"
import { useAuth } from "../../hooks/useAuth"
import { useAxios } from "../../hooks/useAxios"
import { useProfile } from "../../hooks/useProfile"
const ProfilePage = () => {
    const { state, dispatch } = useProfile()
    const { auth } = useAuth()
    const { api } = useAxios()

    useEffect(() => {
        dispatch({ type: actions.profile.DATA_FETCHING })
        const fetchUserData = async () => {
            try {
                const response = await api.get(`${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`)
                if (response.status === 200) {
                    dispatch({
                        type: actions.profile.DATA_FETCHED,
                        data: response.data
                    })
                }
            } catch (err) {
                console.log(err);
                dispatch({
                    type: actions.profile.DATA_FETCH_ERROR,
                    error: err.message
                })
            }
        }
        fetchUserData()
    }, []);

    if (state?.loading) {
        return <p>fetching user data ..</p>
    }

    return (
        <>
            <ProfileInfo />
            <MyPost />
        </>
    )
}

export default ProfilePage
