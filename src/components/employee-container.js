import "./employee-container.css";

const EmployeeContainer = ({ employeeManagementText2 }) => {
  return (
    <div className="header">
      <div className="dashboard1">{employeeManagementText2}</div>
      <img className="header-button-icon" alt="" src="/header-button.svg" />
      <img className="header-button-icon1" alt="" src="/header-button1.svg" />
      <div className="profile-button">
        <img className="profile-button-child" alt="" src="/ellipse-9@2x.png" />
        <div className="super-admin">Super Admin</div>
        <img className="chevron-down-icon17" alt="" src="/chevrondown.svg" />
      </div>
    </div>
  );
};

export default EmployeeContainer;
