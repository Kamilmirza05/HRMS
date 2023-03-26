import "./leave-type-form.css";

const LeaveTypeForm = ({
  grid01,
  users02,
  chevronRight,
  vector1,
  vector2,
  drop3,
  chevronDown,
  vector11,
  vector21,
  vector3,
  coinsHand,
  faceSad,
  chevronDown1,
  vector12,
  vector22,
  bankNote01,
  chevronDown2,
  vector13,
  vector23,
  coinsSwap02,
  chevronDown3,
  vector14,
  vector24,
  user03,
  chevronDown4,
  vector15,
  vector25,
  settings01,
  chevronDown5,
  vector16,
  vector26,
  vector4,
  vector27,
  vector5,
  vector31,
}) => {
  return (
    <div className="rectangle-parent23">
      <div className="group-child130" />
      <div className="union-parent">
        <img className="union-icon1" alt="" src="/union1.svg" />
        <div className="frame-child10" />
        <div className="main">
          <img className="grid-01-icon" alt="" src={grid01} />
          <div className="dashboard2">Dashboard</div>
        </div>
        <div className="employees">
          <div className="drop">
            <img className="grid-01-icon" alt="" src={users02} />
            <div className="dashboard2">Employees</div>
          </div>
          <div className="sub-button">
            <div className="dashboard2">Add Employee</div>
          </div>
          <div className="sub-button1">
            <div className="dashboard2">Manage Employee</div>
            <img className="grid-01-icon" alt="" src={chevronRight} />
          </div>
          <img className="employees-child" alt="" src={vector1} />
          <img className="employees-item" alt="" src={vector2} />
        </div>
        <div className="attendance">
          <div className="drop1">
            <img className="grid-01-icon" alt="" src={drop3} />
            <div className="dashboard2">Attendance</div>
            <img className="grid-01-icon" alt="" src={chevronDown} />
          </div>
          <div className="sub-button2">
            <div className="dashboard2">Daily Attendance</div>
          </div>
          <div className="sub-button3">
            <div className="dashboard2">Attendance Report</div>
          </div>
          <div className="sub-button4">
            <div className="dashboard2">Manage Attendance</div>
          </div>
          <img className="attendance-child" alt="" src={vector11} />
          <img className="attendance-item" alt="" src={vector21} />
          <img className="attendance-inner" alt="" src={vector3} />
        </div>
        <div className="main">
          <img className="grid-01-icon" alt="" src={coinsHand} />
          <div className="dashboard2">Loan Management</div>
        </div>
        <div className="attendance">
          <div className="drop1">
            <img className="grid-01-icon" alt="" src={faceSad} />
            <div className="dashboard2">Leaves</div>
            <img className="grid-01-icon" alt="" src={chevronDown1} />
          </div>
          <div className="sub-button2">
            <div className="dashboard2">Add Leave</div>
          </div>
          <div className="sub-button3">
            <div className="dashboard2">Manage Leave</div>
          </div>
          <img className="attendance-child" alt="" src={vector12} />
          <img className="attendance-item" alt="" src={vector22} />
        </div>
        <div className="attendance">
          <div className="drop1">
            <img className="grid-01-icon" alt="" src={bankNote01} />
            <div className="dashboard2">Payroll</div>
            <img className="grid-01-icon" alt="" src={chevronDown2} />
          </div>
          <div className="sub-button2">
            <div className="dashboard2">PayScale</div>
          </div>
          <div className="sub-button3">
            <div className="dashboard2">Monthly</div>
          </div>
          <img className="attendance-child" alt="" src={vector13} />
          <img className="attendance-item" alt="" src={vector23} />
        </div>
        <div className="main">
          <img className="grid-01-icon" alt="" src={coinsSwap02} />
          <div className="dashboard2">Reimbursement</div>
        </div>
        <div className="attendance">
          <div className="drop1">
            <img className="grid-01-icon" alt="" src="/plane.svg" />
            <div className="dashboard2">Holidays</div>
            <img className="grid-01-icon" alt="" src={chevronDown3} />
          </div>
          <div className="sub-button2">
            <div className="dashboard2">View Holiday</div>
          </div>
          <div className="sub-button3">
            <div className="dashboard2">Manage Holiday</div>
          </div>
          <img className="attendance-child" alt="" src={vector14} />
          <img className="attendance-item" alt="" src={vector24} />
        </div>
        <div className="attendance">
          <div className="drop1">
            <img className="grid-01-icon" alt="" src={user03} />
            <div className="dashboard2">Managers</div>
            <img className="grid-01-icon" alt="" src={chevronDown4} />
          </div>
          <div className="sub-button2">
            <div className="dashboard2">Add Manager</div>
          </div>
          <div className="sub-button3">
            <div className="dashboard2">Manage Manager</div>
          </div>
          <img className="attendance-child" alt="" src={vector15} />
          <img className="attendance-item" alt="" src={vector25} />
        </div>
        <div className="attendance">
          <div className="drop1">
            <img className="grid-01-icon" alt="" src={settings01} />
            <div className="dashboard2">Setup</div>
            <img className="grid-01-icon" alt="" src={chevronDown5} />
          </div>
          <div className="sub-button2">
            <div className="dashboard2">Company Details</div>
          </div>
          <div className="sub-button3">
            <div className="dashboard2">Department</div>
          </div>
          <img className="attendance-child" alt="" src={vector16} />
          <img className="attendance-item" alt="" src={vector26} />
          <div className="sub-button15">
            <div className="dashboard2">Shift</div>
          </div>
          <img className="setup-inner" alt="" src={vector4} />
          <div className="sub-button4">
            <div className="dashboard2">{`Allowance & Deduction`}</div>
          </div>
          <div className="sub-button17">
            <div className="dashboard2">Asset</div>
          </div>
          <div className="sub-button18">
            <div className="dashboard2">PayScale</div>
          </div>
          <div className="sub-button19">
            <div className="dashboard2">Leave Type</div>
          </div>
          <img className="attendance-inner" alt="" src={vector27} />
          <img className="setup-child1" alt="" src={vector5} />
          <img className="setup-child2" alt="" src={vector31} />
          <img className="setup-child3" alt="" src="/vector-21.svg" />
        </div>
      </div>
    </div>
  );
};

export default LeaveTypeForm;
