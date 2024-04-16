import "./basket.css"
import ProductImg from "./img/product-img.png"
import Header from "../Header/Header"
const Basket = () => {
    return (
        <div className="container">
            <Header/>
            <div className="page">
                <p className="basket-text">Basket</p>
                <hr className="hr-line" />
                <div className="page-products">
                    <div className="product-card">
                        <img className="product-img" src={ProductImg} alt="" />
                        <p>Teriyaki Chicken</p>
                        <p className="price-text" style={{color: "#B1F790"}}>Price: 109 грн</p>
                        <div className="quantity">
                            <button className="plus-minus-btn">+</button>
                            <p>1</p>
                            <button className="plus-minus-btn">-</button>
                        </div>
                        <div className="order-delete-btns">
                            <button className="order-btn">Замовити</button>
                            <button className="delete-btn">Видалити</button>
                        </div>
                    </div>
                    <div className="product-card">
                        <img className="product-img" src={ProductImg} alt="" />
                        <p>Teriyaki Chicken</p>
                        <p className="price-text" style={{color: "#B1F790"}}>Price: 109 грн</p>
                        <div className="quantity">
                            <button className="plus-minus-btn">+</button>
                            <p>1</p>
                            <button className="plus-minus-btn">-</button>
                        </div>
                        <div className="order-delete-btns">
                            <button className="order-btn">Замовити</button>
                            <button className="delete-btn">Видалити</button>
                        </div>
                    </div>
                    <div className="product-card">
                        <img className="product-img" src={ProductImg} alt="" />
                        <p>Teriyaki Chicken</p>
                        <p className="price-text" style={{color: "#B1F790"}}>Price: 109 грн</p>
                        <div className="quantity">
                            <button className="plus-minus-btn">+</button>
                            <p>1</p>
                            <button className="plus-minus-btn">-</button>
                        </div>
                        <div className="order-delete-btns">
                            <button className="order-btn">Замовити</button>
                            <button className="delete-btn">Видалити</button>
                        </div>
                    </div>
                    <div className="total-price">
                    <p>Загальна ціна: <span className="total-price-value">327 грн</span></p>
                    <button className="order-all-btn">Замовити все</button>
                </div>
                </div>
                
            </div>
            <footer></footer>
        </div>
    )
}
export default Basket;
