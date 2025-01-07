import React from "react";
import ContentLoader from "react-loading-skeleton";

const FilterLoading = (props) => (
  <div className="container">
    <div className="f-loading">
      <ContentLoader viewBox="0 0 100 100" width={100} height={34} {...props}>
        <rect x="0" y="0" rx="10" ry="10" width="100" height="34" />
      </ContentLoader>
      <ContentLoader viewBox="0 0 100 100" width={100} height={34} {...props}>
        <rect x="0" y="0" rx="10" ry="10" width="100" height="34" />
      </ContentLoader>
      <ContentLoader viewBox="0 0 100 100" width={100} height={34} {...props}>
        <rect x="0" y="0" rx="10" ry="10" width="100" height="34" />
      </ContentLoader>
      <ContentLoader viewBox="0 0 100 100" width={100} height={34} {...props}>
        <rect x="0" y="0" rx="10" ry="10" width="100" height="34" />
      </ContentLoader>
    </div>
  </div>
);

export default FilterLoading;
