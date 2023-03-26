import { useMemo } from "react";
import "./leave-type-filter.css";

const LeaveTypeFilter = ({
  grid01,
  drop3,
  coinsHand,
  coinsSwap02,
  dashboardBackgroundColor,
  dashboardColor,
  dashboardBackgroundColor1,
  dashboardCursor,
  dashboardColor1,
  dashboardBackgroundColor2,
  dashboardCursor1,
  dashboardColor2,
  onMainContainer1Click,
  onMainContainer2Click,
}) => {
  const mainStyle = useMemo(() => {
    return {
      backgroundColor: dashboardBackgroundColor,
    };
  }, [dashboardBackgroundColor]);

  const dashboardStyle = useMemo(() => {
    return {
      color: dashboardColor,
    };
  }, [dashboardColor]);

  const main1Style = useMemo(() => {
    return {
      backgroundColor: dashboardBackgroundColor1,
      cursor: dashboardCursor,
    };
  }, [dashboardBackgroundColor1, dashboardCursor]);

  const dashboard1Style = useMemo(() => {
    return {
      color: dashboardColor1,
    };
  }, [dashboardColor1]);

  const main2Style = useMemo(() => {
    return {
      backgroundColor: dashboardBackgroundColor2,
      cursor: dashboardCursor1,
    };
  }, [dashboardBackgroundColor2, dashboardCursor1]);

  const dashboard2Style = useMemo(() => {
    return {
      color: dashboardColor2,
    };
  }, [dashboardColor2]);

  return (
    <div className="rectangle-parent24">
      <div className="group-child131" />
      <div className="union-group">
        <img className="union-icon2" alt="" src="/union1.svg" />
        <div className="frame-child11" />
        <div className="main3" style={mainStyle}>
          <img className="grid-01-icon1" alt="" src={grid01} />
          <div className="dashboard33" style={dashboardStyle}>
            Dashboard
          </div>
        </div>
        <div className="employees1">
          <div className="drop7">
            <img className="grid-01-icon1" alt="" src="/users021.svg" />
            <div className="dashboard33">Employees</div>
            <img className="grid-01-icon1" alt="" src="/chevrondown3.svg" />
          </div>
          <div className="sub-button20">
            <div className="dashboard33">Add Employee</div>
          </div>
          <div className="sub-button21">
            <div className="dashboard33">Manage Employee</div>
          </div>
          <img className="employees-inner" alt="" src="/vector-12.svg" />
          <img className="employees-child1" alt="" src="/vector-22.svg" />
        </div>
        <div className="employees1">
          <div className="drop7">
            <img className="grid-01-icon1" alt="" src={drop3} />
            <div className="dashboard33">Attendance</div>
            <img className="grid-01-icon1" alt="" src="/chevrondown3.svg" />
          </div>
          <div className="sub-button20">
            <div className="dashboard33">Daily Attendance</div>
          </div>
          <div className="sub-button21">
            <div className="dashboard33">Attendance Report</div>
          </div>
          <div className="sub-button24">
            <div className="dashboard33">Manage Attendance</div>
          </div>
          <img className="employees-inner" alt="" src="/vector-12.svg" />
          <img className="employees-child1" alt="" src="/vector-22.svg" />
          <img className="attendance-child3" alt="" src="/vector-22.svg" />
        </div>
        <div
          className="main3"
          style={main1Style}
          onClick={onMainContainer1Click}
        >
          <img className="grid-01-icon1" alt="" src={coinsHand} />
          <div className="dashboard33" style={dashboard1Style}>
            Loan Management
          </div>
        </div>
        <div className="employees1">
          <div className="drop7">
            <img className="grid-01-icon1" alt="" src="/facesad1.svg" />
            <div className="dashboard33">Leaves</div>
            <img className="grid-01-icon1" alt="" src="/chevrondown3.svg" />
          </div>
          <div className="sub-button20">
            <div className="dashboard33">Add Leave</div>
          </div>
          <div className="sub-button21">
            <div className="dashboard33">Manage Leave</div>
          </div>
          <img className="employees-inner" alt="" src="/vector-12.svg" />
          <img className="employees-child1" alt="" src="/vector-22.svg" />
        </div>
        <div className="employees1">
          <div className="drop7">
            <img className="grid-01-icon1" alt="" src="/banknote011.svg" />
            <div className="dashboard33">Payroll</div>
            <img className="grid-01-icon1" alt="" src="/chevrondown3.svg" />
          </div>
          <div className="sub-button20">
            <div className="dashboard33">PayScale</div>
          </div>
          <div className="sub-button21">
            <div className="dashboard33">Monthly</div>
          </div>
          <img className="employees-inner" alt="" src="/vector-12.svg" />
          <img className="employees-child1" alt="" src="/vector-22.svg" />
        </div>
        <div
          className="main5"
          onClick={onMainContainer2Click}
          style={main2Style}
        >
          <img className="grid-01-icon1" alt="" src={coinsSwap02} />
          <div className="dashboard33" style={dashboard2Style}>
            Reimbursement
          </div>
        </div>
        <div className="employees1">
          <div className="drop7">
            <img className="grid-01-icon1" alt="" src="/plane1.svg" />
            <div className="dashboard33">Holidays</div>
            <img className="grid-01-icon1" alt="" src="/chevrondown3.svg" />
          </div>
          <div className="sub-button20">
            <div className="dashboard33">View Holiday</div>
          </div>
          <div className="sub-button21">
            <div className="dashboard33">Manage Holiday</div>
          </div>
          <img className="employees-inner" alt="" src="/vector-12.svg" />
          <img className="employees-child1" alt="" src="/vector-22.svg" />
        </div>
        <div className="employees1">
          <div className="drop7">
            <img className="grid-01-icon1" alt="" src="/user031.svg" />
            <div className="dashboard33">Managers</div>
            <img className="grid-01-icon1" alt="" src="/chevrondown3.svg" />
          </div>
          <div className="sub-button20">
            <div className="dashboard33">Add Manager</div>
          </div>
          <div className="sub-button21">
            <div className="dashboard33">Manage Manager</div>
          </div>
          <img className="employees-inner" alt="" src="/vector-12.svg" />
          <img className="employees-child1" alt="" src="/vector-22.svg" />
        </div>
        <div className="employees1">
          <div className="drop7">
            <img className="grid-01-icon1" alt="" src="/settings011.svg" />
            <div className="dashboard33">Setup</div>
            <img className="grid-01-icon1" alt="" src="/chevrondown4.svg" />
          </div>
          <div className="sub-button20">
            <div className="dashboard33">Company Details</div>
          </div>
          <div className="sub-button21">
            <div className="dashboard33">Department</div>
          </div>
          <img className="employees-inner" alt="" src="/vector-13.svg" />
          <img className="employees-child1" alt="" src="/vector-23.svg" />
          <div className="sub-button35">
            <div className="dashboard33">Shift</div>
          </div>
          <img className="setup-child6" alt="" src="/vector-23.svg" />
          <div className="sub-button24">
            <div className="dashboard33">{`Allowance & Deduction`}</div>
          </div>
          <div className="sub-button37">
            <div className="dashboard33">Asset</div>
          </div>
          <div className="sub-button38">
            <div className="dashboard33">PayScale</div>
          </div>
          <div className="sub-button39">
            <div className="dashboard33">Leave Type</div>
          </div>
          <img className="attendance-child3" alt="" src="/vector-23.svg" />
          <img className="setup-child8" alt="" src="/vector-23.svg" />
          <img className="setup-child9" alt="" src="/vector-23.svg" />
          <img className="setup-child10" alt="" src="/vector-23.svg" />
        </div>
      </div>
    </div>
  );
};

export default LeaveTypeFilter;
