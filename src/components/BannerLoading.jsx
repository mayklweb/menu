import React from "react";
import ContentLoader from "react-loading-skeleton";

const BannerLoading = (props) => (
  <div className="container">
    <ContentLoader width={"100%"} height={"20vh"} viewBox="0 0 100 100" {...props}>
      <rect x="0" y="0" rx="24" ry="24" width="100" height="20vh" />
    </ContentLoader>
  </div>
);

export default BannerLoading;
