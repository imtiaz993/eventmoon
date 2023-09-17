import * as React from "react";

const SvgEmail = (props) => (
  <svg
    width={23}
    height={17}
    viewBox="0 0 23 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.24 6.462v6.193a4.125 4.125 0 0 0 4.126 4.125h13.75a4.125 4.125 0 0 0 4.125-4.125V6.462L11.804 11.16a1.374 1.374 0 0 1-1.127 0L.24 6.462Zm.102-2.97 10.899 4.906 10.898-4.906A4.125 4.125 0 0 0 18.116.28H4.366A4.125 4.125 0 0 0 .342 3.492Z"
      fill="url(#email_svg__a)"
    />
    <defs>
      <linearGradient
        id="email_svg__a"
        x1={0.241}
        y1={0.28}
        x2={23.227}
        y2={1.794}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00AFF0" />
        <stop offset={1} stopColor="#1758FE" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgEmail;
