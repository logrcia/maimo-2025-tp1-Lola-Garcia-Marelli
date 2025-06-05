
const RecipeInfo = ({recipe}) => {
  return (
    <section className="recipe_info">
        <h3>{recipe.mealType} </h3>
        <h3>Difficulty: {recipe.difficulty}</h3>
        <h3>Cuisine: {recipe.cuisine}</h3>
    </section>
  )
}

export default RecipeInfo