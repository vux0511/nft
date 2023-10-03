import { IoIosArrowDown } from "react-icons/io";

function Category() {
    return (
        <div className="category__wrapper">
            <div className="category__list">
                <div className="dropdown">
                    <div className="dropdown__select">
                        <span className="dropdown__selected">
                            <p>Sort by</p>
                            <p>
                                <IoIosArrowDown />
                            </p>
                        </span>
                    </div>
                    <ul className="dropdown__list">
                        <li className="dropdown__item">
                            <span className="dropdown__text">Under 5$</span>
                        </li>
                        <li className="dropdown__item">
                            <span className="dropdown__text">5$ to 10$</span>
                        </li>
                        <li className="dropdown__item">
                            <span className="dropdown__text">10$ to 20$</span>
                        </li>
                        <li className="dropdown__item">
                            <span className="dropdown__text">20$ to 50$</span>
                        </li>
                        <li className="dropdown__item">
                            <span className="dropdown__text">Over 50$</span>
                        </li>
                    </ul>
                </div>
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
        </div>
    );
}

export default Category;
