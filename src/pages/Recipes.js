import RecipeCard from "../components/RecipeCard"
import {useEffect, useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"


export default function Recipes(){
     const [search, setSearch] =useState("");
    const [foodRecipe, setFoodRecipe] = useState ([])
    useEffect(()=>{
        fetch("https://jm-recip-api.herokuapp.com/meals")
        .then((resp)=>resp.json())
        .then((data)=>{
        setFoodRecipe (data)
    
            
        })
    },[])

    function HandChange (event){
        setSearch(event.target.value)

    }

    const foodDisplay = foodRecipe.filter((recipe)=>
        recipe.strMeal.toLowerCase().includes(search.toLowerCase())
    )  
    // console.log(foodDisplay)

    return (
        
        <div>
                <div className="previous-searches section">
            
                <a className="view-btn" href="#!">SEARCH FOOD RECIPE..........</a>
         
             
              <div className="search-box">
                <input  type="text" placeholder="Search ......." onChange={HandChange} />
                <button className="btn">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
              </div> 
            
        </div>
          
            <div className="recipes-container">
               
                {foodDisplay.map((recipe, index) => (
                    // console.log('hello world')
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}