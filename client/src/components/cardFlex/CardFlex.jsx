import React from "react";
import Link from "next/link";

import { Button, Card, Flex, Typography } from "antd";
const cardStyle = {
  width: 620,
};
const imgStyle = {
  display: "block",
  width: 273,
};

const CardFlex = ({ list }) => {
  return (
    <>
      {list?.map(
        (
          {
            idListEvent,
            dateNews,
            hourEvent,
            title,
            body,
            urlPicture,
            stateEvent,
          },
          index
        ) => (
          <Card
            key={index}
            hoverable
            style={cardStyle}
            styles={{
              body: {
                padding: 0,
                overflow: "hidden",
              },
            }}
          >
            <Flex justify="space-between">
              <img alt={title} src={urlPicture} style={imgStyle} />
              <Flex
                vertical
                align="flex-end"
                justify="space-between"
                style={{
                  padding: 32,
                }}
              >
                <Typography.Title level={1}>{title}</Typography.Title>
                <Typography.Text>
                  {dateNews.toString().slice(0, 10)}
                </Typography.Text>
                <Typography.Text>{hourEvent}</Typography.Text>

                <Link href={`/events/${idListEvent}`}>
                  <Button type="primary" target="_blank">
                    Saber más!
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </Card>
        )
      )}
    </>
  );
};

export default CardFlex;
