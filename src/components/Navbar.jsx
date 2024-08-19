import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
  <div className="flex flex-shrink-0 items-center">
    <img className="mx-2 w-10" src={logo} alt="logo" />
  </div>
  <div className="mx-8 flex items-center justify-center gap-4 text-2xl">
    <a href="https://linkedin.com/in/vaibhavmanthecoder" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
    </a>
    <a href="https://github.com/vaibhavmanthecoder" target="_blank" rel="noopener noreferrer">
      <FaGithub />
    </a>
    <a href="https://x.com/Vaibhavmancode" target="_blank" rel="noopener noreferrer">
      <FaTwitterSquare />
    </a>
    <a href="https://www.instagram.com/vaibhavsahay01" target="_blank" rel="noopener noreferrer">
      <FaInstagram />
    </a>
  </div>
</nav>

  );
}


export default Navbar;
