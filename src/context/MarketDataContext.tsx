import {
      createContext,
        useContext,
          useState,
            type ReactNode,
            } from "react";

            import type { Candle } from "../types/Candle";
            import type { CSVStats } from "../types/CSVStats";

            type MarketDataContextType = {
              candles: Candle[];
                setCandles: React.Dispatch<React.SetStateAction<Candle[]>>;

                  stats: CSVStats | null;
                    setStats: React.Dispatch<React.SetStateAction<CSVStats | null>>;
                    };

                    const MarketDataContext = createContext<MarketDataContextType | undefined>(
                      undefined
                      );

                      export function MarketDataProvider({
                        children,
                        }: {
                          children: ReactNode;
                          }) {
                            const [candles, setCandles] = useState<Candle[]>([]);
                              const [stats, setStats] = useState<CSVStats | null>(null);

                                return (
                                    <MarketDataContext.Provider
                                          value={{
                                                  candles,
                                                          setCandles,
                                                                  stats,
                                                                          setStats,
                                                                                }}
                                                                                    >
                                                                                          {children}
                                                                                              </MarketDataContext.Provider>
                                                                                                );
                                                                                                }

                                                                                                export function useMarketData() {
                                                                                                  const context = useContext(MarketDataContext);

                                                                                                    if (!context) {
                                                                                                        throw new Error(
                                                                                                              "useMarketData must be used inside MarketDataProvider"
                                                                                                                  );
                                                                                                                    }

                                                                                                                      return context;
                                                                                                                      }
