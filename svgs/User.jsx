import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.4 11.65a5.5 5.5 0 1 0-6.802 0 9.167 9.167 0 0 0-5.702 7.5.922.922 0 1 0 1.833.2 7.333 7.333 0 0 1 14.576 0 .917.917 0 0 0 .916.817h.101a.917.917 0 0 0 .807-1.009 9.168 9.168 0 0 0-5.73-7.507ZM10.998 11a3.667 3.667 0 1 1 0-7.334 3.667 3.667 0 0 1 0 7.334Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
