import Image from "next/image"
import CardButton from "@/app/components/CardButton"

const RecipeCard = ({name, image, id}) => {
  return (
    <div className="recipe_card">
        <Image 
        src={image}
        width={300}
        height={300}
        alt={name}
        className="image_card"/>
        <h3>{name}</h3>
        <CardButton id={id} />
    </div>
  )
}

export default RecipeCard