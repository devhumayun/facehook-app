import PostsCards from "./PostsCards"

const PostsList = ({ posts }) => {
    return (
        !!posts && posts.map((post) => <PostsCards key={post.id} post={post} />)
    )
}

export default PostsList
