import RecipesGrid from "@/app/components/RecipesGrid"
import HeroImage from "@/app/components/HeroImage"

const HomeContainer = () => {
  return (
    <div className="home_container">
        <h1>Las mejores recetas</h1>
        <HeroImage />
        <h2>Últimas recetas</h2>
        <RecipesGrid />
    </div>
  )
}

export default HomeContainer