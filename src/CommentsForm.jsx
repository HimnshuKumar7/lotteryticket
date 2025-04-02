import { useState } from "react"

export default function CommentsForm(){

    let[formData,setformData]=useState({
        username:"",
        remarks:"",  
        rating:5,  });

    let handleInputChange=(event) => {
        setformData((currData) => {
            return{...currData,[event.target.name]:event.target.value};
        });
    };

    let handleSubmit=(event) => {
        console.log(formData);
        event.preventDefault();
    }

    return (
        <div>
            <h4>Leave a comment!</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Enter username</label>
                <input placeholder="username" type="text" value={formData.username} onChange={handleInputChange} id="username" name="username" ></input> <br></br>  <br></br>
                <label htmlFor="remarks">Enter the remarks</label>
                <textarea value={formData.remarks} placeholder="Add few Remarks" onChange={handleInputChange} id="remarks" name="remarks">Remarks</textarea> <br></br>  <br></br>
                <label htmlFor="ratings">Enter the rating</label>
                <input placeholder="rating" type="number" min={1} max={10} value={formData.rating} onChange={handleInputChange} id="ratings" name="rating"/>
                
            </form>
            <br></br><br></br>
            <button>Add comment</button>
        </div>
    )
}