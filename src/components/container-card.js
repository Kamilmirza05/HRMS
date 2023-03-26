import { useMemo } from "react";
import "./container-card.css";

const ContainerCard = ({
  robertFlyn,
  humanResource,
  prop,
  managerHR,
  roberbakshcom,
  ellipse10,
  ellipse11,
  active,
  edit,
  view,
  delete1,
  propTop,
  propWidth,
}) => {
  const groupDiv2Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const activeStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="rectangle-parent25" style={groupDiv2Style}>
      <div className="group-child132" />
      <div className="robert-flyn49">{robertFlyn}</div>
      <div className="human-resource27">{humanResource}</div>
      <div className="div182">{prop}</div>
      <div className="manager-hr">{managerHR}</div>
      <div className="roberbakshcom1">{roberbakshcom}</div>
      <div className="group-child133" />
      <img className="group-child134" alt="" src={ellipse10} />
      <div className="frame-wrapper11">
        <div className="ellipse-parent11">
          <img className="frame-child18" alt="" src={ellipse11} />
          <div className="active1" style={activeStyle}>
            {active}
          </div>
        </div>
      </div>
      <img className="edit-icon25" alt="" src={edit} />
      <img className="view-icon" alt="" src={view} />
      <img className="delete-icon13" alt="" src={delete1} />
    </div>
  );
};

export default ContainerCard;
