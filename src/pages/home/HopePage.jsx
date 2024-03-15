import { useEffect, useReducer } from "react";
import { actions } from "../../actions/actions";
import PostsList from "../../components/posts/PostsList";
import { useAxios } from "../../hooks/useAxios";
import { postReducer } from "../../reducer/PostReducer";

const HopePage = () => {

    const [state, dispatch] = useReducer(postReducer)
    const { api } = useAxios()

    useEffect(() => {
        dispatch({ type: actions.post.DATA_FETCHING })

        const fetchPostData = async () => {
            try {

                const response = await api.get(`${import.meta.env.VITE_SERVER_BASE_URL}/posts`)

                if (response) {
                    dispatch({
                        type: actions.post.DATA_FETCHED,
                        data: response.data
                    })
                }

            } catch (error) {
                console.error(error)
                dispatch({ type: actions.post.DATA_FETCH_ERROR })
            }
        }

        fetchPostData()
    }, [])

    return (

        <div>
            <PostsList posts={state?.posts} />
        </div>

    )
}

export default HopePage
