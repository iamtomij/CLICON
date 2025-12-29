import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <div className="bg-white rounded shadow p-3 flex flex-col">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded mb-2" />
        <h4 className="font-medium text-sm mb-1">{product.title.slice(0, 25)}...</h4>
        <p className="text-orange-500 font-semibold mb-2">${product.price}</p>
      </Link>
      <button
        onClick={handleAddToCart}
        className="bg-orange-500 text-white py-1 px-2 rounded text-sm hover:bg-orange-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
