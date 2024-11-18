import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import formatToIDRCurrency from "../../utils/formatToIDRCurrency";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.slug ?? ""}`}
      className="flex flex-col max-w-[370px] flex-wrap p-[16px] bg-black bg-opacity-40 backdrop-blur-md rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:ring-opacity-50 hover:ring-4 active:ring-2 active:ring-opacity-80 active:ring-[#6247eb]"
    >
      <img
        src={product?.imageUrl ?? ""}
        alt={product?.name ?? "No Title"}
        className="block max-h-[300px] mb-4 object-cover rounded-lg transition-transform duration-300 transform hover:scale-105"
      />
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-[20px] text-white transition-colors duration-200 hover:text-[#bfc6ff]">
          {product?.name ?? "No Title"}
        </h4>
        <span className="block font-medium text-[14px] text-[#eaeaea]">
          {product?.category ?? "Uncategorized"}
        </span>
        <span className="block font-medium text-[20px] text-[#f2f2f2]">
          {product?.price > 0 ? formatToIDRCurrency(product.price) : "Not For Sale"}
        </span>
        <div className="mt-4">
          {product.stock <= 0 ? (
            <p className="text-xl font-semibold text-center text-red-500">
              Out of Stock
            </p>
          ) : product.stock <= 25 && product.stock !== 0 ? (
            <>
              <p className="text-xl font-semibold text-center text-yellow-500">
                Almost Sold Out
              </p>
              <Button
                type="button"
                className="inline-flex items-center justify-center gap-2 p-4 w-full bg-gradient-to-r from-[#4F78E9] to-[#6173E6] text-white text-center rounded-lg transition-transform duration-200 hover:scale-105 hover:bg-[#5969cf] hover:shadow-lg active:bg-[#4956ab] active:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#4F78E9]"
              >
                <FontAwesomeIcon icon={faCartShopping} className="transition-transform duration-200 transform hover:translate-x-1" />
                <span>Add to cart</span>
              </Button>
            </>
          ) : (
            <Button
              type="button"
              className="inline-flex items-center justify-center gap-2 p-4 w-full bg-gradient-to-r from-[#4F78E9] to-[#6173E6] text-white text-center rounded-lg transition-transform duration-200 hover:scale-105 hover:bg-[#5969cf] hover:shadow-lg active:bg-[#4956ab] active:shadow-xl mt-[28px] focus:outline-none focus:ring-4 focus:ring-[#4F78E9]"
            >
              <FontAwesomeIcon icon={faCartShopping} className="transition-transform duration-200 transform hover:translate-x-1" />
              <span>Add to cart</span>
            </Button>
          )}
        </div>
      </div>
    </Link>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};