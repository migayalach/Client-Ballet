"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEventId } from "@/redux/actions";
import FloatOption from "@/components/floatOption/FloatOption";

function page({ params }) {
  const dispatch = useDispatch();
  const selectEvent = useSelector(({ root }) => root?.data);

  const [data, setData] = useState({
    idListEvent: "",
    hourEvent: "00:00:00",
    dateNews: "",
    title: "",
    body: "",
    stateEvent: false,
    urlPicture: "",
  });

  useEffect(() => {
    dispatch(getEventId(params?.idEvent));
    return () => {
      setData({
        idListEvent: "",
        hourEvent: "00:00:00",
        dateNews: "",
        title: "",
        body: "",
        stateEvent: false,
        urlPicture: "",
      });
    };
  }, []);

  useEffect(() => {
    selectEvent?.map(
      ({
        idListEvent,
        hourEvent,
        dateNews,
        title,
        body,
        stateEvent,
        urlPicture,
      }) =>
        setData({
          idListEvent,
          hourEvent,
          dateNews: dateNews.toString().slice(0, 10),
          title,
          body,
          stateEvent,
          urlPicture,
        })
    );
    return () => {
      // console.log(";D");
    };
  }, [selectEvent]);

  console.log(data);

  return (
    <div>
      <div></div>
      <div>
        Here be the photo almacening in the state local of component Data.
      </div>
      <FloatOption />
    </div>
  );
}

export default page;
