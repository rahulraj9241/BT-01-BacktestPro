import Layout from "../components/Layout";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsSection from "../components/dashboard/StatsSection";
import QuickActions from "../components/dashboard/QuickActions";
import ImportCSV from "../components/dashboard/ImportCSV";
import CandlestickChart from "../components/chart/CandlestickChart";
import ReplayControls from "../components/replay/ReplayControls";
import ReplayTimeline from "../components/replay/ReplayTimeline";
import RecentSessions from "../components/dashboard/RecentSessions";

function Home() {
  return (
      <Layout>
            <DashboardHeader />
                  <StatsSection />
                        <QuickActions />
                              <ImportCSV />
                                    <CandlestickChart />
                                          <ReplayControls />
                                                <ReplayTimeline />
                                                      <RecentSessions />
                                                          </Layout>
                                                            );
                                                            }

                                                            export default Home;