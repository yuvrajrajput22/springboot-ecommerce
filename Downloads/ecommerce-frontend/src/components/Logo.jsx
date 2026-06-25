import React from 'react';

// File-free SVG wordmark — always renders, no image needed.
// `dark` = true => light text (use on dark backgrounds like footer)
const Logo = ({ dark = false, showTagline = true, height = 30 }) => {
  const main = dark ? '#ffffff' : '#171717';
  const sub = dark ? '#a3a3a3' : '#a3a3a3';

  return (
    <span className="inline-flex items-center gap-2 select-none" aria-label="ShopEasy">
      {/* Mark: minimal shopping bag */}
      <svg width={height} height={height} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="5" y="9" width="22" height="19" rx="3" stroke={main} strokeWidth="2.2" />
        <path d="M11 12V8a5 5 0 0 1 10 0v4" stroke={main} strokeWidth="2.2" strokeLinecap="round" />
      </svg>

      <span className="flex flex-col leading-none">
        <span
          className="font-semibold tracking-tight"
          style={{ color: main, fontSize: height * 0.62 }}>
          shopeasy
        </span>
        {showTagline && (
          <span
            className="uppercase mt-1"
            style={{ color: sub, fontSize: 8, letterSpacing: '0.3em' }}>
            Everyday Essentials
          </span>
        )}
      </span>
    </span>
  );
};

export default Logo;