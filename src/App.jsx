import { Filter, Header, Footer, ProductsList } from "./components";

function App() {
    return (
        <>
          <Header />
            <main>
                <Filter />
                <ProductsList />
            </main>
            <Footer />
        </>
    );
}

export default App;
