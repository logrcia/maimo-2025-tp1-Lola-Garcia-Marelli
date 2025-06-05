import Link from "next/link"

const BackToHomeBtn = () => {
  return (
    <Link href={`http://localhost:3000/`} className="home_btn">Back To Home</Link>
  )
}

export default BackToHomeBtn