import { useEffect, useRef } from "react";

import { useChart } from "../../hooks/useChart";
import { useReplayChart } from "../../hooks/useReplayChart";

function CandlestickChart() {
  const { containerRef, seriesRef } = useChart();
    const { visibleCandles } = useReplayChart();

      const previousLength = useRef(0);

        useEffect(() => {
            if (!seriesRef.current) return;

                const chartData = visibleCandles.map((candle) => ({
                      time: candle.time,
                            open: candle.open,
                                  high: candle.high,
                                        low: candle.low,
                                              close: candle.close,
                                                  }));

                                                      if (chartData.length < previousLength.current) {
                                                            // Reset ya CSV import
                                                                  seriesRef.current.setData(chartData);
                                                                      } else if (chartData.length === previousLength.current + 1) {
                                                                            // Replay me ek nayi candle
                                                                                  seriesRef.current.update(chartData[chartData.length - 1]);
                                                                                      } else {
                                                                                            // Initial load
                                                                                                  seriesRef.current.setData(chartData);
                                                                                                      }

                                                                                                          previousLength.current = chartData.length;
                                                                                                            }, [visibleCandles, seriesRef]);

                                                                                                              return (
                                                                                                                  <div
                                                                                                                        ref={containerRef}
                                                                                                                              className="w-full h-[500px] rounded-xl border border-slate-700"
                                                                                                                                  />
                                                                                                                                    );
                                                                                                                                    }

                                                                                                                                    export default CandlestickChart;