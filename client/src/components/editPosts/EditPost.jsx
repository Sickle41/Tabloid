import { useEffect, useState } from "react";

import { getCategories } from "../../managers/categoryManager.js";
import { useNavigate, useParams } from "react-router-dom";
import { getPostById, updatePost } from "../../managers/postManager.js";

export const EditPost = ()=> {
const [post, setPost] = useState({})
const [allCategories, setAllCategories] = useState([])
const {postId} = useParams()
const navigate = useNavigate()

useEffect(()=>{
    getPostById(postId).then(data=>{
        const postObj = data
        setPost(postObj)
    })
},[postId])

    
useEffect(()=>{
    getCategories().then(categoryArray=>{
        setAllCategories(categoryArray)
    })
},[])

const handleInputChange = (event) => {
        const stateCopy = {...post}
        stateCopy[event.target.name] = event.target.value
        setPost(stateCopy)
    }
const handleUpdateButton = (post)=> {
    const clone = structuredClone(post);
    updatePost(clone).then(navigate("/all-posts"))
}
    return(
        <div className="create-form">
            <h2>Edit Post</h2>
            <div>
                <h6>Title</h6>
            <input className="form-control" name="title" type="text" value={post.title ? post.title : ""}
            aria-label="default input example" onChange={handleInputChange}/>
            </div>
            <div>
                <h6>Sub Title</h6>
            <input className="form-control" name="subTitle" type="text" value={post.subTitle ? post.subTitle : ""}
            aria-label="default input example"onChange={handleInputChange}/>
            </div>
            <div>
                <h6>Category</h6>
            <select className="form-select" name="categoryId" aria-label="Default select example" value={post.categoryId}
            onChange={handleInputChange}>
                <option value="0">Select a Category</option>
                {allCategories.map(category=>
                <option value={category.id} key={category.id}>{category.name}</option>
                )}
            </select>
            </div>
            <div className="mb-3">
                <label className="form-label"><h6>Body</h6></label>
                <textarea className="form-control" name="body" value={post.body ? post.body : ""} id="exampleFormControlTextarea1" rows="3"
                onChange={handleInputChange}></textarea>
            </div>
            <div>
                <button onClick={()=>{handleUpdateButton(post)}}>Update Post</button>
            </div>
        </div>
    )
}