const Card = ({ cards }) => {

    return (
        <div className="card-main-container">
            {cards.map((card) => (

                <div className="card-secondary-container">

                    <img src={card.image} alt="" className="image" />

                    <div className="card-title-price">
                        <h2>{card.cardTitle}</h2>
                        <h4>${card.price}</h4>
                    </div>

                    <div className="card-rating-buy-now">
                        <p>{card.rating} rating</p>
                        <button>BUY NOW</button>
                    </div>

                </div>

            ))}
        </div>
    )
};

export default Card;