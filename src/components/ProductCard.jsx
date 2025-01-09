import React from "react";
import useCartStore from "../store";
import { Minus, Plus, X } from "lucide-react";

function ProductCard({ product }) {
  const { addToCart, cart, inc, dec } = useCartStore();

  const foundedItem = cart.find((item) => item.id === product.id);

  const decrease = (id) => {
    if (foundedItem) {
      dec(id);
    } else {
      toast.error("error");
    }
  };
  return (
    <div className="p">
      <div className="p-img">
        <img src={product.img} alt="" />
      </div>
      <div className="p-t">
        <p className="p-n">
          <span>{product.name}</span>
        </p>
        <p className="p-p">
          <span>{product.price} so'm</span>
        </p>
      </div>
      {!foundedItem ? (
        <button onClick={() => addToCart(product)} className="p-btn">
          Add to cart
        </button>
      ) : (
        <div className="">
          <button
            onClick={() => decrease(product.id)}
            className="bg-[#D23232] rounded-sm"
          >
            <Minus color="#000" />
          </button>
          <p>{foundedItem.qty}</p>
          <button
            onClick={() => inc(product.id)}
            className="bg-[#29CC29] rounded-sm"
          >
            <Plus color="#000" />
          </button>
        </div>
      )}
      {/* <div className="p-btn"></div> */}
    </div>
  );
}

export default ProductCard;
