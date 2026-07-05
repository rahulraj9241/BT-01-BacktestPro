import {
      createContext,
        useContext,
          useState,
            type ReactNode,
            } from "react";

            type ReplayModeContextType = {
              replayMode: boolean;
                startReplay: () => void;
                  stopReplay: () => void;
                  };

                  const ReplayModeContext = createContext<
                    ReplayModeContextType | undefined
                    >(undefined);

                    export function ReplayModeProvider({
                      children,
                      }: {
                        children: ReactNode;
                        }) {
                          const [replayMode, setReplayMode] = useState(false);

                            function startReplay() {
                                setReplayMode(true);
                                  }

                                    function stopReplay() {
                                        setReplayMode(false);
                                          }

                                            return (
                                                <ReplayModeContext.Provider
                                                      value={{
                                                              replayMode,
                                                                      startReplay,
                                                                              stopReplay,
                                                                                    }}
                                                                                        >
                                                                                              {children}
                                                                                                  </ReplayModeContext.Provider>
                                                                                                    );
                                                                                                    }

                                                                                                    export function useReplayMode() {
                                                                                                      const context = useContext(ReplayModeContext);

                                                                                                        if (!context) {
                                                                                                            throw new Error(
                                                                                                                  "useReplayMode must be used inside ReplayModeProvider"
                                                                                                                      );
                                                                                                                        }

                                                                                                                          return context;
                                                                                                                          }
                                                                                                                          