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
      d="M18.425 2.621c3.683 0 5.785 2.08 5.785 5.774v10.119c0 3.672-2.091 5.774-5.774 5.774H8.317c-3.694 0-5.774-2.102-5.774-5.774V8.395c0-3.694 2.08-5.774 5.774-5.774h10.108Zm-5.06 5.97c-.498 0-.899.4-.899.898v3.055H9.4a.94.94 0 0 0-.639.26.938.938 0 0 0-.26.64c0 .498.401.899.9.91h3.065v3.065c0 .499.401.9.9.9.498 0 .899-.401.899-.9v-3.065h3.076c.499-.011.9-.412.9-.91 0-.499-.401-.9-.9-.9h-3.076V9.49c0-.498-.401-.899-.9-.899Z"
      fill="url(#a)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={2.543}
        y1={2.621}
        x2={25.224}
        y2={3.741}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00AFF0" />
        <stop offset={1} stopColor="#1758FE" />
      </linearGradient>
    </defs>
  </svg>
)

export default SvgComponent
