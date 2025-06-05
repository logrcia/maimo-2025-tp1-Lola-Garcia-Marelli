
const RecipeRating = ({recipe}) => {
  return (
    <section className="rating_review">
            <h2>★{recipe.rating} ({recipe.reviewCount} reviews)</h2>
    </section>
  )
}

export default RecipeRating