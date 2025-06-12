import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getPostById } from "../../managers/postManager"
import "./PostDetails.css"

export const PostDetails = ({loggedInUser}) => {
    const { postId } = useParams()
    const [post, setPost] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        getPostById(postId).then(setPost)
    }, [])

    return (
        <div className="post-details">
            <h1>{post.title}</h1>
            <h2>{post.subtitle}</h2>
            <div className="meta">Category {post.category?.name} • Posted by "{post.userProfile?.firstName} {post.userProfile?.lastName}"</div>
            <img src={post.HeaderImage} alt="Post Header Image" />
            <div className="body">
                {post.body}
            </div>
            {loggedInUser.id == post.userId && <button onClick={() => {}}>Edit</button>}
        </div>
    )
}