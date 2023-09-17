import * as React from 'react';

const GrayFacebook = (props) => (
  <svg
    width='22'
    height='22'
    viewBox='0 0 22 22'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_1827_2236)'>
      <path
        d='M15.9165 12.3972L16.5201 8.46534H12.7471V5.91382C12.7471 4.83835 13.274 3.78937 14.9639 3.78937H16.6789V0.442108C16.6789 0.442108 15.1228 0.176636 13.6345 0.176636C10.5276 0.176636 8.49682 2.06006 8.49682 5.4691V8.46602H5.04297V12.3979H8.49682V21.9033H12.7471V12.3979L15.9165 12.3972Z'
        fill={props.color ? props.color : '#8A8A8A'}
      />
    </g>
    <defs>
      <clipPath id='clip0_1827_2236'>
        <rect
          width='21.7266'
          height='21.7266'
          fill='white'
          transform='translate(0 0.17688)'
        />
      </clipPath>
    </defs>
  </svg>
);

export default GrayFacebook;
