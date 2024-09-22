"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEventId, stateClear } from "@/redux/actions";
import FloatOption from "@/components/floatOption/FloatOption";

function page({ params }) {
  const dispatch = useDispatch();
  const selectState = useSelector(({ root }) => root?.state);
  const selectEvent = useSelector(({ root }) => root?.data);
  const selectAccess = useSelector((state) => state.root?.access);

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
    selectState === "edit"
      ? setTimeout(() => {
          dispatch(stateClear());
        }, 500)
      : "";
  }, [selectState]);

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
  }, [selectEvent, selectState]);

  return (
    <div>
      <div>
        <p>{data.hourEvent}</p>
        <p>{data.dateNews}</p>
        <p>{data.title}</p>
        <p>{data.body}</p>
        <p>{data.stateEvent}</p>
      </div>

      <div>
        Here be the photo almacening in the state local of component Data.
        <img src={data.urlPicture} height={480} width={500}></img>
      </div>

      {(selectAccess?.level === "Director" ||
        selectAccess?.level === "Secretaria") && (
        <div>
          <FloatOption
            render="EVENTS"
            access={selectAccess?.level}
            event="edit"
          />
        </div>
      )}
    </div>
  );
}

export default page;
