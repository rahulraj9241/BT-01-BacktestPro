import { useReplay } from "../../context/ReplayContext";
import { useMarketData } from "../../context/MarketDataContext";

function ReplayTimeline() {
  const { candles } = useMarketData();

    const {
        currentIndex,
            jumpToCandle,
              } = useReplay();

                if (candles.length === 0) return null;

                  const progress =
                      ((currentIndex + 1) / candles.length) * 100;

                        return (
                            <div className="bg-slate-800 rounded-xl border border-slate-700 p-5 mt-6">

                                  <div className="flex justify-between text-slate-300 text-sm mb-2">
                                          <span>
                                                    Candle {currentIndex + 1}
                                                            </span>

                                                                    <span>
                                                                              {candles.length}
                                                                                      </span>
                                                                                            </div>

                                                                                                  <input
                                                                                                          type="range"
                                                                                                                  min={0}
                                                                                                                          max={candles.length - 1}
                                                                                                                                  value={currentIndex}
                                                                                                                                          onChange={(e) =>
                                                                                                                                                    jumpToCandle(Number(e.target.value))
                                                                                                                                                            }
                                                                                                                                                                    className="w-full cursor-pointer"
                                                                                                                                                                          />

                                                                                                                                                                                <div className="mt-3 text-center text-blue-400 font-semibold">
                                                                                                                                                                                        {progress.toFixed(1)}%
                                                                                                                                                                                              </div>

                                                                                                                                                                                                  </div>
                                                                                                                                                                                                    );
                                                                                                                                                                                                    }

                                                                                                                                                                                                    export default ReplayTimeline;