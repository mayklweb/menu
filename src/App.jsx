import { useState } from "react";
import {
  Filter,
  Header,
  Footer,
  ProductsList,
  BannerLoading,
  FilterLoading,
  ProductsLoading,
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

        <Filter />
        {/* <FilterLoading /> */}

        <ProductsList />
        {/* <ProductsLoading /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
