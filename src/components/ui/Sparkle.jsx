import React from 'react';

export default function Sparkle({ className = 'w-5 h-5 text-navy-900', ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12 0C12.5 7.2 16.8 11.5 24 12C16.8 12.5 12.5 16.8 12 24C11.5 16.8 7.2 12.5 0 12C7.2 11.5 11.5 7.2 12 0Z" />
    </svg>
  );
}
