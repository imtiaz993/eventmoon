import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={20}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M4.36 13.291a3.878 3.878 0 0 0 1.377-2.967V8.71A4.056 4.056 0 0 1 9.21 4.704V4.08a.579.579 0 1 1 1.158 0v.625A4.055 4.055 0 0 1 13.84 8.71v1.614c0 1.146.502 2.227 1.383 2.972a1.011 1.011 0 0 1-.659 1.782H5.013a1.014 1.014 0 0 1-.654-1.787ZM9.791 17.395a2.175 2.175 0 0 1-2.127-1.737h4.254a2.174 2.174 0 0 1-2.127 1.737Z"
        fill="#fff"
      />
      <circle cx={10} cy={10.5} r={9.5} stroke="#fff" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(0 .5)" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)

export default SvgComponent
