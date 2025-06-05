
const RecipeIngredients = ({recipe}) => {
  return (
    <section className="recipe_ingredients">
        <h2>Ingredients</h2>
        <ul className="ingredients_list">
            {recipe.ingredients && recipe.ingredients.length > 0 ? (
                recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))
            ) : (
                <li>no ingredient</li>
            )}
        </ul>
    </section>
  )
}

export default RecipeIngredients