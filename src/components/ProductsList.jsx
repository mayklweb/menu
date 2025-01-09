import React from "react";
import ProductCard from "./ProductCard";
import { useQuery } from "react-query";
import { getProducts } from "../api/apiServices";
import ProductsLoading from "./ProductsLoading";

function ProductsList() {
  const {
    data: products,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  console.log(products);

  if (isLoading) return <ProductsLoading />

  if (isError) {
    toast.error(error?.message);
    return null;
  }
  return (
    <div className="pl">
      <div className="container">
        <div className="pl-r">
          {products?.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsList;
