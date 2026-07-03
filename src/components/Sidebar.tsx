function Sidebar() {
      const menu = [
          "🏠 Dashboard",
              "📥 Import CSV",
                  "▶️ Replay",
                      "💹 Trades",
                          "📊 Statistics",
                              "⚙️ Settings",
                                ];

                                  return (
                                      <aside
                                            style={{
                                                    width: "240px",
                                                            background: "#1f2937",
                                                                    color: "white",
                                                                            padding: "20px",
                                                                                    minHeight: "calc(100vh - 70px)",
                                                                                          }}
                                                                                              >
                                                                                                    <h3 style={{ marginBottom: "20px" }}>Menu</h3>

                                                                                                          {menu.map((item) => (
                                                                                                                  <div
                                                                                                                            key={item}
                                                                                                                                      style={{
                                                                                                                                                  padding: "12px",
                                                                                                                                                              marginBottom: "10px",
                                                                                                                                                                          borderRadius: "8px",
                                                                                                                                                                                      cursor: "pointer",
                                                                                                                                                                                                  background: "#374151",
                                                                                                                                                                                                            }}
                                                                                                                                                                                                                    >
                                                                                                                                                                                                                              {item}
                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                            ))}
                                                                                                                                                                                                                                                </aside>
                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                  }

                                                                                                                                                                                                                                                  export default Sidebar;