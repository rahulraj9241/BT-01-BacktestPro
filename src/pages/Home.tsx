import Layout from "../components/Layout";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsSection from "../components/dashboard/StatsSection";
import QuickActions from "../components/dashboard/QuickActions";
import ImportCSV from "../components/dashboard/ImportCSV";
import RecentSessions from "../components/dashboard/RecentSessions";

function Home() {
  return (
      <Layout>
            <DashboardHeader />
                  <StatsSection />
                        <QuickActions />
                              <ImportCSV />
                                    <RecentSessions />
                                        </Layout>
                                          );
                                          }

                                          export default Home;