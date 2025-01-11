import { useState } from "react";
import { Filter, Header, Footer, ProductsList, Banner } from "./components";
import { openTelegramLink } from "@telegram-apps/sdk";

// import {e} from "telegram-webapps-types";

// const webApp = close;

// console.log(webApp.ifAvailable());
// // webApp.ready();

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // if (window.Telegram.WebApp) {
  //   const tg = window.Telegr;
  //   const initData = tg.initDataUnsafe; // Безопасный объект данных
  //   const user = initData.user; // Информация о пользователе
  //   console.log("User Info:", user);
  //   if (user) {
  //     document.getElementById(
  //       "username"
  //     ).innerText = `Hello, ${user.first_name}!`;
  //   }
  // } else {
  //   console.error("Telegram WebApp не доступен.");
  // }

  return (
    <>
      <Header />
      <main>
        <Banner />
        {/* <BannerLoading /> */}

        <ProductsList />
        {/* <ProductsLoading /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
