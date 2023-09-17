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
      d="M3.665 3.667h14.667c1.008 0 1.833.825 1.833 1.833v11a1.839 1.839 0 0 1-1.833 1.833H3.665A1.839 1.839 0 0 1 1.832 16.5v-11c0-1.008.825-1.833 1.833-1.833Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.165 5.5 11 11.917 1.832 5.5"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgComponent;
