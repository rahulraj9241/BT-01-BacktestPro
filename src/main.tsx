import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";

import { MarketDataProvider } from "./context/MarketDataContext";
import { ReplayProvider } from "./context/ReplayContext";
import { ReplayModeProvider } from "./context/ReplayModeContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <MarketDataProvider>
            <ReplayModeProvider>
                    <ReplayProvider>
                              <App />
                                      </ReplayProvider>
                                            </ReplayModeProvider>
                                                </MarketDataProvider>
                                                  </StrictMode>
                                                  );