import React from "react";
import ContentLoader from "react-loading-skeleton";

const ProductsLoading = (props) => (
  <div className="container">
    <div className="p-loading">
      <ContentLoader viewBox="0 0 166 200" width={166} height={200} {...props}>
        <rect x="0" y="0" rx="12" ry="12" width="166" height="200" />
      </ContentLoader>
      <ContentLoader viewBox="0 0 166 200" width={166} height={200} {...props}>
        <rect x="0" y="0" rx="12" ry="12" width="166" height="200" />
      </ContentLoader>
      <ContentLoader viewBox="0 0 166 200" width={166} height={200} {...props}>
        <rect x="0" y="0" rx="12" ry="12" width="166" height="200" />
      </ContentLoader>
      <ContentLoader viewBox="0 0 166 200" width={166} height={200} {...props}>
        <rect x="0" y="0" rx="12" ry="12" width="166" height="200" />
      </ContentLoader>
    </div>
  </div>
);

export default ProductsLoading;
