export const m3 = {
  primary: "#65558F",
  primaryContainer: "#E8DEF8",
  onPrimary: "#FFFFFF",
  onPrimaryContainer: "#21005D",
  surface: "#FEF7FF",
  surfaceContainerHigh: "#ECE6F0",
  surfaceContainerHighest: "#E6E0E9",
  onSurface: "#1D1B20",
  onSurfaceVariant: "#49454F",
  outline: "#79747E",
  outlineVariant: "#CAC4D0",
  tertiaryContainer: "#FFD8E4",
  onTertiaryContainer: "#31111D",
  scrim: "rgba(0, 0, 0, 0.32)",
  error: "#B3261E",
} as const;

export const clock = {
  size: 256,
  center: 128,
  outerRadius: 100,
  innerRadius: 64,
  numberSize: 40,
  handEndSize: 40,
  handCenterSize: 8,
  handWidth: 2,
} as const;

export const getNumberPosition = (
  index: number,
  total: number,
  radius: number,
  center: number
) => {
  const angle = ((index % total) / total) * 2 * Math.PI - Math.PI / 2;
  return {
    x: center + radius * Math.cos(angle),
    y: center + radius * Math.sin(angle),
  };
};

export const getAngleFromPoint = (
  x: number,
  y: number,
  center: number
): number => {
  const dx = x - center;
  const dy = y - center;
  let angle = Math.atan2(dy, dx) + Math.PI / 2;
  if (angle < 0) angle += 2 * Math.PI;
  return angle;
};

export const getDistanceFromCenter = (
  x: number,
  y: number,
  center: number
): number => {
  const dx = x - center;
  const dy = y - center;
  return Math.sqrt(dx * dx + dy * dy);
};
