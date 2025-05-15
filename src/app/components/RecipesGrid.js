import RecipeCard from "@/app/components/RecipeCard";
import parsedData from "@/data/recipes";

const RecipesGrid = () => {

  return (
    <div className='recipes_grid'>

    {parsedData.recipes.map((recipe) => (
      <RecipeCard key={recipe.id} name={recipe.name} image={recipe.image} />))}

    </div>
  )
}

export default RecipesGrid