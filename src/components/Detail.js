import Card from "./Card";

function Detail() {
    return (
        <section className="detail">
            <div className="container">
                <div className="detail__wrapper">
                    <div className="detail__image">
                        <img
                            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
                            alt="Detail Product"
                        />
                    </div>
                    <div className="detail__info">
                        <div className="detail__name">#1119 Seagull</div>
                        <div className="detail__desc">
                            The Birdhouse is a collection of 6000 birds, each
                            with it's own unique traits & personality. See them
                            all at TheBirdHouse.app
                        </div>
                        <div className="detail__price">
                            <div className="detail__price-title">Price Bid</div>
                            <div className="detail__price-eth">10.89 eTH</div>
                        </div>
                        <div className="detail__author">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1664461662767-41fe84f7748d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                                alt="Author"
                                className="detail__author-image"
                            />
                            <div className="detail__author-info">
                                <div className="detail__author-title">
                                    Creator
                                </div>
                                <div className="detail__author-name">
                                    SalvadorDali
                                </div>
                            </div>
                        </div>
                        <div className="detail__button">
                            <button className="button button-transparent detail__button-flex">
                                Add To Cart
                            </button>
                            <button className="button button-primary detail__button-flex">
                                Purchase Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="text-title text-title-left">Another NFTs</div>
                <div className="detail__related">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    );
}

export default Detail;
