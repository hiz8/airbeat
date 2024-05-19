import { useState, createContext, createElement, useEffect } from 'react';
import type { ReactNode } from 'react';

import { Metoronome, type Status, type Beats } from '../lib/metoronome';

const metoronome = new Metoronome();

function useController(): [
  Status,
  {
    start: () => void;
    stop: () => void;
    init: (button: HTMLButtonElement | null) => void;
  },
] {
  const [, updateStatus] = useState(metoronome.status);

  function start() {
    metoronome.start();
    updateStatus('on');
  }

  function stop() {
    metoronome.stop();
    updateStatus('off');
  }

  function init(button: HTMLButtonElement | null) {
    metoronome.playButton = button;
    metoronome.componentDidMount();
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies:
  useEffect(() => {
    return () => {
      stop();
    };
  }, []);

  return [
    metoronome.status,
    {
      start,
      stop,
      init,
    },
  ];
}

function useTempo(): [number, (value: number) => void] {
  const [tempo, updateTempo] = useState(metoronome.tempo);

  function update(value: number) {
    metoronome.tempo = value;
    updateTempo(value);
  }

  return [tempo, update];
}

function useBeat(): [Beats, (value: Beats) => void] {
  const [, updateBeat] = useState(metoronome.beat);

  function update(value: Beats) {
    metoronome.beat = value;
    updateBeat(value);
  }

  return [metoronome.beat, update];
}

// Contexts
export const StatusContext = createContext<Status>(metoronome.status);
export const StatusDispatchContext = createContext<{
  start: () => void;
  stop: () => void;
  init: (button: HTMLButtonElement | null) => void;
} | null>(null);
export const TempoContext = createContext(metoronome.tempo);
export const TempoDispatchContext = createContext<
  ((value: number) => void) | null
>(null);
export const BeatContext = createContext(metoronome.beat);
export const BeatDispatchContext = createContext<
  ((value: Beats) => void) | null
>(null);

export const MetoronomeProvider = ({ children }: { children: ReactNode }) => {
  const [status, dispatches] = useController();
  const [tempo, updateTempo] = useTempo();
  const [beat, updateBeat] = useBeat();

  return createElement(
    StatusContext.Provider,
    {
      value: status,
    },
    createElement(
      StatusDispatchContext.Provider,
      {
        value: dispatches,
      },
      createElement(
        TempoContext.Provider,
        {
          value: tempo,
        },
        createElement(
          TempoDispatchContext.Provider,
          {
            value: updateTempo,
          },
          createElement(
            BeatContext.Provider,
            {
              value: beat,
            },
            createElement(
              BeatDispatchContext.Provider,
              {
                value: updateBeat,
              },
              children,
            ),
          ),
        ),
      ),
    ),
  );
};
