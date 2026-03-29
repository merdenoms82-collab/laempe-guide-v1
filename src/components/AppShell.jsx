import TopBar from "./TopBar";
import DockNav from "./DockNav";

export default function AppShell({ children, onNavigate, onOpenSearch }) {
  return (
    <div className="app">
      <TopBar onOpenSearch={onOpenSearch} />

      <main className="main">{children}</main>

           <div className="app-footer">
        Independent operator training and troubleshooting reference • Not
        affiliated with the machine manufacturer • No machine interface •
        Created by R. Young
      </div>

      <DockNav onNavigate={onNavigate} />
    </div>
  );
}