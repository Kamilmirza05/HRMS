import { useMemo } from "react";
import "./employee-form-container.css";

const EmployeeFormContainer = ({
  employeeName,
  employeeId,
  propTop,
  propLeft,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div className="name-parent11" style={groupDivStyle}>
      <div className="name15">{employeeName}</div>
      <div className="add-full-name15">{employeeId}</div>
      <div className="instance-child13" />
    </div>
  );
};

export default EmployeeFormContainer;
