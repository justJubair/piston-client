import logo2 from "../../assets/logo-general.png"
import useTheme from "../../hooks/useTheme"

const Footer = () => {
  const {theme} = useTheme()
  return (
    <footer className={`${theme ? "bg-black" : "bg-base-200"} footer p-10 ${theme ? "text-white" : "text-gray-600"}`}>
  <aside>
   <img className="w-24" src={logo2} alt="" />
    <p>Piston<br/>Providing reliable cars since 2023</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
  )
}

export default Footer
