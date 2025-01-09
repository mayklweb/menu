import React, { useState } from "react";
import { getCategories } from "../api/apiServices";
import { useQuery } from "react-query";

function Filter() {
  const [isActive, setIsActive] = useState("");
  const {
    data: categories,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const productsJson = localStorage.getItem("products");
  const products = JSON.parse(productsJson)
  const filterByCategory = (id) => {
    localStorage.removeItem("products");
    setIsActive(id);
    const filterdProducts = products?.find(({category_id}) => category_id === id);
    // console.log(products?.find((item) => item.category_id !== id));
    localStorage.setItem("products", JSON.stringify(filterdProducts));
  };

  // if (isLoading) return <FilterLoadingLoading />;

  if (isError) {
    toast.error(error?.message);
    return null;
  }
  return (
    <div className="c">
      <div className="container">
        <div className="c-r">
          <button
            onClick={() => filterByCategory("")}
            className={`c-btn ${!isActive && "active"}`}
          >
            All
          </button>
          {categories?.map(({ name, id }, i) => (
            <button
              onClick={() => filterByCategory(id)}
              key={i}
              className={`c-btn ${isActive === id && "active"}`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filter;
