import React from 'react';

export function TopRightWave({ className = '' }) {
  return (
    <svg
      viewBox="0 0 420 260"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <path
        d="M95 -10C132 58 216 86 286 78C346 71 392 106 430 162L430 -10H95Z"
        fill="#2B5BA9"
        fillOpacity="0.14"
      />
      <path
        d="M158 -10C188 42 254 64 316 58C366 53 402 82 430 124L430 -10H158Z"
        fill="#0B1F4B"
        fillOpacity="0.08"
      />
      <path
        d="M120 12C168 78 248 98 318 90C362 85 398 112 426 154"
        stroke="#2B5BA9"
        strokeOpacity="0.28"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BottomLeftWave({ className = '' }) {
  return (
    <svg
      viewBox="0 0 380 180"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <path
        d="M-10 38C52 30 96 74 156 106C222 141 294 126 368 184H-10V38Z"
        fill="#2B5BA9"
        fillOpacity="0.14"
      />
      <path
        d="M-10 78C46 74 88 112 144 138C194 161 248 156 298 184H-10V78Z"
        fill="#0B1F4B"
        fillOpacity="0.09"
      />
    </svg>
  );
}
