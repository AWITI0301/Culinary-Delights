import CustomImage from "./CustomImage"

export default function RecipeCard({recipe}){
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.strMealThumb} pt="65%"/>
            <div className="recipe-card-info">
                <img className="auther-img" src={recipe.authorImg} alt=""/>
                <p className="recipe-title">{recipe.strTags}</p>
                <a className="view-btn" href="#!">RECIPE</a>
                <p className="recipe-desc">{recipe.strInstructions}</p>
                <p className="recipe-desc">{recipe.strYoutube}</p>
                <p className="recipe-desc">{recipe.strArea}</p>
                <p className="recipe-desc">{recipe.strDrinkAlternate}</p>
                <p className="recipe-desc">{recipe.strIngredients1}</p>
               
            </div>
        </div>
    )
}