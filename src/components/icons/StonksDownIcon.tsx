import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const StonksDownIcon: React.FC<Props> = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    className={className}
    {...props}
  >
    <polyline
      points="22 17 13.5 8.5 8.5 13.5 2 7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline
      points="16 17 22 17 22 11"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

