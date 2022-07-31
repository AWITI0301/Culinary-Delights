// import RecipeCard from "../components/RecipeCard"
import {useEffect, useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import axios from 'axios';

function PostForm () {
    const url ="https://jm-recip-api.herokuapp.com/meals"
    const [data, setData] = useState({
        name:"",
        email:"",
        contact:"",
        id:"",
        nationality:"",
        religion:"",
        date:"",
        feedback:""

    })

    function submit(e){
        e.preventDefault();
        axios.post(url,{
            name: data.name,
            email: data.email,
            contact: data.contact,
            id: parseInt(data.id),
            nationality: data.nationality,
            religion: data.religion,
            date: data.date,
            feedback: data.feedback
        })
        .then(res=>{
            console.log(res.data)
        })

    }
    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)

    }
    return (
        <div>
            <form onSubmit={(e)=>submit(e)}>
                <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder='name' type="text"></input>
                <input onChange={(e)=>handle(e)} id="email" value={data.email} placeholder='email' type="email"></input>
                <input onChange={(e)=>handle(e)} id="contact" value={data.contact} placeholder='contact' type="number"></input>
                <input onChange={(e)=>handle(e)} id="id" value={data.id} placeholder='id' type="number"></input>
                <input onChange={(e)=>handle(e)} id="nationality" value={data.nationality} placeholder='nationality' type="text"></input>
                <input onChange={(e)=>handle(e)} id="religion" value={data.religion} placeholder='religion' type="text"></input>
                <input onChange={(e)=>handle(e)} id="date" value={data.date} placeholder='date' type="date"></input>
                <input onChange={(e)=>handle(e)} id="feedback" value={data.feedback} placeholder='feedback' type="text"></input>
                <button>Submit</button>
            </form>

        </div>
    );
}


export default PostForm
