import { useState, createContext, createElement } from 'react';
import type { ReactNode } from 'react';

function useList(): [boolean, () => void] {
  const [visible, updateVisible] = useState(false);

  function toggleVisible() {
    updateVisible((state) => !state);
  }

  return [visible, toggleVisible];
}

export const ListContext = createContext(false);
export const ListDispatchContext = createContext<() => void>(null);

export const ListProvider = ({ children }: { children: ReactNode }) => {
  const [visible, toggleVisible] = useList();

  return createElement(
    ListContext.Provider,
    {
      value: visible,
    },
    createElement(
      ListDispatchContext.Provider,
      {
        value: toggleVisible,
      },
      children,
    ),
  );
};
