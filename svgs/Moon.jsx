import * as React from "react";

const SvgMoon = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#moon_svg__a)">
      <path
        d="M14.252.941a9.926 9.926 0 0 1 1.673 5.51c.033 5.477-4.46 9.904-10.003 9.904-1.869 0-3.64-.524-5.149-1.41a10.357 10.357 0 0 0 9.282 5.674c5.739 0 10.396-4.592 10.396-10.265 0-4.198-2.558-7.806-6.199-9.413Z"
        fill="#FFCE31"
      />
    </g>
    <defs>
      <clipPath id="moon_svg__a">
        <path
          fill="#fff"
          transform="translate(.117 .285)"
          d="M0 0h20.989v20.989H0z"
        />
      </clipPath>
    </defs>
  </svg>
);

export default SvgMoon;

