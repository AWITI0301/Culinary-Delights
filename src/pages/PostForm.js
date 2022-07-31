// import RecipeCard from "../components/RecipeCard"
import {useState} from 'react'
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
        comments:""

    })

    function submit(e){
        e.preventDefault();
        fetch(url,{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"

            },
            body : JSON.stringify(
                {
            name: data.name,
            email: data.email,
            contact: data.contact,
            id: parseInt(data.id),
            nationality: data.nationality,
            religion: data.religion,
            date: data.date,
            comments: data.comments

                }
            )
        }).then((res)=>res.json())
        .then((data)=>console.log(data))
        // axios.post(url,{
        //     name: data.name,
        //     email: data.email,
        //     contact: data.contact,
        //     id: parseInt(data.id),
        //     nationality: data.nationality,
        //     religion: data.religion,
        //     date: data.date,
        //     comments: data.comments
        // })
        // .then(res=>{
        //     console.log(res.data)
        // })

    }
    function handle(e){
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
        // console.log({...data,[e.target.id]:e.target.value})

    }
    return (
        <div className='container'>
            <div class="p-3 mb-2 bg-danger text-white">
            <form onSubmit={(e)=>submit(e)}>
                <div>
                    <label>Username</label>
                   <input onChange={handle} id="name" value={data.name} placeholder='name' type="text"></input>
                   <label>Email</label>
                   <input onChange={handle} id="email" value={data.email} placeholder='email' type="email"></input>
                   <label>Contact</label>
                   <input onChange={handle} id="contact" value={data.contact} placeholder='contact' type="number"></input>
                   <label>Id</label>
                   <input onChange={handle} id="id" value={data.id} placeholder='id' type="number"></input>
                   <label>nationality</label>
                   <input onChange={handle} id="nationality" value={data.nationality} placeholder='nationality' type="text"></input>
                   <label>religion</label>
                   <input onChange={handle} id="religion" value={data.religion} placeholder='religion' type="text"></input>
                   <label>date</label>
                   <input onChange={handle} id="date" value={data.date} placeholder='date' type="date"></input>
                   <div>
                    <label>Comments</label>
                    <textarea onChange={handle} id="comments" value={data.comments}></textarea>
                   </div>
                   <button >
                    Submit</button>
                </div>
            </form>
            </div>

        </div>
    );
}


export default PostForm
