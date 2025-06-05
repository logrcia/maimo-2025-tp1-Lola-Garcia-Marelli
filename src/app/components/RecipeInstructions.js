
const RecipeInstructions = ({recipe}) => {
  return (
        <section className="recipe_instructions">
            <h2>Instructions</h2>
            <ol className="instructions">
                {recipe.instructions && recipe.instructions.length > 0 ? (
                recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))
            ) : (
                <li>no instruction</li>
            )}
            </ol>
        </section>
  )
}

export default RecipeInstructions