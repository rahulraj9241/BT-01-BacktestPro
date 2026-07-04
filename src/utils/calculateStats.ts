import type { Candle } from "../types/Candle";
import type { CSVStats } from "../types/CSVStats";

export function calculateStats(candles: Candle[]): CSVStats {
  if (candles.length === 0) {
      return {
            totalCandles: 0,
                  firstCandle: "",
                        lastCandle: "",
                              highestHigh: 0,
                                    lowestLow: 0,
                                          averageVolume: 0,
                                              };
                                                }

                                                  const highestHigh = Math.max(...candles.map((c) => c.high));
                                                    const lowestLow = Math.min(...candles.map((c) => c.low));

                                                      const totalVolume = candles.reduce(
                                                          (sum, candle) => sum + candle.volume,
                                                              0
                                                                );

                                                                  return {
                                                                      totalCandles: candles.length,
                                                                          firstCandle: candles[0].time,
                                                                              lastCandle: candles[candles.length - 1].time,
                                                                                  highestHigh,
                                                                                      lowestLow,
                                                                                          averageVolume: totalVolume / candles.length,
                                                                                            };
                                                                                            }