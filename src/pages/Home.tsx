import Layout from "../components/Layout";
import StatsCard from "../components/StatsCard";

function Home() {
  return (
      <Layout>
            <h1>📈 Dashboard</h1>
                  <p>Welcome to BacktestPro.</p>

                        <div
                                style={{
                                          display: "flex",
                                                    gap: "20px",
                                                              flexWrap: "wrap",
                                                                        marginTop: "30px",
                                                                                }}
                                                                                      >
                                                                                              <StatsCard title="Balance" value="$10,000" />
                                                                                                      <StatsCard title="Win Rate" value="72%" />
                                                                                                              <StatsCard title="Trades" value="145" />
                                                                                                                      <StatsCard title="Session" value="XAUUSD M5" />
                                                                                                                            </div>
                                                                                                                                </Layout>
                                                                                                                                  );
                                                                                                                                  }

                                                                                                                                  export default Home;