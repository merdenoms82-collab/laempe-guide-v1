import TopBar from "./TopBar";
import DockNav from "./DockNav";

export default function AppShell({ children, onNavigate, onOpenSearch }) {
  return (
    <div className="app">
      <TopBar onOpenSearch={onOpenSearch} />

      <main className="main">{children}</main>

      <div className="app-footer">
        Pilot reference tool • Training use only • No machine interface
      </div>

      <DockNav onNavigate={onNavigate} />
    </div>
  );
}