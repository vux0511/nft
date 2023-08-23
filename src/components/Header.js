import { Link } from "react-router-dom";
import LogoIcon from "../assets/images/store-icon.svg";
import LogoText from "../assets/images/logo-text.svg";
import { RiMenu3Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";

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
                        <a href="" className="header__item-link">
                            Marketplace
                        </a>
                    </li>
                    <li className="header__item">
                        <a href="" className="header__item-link">
                            Collection
                        </a>
                    </li>
                    <li className="header__item">
                        <a href="" className="header__item-link">
                            {" "}
                            Community{" "}
                        </a>
                    </li>
                    <li className="header__item">
                        <a href="" className="header__item-link">
                            Create
                        </a>
                    </li>
                    <li className="header__item">
                        <a href="#" className="button button-primary">
                            Login
                        </a>
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
