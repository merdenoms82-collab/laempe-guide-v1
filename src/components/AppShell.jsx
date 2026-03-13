import TopBar from "./TopBar";
import DockNav from "./DockNav";

export default function AppShell({ children, onNavigate, onOpenSearch }) {
  return (
    <div className="app">
      <TopBar onOpenSearch={onOpenSearch} />

      <main className="main">
        {children}
      </main>

      <div className="app-footer">
        Pilot Prototype – Reference Tool (v0.1) • Independent training reference.
        Not affiliated with machine manufacturer. Does not interface with the machine
        or replicate proprietary control software.
      </div>

      <DockNav onNavigate={onNavigate} />
    </div>
  );
}