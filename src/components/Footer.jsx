import useCartStore from "../store";
import React, { useEffect } from "react";
import { postOrder } from "../api/apiServices";
import { useMutation } from "react-query";
import axios from "axios";

function Footer() {
  const { getTotalPrice, cart  } = useCartStore();
  // const postOrder = postOrder();
  const totalPrice = getTotalPrice();
  const tg = window.Telegram?.WebApp;
  const user = tg.initDataUnsafe?.user;


  useEffect(() => {
    if (typeof Telegram !== "undefined" && Telegram.WebApp) {
      Telegram.WebApp.ready();
    } else {
      console.error("Telegram WebApp is not available.");
    }
  }, []);

  const postOrder = useMutation(async (orderData) => {
    const response = await axios.post('https://pyco.uz/save-order/', orderData);
    return response.data;
  });

  // const handleClose = () => {
  //   if (Telegram?.WebApp) {
  //     Telegram.WebApp.close();
  //   } else {
  //     console.error("Telegram WebApp is not available.");
  //   }
  // };

  const handleSubmit = async () => {
    const orderData = [{
      tr_ID: user.id,
      products: [{...cart}, totalPrice],
    }]

    postOrder.mutate(orderData, {
      onSuccess: (data) => {
        console.log("Order successful:", data);
      },
      onError: (error) => {
        console.error("Order failed:", error);
      },
    });
  };

  // const handleSubmits = (e) => {
  //   e.preventDefault();
  //   if (Telegram?.WebApp) {
  //     Telegram.WebApp.close();
  //   } else {
  //     console.error("Telegram WebApp is not available.");
  //   }
  // };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-r">
          <p className="order-price">{totalPrice.toLocaleString()} so'm</p>
          <button onClick={handleSubmit} className="order-btn">
            Заказать
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
