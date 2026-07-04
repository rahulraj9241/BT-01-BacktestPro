import Section from "../ui/Section";
import Card from "../ui/Card";

function RecentSessions() {
  return (
    <Section title="📂 Recent Sessions">
      <Card>
        <div className="flex justify-between py-3 border-b border-slate-700">
          <span className="text-white">XAUUSD London Session</span>
          <span className="text-slate-400">M5</span>
        </div>

        <div className="flex justify-between py-3 border-b border-slate-700">
          <span className="text-white">EURUSD Scalping</span>
          <span className="text-slate-400">M1</span>
        </div>

        <div className="flex justify-between py-3">
          <span className="text-white">GBPUSD Swing</span>
          <span className="text-slate-400">H1</span>
        </div>
      </Card>
    </Section>
  );
}

export default RecentSessions;
