import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

/**
 * UserProfileIcon
 *
 * A user avatar with a pen overlay, suitable for "edit profile" actions.
 */
export const UserProfileIcon: React.FC<Props> = ({ className, ...props }) => (
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
    <path d="M2 21a8 8 0 0 1 10.821-7.487" />
    <path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
    <circle cx={10} cy={8} r={5} />
  </svg>
);
