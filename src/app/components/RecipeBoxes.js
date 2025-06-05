
const RecipeBoxes = ({recipe}) => {
  return (
    <div className="recipe_boxes">
            <h4 className="boxes">Prep time: <span className="bold_text">{recipe.prepTimeMinutes} min</span></h4>
            <h4 className="boxes">Cook time: <span className="bold_text">{recipe.cookTimeMinutes} min</span></h4>
            <h4 className="boxes">Servings: <span className="bold_text">{recipe.servings}</span></h4>
            <h4 className="boxes">Calories per serving: <span className="bold_text">{recipe.caloriesPerServing}</span></h4>
        </div>
  )
}

export default RecipeBoxes