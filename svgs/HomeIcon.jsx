import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={27}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.27 22.504V19.19c0-.845.69-1.53 1.542-1.53h3.114c.409 0 .801.16 1.09.448.29.287.452.676.452 1.082v3.313c-.003.351.136.69.386.939.25.25.589.39.943.39h2.124a3.748 3.748 0 0 0 2.647-1.083 3.694 3.694 0 0 0 1.097-2.625v-9.437c0-.795-.355-1.55-.97-2.06l-7.226-5.73a3.356 3.356 0 0 0-4.278.077L4.13 8.628a2.68 2.68 0 0 0-1.048 2.06v9.428c0 2.053 1.676 3.717 3.744 3.717h2.076c.736 0 1.333-.59 1.339-1.32l.029-.01Z"
      fill="url(#a)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={3.082}
        y1={2.166}
        x2={24.634}
        y2={3.177}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00AFF0" />
        <stop offset={1} stopColor="#1758FE" />
      </linearGradient>
    </defs>
  </svg>
)

export default SvgComponent
