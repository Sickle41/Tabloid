import { useEffect, useState } from "react";
import "./CreatePost.css";
import { getCategories } from "../../managers/categoryManager.js";
import { createNewPost } from "../../managers/postManager.js";
import { useNavigate } from "react-router-dom";

export const CreatePost = ()=> {
const [title, setTitle] = useState("")
const [subTitle, setSubTitle] = useState("")
const [allCategories, setAllCategories] = useState([])
const [chosenCategory, setChosenCategory] = useState("")
const [body, setBody] = useState("")
const navigate = useNavigate()

useEffect(()=>{
    getCategories().then(categoryArray=>{
        setAllCategories(categoryArray)
    })
},[])

const handleSaveButton = ()=>{
    
    const newPost = {
        Title: title,
        SubTitle: subTitle,
        CategoryId: parseInt(chosenCategory),
        Body: body
    }
    createNewPost(newPost).then(navigate("/"))
    
} 

    return(
        <div className="create-form">
            <h2>Create a New Post</h2>
            <div>
                <h6>Title</h6>
            <input className="form-control" type="text" 
            aria-label="default input example" onChange={(event)=>{setTitle(event.target.value)}}/>
            </div>
            <div>
                <h6>Sub Title</h6>
            <input className="form-control" type="text" 
            aria-label="default input example"onChange={(event)=>{setSubTitle(event.target.value)}}/>
            </div>
            <div>
                <h6>Category</h6>
            <select className="form-select" aria-label="Default select example"
            onChange={(event)=>{setChosenCategory(event.target.value)}}>
                <option value="0">Select a Category</option>
                {allCategories.map(category=>
                <option value={category.id} key={category.id}>{category.name}</option>
                )}
            </select>
            </div>
            <div className="mb-3">
                <label className="form-label"><h6>Body</h6></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"onChange={(event)=>{setBody(event.target.value)}}></textarea>
            </div>
            <div>
                <button onClick={()=>{handleSaveButton()}}>Save Post</button>
            </div>
        </div>
    )
}