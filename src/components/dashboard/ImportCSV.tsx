import { useRef, useState } from "react";
import Section from "../ui/Section";

function ImportCSV() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

      function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
          const file = event.target.files?.[0];

              if (file) {
                    setSelectedFile(file);
                        }
                          }

                            function openFilePicker() {
                                fileInputRef.current?.click();
                                  }

                                    return (
                                        <Section title="📥 Import CSV">
                                              <input
                                                      ref={fileInputRef}
                                                              type="file"
                                                                      accept=".csv"
                                                                              onChange={handleFileChange}
                                                                                      style={{ display: "none" }}
                                                                                            />

                                                                                                  <div
                                                                                                          onClick={openFilePicker}
                                                                                                                  className="bg-slate-800 border-2 border-dashed border-slate-600 hover:border-blue-500 hover:bg-slate-700 rounded-xl p-10 cursor-pointer transition-all duration-300 text-center"
                                                                                                                        >
                                                                                                                                <div className="text-6xl mb-4">📂</div>

                                                                                                                                        <h3 className="text-white text-2xl font-bold mb-3">
                                                                                                                                                  Click Anywhere to Import CSV
                                                                                                                                                          </h3>

                                                                                                                                                                  <p className="text-slate-400">
                                                                                                                                                                            Import your Dukascopy or supported CSV file
                                                                                                                                                                                    </p>

                                                                                                                                                                                            <p className="text-slate-500 mt-2">
                                                                                                                                                                                                      Supported format: .csv
                                                                                                                                                                                                              </p>

                                                                                                                                                                                                                      {selectedFile && (
                                                                                                                                                                                                                                <div className="mt-6 text-green-400 font-semibold">
                                                                                                                                                                                                                                            ✅ {selectedFile.name}
                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                              )}
                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                        </Section>
                                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                          }

                                                                                                                                                                                                                                                                          export default ImportCSV;