export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      width="160"
      height="24"
      viewBox="0 0 160 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <text
        x="0"
        y="18"
        fontFamily="inherit"
        fontSize="20"
        fontWeight="700"
        letterSpacing="-0.5"
      >
        <tspan fill="currentColor">TEAM</tspan>
        <tspan fill="#6ECE9D">48</tspan>
        <tspan fill="currentColor">Live</tspan>
      </text>
    </svg>
  )
}
