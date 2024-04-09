import React, { useState, useEffect } from "react";
import { Switch } from "antd";

function State({ state }) {
  const [flag, setFlag] = useState(0);

  const handleFlag = () => {
    setFlag(!flag);
  };

  useEffect(() => {
    setFlag(state);
  }, [state]);

  return <Switch checked={flag} onChange={handleFlag} />;
}

export default State;
