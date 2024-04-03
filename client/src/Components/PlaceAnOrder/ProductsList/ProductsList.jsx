const ProductsList = ({imgSrc, name, price, count}) => {
    return (
        <div className="card">
        <div className="img-section">
            <img src={imgSrc} alt={name} />
        </div>
        <div className="info-section">
            <p className="name">{name}</p>
            <p className='price'>{price} uah</p>
            <div className="count">
                <button className='count_btn'>-</button>
                <p className="count_text">{count}</p>
                <button className='count_btn'>+</button>
            </div>
        </div>
    </div>
    );
}

export default ProductsList;