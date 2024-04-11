const ProductsList = ({img, name, price, date, count, status}) => {
    return (
        <div className="card">
            <img src={img} alt={name} className="card_img" />
            <div className="card_main-inf">
                <p className="card_main-inf_name">{name}</p>
                <p className="card_main-inf_price">{price} uah</p>
            </div>
            <div className="card_count">
                <p className="card_count_text">
                    Кількість продуктів:
                </p>
                <p className="card_count_value">{count}</p>
            </div>
            <div className="card_date">
            <p className="card_date_text">
                    Дата замовлення:
                </p>
                <p className="card_date_value">{date}</p>
            </div>
            <p className="status">{status}</p>
        </div>
    );
}

export default ProductsList;