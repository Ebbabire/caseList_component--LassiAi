import CaseListDemo from "./components/CaseList/CaseListDemo";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white border-b border-slate-200 px-6 py-4 mb-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800">LassiAI</span>
          </div>
          <div className="text-sm text-slate-500">Component Preview</div>
        </div>
      </nav>
      <main>
        <CaseListDemo />
      </main>
    </div>
  );
}

export default App;
