import Button from "../ui/Button";

function QuickActions() {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-white mb-4">⚡ Quick Actions</h2>

      <div className="flex flex-wrap gap-4">
        <Button variant="primary">➕ New Backtest</Button>

        <Button variant="success">📥 Import CSV</Button>

        <Button variant="secondary">▶ Continue Session</Button>
      </div>
    </div>
  );
}

export default QuickActions;
