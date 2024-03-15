import PostAction from "./PostAction"
import PostBody from "./PostBody"
import PostCommentsList from "./PostCommentsList"
import PostHeader from "./PostHeader"

const PostsCards = ({ post }) => {
    return (
        <article className="card mt-6 lg:mt-8">
            <PostHeader post={post} />
            <PostBody poster={post?.image} content={post?.content} />
            <PostAction post={post} commentCount={post?.comments?.length} />
            <PostCommentsList post={post} />
        </article>
    )
}

export default PostsCards
