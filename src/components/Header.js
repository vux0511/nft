import { Link } from "react-router-dom";
import LogoIcon from "../assets/images/store-icon.svg";
import LogoText from "../assets/images/logo-text.svg";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { BsCart } from "react-icons/bs";

function Header() {
    function handleToggleMenu() {
        const menuToggle = document.querySelector(".menu-toggle");
        const menuClose = document.querySelector(".menu-close");
        const menu = document.querySelector(".header__menu");

        if (!menuToggle || !menu) return;
        menuToggle.addEventListener("click", function () {
            menu.classList.add("is-active");
        });
        menuClose.addEventListener("click", function () {
            menu.classList.remove("is-active");
        });
        document.addEventListener("click", function (e) {
            if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
                menu.classList.remove("is-active");
            }
        });
    }

    return (
        <section className="header">
            <div className="container header__container">
                <Link to={"/"}>
                    <div className="header__logo">
                        <img
                            src={LogoIcon}
                            alt=""
                            className="header__logo-image"
                        />
                        <img
                            src={LogoText}
                            alt=""
                            className="header__logo-text"
                        />
                    </div>
                </Link>
                <ul className="header__menu">
                    <MdClose className="menu-close" />
                    <li className="header__item">
                        <Link className="header__item-link" to={"/products"}>
                            Marketplace
                        </Link>
                    </li>
                    <li className="header__item">
                        <Link className="header__item-link" to={"/products"}>
                            Collection
                        </Link>
                    </li>
                    <li className="header__item">
                        <Link className="header__item-link" to={"/products"}>
                            Community
                        </Link>
                    </li>
                    <li className="header__item">
                        <Link className="header__item-link" to={"/products"}>
                            Create
                        </Link>
                    </li>
                    <li className="header__item">
                        <Link className="button button-primary" to={"/login"}>
                            Wallet
                        </Link>
                    </li>
                </ul>
                <RiMenu3Fill
                    className="menu-toggle"
                    onClick={handleToggleMenu}
                />
            </div>
        </section>
    );
}

export default Header;
