import React from 'react';
import Svg, { SvgProps } from './Svg';

const Restrict: React.FC<SvgProps> = props => {
  return (
    <Svg fill="currentColor" {...props}>
      <title></title>
      <path
        d="M4.73729 10L1 11.9824V13.438C1 15.8791 2.47716 18.0775 4.73729 19C6.99739 18.0775 8.47458 15.8791 8.47458 13.438V11.9824L4.73729 10Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      ></path>
      <circle
        cx="10"
        cy="4.5"
        fill="none"
        r="3.75"
        stroke="currentColor"
        strokeWidth="1.5"
      ></circle>
      <path
        d="M11 12C11 12.4142 11.3358 12.75 11.75 12.75H12.75C13.4705 12.75 13.7581 12.7516 13.9895 12.7821C15.6722 13.0036 16.9964 14.3278 17.2179 16.0105C17.2484 16.2419 17.25 16.5295 17.25 17.25C17.25 17.5061 17.2484 17.5614 17.2436 17.5979C17.1993 17.9345 16.9344 18.1993 16.5979 18.2436C16.5614 18.2484 16.506 18.25 16.25 18.25H10.75C10.3358 18.25 10 18.5858 10 19V19C10 19.4142 10.3358 19.75 10.75 19.75H16.25L16.2919 19.75C16.4823 19.7501 16.6459 19.7502 16.7937 19.7308C17.8033 19.5978 18.5978 18.8033 18.7308 17.7937C18.7502 17.646 18.7501 17.4823 18.75 17.292V17.292L18.75 17.25L18.75 17.1844C18.7501 16.5504 18.7501 16.1566 18.7051 15.8147C18.3949 13.4589 16.5411 11.6051 14.1853 11.2949C13.8435 11.2499 13.4497 11.25 12.8156 11.25L12.75 11.25H11.75C11.3358 11.25 11 11.5858 11 12V12Z"
        fill="currentColor"
      ></path>
    </Svg>
  );
};

export default Restrict;
