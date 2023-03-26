import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/login";
import ManageEmployee from "./pages/manage-employee";
import Reimbursement from "./pages/reimbursement";
import AddEmployee from "./pages/add-employee";
import DailyAttendance from "./pages/daily-attendance";
import AddLeave from "./pages/add-leave";
import ManageLeave from "./pages/manage-leave";
import AttendanceReport from "./pages/attendance-report";
import ManageAttendance from "./pages/manage-attendance";
import ManageEmployee1 from "./pages/manage-employee1";
import Dashboard from "./pages/dashboard";
import LoanManagement from "./pages/loan-management";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/manage-employee":
        title = "";
        metaDescription = "";
        break;
      case "/reimbursement":
        title = "";
        metaDescription = "";
        break;
      case "/add-employee":
        title = "";
        metaDescription = "";
        break;
      case "/daily-attendance":
        title = "";
        metaDescription = "";
        break;
      case "/add-leave":
        title = "";
        metaDescription = "";
        break;
      case "/manage-leave":
        title = "";
        metaDescription = "";
        break;
      case "/attendance-report":
        title = "";
        metaDescription = "";
        break;
      case "/manage-attendance":
        title = "";
        metaDescription = "";
        break;
      case "/manage-employee1":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/loan-management":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/manage-employee" element={<ManageEmployee />} />
      <Route path="/reimbursement" element={<Reimbursement />} />
      <Route path="/add-employee" element={<AddEmployee />} />
      <Route path="/daily-attendance" element={<DailyAttendance />} />
      <Route path="/add-leave" element={<AddLeave />} />
      <Route path="/manage-leave" element={<ManageLeave />} />
      <Route path="/attendance-report" element={<AttendanceReport />} />
      <Route path="/manage-attendance" element={<ManageAttendance />} />
      <Route path="/manage-employee1" element={<ManageEmployee1 />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/loan-management" element={<LoanManagement />} />
    </Routes>
  );
}
export default App;
