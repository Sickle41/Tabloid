import { useEffect, useState } from "react"
import "./Home.css"

export const Home = () => {
    const [latestPosts, setLatestPosts] = useState([])
    const [latestAuthors, setLatestAuthors] = useState([])

    useEffect(() => {
        ().then(setLatestPosts)
        ().then(setLatestAuthors)
    }, [])

    return (
        <div className="home-container">
            <div className="posts-container">
                <div className="big-post">
                    big one
                </div>
                <div className="multi-sml-posts">
                    three small ones
                </div>
            </div>
            <div className="authors partial-border-image">
                Authors
            </div>
        </div>
    )
}