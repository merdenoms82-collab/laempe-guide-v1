import TopBar from "./TopBar";
import DockNav from "./DockNav";

export default function AppShell({ children, activeTab, onNavigateHome }) {
  return (
    <div className="app">
      <TopBar onNavigateHome={onNavigateHome} />

      <main className="main">{children}</main>

      <footer className="app-footer">
        Independent operator training and troubleshooting reference • Not
        affiliated with the machine manufacturer • No machine interface
      </footer>

      <DockNav activeTab={activeTab} onNavigateHome={onNavigateHome} />
    </div>
  );
}