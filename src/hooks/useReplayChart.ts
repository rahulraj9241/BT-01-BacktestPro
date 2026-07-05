import { useMemo } from "react";

import { useMarketData } from "../context/MarketDataContext";
import { useReplay } from "../context/ReplayContext";
import { useReplayMode } from "../context/ReplayModeContext";

export function useReplayChart() {
  const { candles } = useMarketData();
    const { currentIndex } = useReplay();
      const { replayMode } = useReplayMode();

        const totalCandles = candles.length;

          const visibleCandles = useMemo(() => {
              if (totalCandles === 0) return [];

                  if (!replayMode) {
                        return candles;
                            }

                                return candles.slice(0, currentIndex + 1);
                                  }, [
                                      candles,
                                          currentIndex,
                                              replayMode,
                                                  totalCandles,
                                                    ]);

                                                      const progress = useMemo(() => {
                                                          if (totalCandles === 0) return 0;

                                                              return ((currentIndex + 1) / totalCandles) * 100;
                                                                }, [
                                                                    currentIndex,
                                                                        totalCandles,
                                                                          ]);

                                                                            const hasNext = currentIndex < totalCandles - 1;
                                                                              const hasPrevious = currentIndex > 0;

                                                                                const currentCandle =
                                                                                    visibleCandles.length > 0
                                                                                          ? visibleCandles[visibleCandles.length - 1]
                                                                                                : null;

                                                                                                  return {
                                                                                                      visibleCandles,
                                                                                                          currentCandle,
                                                                                                              totalCandles,
                                                                                                                  progress,
                                                                                                                      hasNext,
                                                                                                                          hasPrevious,
                                                                                                                            };
                                                                                                                            }