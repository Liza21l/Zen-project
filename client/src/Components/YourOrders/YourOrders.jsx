import BackToTheMain from "../BackToTheMain/BackToTheMain";
import ProductsList from "./ProductsList/ProductsList";

import img from '../PlaceAnOrder/img.png'

import './YourOrders.scss';
import './media.scss';

const YourOrders = () => {
    return (
        <div className="container">
            <section className="upper-section">
                <BackToTheMain/>
                <div className="upper-section_info-block">
                    <p>Your orders</p>
                    <hr />
                </div>
            </section>
            <section className="main-section">
                <ProductsList
                img={img}
                name='Teriyaki Chiken'
                price='109'
                count='1'
                date='28 бер.,2024 21:20'
                status='Доставлено'
                />
            </section>
        </div>
    );
}

export default YourOrders;