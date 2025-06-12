import { useEffect, useState } from "react"
import { getAllPosts } from "../../managers/postManager"
import "./AllPosts.css"

export const AllPosts = () => {
    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        getAllPosts().then(setAllPosts)
    }, [])

    return (
        <div>
            <h2>All Posts</h2>
            {allPosts.map(p => <div className="post-container" key={p.id}>
                <h3>{p.title}</h3>
                <span>{"Author: "} <h4>{p.userProfile?.firstName ?? "NA"}</h4></span>
                <span>{"Category: "}<h4>{p.category?.name ?? "NA"}</h4></span>
            </div>)}
        </div>
    )
}