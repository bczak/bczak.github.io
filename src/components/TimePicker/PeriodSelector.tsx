import React from "react";
import { styled } from "twin.macro";
import { m3 } from "./theme";
import type { PeriodSelectorProps } from "./types";

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid ${m3.outline};
  overflow: hidden;
  height: 76px;
  width: 52px;
`;

const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  border: 1px solid ${m3.outline};
  overflow: hidden;
  height: 38px;
  width: 108px;
`;

const PeriodButton = styled.button<{ $selected: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.1px;
  border: none;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  background: ${(p) => (p.$selected ? m3.tertiaryContainer : "transparent")};
  color: ${(p) => (p.$selected ? m3.onTertiaryContainer : m3.onSurfaceVariant)};

  &:hover {
    background: ${(p) =>
      p.$selected ? m3.tertiaryContainer : `${m3.onSurface}0A`};
  }

  &:active {
    background: ${(p) =>
      p.$selected ? m3.tertiaryContainer : `${m3.onSurface}14`};
  }
`;

const Divider = styled.div<{ $horizontal?: boolean }>`
  ${(p) =>
    p.$horizontal
      ? `width: 1px; height: 100%;`
      : `height: 1px; width: 100%;`}
  background: ${m3.outline};
`;

const PeriodSelector: React.FC<PeriodSelectorProps> = ({
  period,
  onChange,
  orientation = "vertical",
}) => {
  if (orientation === "horizontal") {
    return (
      <HorizontalContainer>
        <PeriodButton
          $selected={period === "AM"}
          onClick={() => onChange("AM")}
        >
          AM
        </PeriodButton>
        <Divider $horizontal />
        <PeriodButton
          $selected={period === "PM"}
          onClick={() => onChange("PM")}
        >
          PM
        </PeriodButton>
      </HorizontalContainer>
    );
  }

  return (
    <VerticalContainer>
      <PeriodButton $selected={period === "AM"} onClick={() => onChange("AM")}>
        AM
      </PeriodButton>
      <Divider />
      <PeriodButton $selected={period === "PM"} onClick={() => onChange("PM")}>
        PM
      </PeriodButton>
    </VerticalContainer>
  );
};

export default PeriodSelector;
