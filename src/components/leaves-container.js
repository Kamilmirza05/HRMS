import "./leaves-container.css";

const LeavesContainer = ({
  leaveEmployeeId,
  leaveEmployeeText,
  addLeaveText,
  manageLeaveText,
}) => {
  return (
    <div className="leaves6">
      <div className="drop27">
        <img className="face-sad-icon4" alt="" src={leaveEmployeeId} />
        <div className="dashboard120">{leaveEmployeeText}</div>
      </div>
      <div className="sub-button78">
        <div className="dashboard120">{addLeaveText}</div>
        <img className="face-sad-icon4" alt="" src="/chevronright1.svg" />
      </div>
      <div className="sub-button79">
        <div className="dashboard120">{manageLeaveText}</div>
      </div>
      <img className="leaves-child6" alt="" src="/vector-12.svg" />
      <img className="leaves-child7" alt="" src="/vector-22.svg" />
    </div>
  );
};

export default LeavesContainer;
