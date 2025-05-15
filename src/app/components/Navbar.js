import Image from "next/image";
const Navbar = () => {
  return (
    <div className="nav_container">
      <Image
        src="/assets/logo.png"
        alt="Logo"
        width={100} 
        height={100}
      />
      
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar
