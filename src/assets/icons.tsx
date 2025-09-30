type IconProps = {
  size?: number;
  className?: string;
};

export const FaLinkedin = ({ size = 24 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.1c.7-1.3 2.4-2.7 5-2.7 5.3 0 6.3 3.5 6.3 8V24h-5V15.1c0-2.1 0-4.8-2.9-4.8s-3.3 2.2-3.3 4.7V24h-5V8z" />
  </svg>
);

export const FaInstagram = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9A5.5 5.5 0 0116.5 22h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 1.5A4 4 0 003.5 7.5v9a4 4 0 004 4h9a4 4 0 004-4v-9a4 4 0 00-4-4h-9zm9.5 1.5a.75.75 0 11.001 1.501A.75.75 0 0117 5zm-5.5 2.5a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
  </svg>
);

export const FaX = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export const FaBluesky = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6 2 1 6.5 1 12s5 10 11 10 11-4.5 11-10S18 2 12 2zm0 18c-4.4 0-8-3.6-8-8 0-4.4 3.6-8 8-8 4.4 0 8 3.6 8 8 0 4.4-3.6 8-8 8z" />
  </svg>
);

export const FaTiktok = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2v8a4 4 0 004 4h0v4a8 8 0 01-8-8V2h4z" />
  </svg>
);

export const FaGithub = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.17c-3.2.7-3.88-1.55-3.88-1.55-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.46-2.3 1.2-3.11-.12-.3-.52-1.52.12-3.16 0 0 .98-.31 3.2 1.18a11.23 11.23 0 015.84 0c2.22-1.49 3.2-1.18 3.2-1.18.64 1.64.24 2.86.12 3.16.74.81 1.2 1.85 1.2 3.11 0 4.41-2.68 5.39-5.23 5.69.42.36.8 1.08.8 2.18v3.24c0 .3.21.65.79.54A10.98 10.98 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
  </svg>
);

export const FaYoutube = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 15l5-3-5-3v6zm12-3c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-6z" />
  </svg>
);

export const FaSpotify = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.6 14.7c-.4.7-1.4.9-2.1.5-1.8-1-4-1.2-6.6-.8-.8.2-1.7-.3-1.9-1.1-.2-.8.3-1.7 1.1-1.9 3-1 5.8-.8 7.9.9.7.4.9 1.4.5 2.1zm.3-3c-.5.8-1.6 1-2.4.5-2.1-1.2-5.4-1.5-7.8-.9-.9.3-1.8-.2-2.1-1.1-.3-.9.2-1.8 1.1-2.1 3-1 6.6-.8 9.1 1.1.8.5 1 1.6.5 2.5z" />
  </svg>
);

export const FaPatreon = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 2h4v20H6V2zm10 0a5 5 0 110 10 5 5 0 010-10z" />
  </svg>
);

export const FaGitlab = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L9.3 9.3 2 10.6l7.3 6.3L5.3 22 12 18.7 18.7 22l-4-5.1 7.3-6.3-7.3-1.3L12 2z" />
  </svg>
);

export const FaFiverr = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 3h4a4 4 0 014 4h4v4h-4v7H8v-7H4V7h4V3z" />
  </svg>
);

export const FaPortfolio = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 5h18v14H3V5zm2 2v10h14V7H5zm3 2h8v1H8V9zm0 2h8v1H8v-1zm0 2h8v1H8v-1z" />
  </svg>
);

export const FaTwitch = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 2v18h6l4 4v-4h4l4-4V2H4zm14 12h-4v4l-2 2v-2H6V4h12v10z" />
  </svg>
);

export const FaMedium = ({ size = 24, className }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 4v16h20V4H2zm5.5 4h2l3 6-3 6h-2l-3-6 3-6zm10 0h2v12h-2V8z" />
  </svg>
);
