import React, { useState, useCallback, useEffect, useRef } from "react";
import { styled, css } from "twin.macro";
import { m3 } from "./theme";
import ClockDial from "./ClockDial";
import PeriodSelector from "./PeriodSelector";
import type {
  TimePickerProps,
  TimePickerMode,
  Period,
  Selection,
} from "./types";

/* ─── Scrim / backdrop ─── */
const Scrim = styled.div<{ $visible: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: ${m3.scrim};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  pointer-events: ${(p) => (p.$visible ? "auto" : "none")};
  transition: opacity 0.2s ease;
`;

/* ─── Dialog container ─── */
const Dialog = styled.div<{ $visible: boolean; $landscape: boolean }>`
  background: ${m3.surfaceContainerHigh};
  border-radius: 28px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: ${(p) => (p.$landscape ? "520px" : "328px")};
  max-width: 560px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.16);
  transform: scale(${(p) => (p.$visible ? 1 : 0.85)});
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transition: transform 0.25s cubic-bezier(0.2, 0, 0, 1),
    opacity 0.2s ease;
`;

/* ─── Header label ─── */
const HeaderLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.1px;
  color: ${m3.onSurfaceVariant};
  text-transform: uppercase;
`;

/* ─── Time display row ─── */
const TimeDisplayRow = styled.div<{ $landscape?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  ${(p) =>
    p.$landscape &&
    css`
      flex-direction: column;
      align-items: flex-start;
    `}
`;

const TimeBox = styled.button<{ $selected: boolean }>`
  min-width: 96px;
  height: 76px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 45px;
  font-weight: 400;
  cursor: pointer;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
  border: 2px solid ${(p) => (p.$selected ? m3.primary : "transparent")};
  background: ${(p) =>
    p.$selected ? m3.primaryContainer : m3.surfaceContainerHighest};
  color: ${(p) => (p.$selected ? m3.onPrimaryContainer : m3.onSurface)};

  &:hover {
    background: ${(p) =>
      p.$selected ? m3.primaryContainer : `${m3.onSurface}14`};
  }
`;

const TimeSeparator = styled.span`
  font-size: 45px;
  font-weight: 400;
  color: ${m3.onSurface};
  line-height: 1;
`;

/* ─── Input mode fields ─── */
const InputFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const InputField = styled.input<{ $selected: boolean }>`
  width: 96px;
  height: 76px;
  border-radius: 8px;
  border: 2px solid ${(p) => (p.$selected ? m3.primary : "transparent")};
  background: ${(p) =>
    p.$selected ? m3.primaryContainer : m3.surfaceContainerHighest};
  color: ${(p) => (p.$selected ? m3.onPrimaryContainer : m3.onSurface)};
  font-size: 45px;
  font-weight: 400;
  text-align: center;
  outline: none;
  caret-color: ${m3.primary};
  transition: background 0.15s, border-color 0.15s, color 0.15s;

  &:focus {
    border-color: ${m3.primary};
    background: ${m3.primaryContainer};
    color: ${m3.onPrimaryContainer};
  }

  &::placeholder {
    color: ${m3.onSurfaceVariant};
  }
`;

const InputLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: ${m3.onSurfaceVariant};
`;

/* ─── Body (holds dial + period) ─── */
const Body = styled.div<{ $landscape: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  ${(p) =>
    p.$landscape &&
    css`
      flex-direction: row;
      align-items: flex-start;
    `}
`;

const LandscapeLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

/* ─── Footer ─── */
const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterActions = styled.div`
  display: flex;
  gap: 8px;
`;

const TextButton = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 20px;
  background: transparent;
  color: ${m3.primary};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.1px;
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    background: ${m3.primary}14;
  }

  &:active {
    background: ${m3.primary}1F;
  }
`;

const IconButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 20px;
  background: transparent;
  color: ${m3.onSurfaceVariant};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;

  &:hover {
    background: ${m3.onSurface}0A;
  }

  &:active {
    background: ${m3.onSurface}14;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

/* ─── SVG Icons ─── */
const KeyboardIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 5H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
  </svg>
);

/* ─── Main Component ─── */
const TimePicker: React.FC<TimePickerProps> = ({
  open,
  onClose,
  onConfirm,
  initialHours = 12,
  initialMinutes = 0,
  format = "12h",
}) => {
  const [mode, setMode] = useState<TimePickerMode>("dial");
  const [selection, setSelection] = useState<Selection>("hours");
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [period, setPeriod] = useState<Period>(initialHours >= 12 ? "PM" : "AM");
  const [visible, setVisible] = useState(false);
  const [landscape, setLandscape] = useState(false);

  const hourInputRef = useRef<HTMLInputElement>(null);
  const minuteInputRef = useRef<HTMLInputElement>(null);

  // Animate in when opened
  useEffect(() => {
    if (open) {
      setHours(initialHours);
      setMinutes(initialMinutes);
      setPeriod(initialHours >= 12 ? "PM" : "AM");
      setSelection("hours");
      setMode("dial");
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [open, initialHours, initialMinutes]);

  // Detect landscape / adaptive
  useEffect(() => {
    const check = () => {
      const isLand = window.innerWidth > window.innerHeight && window.innerHeight < 500;
      setLandscape(isLand);
      // Fallback to input mode when very constrained
      if (window.innerHeight < 400) {
        setMode("input");
      }
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleConfirm = useCallback(() => {
    let h = hours;
    if (format === "12h") {
      if (period === "PM" && h < 12) h += 12;
      if (period === "AM" && h === 12) h = 0;
    }
    onConfirm(h, minutes);
    setVisible(false);
    setTimeout(onClose, 200);
  }, [hours, minutes, period, format, onConfirm, onClose]);

  const handleCancel = useCallback(() => {
    setVisible(false);
    setTimeout(onClose, 200);
  }, [onClose]);

  const handleScrimClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) handleCancel();
    },
    [handleCancel]
  );

  const toggleMode = () =>
    setMode((m) => (m === "dial" ? "input" : "dial"));

  const displayHour = () => {
    if (format === "24h") return hours.toString().padStart(2, "0");
    const h = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
    return h.toString().padStart(2, "0");
  };

  const handleHourInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (isNaN(val)) return;
    if (format === "24h") {
      if (val >= 0 && val <= 23) setHours(val);
    } else {
      if (val >= 1 && val <= 12) setHours(val);
    }
  };

  const handleMinuteInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    if (isNaN(val)) return;
    if (val >= 0 && val <= 59) setMinutes(val);
  };

  if (!open) return null;

  const headerText = mode === "dial" ? "Select time" : "Enter time";

  const renderTimeDisplay = () => (
    <TimeDisplayRow $landscape={landscape}>
      {mode === "dial" ? (
        <>
          <TimeBox
            $selected={selection === "hours"}
            onClick={() => setSelection("hours")}
          >
            {displayHour()}
          </TimeBox>
          <TimeSeparator>:</TimeSeparator>
          <TimeBox
            $selected={selection === "minutes"}
            onClick={() => setSelection("minutes")}
          >
            {minutes.toString().padStart(2, "0")}
          </TimeBox>
        </>
      ) : (
        <>
          <InputFieldWrapper>
            <InputField
              ref={hourInputRef}
              $selected={selection === "hours"}
              value={displayHour()}
              onChange={handleHourInput}
              onFocus={() => setSelection("hours")}
              placeholder="--"
              inputMode="numeric"
              maxLength={2}
            />
            <InputLabel>Hour</InputLabel>
          </InputFieldWrapper>
          <TimeSeparator>:</TimeSeparator>
          <InputFieldWrapper>
            <InputField
              ref={minuteInputRef}
              $selected={selection === "minutes"}
              value={minutes.toString().padStart(2, "0")}
              onChange={handleMinuteInput}
              onFocus={() => setSelection("minutes")}
              placeholder="--"
              inputMode="numeric"
              maxLength={2}
            />
            <InputLabel>Minute</InputLabel>
          </InputFieldWrapper>
        </>
      )}
      {format === "12h" && (
        <PeriodSelector
          period={period}
          onChange={setPeriod}
          orientation={landscape ? "horizontal" : "vertical"}
        />
      )}
    </TimeDisplayRow>
  );

  const renderDialBody = () =>
    landscape ? (
      <Body $landscape>
        <LandscapeLeft>
          <HeaderLabel>{headerText}</HeaderLabel>
          {renderTimeDisplay()}
        </LandscapeLeft>
        <ClockDial
          selection={selection}
          hours={format === "12h" ? (hours === 0 ? 12 : hours > 12 ? hours - 12 : hours) : hours}
          minutes={minutes}
          format={format}
          period={period}
          onHourChange={(h) => {
            setHours(format === "12h" ? h : h);
          }}
          onMinuteChange={setMinutes}
          onSelectionChange={setSelection}
        />
      </Body>
    ) : (
      <>
        <ClockDial
          selection={selection}
          hours={format === "12h" ? (hours === 0 ? 12 : hours > 12 ? hours - 12 : hours) : hours}
          minutes={minutes}
          format={format}
          period={period}
          onHourChange={(h) => {
            setHours(format === "12h" ? h : h);
          }}
          onMinuteChange={setMinutes}
          onSelectionChange={setSelection}
        />
      </>
    );

  return (
    <Scrim $visible={visible} onClick={handleScrimClick}>
      <Dialog
        $visible={visible}
        $landscape={landscape}
        onClick={(e) => e.stopPropagation()}
      >
        {!landscape && (
          <>
            <HeaderLabel>{headerText}</HeaderLabel>
            {renderTimeDisplay()}
          </>
        )}

        {mode === "dial" && renderDialBody()}

        <Footer>
          <IconButton onClick={toggleMode} title={mode === "dial" ? "Switch to keyboard input" : "Switch to clock dial"}>
            {mode === "dial" ? <KeyboardIcon /> : <ClockIcon />}
          </IconButton>
          <FooterActions>
            <TextButton onClick={handleCancel}>Cancel</TextButton>
            <TextButton onClick={handleConfirm}>OK</TextButton>
          </FooterActions>
        </Footer>
      </Dialog>
    </Scrim>
  );
};

export default TimePicker;
