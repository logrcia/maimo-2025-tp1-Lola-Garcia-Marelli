import Image from "next/image";

const HeroImage = () => {
  return (
    <div>
       <Image src="/assets/food.jpg" width={1000} height={300} alt="food"/>
    </div>
  )
}

export default HeroImage