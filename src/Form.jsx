import { useState } from "react";

export default function Form(){
    let[formData,setformData]=useState({
        fullName:"",
        userName:"",
        password:""
    })

    let handleInputChange=(event) => {
        setformData((currData)=>{
            
            return {...currData,[event.target.name]:event.target.value};
        });
    };

    let handleSubmit=(event) => {
        event.preventDefault();
        console.log(formData);
        setformData({
            fullName:"",
            userName:"",
            password:""
        });
    };


    
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Enter your full name</label>
            <input placeholder="enter your full name" type="text" value={formData.fullName}
            onChange={handleInputChange} id="fullname" name="fullName"></input>
        
            <br></br>
            <br></br>
        
            <label htmlFor="username">Enter your user name</label>
            <input placeholder=" username" type="text" value={formData.userName}
            onChange={handleInputChange} id="username" name="username"></input>
            <br></br>
            <br></br>
            <label htmlFor="password">Enter your password</label>
            <input placeholder=" password" type="text" value={formData.password}
            onChange={handleInputChange} id="password" name="password"></input>
            <br></br>
            <br></br>
            <button>Submit form</button>
        </form>
    )
}