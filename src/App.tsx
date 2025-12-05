import Navbar from "./components/Navbar";
import Cases from "./pages/Cases/Cases";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-1 overflow-hidden">
        <Cases />
      </main>
    </div>
  );
}

export default App;
