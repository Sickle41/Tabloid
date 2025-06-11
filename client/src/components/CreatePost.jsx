import { useEffect, useState } from "react";
import "./CreatePost.css";
import { getCategories } from "../managers/categoryManager.js";

export const CreatePost = ()=> {
const [title, setTitle] = useState("")
const [subTitle, setSubTitle] = useState("")
const [allCategories, setAllCategories] = useState([])
const [chosenCategory, setChosenCategory] = useState("")
const [body, setBody] = useState("")

useEffect(()=>{
    getCategories().then(categoryArray=>{
        setAllCategories(categoryArray)
    })
},[])

    return(
        <div className="create-form">
            <h2>Create a New Post</h2>
            <div>
                <h6>Title</h6>
            <input className="form-control" type="text" 
            aria-label="default input example"/>
            </div>
            <div>
                <h6>Sub Title</h6>
            <input className="form-control" type="text" 
            aria-label="default input example"/>
            </div>
            <div>
                <h6>Category</h6>
            <select className="form-select" aria-label="Default select example">
                <option value="0">Select a Category</option>
                {allCategories.map(category=>
                <option value={category.Id} key={category.id}>{category.name}</option>
                )}
            </select>
            </div>
            <div>
                <h6>Publishing Date</h6>
            <input className="form-control" type="text" 
            placeholder="mm/dd/yyyy"aria-label="default input example"/>
            </div>
            <div className="mb-3">
                <label className="form-label">Body</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div>
                <button>Save Post</button>
            </div>
        </div>
    )
}