import { useState } from "react";
import useHashRoute from "./features/navigation/useHashRoute";
import AppShell from "./components/AppShell";
import HomeGrid from "./components/HomeGrid";
import DetailView from "./components/DetailView";
import BottomSheet from "./components/BottomSheet";
import ScreenList from "./components/ScreenList";
import ParameterGrid from "./components/ParameterGrid";
import ChecklistView from "./components/ChecklistView";
import TroubleshootingList from "./components/TroubleshootingList";
import TroubleshootingIssue from "./components/TroubleshootingIssue";
import MixerMenu from "./components/MixerMenu";
import SafetyMenu from "./components/SafetyMenu";
import CoreboxMenu from "./components/CoreboxMenu";
import CoreReferenceMenu from "./components/CoreReferenceMenu";
import CoreDetail from "./components/CoreDetail";
import AutoRecoveryMenu from "./components/AutoRecoveryMenu";
import ErrorCodeList from "./components/ErrorCodeList";
import ErrorCodeDetail from "./components/ErrorCodeDetail";
import SearchView from "./features/search/SearchView";
import StaticContentView from "./features/content/StaticContentView";
import { SCREEN_SHEETS } from "./data/screen-sheets";
import { GASSING_PARAMS } from "./data/gassing-params";
import { MACHINE_PARAMS } from "./data/machine-params";
import { CHECKLISTS } from "./data/checklists";
import { KB_TROUBLESHOOT } from "./data/kb-troubleshoot";
import { CONTENT_PAGES } from "./data/content-pages";
import { ERROR_CODES } from "./data/error-codes";
import { CORES } from "./data/cores";

export default function App() {
  const { route: view, setRoute: setView } = useHashRoute();
  const [activeSheet, setActiveSheet] = useState(null);

  const handleOpenSheet = (payload) => {
    setActiveSheet(payload);
  };

  const handleCloseSheet = () => {
    setActiveSheet(null);
  };

  const handleOpenIssue = (issueId) => {
    setView(`troubleshooting/${issueId}`);
  };

  const handleOpenErrorCode = (codeId) => {
    setView(`troubleshooting/error-codes/${codeId}`);
  };

  const startChecklist = CHECKLISTS.find((item) => item.key === "startShift");
  const endChecklist = CHECKLISTS.find((item) => item.key === "endShift");

  const issueId =
    view.startsWith("troubleshooting/") &&
    !view.startsWith("troubleshooting/error-codes")
      ? view.replace("troubleshooting/", "")
      : null;

  const activeIssue = issueId
    ? KB_TROUBLESHOOT.find((item) => item.id === issueId)
    : null;

  const errorCodeId = view.startsWith("troubleshooting/error-codes/")
    ? view.replace("troubleshooting/error-codes/", "")
    : null;

  const activeErrorCode = errorCodeId
    ? ERROR_CODES.find((item) => item.id === errorCodeId)
    : null;

  const coreId = view.startsWith("loadbox/core-reference/")
    ? view.replace("loadbox/core-reference/", "")
    : null;

  const activeCore = coreId
    ? CORES.find((item) => item.id === coreId)
    : null;

  const staticPage = CONTENT_PAGES[view];

  const staticPageAction =
    view === "loadbox/load-unload/automatic"
      ? {
          label: "Open Corebox Loading Safety",
          route: "safety/corebox-loading-safety",
        }
      : null;

  return (
    <AppShell onNavigate={setView} onOpenSearch={() => setView("search")}>
      {view === "home" && <HomeGrid onNavigate={setView} />}

      {view === "search" && (
        <DetailView
          title="Search"
          subtitle="Troubleshooting knowledge search"
          onBack={() => setView("home")}
        >
          <SearchView
            issues={KB_TROUBLESHOOT}
            errorCodes={ERROR_CODES}
            onOpenIssue={handleOpenIssue}
            onOpenErrorCode={handleOpenErrorCode}
            onOpenPage={setView}
          />
        </DetailView>
      )}

      {view === "screens" && (
        <DetailView
          title="Control Screens"
          subtitle="Parameter & status reference"
          onBack={() => setView("home")}
        >
          <ScreenList
            onOpenGassing={() => setView("screens/gassing")}
            onOpenMachine={() => setView("screens/machine")}
            onOpenSheet={(key) => handleOpenSheet(SCREEN_SHEETS[key])}
          />
        </DetailView>
      )}

      {view === "screens/gassing" && (
        <DetailView
          title="Gassing Parameters"
          subtitle="Tap a parameter to open details"
          onBack={() => setView("screens")}
        >
          <ParameterGrid items={GASSING_PARAMS} onOpenItem={handleOpenSheet} />
        </DetailView>
      )}

      {view === "screens/machine" && (
        <DetailView
          title="Machine Shot Parameters"
          subtitle="Tap a parameter to open details"
          onBack={() => setView("screens")}
        >
          <ParameterGrid items={MACHINE_PARAMS} onOpenItem={handleOpenSheet} />
        </DetailView>
      )}

      {view === "checklists" && (
        <DetailView
          title="Shift Checklists"
          subtitle="Start and end of shift reference"
          onBack={() => setView("home")}
        >
          <div className="stack">
            <button
              type="button"
              className="card"
              onClick={() => setView("checklists/start")}
              style={{ textAlign: "left", cursor: "pointer", color: "inherit" }}
            >
              <h3>Start of Shift Checklist</h3>
              <p>Open checklist</p>
            </button>

            <button
              type="button"
              className="card"
              onClick={() => setView("checklists/end")}
              style={{ textAlign: "left", cursor: "pointer", color: "inherit" }}
            >
              <h3>End of Shift Checklist</h3>
              <p>Open checklist</p>
            </button>
          </div>
        </DetailView>
      )}

      {view === "checklists/start" && startChecklist && (
        <DetailView
          title={startChecklist.title}
          subtitle="Step-by-step reference"
          onBack={() => setView("checklists")}
        >
          <ChecklistView sections={startChecklist.sections} />
        </DetailView>
      )}

      {view === "checklists/end" && endChecklist && (
        <DetailView
          title={endChecklist.title}
          subtitle="Step-by-step reference"
          onBack={() => setView("checklists")}
        >
          <ChecklistView sections={endChecklist.sections} />
        </DetailView>
      )}

      {view === "mixer" && (
        <DetailView
          title="Sand Mixer"
          subtitle="Mixer settings & checks"
          onBack={() => setView("home")}
        >
          <MixerMenu onNavigate={setView} />
        </DetailView>
      )}

      {view === "safety" && (
        <DetailView
          title="Emergency & Safety"
          subtitle="LOTO and critical procedures"
          onBack={() => setView("home")}
        >
          <SafetyMenu onNavigate={setView} />
        </DetailView>
      )}

      {view === "loadbox" && (
        <DetailView
          title="Corebox Setup"
          subtitle="Changeover & configuration"
          onBack={() => setView("home")}
        >
          <CoreboxMenu onNavigate={setView} />
        </DetailView>
      )}

      {view === "loadbox/core-reference" && (
        <DetailView
          title="Core Reference"
          subtitle="Core settings and floor notes"
          onBack={() => setView("loadbox")}
        >
          <CoreReferenceMenu onNavigate={setView} />
        </DetailView>
      )}

      {view.startsWith("loadbox/core-reference/") && activeCore && (
        <DetailView
          title={activeCore.title}
          subtitle={activeCore.machineName}
          onBack={() => setView("loadbox/core-reference")}
        >
          <CoreDetail core={activeCore} />
        </DetailView>
      )}

      {view === "loadbox/auto-recovery" && (
        <DetailView
          title="Auto Load Recovery (Manual)"
          subtitle="Pick the machine state"
          onBack={() => setView("loadbox")}
        >
          <div
            style={{
              display: "grid",
              gap: "12px",
            }}
          >
            <button
              type="button"
              className="card"
              onClick={() => setView("safety/corebox-removal-safety")}
              style={{
                textAlign: "left",
                cursor: "pointer",
                color: "inherit",
              }}
            >
              <h3 style={{ marginBottom: "6px" }}>Open Corebox Removal Safety</h3>
              <p style={{ margin: 0 }}>Open related safety reference</p>
            </button>

            <AutoRecoveryMenu onNavigate={setView} />
          </div>
        </DetailView>
      )}

      {view === "troubleshooting" && (
        <DetailView
          title="Troubleshooting"
          subtitle="Common issues and error code lookup"
          onBack={() => setView("home")}
        >
          <div className="stack">
            <button
              type="button"
              className="card"
              onClick={() => setView("troubleshooting/issues")}
              style={{ textAlign: "left", cursor: "pointer", color: "inherit" }}
            >
              <h3>Common Issues</h3>
              <p>Symptom-based troubleshooting</p>
            </button>

            <button
              type="button"
              className="card"
              onClick={() => setView("troubleshooting/error-codes")}
              style={{ textAlign: "left", cursor: "pointer", color: "inherit" }}
            >
              <h3>Error Code Lookup</h3>
              <p>Browse captured machine codes by area</p>
            </button>
          </div>
        </DetailView>
      )}

      {view === "troubleshooting/issues" && (
        <DetailView
          title="Common Issues"
          subtitle="Symptoms → checks"
          onBack={() => setView("troubleshooting")}
        >
          <TroubleshootingList
            issues={KB_TROUBLESHOOT}
            onOpenIssue={handleOpenIssue}
          />
        </DetailView>
      )}

      {view === "troubleshooting/error-codes" && (
        <DetailView
          title="Error Code Lookup"
          subtitle="Grouped by machine area"
          onBack={() => setView("troubleshooting")}
        >
          <ErrorCodeList items={ERROR_CODES} />
        </DetailView>
      )}

      {view.startsWith("troubleshooting/error-codes/") && activeErrorCode && (
        <DetailView
          title={activeErrorCode.code}
          subtitle={activeErrorCode.area}
          onBack={() => setView("troubleshooting/error-codes")}
        >
          <ErrorCodeDetail item={activeErrorCode} />
        </DetailView>
      )}

      {view.startsWith("troubleshooting/") && activeIssue && (
        <DetailView
          title={activeIssue.title}
          subtitle="Troubleshooting issue detail"
          onBack={() => setView("troubleshooting/issues")}
        >
          <TroubleshootingIssue issue={activeIssue} />
        </DetailView>
      )}

      {staticPage && (
        <DetailView
          title={staticPage.title}
          subtitle={staticPage.subtitle}
          onBack={() => {
            if (view.startsWith("mixer/")) {
              setView("mixer");
              return;
            }
            if (view.startsWith("safety/")) {
              setView("safety");
              return;
            }
            if (view.startsWith("loadbox/auto-recovery/")) {
              setView("loadbox/auto-recovery");
              return;
            }
            if (view.startsWith("loadbox/load-unload/")) {
              setView("loadbox");
              return;
            }
            if (view.startsWith("loadbox/")) {
              setView("loadbox");
              return;
            }
            setView("home");
          }}
        >
          <StaticContentView
            title={staticPage.title}
            body={staticPage.body}
            actionLabel={staticPageAction?.label}
            onAction={
              staticPageAction
                ? () => setView(staticPageAction.route)
                : undefined
            }
          />
        </DetailView>
      )}

      <BottomSheet
        open={Boolean(activeSheet)}
        title={activeSheet?.title || activeSheet?.name || ""}
        content={
          activeSheet
            ? [
                activeSheet.content || activeSheet.what,
                activeSheet.increase ? `Increasing it: ${activeSheet.increase}` : "",
                activeSheet.decrease ? `Decreasing it: ${activeSheet.decrease}` : "",
                activeSheet.note ? `Note: ${activeSheet.note}` : "",
              ]
                .filter(Boolean)
                .join("\n\n")
            : ""
        }
        onClose={handleCloseSheet}
      />
    </AppShell>
  );
}