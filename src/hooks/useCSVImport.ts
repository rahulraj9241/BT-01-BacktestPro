import { useState } from "react";
import { useMarketData } from "../context/MarketDataContext";

import { parseCSV } from "../utils/csvParser";
import { calculateStats } from "../utils/calculateStats";

export function useCSVImport() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileSize, setFileSize] = useState("");
      const [totalLines, setTotalLines] = useState(0);
        const [preview, setPreview] = useState("");

          const { candles, setCandles, stats, setStats } = useMarketData();

            function importCSV(file: File) {
                setSelectedFile(file);
                    setFileSize((file.size / 1024).toFixed(2) + " KB");

                        const reader = new FileReader();

                            reader.onload = (e) => {
                                  const text = e.target?.result as string;

                                        const lines = text.split(/\r?\n/);

                                              setTotalLines(lines.length);

                                                    const parsedCandles = parseCSV(text);

                                                          setCandles(parsedCandles);

                                                                setStats(calculateStats(parsedCandles));

                                                                      setPreview(lines.slice(0, 5).join("\n"));
                                                                          };

                                                                              reader.readAsText(file);
                                                                                }

                                                                                  return {
                                                                                      selectedFile,
                                                                                          fileSize,
                                                                                              totalLines,
                                                                                                  preview,
                                                                                                      candles,
                                                                                                          stats,
                                                                                                              importCSV,
                                                                                                                };
                                                                                                                }