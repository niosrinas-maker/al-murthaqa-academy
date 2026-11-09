import { Routes, Route, Navigate } from "react-router-dom";
import PublicPage from "./pages/PublicPage.jsx";
import TeamPortal from "./pages/TeamPortal.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      <Route path="/terms" element={<Navigate to="/terms-and-conditions" replace />} />
      {/* Hidden page: no links point here. Share /team only with your ground team. */}
      <Route path="/team" element={<TeamPortal />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
