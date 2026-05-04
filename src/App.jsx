import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { DottedSurface } from "./components/ui/DottedSurface";
import SiteNavbar from "./components/layout/SiteNavbar";
import StartupScreen from "./components/layout/StartupScreen";
import HomePage from "./pages/HomePage";
import EducationalContentPage from "./pages/EducationalContentPage";

function App() {
  const [showStartup, setShowStartup] = useState(true);
  const [closingStartup, setClosingStartup] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const closeTimer = window.setTimeout(() => {
      setClosingStartup(true);
      window.setTimeout(() => setShowStartup(false), 550);
    }, 2000);

    return () => {
      window.clearTimeout(closeTimer);
    };
  }, []);

  return (
    <div className="app-shell">
      <DottedSurface />
      {showStartup && (
        <StartupScreen closingStartup={closingStartup} />
      )}
      <SiteNavbar activeSection={activeSection} />
      <Routes>
        <Route
          path="/"
          element={<HomePage onSectionChange={setActiveSection} />}
        />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route
          path="/educational-content"
          element={<EducationalContentPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
