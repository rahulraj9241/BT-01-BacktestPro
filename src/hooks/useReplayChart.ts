import { useMemo } from "react";

import { useMarketData } from "../context/MarketDataContext";
import { useReplay } from "../context/ReplayContext";
import { useReplayMode } from "../context/ReplayModeContext";

export function useReplayChart() {
  const { candles } = useMarketData();

    const { currentIndex } = useReplay();

      const { replayMode } = useReplayMode();

        const visibleCandles = useMemo(() => {
            if (!replayMode) {
                  return candles;
                      }

                          return candles.slice(0, currentIndex + 1);
                            }, [
                                candles,
                                    currentIndex,
                                        replayMode,
                                          ]);

                                            const totalCandles = candles.length;

                                              const progress =
                                                  totalCandles === 0
                                                        ? 0
                                                              : ((currentIndex + 1) / totalCandles) * 100;

                                                                const hasNext =
                                                                    currentIndex < totalCandles - 1;

                                                                      const hasPrevious =
                                                                          currentIndex > 0;

                                                                            return {
                                                                                visibleCandles,

                                                                                    totalCandles,

                                                                                        progress,

                                                                                            hasNext,

                                                                                                hasPrevious,
                                                                                                  };
                                                                                                  }