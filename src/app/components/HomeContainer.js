import RecipesGrid from "@/app/components/RecipesGrid"
import HeroImage from "@/app/components/HeroImage"

const HomeContainer = () => {
  return (
    <div className="home_container">
      <section className="hero_container">
        <h1>Las mejores recetas</h1>
      </section>
      <section className="recetas_boxed">
        <h2>Últimas recetas</h2>
        <RecipesGrid />
      </section>
    </div>
  )
}

export default HomeContainer