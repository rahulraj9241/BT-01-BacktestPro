import { useEffect, useRef } from "react";
import {
  createChart,
    ColorType,
      CandlestickSeries,
        type IChartApi,
          type ISeriesApi,
          } from "lightweight-charts";

          export function useChart() {
            const containerRef = useRef<HTMLDivElement>(null);

              const chartRef = useRef<IChartApi | null>(null);

                const seriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);

                  useEffect(() => {
                      if (!containerRef.current) return;

                          const chart = createChart(containerRef.current, {
                                width: containerRef.current.clientWidth,
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
                                                                                                                                                                                    autoScale: true,
                                                                                                                                                                                          },

                                                                                                                                                                                                timeScale: {
                                                                                                                                                                                                        borderColor: "#334155",

                                                                                                                                                                                                                rightOffset: 30,

                                                                                                                                                                                                                        barSpacing: 10,

                                                                                                                                                                                                                                minBarSpacing: 8,

                                                                                                                                                                                                                                        fixLeftEdge: false,

                                                                                                                                                                                                                                                fixRightEdge: true,

                                                                                                                                                                                                                                                        lockVisibleTimeRangeOnResize: true,

                                                                                                                                                                                                                                                                allowShiftVisibleRangeOnWhitespaceReplacement: false,
                                                                                                                                                                                                                                                                      },
                                                                                                                                                                                                                                                                          });

                                                                                                                                                                                                                                                                              const series = chart.addSeries(CandlestickSeries);

                                                                                                                                                                                                                                                                                  chartRef.current = chart;

                                                                                                                                                                                                                                                                                      seriesRef.current = series;

                                                                                                                                                                                                                                                                                          const handleResize = () => {
                                                                                                                                                                                                                                                                                                if (!containerRef.current || !chartRef.current) return;

                                                                                                                                                                                                                                                                                                      chartRef.current.applyOptions({
                                                                                                                                                                                                                                                                                                              width: containerRef.current.clientWidth,
                                                                                                                                                                                                                                                                                                                    });
                                                                                                                                                                                                                                                                                                                        };

                                                                                                                                                                                                                                                                                                                            window.addEventListener("resize", handleResize);

                                                                                                                                                                                                                                                                                                                                return () => {
                                                                                                                                                                                                                                                                                                                                      window.removeEventListener("resize", handleResize);

                                                                                                                                                                                                                                                                                                                                            chart.remove();
                                                                                                                                                                                                                                                                                                                                                };
                                                                                                                                                                                                                                                                                                                                                  }, []);

                                                                                                                                                                                                                                                                                                                                                    return {
                                                                                                                                                                                                                                                                                                                                                        containerRef,
                                                                                                                                                                                                                                                                                                                                                            chartRef,
                                                                                                                                                                                                                                                                                                                                                                seriesRef,
                                                                                                                                                                                                                                                                                                                                                                  };
                                                                                                                                                                                                                                                                                                                                                                  }