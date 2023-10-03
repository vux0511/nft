import { Link } from "react-router-dom";
import LogoIcon from "../assets/images/store-icon.svg";
import LogoText from "../assets/images/logo-text.svg";
import { RiMenu3Fill } from "react-icons/ri";
import {
    MdClose,
    MdOutlineWallet,
    MdOutlineModeNight,
    MdClear,
} from "react-icons/md";
import { BiUserCircle, BiPencil } from "react-icons/bi";
import {
    AiOutlineShoppingCart,
    AiOutlineEye,
    AiOutlineSetting,
} from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import { BsGrid3X3 } from "react-icons/bs";
import LogoMetaMaskIcon from "../assets/images/meta-mask-icon.png";
import LogoGlow from "../assets/images/glow.svg";
import LogoCoinbase from "../assets/images/walletlink-alternative.png";
import LogoWalletConnect from "../assets/images/wallet-icon.png";
import LogoLegder from "../assets/images/ledgerconnect-alternative.webp";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { ethers } from "ethers";

function Header() {
    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState(null);
    const [connButtonText, setConnButtonText] = useState("Connect Wallet");

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

    // function handlePopUp() {
    //     const popUpToggle = document.querySelector(".header__button-wallet");
    //     const popUpClose = document.querySelector(".header__popup-close");
    //     const popUp = document.querySelector(".header__popup");

    //     if (!popUpToggle) return;
    //     popUpToggle.addEventListener("click", function () {
    //         popUp.classList.add("header__popup-active");
    //     });
    //     popUpClose.addEventListener("click", function () {
    //         popUp.classList.remove("header__popup-active");
    //     });

    // document.addEventListener("click", function (e) {
    //     if (
    //         !popUp.contains(e.target) &&
    //         !e.target.matches(".header__button-wallet")
    //     ) {
    //         popUp.classList.remove("header__popup-active");
    //     }
    // });
    // }

    const connectWallet = () => {
        if (window.ethereum) {
            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then((result) => {
                    accountChanged([result[0]]);
                    toast.success("Connect Success", {
                        position: "top-right",
                        autoClose: 4000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                });
        } else {
            setErrorMessage("Install MetaMask Please ...");
        }
    };

    const accountChanged = (accountName) => {
        setDefaultAccount(accountName);
        getUserBalance(accountName);
        console.log(defaultAccount);
    };

    const getUserBalance = (accountAddress) => {
        window.ethereum
            .request({
                method: "eth_getBalance",
                params: [String(accountAddress), "latest"],
            })
            .then((balance) => {
                setUserBalance(ethers.formatEther(balance));
                console.log(userBalance);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            });
    };

    const chainChangedHandler = () => {
        window.location.reload();
    };

    window.ethereum.on("accountsChanged", accountChanged);

    window.ethereum.on("chainChanged", chainChangedHandler);

    return (
        <section className="header">
            <div className="container header__container">
                <Link to="/">
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
                        <div className="ck"></div>
                    </div>
                </Link>
                <ul className="header__menu">
                    <MdClose className="menu-close" />
                    <li className="header__item">
                        <Link className="header__item-link" to="/products">
                            Marketplace
                        </Link>
                    </li>
                    <li className="header__item">
                        <Link className="header__item-link" to="/products">
                            Collection
                        </Link>
                    </li>
                    {/* <li className="header__item">
                        <Link className="header__item-link" to="/products">
                            {userBalance}
                        </Link>
                    </li> */}
                    <li className="header__item">
                        <div className="header__button">
                            <button
                                className="header__button-wallet"
                                onClick={connectWallet}
                            >
                                <MdOutlineWallet className="header__button-wallet-icon" />
                                {userBalance
                                    ? userBalance + " ETH"
                                    : "Connect Wallet"}
                                <div className="header__popup">
                                    <div className="header__popup-title">
                                        Connect Your Wallet
                                        <div className="header__popup-close">
                                            <MdClear />
                                        </div>
                                    </div>
                                    <div className="header__popup-desc">
                                        If you don't have a wallet, you can
                                        select a provider and create one now.
                                    </div>
                                    <div className="header__popup-wrapper">
                                        <div className="header__popup-item">
                                            <div className="header__popup-wallet">
                                                <img
                                                    src={LogoMetaMaskIcon}
                                                    alt=""
                                                    className="header__popup-image"
                                                />
                                                <p className="header__popup-name">
                                                    MetaMask
                                                </p>
                                            </div>
                                            <p className="header__popup-popular">
                                                POPULAR
                                            </p>
                                        </div>
                                        <div className="header__popup-item">
                                            <div className="header__popup-wallet">
                                                <img
                                                    src={LogoCoinbase}
                                                    alt=""
                                                    className="header__popup-image"
                                                />
                                                <p className="header__popup-name">
                                                    MetaMask
                                                </p>
                                            </div>
                                            <p className="header__popup-popular"></p>
                                        </div>
                                        <div className="header__popup-item">
                                            <div className="header__popup-wallet">
                                                <img
                                                    src={LogoGlow}
                                                    alt=""
                                                    className="header__popup-image"
                                                />
                                                <p className="header__popup-name">
                                                    Coinbase Wallet
                                                </p>
                                            </div>
                                            <p className="header__popup-popular"></p>
                                        </div>
                                        <div className="header__popup-item">
                                            <div className="header__popup-wallet">
                                                <img
                                                    src={LogoWalletConnect}
                                                    alt=""
                                                    className="header__popup-image"
                                                />
                                                <p className="header__popup-name">
                                                    WalletConnect
                                                </p>
                                            </div>
                                            <p className="header__popup-popular"></p>
                                        </div>
                                        <div className="header__popup-item">
                                            <div className="header__popup-wallet">
                                                <img
                                                    src={LogoLegder}
                                                    alt=""
                                                    className="header__popup-image"
                                                />
                                                <p className="header__popup-name">
                                                    Ledger
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button className="header__button-user">
                                <BiUserCircle />
                                <ul className="header__button-list">
                                    <li className="header__button-item">
                                        <FiUser className="header__button-icon" />
                                        <span>Profile</span>
                                    </li>
                                    <li className="header__button-item">
                                        <AiOutlineEye className="header__button-icon" />
                                        <span>Watchlist</span>
                                    </li>
                                    <li className="header__button-item">
                                        <BsGrid3X3 className="header__button-icon" />
                                        <span>My Collection</span>
                                    </li>
                                    <li className="header__button-item">
                                        <BiPencil className="header__button-icon" />
                                        <span>Create</span>
                                    </li>
                                    <li className="header__button-item">
                                        <AiOutlineSetting className="header__button-icon" />
                                        <span>Setting</span>
                                    </li>
                                    <li className="header__button-item">
                                        <MdOutlineModeNight className="header__button-icon" />
                                        <span>Dark Mode</span>
                                    </li>
                                </ul>
                            </button>
                            <button className="header__button-cart">
                                <AiOutlineShoppingCart />
                            </button>
                        </div>
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
