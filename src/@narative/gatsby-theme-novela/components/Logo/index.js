import React from 'react'

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property value called `fill`. `fill` is useful
 * when you want to change your logo depending on the theme you are on.
 */
export default function Logo({ fill }) {
  return (
    <svg width="90" height="30" xmlns="http://www.w3.org/2000/svg">
      <g>
        <g>
          <rect
            height="20"
            width="20"
            y="5.2608"
            x="5.89188"
            opacity="undefined"
            fillOpacity="null"
            strokeOpacity="null"
            strokeDasharray="null"
            strokeWidth="null"
            stroke={fill}
            fill={fill}
          />
          <ellipse
            ry="11"
            rx="11"
            cy="15"
            cx="44.26317"
            opacity="undefined"
            fillOpacity="null"
            strokeOpacity="null"
            strokeDasharray="null"
            strokeWidth="null"
            stroke={fill}
            fill={fill}
          />
          <path
            d="m72.6071,14.94829"
            opacity="NaN"
            fillOpacity="null"
            strokeOpacity="null"
            strokeDasharray="null"
            strokeWidth="null"
            stroke={fill}
            fill={fill}
          />
          <path
            d="m61.02489,10.50155"
            opacity="NaN"
            fillOpacity="null"
            strokeOpacity="null"
            strokeDasharray="null"
            strokeWidth="null"
            stroke={fill}
            fill={fill}
          />
          <path
            d="m61.46621,12.5274l8.6485,0l2.67245,-8.21604l2.67246,8.21604l8.6485,0l-6.99677,5.07774l2.67259,8.21604l-6.99678,-5.07787l-6.99678,5.07787l2.67259,-8.21604l-6.99678,-5.07774z"
            opacity="undefined"
            fillOpacity="null"
            strokeOpacity="null"
            strokeDasharray="null"
            strokeWidth="null"
            stroke={fill}
            fill={fill}
          />
        </g>
      </g>
    </svg>
  )
}
