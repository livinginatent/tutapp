import * as React from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SVGComponent = (props:any) => (
  <svg
    width={300}
    height={300}
    viewBox="0 0 83 114"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <rect width={83} height={114} fill="url(#pattern0_4953_28305)" />
    <defs>
      <pattern
        id="pattern0_4953_28305"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          xlinkHref="#image0_4953_28305"
          transform="matrix(0.00112788 0 0 0.000827703 -0.139093 -0.207207)"
        />
      </pattern>
      <image
        id="image0_4953_28305"
        width={1131}
        height={1600}
      />
    </defs>
  </svg>
);
export default SVGComponent;