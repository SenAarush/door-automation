import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const UserNotAllowedIcon: React.FC<Props> = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M2 21a8 8 0 0 1 11.873-7" />
    <circle cx={10} cy={8} r={5} />
    <path d="m17 17 5 5" />
    <path d="m22 17-5 5" />
  </svg>
);
