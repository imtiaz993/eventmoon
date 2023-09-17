import * as React from 'react';

const EmailLogo = (props) => (
  <svg
    width='27'
    height='26'
    viewBox='0 0 27 26'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M23.949 4.51965H2.64844V21.5601H23.949V4.51965ZM21.819 8.77977L13.2987 14.1049L4.7785 8.77977V6.64971L13.2987 11.9749L21.819 6.64971V8.77977Z'
      fill={props.color ? props.color : '#8A8A8A'}
    />
  </svg>
);

export default EmailLogo;
