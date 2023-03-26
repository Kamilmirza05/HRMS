import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ReimbursementContainer from "../components/reimbursement-container";
import LeaveTypeFilter from "../components/leave-type-filter";
import "./reimbursement.css";

const Reimbursement = () => {
  const navigate = useNavigate();

  const onMainContainer2Click = useCallback(() => {
    navigate("/reimbursement");
  }, [navigate]);

  return (
    <div className="reimbursement">
      <ReimbursementContainer />
      <LeaveTypeFilter
        grid01="/grid011.svg"
        drop3="/drop31.svg"
        coinsHand="/coinshand1.svg"
        coinsSwap02="/coinsswap021.svg"
        onMainContainer2Click={onMainContainer2Click}
      />
    </div>
  );
};

export default Reimbursement;
