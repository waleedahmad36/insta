const WaleedStagramLogo = ({ width = "200" }: { width?: string }) => {
  return (
    <svg
      width={width}
      viewBox="0 0 900 260"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        {/* Red → White smooth gradient */}
        <linearGradient id="waleedRedWhite" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff0033" />
          <stop offset="45%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#ff0033" />
        </linearGradient>
      </defs>

      <text
        x="50%"
        y="58%"
        textAnchor="middle"
        fontSize="150"
        fontWeight="800"
        fontFamily="Segoe UI Rounded, Poppins, Arial"
        letterSpacing="2"
        fill="url(#waleedRedWhite)"
      >
        Waleed
      </text>

      <text
        x="50%"
        y="92%"
        textAnchor="middle"
        fontSize="110"
        fontWeight="700"
        fontFamily="Segoe UI Rounded, Poppins, Arial"
        letterSpacing="3"
        fill="url(#waleedRedWhite)"
      >
        Stagram
      </text>
    </svg>
  );
};

export default WaleedStagramLogo;
