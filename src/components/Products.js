import { LuSearch } from "react-icons/lu";
import Card from "./Card";
import Category from "./Category";

function Products() {
    return (
        <section className="products">
            <div className="products__container container">
                <div className="text-title products__heading">
                    Explore Collectibles
                </div>
                <form className="products__search">
                    <input
                        type="text"
                        className="products__input"
                        placeholder="Type your keywords . . ."
                    />
                    <button className="products__button">
                        <LuSearch className="products__button-search" />
                    </button>
                </form>
                <Category />
                <div className="products__list">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    );
}

export default Products;
