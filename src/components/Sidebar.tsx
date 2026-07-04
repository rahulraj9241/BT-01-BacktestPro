const menuItems = [
  { icon: "🏠", name: "Dashboard" },
  { icon: "📥", name: "Import CSV" },
  { icon: "▶️", name: "Replay" },
  { icon: "💹", name: "Trades" },
  { icon: "📊", name: "Statistics" },
  { icon: "⚙️", name: "Settings" },
];

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 border-r border-slate-700 text-white">
      <div className="p-6 text-xl font-bold border-b border-slate-700">
        📈 BacktestPro
      </div>

      <nav className="p-4">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className="w-full flex items-center gap-3 px-4 py-3 mb-2 rounded-lg hover:bg-slate-800 transition text-left"
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
