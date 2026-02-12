export type TimePickerMode = "dial" | "input";
export type Period = "AM" | "PM";
export type Selection = "hours" | "minutes";
export type ClockFormat = "12h" | "24h";
export type Orientation = "vertical" | "horizontal";

export interface TimePickerProps {
  open: boolean;
  onClose: () => void;
  onConfirm: (hours: number, minutes: number) => void;
  initialHours?: number;
  initialMinutes?: number;
  format?: ClockFormat;
}

export interface ClockDialProps {
  selection: Selection;
  hours: number;
  minutes: number;
  format: ClockFormat;
  period: Period;
  onHourChange: (hour: number) => void;
  onMinuteChange: (minute: number) => void;
  onSelectionChange: (selection: Selection) => void;
}

export interface PeriodSelectorProps {
  period: Period;
  onChange: (period: Period) => void;
  orientation?: Orientation;
}

export interface TimeDisplayProps {
  hours: number;
  minutes: number;
  period: Period;
  selection: Selection;
  format: ClockFormat;
  onSelectionChange: (selection: Selection) => void;
}
