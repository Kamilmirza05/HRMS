import EmployeeContainer from "../components/employee-container";
import LeaveTypeFilter2 from "../components/leave-type-filter2";
import "./add-leave.css";

const AddLeave = () => {
  return (
    <div className="add-leave">
      <EmployeeContainer employeeManagementText2="Add Leave" />
      <div className="rectangle-parent14">
        <div className="group-child61" />
        <LeaveTypeFilter2 />
      </div>
      <div className="employee-name">Employee Name</div>
      <div className="leave-type">Leave Type</div>
      <div className="reason">Reason</div>
      <div className="add-leave-child" />
      <div className="add-leave-item" />
      <div className="add-leave-inner" />
      <div className="add-leave-child1" />
      <div className="add-leave-child2" />
      <img className="chevron-down-icon11" alt="" src="/chevrondown7.svg" />
      <div className="add-leave-child3" />
      <div className="date">Date</div>
      <div className="start-date">Start date</div>
      <div className="add-comment">Add Comment</div>
      <div className="leave-type1">Leave Type</div>
      <div className="employee-name1">Employee Name</div>
      <div className="end-date">End date</div>
      <img
        className="calendar-plus-02-icon2"
        alt=""
        src="/calendarplus02.svg"
      />
      <img
        className="calendar-plus-02-icon3"
        alt=""
        src="/calendarplus02.svg"
      />
      <div className="plus-group">
        <img className="plus-icon1" alt="" src="/plus.svg" />
        <div className="import1">Submit</div>
      </div>
      <div className="add-leave-child4" />
    </div>
  );
};

export default AddLeave;
