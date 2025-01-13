import useCartStore from "../store";
import { closeMiniApp } from "@telegram-apps/sdk";
import React, { useEffect } from "react";

// import { close } from "@telegram-apps/sdk/dist/dts/scopes/components/qr-scanner/qr-scanner";
// import { close } from "@telegram-apps/sdk/dist/dts/scopes/components/mini-app/methods";

function Footer() {
  const { getTotalPrice } = useCartStore();
  const totalPrice = getTotalPrice();

  function hanldeColse() {
    if (closeMiniApp.isAvailable()) {
      closeMiniApp();
    }
  }
  useEffect(() => {
    // Ensure Telegram WebApp is initialized
    if (typeof Telegram !== "undefined" && Telegram.WebApp) {
      Telegram.WebApp.ready(); // Indicate the Web App is ready
    } else {
      console.error("Telegram WebApp is not available.");
    }
  }, []);

  const handleClose = () => {
    if (Telegram?.WebApp) {
      Telegram.WebApp.close(); // Close the Web App
    } else {
      console.error("Telegram WebApp is not available.");
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-r">
          <p className="order-price">{totalPrice.toLocaleString()} so'm</p>
          <button onClick={handleClose} className="order-btn">
            Заказать
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
