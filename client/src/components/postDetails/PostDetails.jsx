import { useParams } from "react-router-dom"

export const PostDetails = () => {
    const {postId} = useParams()
    
    return <h2>Post {postId}</h2>
}