import { Routes, Route, Navigate } from "react-router-dom";
import PublicPage from "./pages/PublicPage.jsx";
import TeamPortal from "./pages/TeamPortal.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicPage />} />
      {/* Hidden page: no links point here. Share /team only with your ground team. */}
      <Route path="/team" element={<TeamPortal />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
