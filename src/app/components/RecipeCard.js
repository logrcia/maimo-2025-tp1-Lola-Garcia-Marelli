import Image from "next/image"
import CardButton from "@/app/components/CardButton"

const RecipeCard = () => {
  return (
    <div className="recipe_card">
        <Image src="/assets/random.png"
        width={300}
        height={300}
        alt="random"
        />
        <h3>Nombre plato</h3>
        <CardButton />
    </div>
  )
}

export default RecipeCard