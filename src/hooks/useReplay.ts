import { useState } from "react";
import type { ReplayState } from "../types/ReplayState";

export function useReplay() {
  const [replay, setReplay] = useState<ReplayState>({
      currentIndex: 0,
          isPlaying: false,
              speed: 1,
                });

                  function play() {
                      setReplay((prev) => ({
                            ...prev,
                                  isPlaying: true,
                                      }));
                                        }

                                          function pause() {
                                              setReplay((prev) => ({
                                                    ...prev,
                                                          isPlaying: false,
                                                              }));
                                                                }

                                                                  function next() {
                                                                      setReplay((prev) => ({
                                                                            ...prev,
                                                                                  currentIndex: prev.currentIndex + 1,
                                                                                      }));
                                                                                        }

                                                                                          function previous() {
                                                                                              setReplay((prev) => ({
                                                                                                    ...prev,
                                                                                                          currentIndex: Math.max(0, prev.currentIndex - 1),
                                                                                                              }));
                                                                                                                }

                                                                                                                  function reset() {
                                                                                                                      setReplay({
                                                                                                                            currentIndex: 0,
                                                                                                                                  isPlaying: false,
                                                                                                                                        speed: 1,
                                                                                                                                            });
                                                                                                                                              }

                                                                                                                                                function changeSpeed(speed: number) {
                                                                                                                                                    setReplay((prev) => ({
                                                                                                                                                          ...prev,
                                                                                                                                                                speed,
                                                                                                                                                                    }));
                                                                                                                                                                      }

                                                                                                                                                                        return {
                                                                                                                                                                            replay,
                                                                                                                                                                                play,
                                                                                                                                                                                    pause,
                                                                                                                                                                                        next,
                                                                                                                                                                                            previous,
                                                                                                                                                                                                reset,
                                                                                                                                                                                                    changeSpeed,
                                                                                                                                                                                                      };
                                                                                                                                                                                                      }