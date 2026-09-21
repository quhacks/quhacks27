export default function JungleVines({ className }) {
  return (
    <svg className={className} viewBox="0 0 180 1800" preserveAspectRatio="none" aria-hidden="true">
      <path d="M20 0C180 170-40 310 65 510S-30 760 60 970 0 1230 70 1420 15 1670 50 1800" stroke="#547f42" strokeWidth="7" fill="none" />
      {[80, 300, 530, 770, 1010, 1240, 1480, 1670].map((y, i) => (
        <g key={y} transform={`translate(${i % 2 ? 50 : 35} ${y}) rotate(${i % 2 ? -15 : 20})`}>
          <path d="M0 0C15-65 60-60 100-75 88-25 52 10 0 0" fill="#396b3e" />
          <path d="M0 0 85-62" stroke="#638c4d" strokeWidth="2" />
          <path d="M0 22C-25-22-56-15-78-28-67 19-35 45 0 22" fill="#284f35" />
        </g>
      ))}
    </svg>
  );
}
