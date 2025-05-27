// components/SvgIcon.tsx
import React from 'react';

export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * The coordinate system of the icon.
   * Most icons are 24×24, but you can override if yours differs.
   */
  viewBox?: string;
  /**
   * Defaults to "currentColor" so your icon inherits font-color.
   * You can pass any valid SVG stroke or fill color here.
   */
  color?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({
  viewBox = '0 0 24 24',
  color = 'currentColor',
  children,
  className,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {children}
  </svg>
);

export default SvgIcon;
