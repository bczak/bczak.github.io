import React, { useRef, useCallback } from "react";
import { styled } from "twin.macro";
import { m3, clock, getNumberPosition, getAngleFromPoint, getDistanceFromCenter } from "./theme";
import type { ClockDialProps } from "./types";

const ClockFace = styled.div`
  width: ${clock.size}px;
  height: ${clock.size}px;
  border-radius: 50%;
  background: ${m3.surfaceContainerHighest};
  position: relative;
  user-select: none;
  touch-action: none;
  cursor: pointer;
`;

const ClockNumber = styled.div<{ $x: number; $y: number; $selected: boolean; $inner?: boolean }>`
  position: absolute;
  width: ${clock.numberSize}px;
  height: ${clock.numberSize}px;
  left: ${(p) => p.$x - clock.numberSize / 2}px;
  top: ${(p) => p.$y - clock.numberSize / 2}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: ${(p) => (p.$inner ? "13px" : "15px")};
  font-weight: 400;
  color: ${(p) => (p.$selected ? m3.onPrimary : m3.onSurface)};
  background: ${(p) => (p.$selected ? m3.primary : "transparent")};
  z-index: 2;
  transition: background 0.15s, color 0.15s;

  &:hover {
    background: ${(p) => (p.$selected ? m3.primary : `${m3.onSurface}14`)};
  }
`;

const HandLine = styled.line`
  stroke: ${m3.primary};
  stroke-width: ${clock.handWidth}px;
`;

const HandEndCircle = styled.circle`
  fill: ${m3.primary};
`;

const HandCenterCircle = styled.circle`
  fill: ${m3.primary};
`;

const SvgOverlay = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: ${clock.size}px;
  height: ${clock.size}px;
  pointer-events: none;
  z-index: 1;
`;

const HOUR_12 = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const HOUR_24_OUTER = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const HOUR_24_INNER = [0, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
const MINUTES = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

const getHandAngle = (
  value: number,
  selection: "hours" | "minutes",
  format: "12h" | "24h"
): number => {
  if (selection === "minutes") {
    return (value / 60) * 360;
  }
  if (format === "24h") {
    return ((value % 12) / 12) * 360;
  }
  const h = value === 0 ? 12 : value;
  return ((h % 12) / 12) * 360;
};

const getHandRadius = (
  value: number,
  selection: "hours" | "minutes",
  format: "12h" | "24h"
): number => {
  if (selection === "minutes") return clock.outerRadius;
  if (format === "24h" && (value === 0 || value > 12)) return clock.innerRadius;
  return clock.outerRadius;
};

const ClockDial: React.FC<ClockDialProps> = ({
  selection,
  hours,
  minutes,
  format,
  onHourChange,
  onMinuteChange,
  onSelectionChange,
}) => {
  const faceRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const resolveValue = useCallback(
    (clientX: number, clientY: number) => {
      const el = faceRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const angle = getAngleFromPoint(x, y, clock.center);
      const dist = getDistanceFromCenter(x, y, clock.center);

      if (selection === "minutes") {
        let minute = Math.round((angle / (2 * Math.PI)) * 60) % 60;
        onMinuteChange(minute);
      } else {
        let hourIndex = Math.round((angle / (2 * Math.PI)) * 12) % 12;
        if (format === "24h") {
          const threshold = (clock.outerRadius + clock.innerRadius) / 2;
          if (dist < threshold) {
            // inner ring: 0, 13-23
            const hour = hourIndex === 0 ? 0 : hourIndex + 12;
            onHourChange(hour);
          } else {
            // outer ring: 1-12
            const hour = hourIndex === 0 ? 12 : hourIndex;
            onHourChange(hour);
          }
        } else {
          const hour = hourIndex === 0 ? 12 : hourIndex;
          onHourChange(hour);
        }
      }
    },
    [selection, format, onHourChange, onMinuteChange]
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      isDragging.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      resolveValue(e.clientX, e.clientY);
    },
    [resolveValue]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      resolveValue(e.clientX, e.clientY);
    },
    [resolveValue]
  );

  const handlePointerUp = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (selection === "hours") {
      onSelectionChange("minutes");
    }
  }, [selection, onSelectionChange]);

  const currentValue = selection === "hours" ? hours : minutes;
  const handAngle = getHandAngle(currentValue, selection, format);
  const handRadius = getHandRadius(currentValue, selection, format);
  const handRad = ((handAngle - 90) * Math.PI) / 180;
  const handX = clock.center + handRadius * Math.cos(handRad);
  const handY = clock.center + handRadius * Math.sin(handRad);

  const renderHourNumbers = () => {
    if (format === "24h") {
      return (
        <>
          {HOUR_24_OUTER.map((h, i) => {
            const pos = getNumberPosition(i, 12, clock.outerRadius, clock.center);
            return (
              <ClockNumber key={`o${h}`} $x={pos.x} $y={pos.y} $selected={hours === h}>
                {h}
              </ClockNumber>
            );
          })}
          {HOUR_24_INNER.map((h, i) => {
            const pos = getNumberPosition(i, 12, clock.innerRadius, clock.center);
            return (
              <ClockNumber key={`i${h}`} $x={pos.x} $y={pos.y} $selected={hours === h} $inner>
                {h === 0 ? "00" : h}
              </ClockNumber>
            );
          })}
        </>
      );
    }
    return HOUR_12.map((h, i) => {
      const pos = getNumberPosition(i, 12, clock.outerRadius, clock.center);
      return (
        <ClockNumber key={h} $x={pos.x} $y={pos.y} $selected={hours === h}>
          {h}
        </ClockNumber>
      );
    });
  };

  const renderMinuteNumbers = () =>
    MINUTES.map((m, i) => {
      const pos = getNumberPosition(i, 12, clock.outerRadius, clock.center);
      return (
        <ClockNumber key={m} $x={pos.x} $y={pos.y} $selected={minutes === m}>
          {m.toString().padStart(2, "0")}
        </ClockNumber>
      );
    });

  return (
    <ClockFace
      ref={faceRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      <SvgOverlay>
        <HandCenterCircle cx={clock.center} cy={clock.center} r={clock.handCenterSize / 2} />
        <HandLine x1={clock.center} y1={clock.center} x2={handX} y2={handY} />
        <HandEndCircle cx={handX} cy={handY} r={clock.handEndSize / 2} />
      </SvgOverlay>
      {selection === "hours" ? renderHourNumbers() : renderMinuteNumbers()}
    </ClockFace>
  );
};

export default ClockDial;
