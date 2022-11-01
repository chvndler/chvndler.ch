import { createContext, useRef } from 'react';

type ScrollContextProps = {
  refElement: React.MutableRefObject<HTMLDivElement | null> | null;
};

export const ScrollContext = createContext<ScrollContextProps>({
  refElement: null
});

export const ScrollProvider = ({ children }: { children: JSX.Element }) => {
  const refElement = useRef<HTMLDivElement | null>(null);
  const data = { refElement };
  return <ScrollContext.Provider value={data}>{children}</ScrollContext.Provider>;
};

// export default ScrollProvider;
