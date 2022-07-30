import CustomImage from "./CustomImage"

export default function RecipeCard({recipe}){
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.strMealThumb} pt="65%"/>
            <div className="recipe-card-info">
                <a className="view-btn" href="#!">VIEW RECIPE</a>
                <img className="auther-img" src={recipe.authorImg} alt=""/>
                <p className="recipe-title">{recipe.strTags}</p>
                <p className="recipe-desc">{recipe.strInstructions}</p>
                <p className="recipe-desc">{recipe.strYoutube}</p>
                <p className="recipe-desc">{recipe.strArea}</p>
                <p className="recipe-desc">{recipe.strDrinkAlternate}</p>
                <p className="recipe-desc">{recipe.strIngredients}</p>
               
            </div>
        </div>
    )
}