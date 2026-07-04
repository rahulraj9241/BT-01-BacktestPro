import Header from "./Header";
import Sidebar from "./Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div
      style={{
        background: "#0f172a",
        minHeight: "100vh",
      }}
    >
      <Header />

      <div
        style={{
          display: "flex",
        }}
      >
        <Sidebar />

        <main
          style={{
            flex: 1,
            padding: "30px",
            color: "white",
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
