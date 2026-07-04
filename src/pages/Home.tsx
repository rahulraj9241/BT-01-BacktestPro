import Layout from "../components/Layout";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsSection from "../components/dashboard/StatsSection";
import QuickActions from "../components/dashboard/QuickActions";
import ImportCSV from "../components/dashboard/ImportCSV";
import ReplayControls from "../components/ replay/ReplayControls";
import RecentSessions from "../components/dashboard/RecentSessions";

function Home() {
  return (
      <Layout>
            <DashboardHeader />
                  <StatsSection />
                        <QuickActions />
                              <ImportCSV />
                                    <ReplayControls />
                                          <RecentSessions />
                                              </Layout>
                                                );
                                                }

                                                export default Home;