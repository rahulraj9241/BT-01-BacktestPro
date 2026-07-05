import {
    createContext,
      useContext,
        useEffect,
          useState,
            type ReactNode,
            } from "react";

            import { useMarketData } from "./MarketDataContext";

            type ReplayContextType = {
              currentIndex: number;
                setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;

                  isPlaying: boolean;

                    replaySpeed: number;
                      setReplaySpeed: React.Dispatch<React.SetStateAction<number>>;

                        play: () => void;
                          pause: () => void;
                            reset: () => void;

                              nextCandle: () => void;
                                previousCandle: () => void;
                                  jumpToCandle: (index: number) => void;
                                  };

                                  const ReplayContext = createContext<ReplayContextType | undefined>(undefined);

                                  export function ReplayProvider({
                                    children,
                                    }: {
                                      children: ReactNode;
                                      }) {
                                        const { candles } = useMarketData();

                                          const [currentIndex, setCurrentIndex] = useState(0);
                                            const [isPlaying, setIsPlaying] = useState(false);
                                              const [replaySpeed, setReplaySpeed] = useState(1);

                                                function play() {
                                                    if (candles.length === 0) return;

                                                        setIsPlaying(true);
                                                          }

                                                            function pause() {
                                                                setIsPlaying(false);
                                                                  }

                                                                    function reset() {
                                                                        setCurrentIndex(0);
                                                                            setIsPlaying(false);
                                                                              }

                                                                                function nextCandle() {
                                                                                    setCurrentIndex((prev) =>
                                                                                          Math.min(prev + 1, candles.length - 1)
                                                                                              );
                                                                                                }

                                                                                                  function previousCandle() {
                                                                                                      setCurrentIndex((prev) =>
                                                                                                            Math.max(prev - 1, 0)
                                                                                                                );
                                                                                                                  }

                                                                                                                    function jumpToCandle(index: number) {
                                                                                                                        const safeIndex = Math.max(
                                                                                                                              0,
                                                                                                                                    Math.min(index, candles.length - 1)
                                                                                                                                        );

                                                                                                                                            setCurrentIndex(safeIndex);
                                                                                                                                              }

                                                                                                                                                useEffect(() => {
                                                                                                                                                    if (!isPlaying) return;

                                                                                                                                                        const timer = setInterval(() => {
                                                                                                                                                              setCurrentIndex((prev) => {
                                                                                                                                                                      if (prev >= candles.length - 1) {
                                                                                                                                                                                setIsPlaying(false);
                                                                                                                                                                                          return prev;
                                                                                                                                                                                                  }

                                                                                                                                                                                                          return prev + 1;
                                                                                                                                                                                                                });
                                                                                                                                                                                                                    }, 1000 / replaySpeed);

                                                                                                                                                                                                                        return () => clearInterval(timer);
                                                                                                                                                                                                                          }, [isPlaying, replaySpeed, candles.length]);

                                                                                                                                                                                                                            return (
                                                                                                                                                                                                                                <ReplayContext.Provider
                                                                                                                                                                                                                                      value={{
                                                                                                                                                                                                                                              currentIndex,
                                                                                                                                                                                                                                                      setCurrentIndex,

                                                                                                                                                                                                                                                              isPlaying,

                                                                                                                                                                                                                                                                      replaySpeed,
                                                                                                                                                                                                                                                                              setReplaySpeed,

                                                                                                                                                                                                                                                                                      play,
                                                                                                                                                                                                                                                                                              pause,
                                                                                                                                                                                                                                                                                                      reset,

                                                                                                                                                                                                                                                                                                              nextCandle,
                                                                                                                                                                                                                                                                                                                      previousCandle,
                                                                                                                                                                                                                                                                                                                              jumpToCandle,
                                                                                                                                                                                                                                                                                                                                    }}
                                                                                                                                                                                                                                                                                                                                        >
                                                                                                                                                                                                                                                                                                                                              {children}
                                                                                                                                                                                                                                                                                                                                                  </ReplayContext.Provider>
                                                                                                                                                                                                                                                                                                                                                    );
                                                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                                                    export function useReplay() {
                                                                                                                                                                                                                                                                                                                                                      const context = useContext(ReplayContext);

                                                                                                                                                                                                                                                                                                                                                        if (!context) {
                                                                                                                                                                                                                                                                                                                                                            throw new Error(
                                                                                                                                                                                                                                                                                                                                                                  "useReplay must be used inside ReplayProvider"
                                                                                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                                                          return context;
                                                                                                                                                                                                                                                                                                                                                                          }
                                                                                                                                                                                                                                                                                                                                                                          