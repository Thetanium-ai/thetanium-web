interface ShieldLogoProps {
  className?: string
  size?: number
}

export default function ShieldLogo({ className = '', size = 40 }: ShieldLogoProps) {
  return (
    <svg 
      className={className}
      viewBox="0 0 90 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size * 1.1}
    >
      <defs>
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E3A5F"/>
          <stop offset="100%" stopColor="#0A1628"/>
        </linearGradient>
      </defs>
      <path 
        d="M45 5 L85 20 L85 50 Q85 85 45 95 Q5 85 5 50 L5 20 Z" 
        fill="url(#shieldGradient)"
      />
      <ellipse 
        cx="45" 
        cy="48" 
        rx="20" 
        ry="25" 
        fill="none" 
        stroke="#FFFFFF" 
        strokeWidth="4"
      />
      <line 
        x1="28" 
        y1="48" 
        x2="62" 
        y2="48" 
        stroke="#FFFFFF" 
        strokeWidth="4" 
        strokeLinecap="round"
      />
    </svg>
  )
}
