import { useEffect } from "react";

import { useChart } from "../../hooks/useChart";
import { useReplayChart } from "../../hooks/useReplayChart";

function CandlestickChart() {
  const { containerRef, seriesRef } = useChart();

    const { visibleCandles } = useReplayChart();

      useEffect(() => {
          if (!seriesRef.current) return;

              seriesRef.current.setData(
                    visibleCandles.map((candle) => ({
                            time: candle.time,
                                    open: candle.open,
                                            high: candle.high,
                                                    low: candle.low,
                                                            close: candle.close,
                                                                  }))
                                                                      );
                                                                        }, [visibleCandles, seriesRef]);

                                                                          return (
                                                                              <div
                                                                                    ref={containerRef}
                                                                                          className="w-full h-[500px] rounded-xl border border-slate-700"
                                                                                              />
                                                                                                );
                                                                                                }

                                                                                                export default CandlestickChart;