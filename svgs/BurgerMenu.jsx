import * as React from "react";

const BurgerMenu = (props) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    preserveAspectRatio="xMidYMid meet"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      cx={16.104}
      cy={16.033}
      r={15.646}
      fill={props.circleColor || "#fff"}
    />
    <path
      stroke={props.linesColor || "currentColor"}
      strokeWidth={1.3}
      d="M9.43 9.536h13.348M9.43 13.434h10.422M9.43 17.333h13.348M9.43 21.231h10.422"
    />
  </svg>
);

export default BurgerMenu;
