import type { UTCTimestamp } from "lightweight-charts";

export interface CSVStats {
  totalCandles: number;
    firstCandle: UTCTimestamp;
      lastCandle: UTCTimestamp;
        highestHigh: number;
          lowestLow: number;
            averageVolume: number;
            }