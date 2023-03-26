import { useMemo } from "react";
import "./local-address-container.css";

const LocalAddressContainer = ({
  localAddressText,
  addLocalAddressText,
  propTop,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className="name-parent12" style={groupDiv1Style}>
      <div className="name16">{localAddressText}</div>
      <div className="add-full-name16">{addLocalAddressText}</div>
      <div className="instance-child14" />
    </div>
  );
};

export default LocalAddressContainer;
