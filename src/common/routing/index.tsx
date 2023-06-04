import { Routes, Route } from "react-router-dom";
import DashboardContent from "../../components/layouts/dashboard";
import NotFound from "../../pages/dashboard/NotFound";
import Login from "../../pages/Login";

const DefaultRouting = () => {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<DashboardContent />} />
      <Route path="/" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default DefaultRouting;
