import { type TimerState } from "./TimerState";

export interface ActionsComponentProps {
  timerState: TimerState;
  onStart: () => void;
  onPause: () => void;
  onStop: () => void;
}
