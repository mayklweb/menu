import React, { useState, useEffect } from "react";
import { getCategories } from "../api/apiServices";
import { useQuery } from "react-query";
import FilterLoading from "./FilterLoading";

function Filter({ onFilter }) {
  const [activeCategory, setActiveCategory] = useState("");

  const { data: categories, isError, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const handleFilterByCategory = (categoryId) => {
    setActiveCategory(categoryId);
    onFilter(categoryId); 
  };

  if (isLoading) return <FilterLoading/>

  if (isError) {
    console.error(error?.message);
    return <div>Error loading categories.</div>;
  }

  return (
    <div className="c">
      <div className="container">
        <div className="c-r">
          
        <button
          onClick={() => handleFilterByCategory("")}
          className={`c-btn ${!activeCategory && "active"}`}
        >
          All
        </button>
        {categories?.map(({ name, id }) => (
          <button
            key={id}
            onClick={() => handleFilterByCategory(id)}
            className={`c-btn ${activeCategory === id && "active"}`}
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
