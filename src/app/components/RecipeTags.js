
const RecipeTags = ({recipe}) => {
  return (
    <div className="recipe_tags">
        {recipe.tags && recipe.tags.length > 0 ? (
                recipe.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))
            ) : (
                <li>no tag</li>
            )}
    </div>
  )
}

export default RecipeTags