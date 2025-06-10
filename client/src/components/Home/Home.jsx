import { useEffect, useState } from "react"
import "./Home.css"
import { getAllPosts } from "../../managers/postManager"
import { getAllUserProfiles } from "../../managers/userProfileManager"

export const Home = () => {
    const [latestPosts, setLatestPosts] = useState([])
    const [bigPost, setBigPost] = useState({})
    const [latestAuthors, setLatestAuthors] = useState([])

    useEffect(() => {
        getAllPosts().then((posts) => {
            const sortedPosts = posts.sort((a, b) => new Date(b.PublishingDate) - new Date(a.PublishingDate))
            setLatestPosts(sortedPosts.slice(1, 4))
            setBigPost(sortedPosts.shift())
        })

        getAllUserProfiles().then(profiles => {
            const sortedProfiles = profiles.sort((a, b) => new Date(b.createDateTime) - new Date(a.createDateTime))
            setLatestAuthors(sortedProfiles.slice(0, 4))
        })
    }, [])


    return (
        <div className="home-container">
            <div className="posts-container">
                <div className="big-post">
                    <div className="post-card">
                        {bigPost?.headerImage && (
                            <img
                                src={bigPost?.headerImage}
                                alt={bigPost?.title || "Post image"}
                                className="post-card-image"
                            />
                        )}
                        <div className="post-card-content">
                            <h2 className="post-title">{bigPost?.title || "Untitled"}</h2>
                            <h3 className="post-subtitle">{bigPost?.subTitle || "No subtitle"}</h3>
                            <p className="post-date">
                                {"Published: "}
                                {bigPost?.publishingDate
                                    ? new Date(bigPost.publishingDate).toLocaleDateString()
                                    : "Unknown"}
                            </p>
                            <div className="post-meta">
                                <p><strong>Author Name:</strong> {bigPost?.userProfile?.firstName ?? "N/A"}</p>
                                <p><strong>Category:</strong> {bigPost?.category?.name ?? "N/A"}</p>
                            </div>
                            <p className="post-body">{bigPost?.body || "No content available."}</p>
                        </div>
                    </div>
                </div>
                <div className="multi-sml-posts">
                    {latestPosts.map((post) => (
                        <div className="post-card small" key={post.id}>
                            {post?.headerImage && (
                                <img
                                    src={post?.headerImage}
                                    alt={post?.title || "Post image"}
                                    className="post-card-image"
                                />
                            )}
                            <div className="post-card-content">
                                <h2 className="post-title">{post?.title || "Untitled"}</h2>
                                <h3 className="post-subtitle">{post?.subTitle || "No subtitle"}</h3>
                                <p className="post-date">
                                    {"Published: "}
                                    {post?.publishingDate
                                        ? new Date(post.publishingDate).toLocaleDateString()
                                        : "Unknown"}
                                </p>
                                <div className="post-meta">
                                    <p><strong>Author Name:</strong> {post?.userProfile?.firstName ?? "N/A"}</p>
                                    <p><strong>Category:</strong> {post?.category?.name ?? "N/A"}</p>
                                </div>
                                <p className="post-body">{post?.body || "No content available."}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="authors partial-border-image">
                {latestAuthors.map(a => <div>
                    <h2>{a.userName}</h2>
                    {a.createDateTime ? (<h2>Joined on: {new Date(a.createDateTime).toLocaleDateString()}</h2>) : null}
                </div>)}
            </div>
        </div>
    )
}