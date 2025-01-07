import React from "react";
import ContentLoader from "react-loading-skeleton";

const ProductsLoading = (props) => (
  <div className="container">
    <div className="p-loading">
      <ContentLoader viewBox="0 0 100 100" width={"100%"} height={210} {...props}>
        <rect x="0" y="0" rx="12" ry="12" width="100" height="100" />
      </ContentLoader>
      <ContentLoader viewBox="0 0 100 100" width={"100%"} height={210} {...props}>
        <rect x="0" y="0" rx="12" ry="12" width="100" height="100" />
      </ContentLoader>
      <ContentLoader viewBox="0 0 100 100" width={"100%"} height={210} {...props}>
        <rect x="0" y="0" rx="12" ry="12" width="100" height="100" />
      </ContentLoader>
      <ContentLoader viewBox="0 0 100 100" width={"100%"} height={210} {...props}>
        <rect x="0" y="0" rx="12" ry="12" width="100" height="100" />
      </ContentLoader>
    </div>
  </div>
);

export default ProductsLoading;
