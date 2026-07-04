function Header() {
  return (
    <header className="h-16 bg-slate-900 border-b border-slate-700 flex items-center justify-between px-6">
      <div>
        <h1 className="text-white text-2xl font-bold">📈 BacktestPro</h1>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-slate-300">Welcome, Rahul 👋</span>

        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
          R
        </div>
      </div>
    </header>
  );
}

export default Header;
