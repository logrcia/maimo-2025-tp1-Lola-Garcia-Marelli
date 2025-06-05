import Link from "next/link";

const CardButton = ({id}) => {
  return (
    <div className="card_button">
        <Link href={`/recipe/${id}`}>Ver más</Link>
    </div>
  )
}

export default CardButton