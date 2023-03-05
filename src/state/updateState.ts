import { GlobalState } from 'little-state-machine';

export function updateMode(state: GlobalState, payload: boolean): GlobalState {
  return {
    ...state,
    darkMode: payload,
  };
}