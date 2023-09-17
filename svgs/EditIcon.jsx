import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={17}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.116 13.6c.371 0 .673.306.673.683a.678.678 0 0 1-.673.682h-3.807a.678.678 0 0 1-.674-.682c0-.377.302-.683.674-.683h3.807Zm-2.64-10.17.983.782c.403.315.672.731.764 1.168.106.481-.007.953-.325 1.362L7.04 14.317a1.403 1.403 0 0 1-1.09.544l-2.334.03a.267.267 0 0 1-.262-.209l-.53-2.3c-.092-.423 0-.86.268-1.197L7.245 5.81c.07-.086.198-.1.283-.036l1.747 1.39a.564.564 0 0 0 .432.122.63.63 0 0 0 .545-.695.7.7 0 0 0-.22-.423L8.335 4.807a.252.252 0 0 1-.043-.35l.658-.854c.608-.781 1.67-.853 2.526-.172Z"
      fill="url(#a)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={2.789}
        y1={2.965}
        x2={15.351}
        y2={3.585}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00AFF0" />
        <stop offset={1} stopColor="#1758FE" />
      </linearGradient>
    </defs>
  </svg>
)

export default SvgComponent
