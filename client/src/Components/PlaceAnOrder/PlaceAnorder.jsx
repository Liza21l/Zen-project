import BackToTheMain from '../BackToTheMain/BackToTheMain';
import ProductsList from './ProductsList/ProductsList';

import './PlaceAnOrder.scss';
import './media.scss'

import imgSrc from './img.png';
import pickupImg from './img/svg1.svg';
import deliveryImg from './img/svg2.svg';

const PlaceAnOrder = () => {
    return (
        <div className="container">
            <section className="upper-section">
                <BackToTheMain/>
                <div className="round-div">
                    <p>Place an order</p>
                </div>
            </section>
            <section className="cards-section">
                <ProductsList
                imgSrc={imgSrc}
                name='Teriyaki Chiken'
                price='109'
                count='1'
                />
            </section>
            <section className="form-section">
                <div className="info-block">
                    <p>Information</p>
                    <hr />
                </div>
                <form className="form">
                    <div className="form_info">
                        <div className="form_div">
                            <p>Name</p>
                            <input type="text" placeholder='Write your name*' className="form_div_input" />
                        </div>
                        <div className="form_div">
                            <p>Phone number</p>
                            <input type="text" placeholder='Write your phone number*' className="form_div_input" />
                        </div>
                        <div className="form_div">
                            <p>Address</p>
                            <input type="text" placeholder='Write your address' className="form_div_input" />
                        </div>
                        <div className="form_div">
                            <p>Card number</p>
                            <input type="text" placeholder='Write your card number*' className="form_div_input" />
                        </div>
                        <div className="form_div">
                            <p>Wishes</p>
                            <textarea placeholder='Write your wishes' cols="20" rows="5" className="form_div_input"></textarea>
                        </div>
                            <p className='total-price'>Total price: <strong>109uah</strong></p>
                    </div>
                    <div className="form_delivery">
                        <div className="form_delivery_buttons">
                            <p>Delivery</p>
                            <button>Pickup <img src={pickupImg} alt='pickup' /></button>
                            <button>Delivery to the house <img src={deliveryImg} alt='delivery' /></button>
                        </div>
                        <div className="submit">
                            <button className="submit_button">Order</button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default PlaceAnOrder;