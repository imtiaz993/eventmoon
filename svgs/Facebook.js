import * as React from 'react';

const SvgFacebook = (props) => (
  <svg
    width={49}
    height={49}
    viewBox='0 0 49 49'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M21.797 42.404c-8.5-1.5-15-8.9-15-17.8 0-9.9 8.1-18 18-18s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8Z'
      fill='url(#facebook_svg__a)'
    />
    <path
      d='m31.797 29.605.8-5h-4.8v-3.5c0-1.4.5-2.5 2.7-2.5h2.3v-4.6c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5h4.5v12.7c1 .2 2 .3 3 .3s2-.1 3-.3v-12.7h4Z'
      fill='#fff'
    />
    <defs>
      <linearGradient
        id='facebook_svg__a'
        x1={24.797}
        y1={41.358}
        x2={24.797}
        y2={6.604}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#0062E0' />
        <stop offset={1} stopColor='#19AFFF' />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgFacebook;
