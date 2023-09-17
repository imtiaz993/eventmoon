import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={36}
    height={36}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M27 30H6V9h13.5V6H6C4.35 6 3 7.35 3 9v21c0 1.65 1.35 3 3 3h21c1.65 0 3-1.35 3-3V16.5h-3V30Zm-11.685-4.755-2.94-3.54L8.25 27h16.5l-5.31-7.065-4.125 5.31ZM30 6V1.5h-3V6h-4.5c.015.015 0 3 0 3H27v4.485c.015.015 3 0 3 0V9h4.5V6H30Z"
      fill="#1758FE"
    />
  </svg>
)

export default SvgComponent

