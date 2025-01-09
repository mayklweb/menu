import React from "react";
import useCartStore from "../store";
import { Minus, Plus, X } from "lucide-react";

function ProductCard({ product }) {
  const { addToCart, cart, inc, dec } = useCartStore();

  const foundedItem = cart.find((item) => item.id === product.id);

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
        {!foundedItem ? (
          <button onClick={() => addToCart(product)} className="p-btn">
            Add to cart
          </button>
        ) : (
          <div className="p-count">
            <button onClick={() => dec(product.id)} className="p-btn_dec">
              <Minus size={16} color="#fff" />
            </button>
            <p className="p-count_num">{foundedItem.qty}</p>
            <button onClick={() => inc(product.id)} className="p-btn_inc">
              <Plus size={16} color="#fff" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
