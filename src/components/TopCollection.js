import Card from "../components/Card";

function TopCollection() {
    return (
        <section className="top">
            <div className="container top__container">
                <div className="text-title">Top Collections</div>
                <div className="top__category">
                    <a
                        href=""
                        className="button button-category button-category-active"
                    >
                        All
                    </a>
                    <a href="" className="button button-category">
                        Collectibles
                    </a>
                    <a href="" className="button button-category">
                        Metaverse
                    </a>
                    <a href="" className="button button-category">
                        Virtual Worlds
                    </a>
                    <a href="" className="button button-category">
                        Sports
                    </a>
                    <a href="" className="button button-category">
                        Music
                    </a>
                </div>
                <div className="card__wrapper top__card">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <a
                    href="#"
                    className="trending__seemore button button-transparent button-more"
                >
                    See More
                </a>
            </div>
        </section>
    );
}

export default TopCollection;
