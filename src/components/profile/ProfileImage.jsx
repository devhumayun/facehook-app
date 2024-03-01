import { useRef } from 'react'
import { actions } from '../../actions/actions'
import EditSvg from '../../assets/icons/edit.svg'
import { useAxios } from '../../hooks/useAxios'
import { useProfile } from '../../hooks/useProfile'


const ProfileImage = () => {
    const { state, dispatch } = useProfile()
    const profileImageRef = useRef()
    const { api } = useAxios()

    const handleImageUpload = (e) => {
        e.preventDefault()
        profileImageRef.current.addEventListener("change", updateProfileImage)
        profileImageRef.current.click()
    }

    const updateProfileImage = async () => {
        try {
            const formData = new FormData()
            for (const file of profileImageRef.current.files) {
                formData.append("avatar", file)
            }

            const response = await api.post(
                `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${state?.user?.id
                }/avatar`,
                formData
            );

            if (response.status === 200) {
                dispatch({
                    type: actions.profile.IMAGE_UPDATED,
                    data: response.data
                })
            }

        } catch (err) {
            dispatch({
                type: actions.profile.DATA_FETCH_ERROR,
                error: err.message
            })
        }
    }

    return (
        <div
            className="relative mb-8 max-h-[180px] max-w-[180px] lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]"
        >
            <img
                className="h-[200px] w-[200px] rounded-full object-cover"
                src={`${import.meta.env.VITE_SERVER_BASE_URL}/${state?.user?.avatar
                    }`}
                alt={state?.user?.firstName}
            />

            <form action="">
                <button
                    className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
                    onClick={handleImageUpload}
                >
                    <img src={EditSvg} alt="Edit" />
                </button>
                <input type="file" id='file' hidden ref={profileImageRef} />
            </form>

        </div>
    )
}

export default ProfileImage
