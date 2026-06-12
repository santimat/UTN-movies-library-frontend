export function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <span className="animate-tada">
        <svg
          width="48"
          height="48"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2"
            y="2"
            width="28"
            height="28"
            fill="#1a1a1a"
            stroke="#1a1a1a"
            strokeWidth="2"
          />
          <rect
            x="6"
            y="6"
            width="20"
            height="20"
            fill="#facc15"
            stroke="#1a1a1a"
            strokeWidth="2"
          />
          <path
            d="M12 10V22L22 16L12 10Z"
            fill="#ef4444"
            stroke="#1a1a1a"
            strokeWidth="2"
          />
        </svg>
      </span>
    </div>
  );
}
