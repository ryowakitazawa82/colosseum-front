import { Routes, Route } from "react-router-dom";
import NotFound from "../../../pages/dashboard/NotFound";
import Home from "../../../pages/dashboard/Home";

const DashboardRouting = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default DashboardRouting;
