import Wallet1 from "../assets/images/wallet-01.svg";
import Wallet2 from "../assets/images/wallet-02.svg";
import Wallet3 from "../assets/images/wallet-03.svg";
import Wallet4 from "../assets/images/wallet-04.svg";
import Wallet5 from "../assets/images/wallet-05.svg";

function Wallet() {
    return (
        <section className="wallet">
            <div className="container wallet__container">
                <img
                    src={Wallet1}
                    alt="Wallet Support"
                    className="wallet__image"
                />
                <img
                    src={Wallet2}
                    alt="Wallet Support"
                    className="wallet__image"
                />
                <img
                    src={Wallet3}
                    alt="Wallet Support"
                    className="wallet__image"
                />
                <img
                    src={Wallet4}
                    alt="Wallet Support"
                    className="wallet__image"
                />
                <img
                    src={Wallet5}
                    alt="Wallet Support"
                    className="wallet__image"
                />
            </div>
        </section>
    );
}

export default Wallet;
