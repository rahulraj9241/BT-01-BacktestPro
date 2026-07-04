import { useEffect, useRef } from "react";
import {
  createChart,
    ColorType,
      CandlestickSeries,
      } from "lightweight-charts";

      import { useMarketData } from "../../context/MarketDataContext";

      function CandlestickChart() {
        const chartContainerRef = useRef<HTMLDivElement>(null);
          const { candles } = useMarketData();

            useEffect(() => {
                if (!chartContainerRef.current) return;

                    const chart = createChart(chartContainerRef.current, {
                          width: chartContainerRef.current.clientWidth,
                                height: 500,

                                      layout: {
                                              background: {
                                                        type: ColorType.Solid,
                                                                  color: "#0f172a",
                                                                          },
                                                                                  textColor: "#cbd5e1",
                                                                                        },

                                                                                              grid: {
                                                                                                      vertLines: {
                                                                                                                color: "#1e293b",
                                                                                                                        },
                                                                                                                                horzLines: {
                                                                                                                                          color: "#1e293b",
                                                                                                                                                  },
                                                                                                                                                        },

                                                                                                                                                              rightPriceScale: {
                                                                                                                                                                      borderColor: "#334155",
                                                                                                                                                                            },

                                                                                                                                                                                  timeScale: {
                                                                                                                                                                                          borderColor: "#334155",
                                                                                                                                                                                                },
                                                                                                                                                                                                    });

                                                                                                                                                                                                        const series = chart.addSeries(CandlestickSeries);

                                                                                                                                                                                                            series.setData(
                                                                                                                                                                                                                  candles.map((candle) => ({
                                                                                                                                                                                                                          time: candle.time,
                                                                                                                                                                                                                                  open: candle.open,
                                                                                                                                                                                                                                          high: candle.high,
                                                                                                                                                                                                                                                  low: candle.low,
                                                                                                                                                                                                                                                          close: candle.close,
                                                                                                                                                                                                                                                                }))
                                                                                                                                                                                                                                                                    );

                                                                                                                                                                                                                                                                        chart.timeScale().fitContent();

                                                                                                                                                                                                                                                                            const handleResize = () => {
                                                                                                                                                                                                                                                                                  if (!chartContainerRef.current) return;

                                                                                                                                                                                                                                                                                        chart.applyOptions({
                                                                                                                                                                                                                                                                                                width: chartContainerRef.current.clientWidth,
                                                                                                                                                                                                                                                                                                      });
                                                                                                                                                                                                                                                                                                          };

                                                                                                                                                                                                                                                                                                              window.addEventListener("resize", handleResize);

                                                                                                                                                                                                                                                                                                                  return () => {
                                                                                                                                                                                                                                                                                                                        window.removeEventListener("resize", handleResize);
                                                                                                                                                                                                                                                                                                                              chart.remove();
                                                                                                                                                                                                                                                                                                                                  };
                                                                                                                                                                                                                                                                                                                                    }, [candles]);

                                                                                                                                                                                                                                                                                                                                      return (
                                                                                                                                                                                                                                                                                                                                          <div
                                                                                                                                                                                                                                                                                                                                                ref={chartContainerRef}
                                                                                                                                                                                                                                                                                                                                                      className="w-full h-[500px] rounded-xl border border-slate-700"
                                                                                                                                                                                                                                                                                                                                                          />
                                                                                                                                                                                                                                                                                                                                                            );
                                                                                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                                                                            export default CandlestickChart;