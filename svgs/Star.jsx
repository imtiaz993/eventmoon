import * as React from "react";

const StarIcon = (props) => {
  const { fillcolor } = props;

  return (
    <svg
      width={31}
      height={30}
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m15.583.65 4.683 9.49 10.473 1.522-7.578 7.387 1.789 10.43-9.367-4.924-9.367 4.925 1.788-10.431-7.578-7.387L10.9 10.14 15.583.65Z"
        fill={fillcolor || "currentColor"}
      />
    </svg>
  );
};

export default StarIcon;
