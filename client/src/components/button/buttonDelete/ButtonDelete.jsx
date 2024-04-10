import React, {useState } from "react";
import { Button, Flex } from "antd";
import Text from "../../text/Text";
import DeleteModal from "@/components/modal/deleteModal/DeleteModal";

function ButtonDelete({ idData, text }) {
  const [flag, setFlag] = useState(false);
  
  const handleChange = () => {
    setFlag(!flag);
  };

  return (
    <Flex wrap="wrap" gap="small">
      <Button type="primary" onClick={handleChange} danger>
        <Text text={text} />
        {
          flag && <DeleteModal idData={idData}/>
        }
      </Button>
    </Flex>
  );
}

export default ButtonDelete;
