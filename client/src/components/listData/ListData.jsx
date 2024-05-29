import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Avatar, List, message } from "antd";
import VirtualList from "rc-virtual-list";

const ContainerHeight = 400;

function ListData() {
  const selectFilterAll = useSelector(({ root }) => root?.filterAll);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (selectFilterAll) {
      setData(selectFilterAll);
    }
  }, [selectFilterAll]);

  const onScroll = (e) => {
    console.log(e);
    // Refer to: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#problems_and_solutions
    // if (
    //   Math.abs(
    //     e.currentTarget.scrollHeight -
    //       e.currentTarget.scrollTop -
    //       ContainerHeight
    //   ) <= 1
    // ) {
    //   appendData();
    // }
  };

  return (
    <List>
      <VirtualList
        data={data}
        height={ContainerHeight}
        itemHeight={47}
        itemKey="idUser"
        onScroll={onScroll}
      >
        {(item) => (
          <List.Item key={item.idUser}>
            <List.Item.Meta
              avatar={<Avatar src={item.photoUser} />}
              title={
                <a href="#">
                  {item.nameUser} {item.lastNameUser}
                </a>
              }
              description={`${item.carnetUser} ${item.department}`}
            />
            <div>SELECT</div>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
}

export default ListData;
