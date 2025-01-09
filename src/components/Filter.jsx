import React from "react";
import { getCategories } from "../api/apiServices";
import { useQuery } from "react-query";

function Filter() {
  const {
    data: categories,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });


  // if (isLoading) return <FilterLoadingLoading />;

  if (isError) {
    toast.error(error?.message);
    return null;
  }
  return (
    <div className="c">
      <div className="container">
        <div className="c-r">
          <button className="c-btn active"> All </button>
          {categories?.map((category, i) => (
            <button key={i} className="c-btn"> {category.name} </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filter;
