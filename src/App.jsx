import { useState } from "react";
import { Filter, Header, Footer, ProductsList } from "./components";
import ProductsLoading from "./components/ProductsLoading";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <Header />
      <main>
        <Filter />
        {/* <ProductsList /> */}
        {isLoading && (<ProductsLoading loading={true} />)}
      </main>
      <Footer />
    </>
  );
}

export default App;