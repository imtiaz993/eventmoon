import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={27}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.827 2.592c2.69 0 4.883 2.156 4.883 4.81v5.189h-6.614a.835.835 0 0 0-.848.834c0 .455.374.834.848.834h6.614v5.179c0 2.654-2.194 4.82-4.905 4.82H7.437c-2.7 0-4.894-2.155-4.894-4.81V7.413c0-2.665 2.204-4.821 4.905-4.821h5.379Zm7.635 7.096a.827.827 0 0 1 1.18-.011l3.164 3.152a.827.827 0 0 1 0 1.181l-3.164 3.153a.84.84 0 0 1-.585.249.846.846 0 0 1-.595-.25.837.837 0 0 1 0-1.18l1.733-1.723H17.71v-1.668h4.485l-1.733-1.722a.837.837 0 0 1 0-1.181Z"
      fill="url(#a)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={2.543}
        y1={2.592}
        x2={26.105}
        y2={3.801}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00AFF0" />
        <stop offset={1} stopColor="#1758FE" />
      </linearGradient>
    </defs>
  </svg>
)

export default SvgComponent
