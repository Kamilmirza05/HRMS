import { useCallback } from "react";
import EmployeeContainer from "../components/employee-container";
import LeaveTypeFilter6 from "../components/leave-type-filter6";
import EmployeeFormContainer from "../components/employee-form-container";
import LocalAddressContainer from "../components/local-address-container";
import { useNavigate } from "react-router-dom";
import "./add-employee.css";

const AddEmployee = () => {
  const navigate = useNavigate();

  const onGroupContainer30Click = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="add-employee">
      <EmployeeContainer employeeManagementText2="Add Employee" />
      <div className="rectangle-group">
        <div className="group-item" />
        <LeaveTypeFilter6 />
      </div>
      <div className="personal-details1">Personal Details</div>
      <div className="company-details1">Company Details</div>
      <div className="financial-details1">Financial Details</div>
      <div className="emergency-details1">Emergency Details</div>
      <div className="account-login1">Account Login</div>
      <div className="bank-details1">Bank Details</div>
      <EmployeeFormContainer employeeName="Name" employeeId="Add Full name" />
      <EmployeeFormContainer
        employeeName="Employee ID"
        employeeId="Add Employee ID"
        propTop="175px"
        propLeft="960px"
      />
      <EmployeeFormContainer
        employeeName="Salary Type"
        employeeId="Add Salary Type"
        propTop="638px"
        propLeft="960px"
      />
      <EmployeeFormContainer
        employeeName="Next of Kin"
        employeeId="Add Name of Kin"
        propTop="949px"
        propLeft="960px"
      />
      <div className="name-parent">
        <div className="name">Blood Group</div>
        <div className="add-full-name">Add Name of Kin</div>
        <div className="instance-item" />
      </div>
      <EmployeeFormContainer
        employeeName="Email"
        employeeId="Add Email Address"
        propTop="1186px"
        propLeft="960px"
      />
      <EmployeeFormContainer
        employeeName="Password"
        employeeId="Add Password"
        propTop="1260px"
        propLeft="960px"
      />
      <EmployeeFormContainer
        employeeName="Account Holder Name"
        employeeId="Add Account Holder Name"
        propTop="1020px"
        propLeft="360px"
      />
      <EmployeeFormContainer
        employeeName="Account Number"
        employeeId="Add Account Number"
        propTop="1094px"
        propLeft="360px"
      />
      <div className="name-group">
        <div className="name">Bank name</div>
        <div className="add-full-name">Add Bank Name</div>
        <div className="instance-item" />
      </div>
      <div className="name-container">
        <div className="name">Branch Name</div>
        <div className="add-full-name">Add Branch Name</div>
        <div className="instance-item" />
      </div>
      <div className="group-div">
        <div className="name">Emergency Contact</div>
        <div className="add-full-name">Add Phone Number</div>
        <div className="instance-item" />
      </div>
      <EmployeeFormContainer
        employeeName="Salary"
        employeeId="Add Salary "
        propTop="712px"
        propLeft="960px"
      />
      <div className="name-parent1">
        <div className="name">Relation</div>
        <div className="add-full-name">{`Add Relation `}</div>
        <div className="instance-item" />
      </div>
      <div className="name-parent2">
        <div className="name">Phone</div>
        <div className="add-full-name">Add Phone Number</div>
        <div className="instance-item" />
      </div>
      <EmployeeFormContainer
        employeeName="Department"
        employeeId="Add Department"
        propTop="249px"
        propLeft="960px"
      />
      <EmployeeFormContainer
        employeeName="Select Manager"
        employeeId="Select Manager"
        propTop="471px"
        propLeft="960px"
      />
      <EmployeeFormContainer
        employeeName="Designation"
        employeeId="Add Designation"
        propTop="323px"
        propLeft="960px"
      />
      <div className="name-parent3">
        <div className="name">Status</div>
        <div className="add-full-name">Add Status</div>
        <div className="instance-item" />
      </div>
      <div className="name-parent4">
        <div className="name">Phone 1</div>
        <div className="add-full-name">Add Phone Number</div>
        <div className="instance-item" />
      </div>
      <div className="name-parent5">
        <div className="name">Phone 2</div>
        <div className="add-full-name8">Add Phone Number</div>
        <div className="instance-child6" />
      </div>
      <div className="rectangle-container">
        <div className="instance-child7" />
        <div className="name9">Father Name</div>
        <div className="add-full-name9">Add Father Name</div>
      </div>
      <LocalAddressContainer
        localAddressText="Local Address"
        addLocalAddressText="Add Local Address"
      />
      <LocalAddressContainer
        localAddressText="Permanent Address"
        addLocalAddressText="Add Permanent Address"
        propTop="741px"
      />
      <div className="name-parent6">
        <div className="name">Date of Birth</div>
        <div className="add-full-name">Add Date of Birth</div>
        <div className="instance-item" />
      </div>
      <div className="name-parent7">
        <div className="name">Date of Joining</div>
        <div className="add-full-name">Add Date of Birth</div>
        <div className="instance-item" />
      </div>
      <div className="name-parent8">
        <div className="name">Gender</div>
        <div className="add-full-name">Add Gender</div>
        <div className="instance-item" />
      </div>
      <div className="name-parent9">
        <div className="name">Nationality</div>
        <div className="add-full-name">Add Nationality</div>
        <div className="instance-item" />
      </div>
      <div className="name-parent10">
        <div className="name">Marital Status</div>
        <div className="add-full-name">Add Marital Status</div>
        <div className="instance-item" />
      </div>
      <img className="calendar-plus-02-icon" alt="" src="/calendarplus02.svg" />
      <img
        className="calendar-plus-02-icon1"
        alt=""
        src="/calendarplus02.svg"
      />
      <div className="add-employee-child" />
      <div className="upload-profile-picture-container">
        <span>{`Upload Profile Picture `}</span>
        <span className="mb-max-size">(2 MB max Size)</span>
      </div>
      <div className="drop-a-file">Drop a file or browse a file to upload</div>
      <img className="upload-01-icon" alt="" src="/upload01.svg" />
      <div className="add-employee-item" />
      <div className="add-employee-inner" />
      <div className="add-employee-child1" />
      <div className="add-employee-child2" />
      <div className="add-employee-child3" />
      <div className="rectangle-parent1" onClick={onGroupContainer30Click}>
        <div className="group-inner" />
        <div className="submit">Submit</div>
      </div>
      <div className="save-as-draft">Save as draft</div>
      <div className="rectangle-parent2">
        <div className="group-child1" />
        <img className="chevron-down-icon" alt="" src="/chevrondown5.svg" />
      </div>
      <div className="rectangle-parent3">
        <div className="group-child2" />
        <img className="chevron-down-icon1" alt="" src="/chevrondown.svg" />
      </div>
      <div className="rectangle-parent4">
        <div className="group-child2" />
        <img className="chevron-down-icon1" alt="" src="/chevrondown.svg" />
      </div>
      <div className="rectangle-parent5">
        <div className="group-child2" />
        <img className="chevron-down-icon1" alt="" src="/chevrondown.svg" />
      </div>
      <div className="rectangle-parent6">
        <div className="group-child2" />
        <img className="chevron-down-icon1" alt="" src="/chevrondown.svg" />
      </div>
      <div className="rectangle-parent7">
        <div className="group-child2" />
        <img className="chevron-down-icon1" alt="" src="/chevrondown.svg" />
      </div>
      <div className="rectangle-parent8">
        <div className="group-child2" />
        <img className="chevron-down-icon1" alt="" src="/chevrondown.svg" />
      </div>
      <div className="rectangle-parent9">
        <div className="group-child2" />
        <img className="chevron-down-icon1" alt="" src="/chevrondown.svg" />
      </div>
      <div className="rectangle-parent10">
        <div className="group-child2" />
        <img className="chevron-down-icon1" alt="" src="/chevrondown.svg" />
      </div>
      <div className="rectangle-parent11">
        <div className="group-child2" />
        <img className="chevron-down-icon1" alt="" src="/chevrondown.svg" />
      </div>
      <div className="add-employee-child4" />
      <div className="female">Female</div>
      <div className="other">Other</div>
      <div className="add-employee-child5" />
      <div className="male">Male</div>
    </div>
  );
};

export default AddEmployee;
