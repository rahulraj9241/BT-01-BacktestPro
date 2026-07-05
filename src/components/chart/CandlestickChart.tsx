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

                                                      // Reset ya CSV import hone par
                                                          if (chartData.length < previousLength.current) {
                                                                seriesRef.current.setData(chartData);
                                                                    }
                                                                        // Replay ke dauran nayi candle add hui
                                                                            else if (chartData.length === previousLength.current + 1) {
                                                                                  seriesRef.current.update(chartData[chartData.length - 1]);
                                                                                      }
                                                                                          // Initial load
                                                                                              else {
                                                                                                    seriesRef.current.setData(chartData);
                                                                                                        }

                                                                                                            previousLength.current = chartData.length;
                                                                                                              }, [visibleCandles]);

                                                                                                                return (
                                                                                                                    <div
                                                                                                                          ref={containerRef}
                                                                                                                                className="w-full h-[500px] rounded-xl border border-slate-700"
                                                                                                                                    />
                                                                                                                                      );
                                                                                                                                      }

                                                                                                                                      export default CandlestickChart;