// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faSearch } from "@fortawesome/free-solid-svg-icons"
// // import axios from "axios"
// import {useEffect, useState} from 'react';
// import RecipeCard from "./RecipeCard";
// import Recipes from "../pages/Recipes";

// export default function PreviousSearches(props){
//     // const [searchTerm, setSearchTerm] = useState('');
//     // console.log(props.title)
//     const [search, setSearch] =useState("");
//     const [foodRecipe, setFoodRecipe] = useState ([])
//     useEffect(()=>{
//         fetch("https://jm-recip-api.herokuapp.com/meals")
//         .then((resp)=>resp.json())
//         .then((data)=>{
//         setFoodRecipe (data)
    
//             // setSearch(data)
//         })
//     },[])

//     // console.log(foodRecipe)

    // function HandChange (event){
    //     setSearch(event.target.value)

    // }
//     console.log(search)
    // const foodDisplay = foodRecipe.filter((recipe)=>{
    //     recipe.strMeal.toLowerCase().includes(search.toLowerCase())
    // })


//     // filter through items

    

//     // const searches = ['pizza', 'burger', 'cookies', 'juice', 'biriyani', 'salad', 'ice cream', 'lasagna', 'pudding', 'soup'] 
//     // const search = () => {
//     //     // let input = []
//     //     searches.filter((item) => {
//     //         return item
//     //     })


//     // }
    

//     // axios ("ttpsh://jm-recip-api.herokuapp.com/meals")
//     // .then((res) =>{console.log(res)})

 






//     return (
//         <div className="previous-searches section">
//             {/* <PreviousSearches onSearch={setSearch} /> */}
//             <h2>Previous Searches</h2>
//             {/* <div className="previous-searches-container">
//                 { searches.map((search, index) => (<div key={index} style={{animationDelay: index * .1 + "s"}} className="search-item">
//                     {search}
//                 </div>)) }
//             </div> */}
//             {/* <PreviousSearches onSearch={setSearch} /> */}
//             <Recipes foodToDisplay={foodDisplay} />
             
//               <div className="search-box">
//                 <input  type="text" placeholder="Search ......." onChange={HandChange} />
//                 <button className="btn">
//                     <FontAwesomeIcon icon={faSearch} />
//                 </button>
//               </div> 


   


            
//         </div>
//     )





  


// }