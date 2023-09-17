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
      d="M11.001 20.167S18.335 16.5 18.335 11V4.583L11 1.833l-7.333 2.75V11c0 5.5 7.333 9.167 7.333 9.167Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgComponent;
