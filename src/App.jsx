import { useState } from "react";
import {
  Filter,
  Header,
  Footer,
  ProductsList,

  Banner,
} from "./components";

function App() {
  const [isLoading, setIsLoading] = useState(true);
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
