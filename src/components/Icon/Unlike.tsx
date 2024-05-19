import React from 'react';
import Svg, { SvgProps } from './Svg';

const Volumn: React.FC<SvgProps> = props => {
  return (
    <Svg {...props}>
      <title>{props?.ariaLabel}</title>
      <path
        d="M2.14555 5.86847C2.25874 5.47003 2.0275 5.05526 1.62905 4.94207C1.2306 4.82888 0.815836 5.06012 0.702645 5.45857C0.536571 6.04318 0.449219 6.66962 0.449219 7.3272C0.449219 9.37797 1.32346 11.3552 2.78088 13.1862C4.23798 15.0167 6.3081 16.7411 8.78837 18.3088L8.80249 18.3175C8.95243 18.4077 9.13262 18.5076 9.31738 18.5872C9.48405 18.6589 9.73381 18.7498 9.99941 18.7498C10.2664 18.7498 10.5162 18.6611 10.688 18.5872C10.8756 18.5064 11.0561 18.4048 11.2057 18.3118L11.2057 18.3118L11.2104 18.3088C11.853 17.9026 12.4672 17.4865 13.0497 17.0614C13.3843 16.8172 13.4576 16.348 13.2134 16.0134C12.9692 15.6788 12.5 15.6056 12.1654 15.8498C11.6125 16.2533 11.027 16.6502 10.4114 17.0393C10.3004 17.1082 10.1899 17.1685 10.095 17.2093C10.0554 17.2264 10.0245 17.2374 10.0021 17.2442C9.98008 17.2373 9.94956 17.2262 9.91033 17.2093C9.8138 17.1678 9.7003 17.1068 9.58259 17.0363C7.1956 15.5267 5.27334 13.9089 3.95448 12.252C2.63461 10.5938 1.94922 8.93659 1.94922 7.3272C1.94922 6.80283 2.01881 6.31464 2.14555 5.86847Z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
      <path
        d="M13.7373 1.24951C12.2124 1.24951 10.9274 1.81108 10.0015 2.71991C9.10085 1.83343 7.8445 1.27362 6.35846 1.25027C5.9443 1.24377 5.60328 1.57424 5.59677 1.9884C5.59027 2.40256 5.92074 2.74358 6.3349 2.75009C7.71763 2.77181 8.76569 3.40626 9.38048 4.3045C9.51976 4.50801 9.75018 4.63004 9.99679 4.63089C10.2434 4.63175 10.4747 4.51132 10.6154 4.30879C11.2594 3.38168 12.3276 2.74951 13.7373 2.74951C16.1572 2.74951 18.0496 4.57883 18.0496 7.32726C18.0496 8.78818 17.4853 10.2877 16.3931 11.7936C16.1499 12.1289 16.2245 12.5978 16.5598 12.841C16.8951 13.0842 17.3641 13.0096 17.6073 12.6743C18.8291 10.9898 19.5496 9.18843 19.5496 7.32726C19.5496 3.79869 17.0331 1.24951 13.7373 1.24951Z"
        fill="currentColor"
        fillRule="evenodd"
      ></path>
      <path
        d="M1.5 1.5L18.5 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      ></path>
    </Svg>
  );
};

export default Volumn;
