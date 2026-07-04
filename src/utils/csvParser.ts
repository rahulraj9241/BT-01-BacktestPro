import type { UTCTimestamp } from "lightweight-charts";
import type { Candle } from "../types/Candle";

export function parseCSV(text: string): Candle[] {
  const lines = text.split(/\r?\n/);

    return lines
        .slice(1)
            .filter((line) => line.trim() !== "")
                .map((line) => {
                      const [time, open, high, low, close, volume] = line.split(",");

                            return {
                                    time: Math.floor(new Date(time).getTime() / 1000) as UTCTimestamp,
                                            open: Number(open),
                                                    high: Number(high),
                                                            low: Number(low),
                                                                    close: Number(close),
                                                                            volume: Number(volume),
                                                                                  };
                                                                                      });
                                                                                      }
                                                                                      