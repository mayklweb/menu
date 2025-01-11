import React from "react";
import useCartStore from "../store";
import { closeMiniApp } from "@telegram-apps/sdk";

function Footer() {
  const { getTotalPrice } = useCartStore();
  const totalPrice = getTotalPrice()

  function hanldeColse( ){
    if(closeMiniApp.isAvailable()){
      close()
    }
  }



  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-r">
          <p className="order-price">{totalPrice.toLocaleString()} so'm</p>
          <button onClick={hanldeColse} className="order-btn">Заказать</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
