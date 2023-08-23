import CardImg from "../assets/images/card1.png";
import AuthorImg from "../assets/images/card1.png";
import { Link } from "react-router-dom";

function Card() {
    return (
        <Link to={"/product/id"}>
            <div className="card__item swiper-slide">
                <img src={CardImg} alt="" className="card__image" />
                <div className="card__author">
                    <a href="">
                        <img
                            src={AuthorImg}
                            alt="Author Image"
                            className="card__author-image"
                        />
                    </a>
                    <div className="card__author-info">
                        <a className="card__author-title" href="">
                            Collection Name
                        </a>
                        <a className="card__author-collector" href="">
                            @collector_name
                        </a>
                    </div>
                </div>
                <div className="card__bottom">
                    <div className="card__bottom-left">
                        <div className="card__left-eth">0.45 ETH</div>
                        <div className="card__left-title">Floor Price</div>
                    </div>
                    <div className="card__bottom-right">
                        <div className="card__right-price">$345.12</div>
                        <div className="card__right-grown">+12.45%</div>
                    </div>
                </div>
                <a
                    href="#"
                    className="button trending__button button-collection card__button"
                >
                    See Collection
                </a>
            </div>
        </Link>
    );
}

export default Card;
