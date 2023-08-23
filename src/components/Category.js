import { FiArrowDown } from "react-icons/fi";

function Category() {
    return (
        <div className="category__wrapper">
            <div className="category__list">
                <button className="category__item category__item-active">
                    All
                </button>
                <button className="category__item">Music</button>
                <button className="category__item">Art</button>
                <button className="category__item">Sports</button>
                <button className="category__item">Virtual</button>
                <button className="category__item">Videos</button>
                <button className="category__item">More</button>
            </div>
            <div className="category__button-sort category__item">
                Sort By <FiArrowDown />
            </div>
        </div>
    );
}

export default Category;
