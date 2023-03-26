import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeContainer from "../components/employee-container";
import LeaveTypeFilter from "../components/leave-type-filter";
import "./loan-management.css";

const LoanManagement = () => {
  const navigate = useNavigate();

  const onMainContainer1Click = useCallback(() => {
    navigate("/loan-management");
  }, [navigate]);

  return (
    <div className="loan-management">
      <EmployeeContainer employeeManagementText2="Loan Management" />
      <LeaveTypeFilter
        grid01="/grid011.svg"
        drop3="/drop31.svg"
        coinsHand="/coinshand3.svg"
        coinsSwap02="/coinsswap022.svg"
        dashboardBackgroundColor="unset"
        dashboardColor="#868b90"
        dashboardBackgroundColor1="#2c2f32"
        dashboardCursor="pointer"
        dashboardColor1="#fcfcfc"
        dashboardBackgroundColor2="unset"
        dashboardCursor1="unset"
        dashboardColor2="#868b90"
        onMainContainer1Click={onMainContainer1Click}
      />
    </div>
  );
};

export default LoanManagement;
