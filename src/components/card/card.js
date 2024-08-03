import CustomProgressBar from "../boostrap/progress-bar";
import CustomSpinner from "../spinner/custom-spinner";
import "./card.css";

const Card = () => {
  const product = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 1000,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  };

  const calculatePercentage = (input) => {
    const base = 1000;
    let percentage = (input / base) * 100;

    return percentage;
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card-image" />
      <h2 className="card-title">{product.title}</h2>
      <p className="card-description">{product.description}</p>
      <p className="card-price">Price: ${product.price}</p>
      <p className="card-category">Category: {product.category}</p>
      <p className="card-rating">
        Rating: {product.rating.rate} ({product.rating.count} reviews)
      </p>
      <CustomSpinner />

      <CustomProgressBar scale={calculatePercentage(product.price)} />
    </div>
  );
};

export default Card;
