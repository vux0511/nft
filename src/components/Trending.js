import CardImg from "../assets/images/card1.png";
import AuthorImg from "../assets/images/card1.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

function Trending() {
    return (
        <section className="trending">
            <div className="container trending__container swiper mySwiper">
                <div className="text-title">Trending NFTs</div>
                <div className="card__wrapper swiper-wrapper">
                    <Swiper
                        navigation={true}
                        pagination={true}
                        slidesPerView={4}
                        spaceBetween={20}
                        modules={[Navigation, Pagination]}
                        className="mySwiper"
                        breakpoints={{
                            0: {
                                slidesPerView: 1.4,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="card__item swiper-slide">
                                <img
                                    src={CardImg}
                                    alt=""
                                    className="card__image"
                                />
                                <div className="card__author">
                                    <a href="">
                                        <img
                                            src={AuthorImg}
                                            alt="Author Image"
                                            className="card__author-image"
                                        />
                                    </a>
                                    <div className="card__author-info">
                                        <a
                                            className="card__author-title"
                                            href=""
                                        >
                                            Collection Name
                                        </a>
                                        <a
                                            className="card__author-collector"
                                            href=""
                                        >
                                            @collector_name
                                        </a>
                                    </div>
                                </div>
                                <div className="card__bottom">
                                    <div className="card__bottom-left">
                                        <div className="card__left-eth">
                                            0.45 ETH
                                        </div>
                                        <div className="card__left-title">
                                            Floor Price
                                        </div>
                                    </div>
                                    <div className="card__bottom-right">
                                        <div className="card__right-price">
                                            $345.12
                                        </div>
                                        <div className="card__right-grown">
                                            +12.45%
                                        </div>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="button trending__button button-collection card__button"
                                >
                                    See Collection
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card__item swiper-slide">
                                <img
                                    src={CardImg}
                                    alt=""
                                    className="card__image"
                                />
                                <div className="card__author">
                                    <a href="">
                                        <img
                                            src={AuthorImg}
                                            alt="Author Image"
                                            className="card__author-image"
                                        />
                                    </a>
                                    <div className="card__author-info">
                                        <a
                                            className="card__author-title"
                                            href=""
                                        >
                                            Collection Name
                                        </a>
                                        <a
                                            className="card__author-collector"
                                            href=""
                                        >
                                            @collector_name
                                        </a>
                                    </div>
                                </div>
                                <div className="card__bottom">
                                    <div className="card__bottom-left">
                                        <div className="card__left-eth">
                                            0.45 ETH
                                        </div>
                                        <div className="card__left-title">
                                            Floor Price
                                        </div>
                                    </div>
                                    <div className="card__bottom-right">
                                        <div className="card__right-price">
                                            $345.12
                                        </div>
                                        <div className="card__right-grown">
                                            +12.45%
                                        </div>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="button trending__button button-collection card__button"
                                >
                                    See Collection
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card__item swiper-slide">
                                <img
                                    src={CardImg}
                                    alt=""
                                    className="card__image"
                                />
                                <div className="card__author">
                                    <a href="">
                                        <img
                                            src={AuthorImg}
                                            alt="Author Image"
                                            className="card__author-image"
                                        />
                                    </a>
                                    <div className="card__author-info">
                                        <a
                                            className="card__author-title"
                                            href=""
                                        >
                                            Collection Name
                                        </a>
                                        <a
                                            className="card__author-collector"
                                            href=""
                                        >
                                            @collector_name
                                        </a>
                                    </div>
                                </div>
                                <div className="card__bottom">
                                    <div className="card__bottom-left">
                                        <div className="card__left-eth">
                                            0.45 ETH
                                        </div>
                                        <div className="card__left-title">
                                            Floor Price
                                        </div>
                                    </div>
                                    <div className="card__bottom-right">
                                        <div className="card__right-price">
                                            $345.12
                                        </div>
                                        <div className="card__right-grown">
                                            +12.45%
                                        </div>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="button trending__button button-collection card__button"
                                >
                                    See Collection
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card__item swiper-slide">
                                <img
                                    src={CardImg}
                                    alt=""
                                    className="card__image"
                                />
                                <div className="card__author">
                                    <a href="">
                                        <img
                                            src={AuthorImg}
                                            alt="Author Image"
                                            className="card__author-image"
                                        />
                                    </a>
                                    <div className="card__author-info">
                                        <a
                                            className="card__author-title"
                                            href=""
                                        >
                                            Collection Name
                                        </a>
                                        <a
                                            className="card__author-collector"
                                            href=""
                                        >
                                            @collector_name
                                        </a>
                                    </div>
                                </div>
                                <div className="card__bottom">
                                    <div className="card__bottom-left">
                                        <div className="card__left-eth">
                                            0.45 ETH
                                        </div>
                                        <div className="card__left-title">
                                            Floor Price
                                        </div>
                                    </div>
                                    <div className="card__bottom-right">
                                        <div className="card__right-price">
                                            $345.12
                                        </div>
                                        <div className="card__right-grown">
                                            +12.45%
                                        </div>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="button trending__button button-collection card__button"
                                >
                                    See Collection
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card__item swiper-slide">
                                <img
                                    src={CardImg}
                                    alt=""
                                    className="card__image"
                                />
                                <div className="card__author">
                                    <a href="">
                                        <img
                                            src={AuthorImg}
                                            alt="Author Image"
                                            className="card__author-image"
                                        />
                                    </a>
                                    <div className="card__author-info">
                                        <a
                                            className="card__author-title"
                                            href=""
                                        >
                                            Collection Name
                                        </a>
                                        <a
                                            className="card__author-collector"
                                            href=""
                                        >
                                            @collector_name
                                        </a>
                                    </div>
                                </div>
                                <div className="card__bottom">
                                    <div className="card__bottom-left">
                                        <div className="card__left-eth">
                                            0.45 ETH
                                        </div>
                                        <div className="card__left-title">
                                            Floor Price
                                        </div>
                                    </div>
                                    <div className="card__bottom-right">
                                        <div className="card__right-price">
                                            $345.12
                                        </div>
                                        <div className="card__right-grown">
                                            +12.45%
                                        </div>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="button trending__button button-collection card__button"
                                >
                                    See Collection
                                </a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

export default Trending;
