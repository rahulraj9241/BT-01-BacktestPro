import StatsCard from "../StatsCard";

function StatsSection() {
  return (
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
  );
}

export default StatsSection;
