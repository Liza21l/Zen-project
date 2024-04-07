import "./header.css"
import Logo from "./img/Logo.png"
import BasketImg  from "./img/Basket.png"
import ProfileImg from "./img/Profile.png"
import BurgerImg from "./img/Burger.svg"
const Header = () => {
    return(
        <header>
            <img className="" src={Logo} alt="" />
            <nav className="nav-menu">
                <p className="nav-text">Home</p>
                <p className="nav-text">Our orders</p>
                <p className="nav-text">Information</p>
            </nav>
            <div className="your-info">
                <div className="basket">
                    <hr />
                    <img className="info-img-basket" src={BasketImg} alt="" />
                </div>
                 <div className="profile">
                    <p className="nav-text">Your profile</p>
                    <img className="info-img-profile" src={ProfileImg} alt="" />
                 </div>
            </div>
            <img className="Burger" src={BurgerImg} alt="" />
        </header>
    )
}

export default Header