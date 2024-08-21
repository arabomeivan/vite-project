import "./App.css";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <main className="md:grid md:grid-cols-8 bg-[#F1F1F1]">
      <div className="hidden md:block md:col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-6">
        <Dashboard />
      </div>
    </main>
  );
}

export default App;
