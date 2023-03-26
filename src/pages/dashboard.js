import EmployeeContainer from "../components/employee-container";
import LeaveTypeFilter from "../components/leave-type-filter";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <EmployeeContainer employeeManagementText2="Dashboard" />
      <LeaveTypeFilter
        grid01="/grid013.svg"
        drop3="/drop35.svg"
        coinsHand="/coinshand1.svg"
        coinsSwap02="/coinsswap022.svg"
        dashboardBackgroundColor="#2c2f32"
        dashboardColor="#fcfcfc"
        dashboardBackgroundColor1="unset"
        dashboardCursor="unset"
        dashboardColor1="#868b90"
        dashboardBackgroundColor2="unset"
        dashboardCursor1="unset"
        dashboardColor2="#868b90"
      />
    </div>
  );
};

export default Dashboard;
