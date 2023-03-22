import Logo from "../assets/working.png"
import "../components/header.css"
export const Header = () => {
  return (
    <>
        <header>
            <img className="logo" src={Logo} alt="" />
            <a href="/">Home</a>
        </header>
    </>
  )
}
