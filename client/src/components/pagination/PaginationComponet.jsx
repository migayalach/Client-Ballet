// COMPONET'S

// HOOK'S
import React, { useEffect, useState } from "react";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";

// LIBRARY

//REDUX
import {
  getPageUser,
  removeAux,
  filter,
  stateFlag,
  getPageTypeClass,
  getPageHours,
} from "@/redux/actions";

// JAVASCRIP

// STYLESHEET'
import "./pagination.css";

function PaginationComponet({ pages, navegation }) {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(1);
  const selectAux = useSelector(({ root }) => root?.aux);
  const selectInfo = useSelector(({ root }) => root?.info);
  const selectState = useSelector(({ root }) => root?.state);
  const selectUser = useSelector(({ root }) => root?.user);
  const selectTypeClass = useSelector(({ root }) => root?.typeClass);
  const selectFilter = useSelector(({ root }) => root?.filter);
  const selectFilterURL = useSelector(({ root }) => root?.URL);
  const selectHours = useSelector(({ root }) => root?.hours);

  const optionEffect = (option) => {
    switch (option) {
      case "USER":
        if (Object.keys(selectAux).length && selectState === "create") {
          const number = selectInfo.pages * 20;
          if (selectInfo.count <= number) {
            dispatch(getPageUser(selectInfo.pages));
            setCurrent(selectInfo.pages);
            setTIme();
          }
        } else if (selectState === "delete") {
          if (selectFilterURL !== "") {
            dispatch(filter(`${selectFilterURL}${current}`));
          } else {
            const lengthUser = selectUser.length;
            if (lengthUser - 1 > 0 && lengthUser - 1 <= 20) {
              dispatch(getPageUser(current));
            } else {
              dispatch(getPageUser(selectInfo.pages));
              setCurrent(current - 1);
            }
          }
          setTIme();
        } else if (selectState === "edit") {
          dispatch(getPageUser(current));
          dispatch(stateFlag(""));
        }
        break;

      case "TYPE-CLASS":
        if (selectState === "edit") {
          dispatch(getPageTypeClass(current));
          dispatch(stateFlag(""));
        } else if (selectState === "delete") {
          const lengtTypeClass = selectTypeClass.length;
          if (lengtTypeClass - 1 > 0 && lengtTypeClass - 1 <= 20) {
            dispatch(getPageTypeClass(current));
            dispatch(stateFlag(""));
          } else {
            dispatch(getPageTypeClass(selectInfo.pages));
            dispatch(stateFlag(""));
            setCurrent(current - 1);
          }
        } else if (Object.keys(selectAux).length && selectState === "create") {
          const number = selectInfo.pages * 20;
          if (selectInfo.count <= number) {
            dispatch(getPageTypeClass(selectInfo.pages));
            setCurrent(selectInfo.pages);
            setTIme();
          }
        }
        break;

      case "HOURS":
        if (Object.keys(selectAux).length && selectState === "create") {
          const number = selectInfo.pages * 20;
          if (selectInfo.count <= number) {
            dispatch(getPageHours(selectInfo.pages));
            setCurrent(selectInfo.pages);
            setTIme();
          }
        } else if (selectState === "edit") {
          dispatch(getPageHours(current));
          dispatch(stateFlag(""));
        } else if (selectState === "delete") {
          const lengtHours = selectHours.length;
          if (lengtHours - 1 > 0 && lengtHours - 1 <= 20) {
            dispatch(getPageHours(current));
            dispatch(stateFlag(""));
          } else {
            dispatch(getPageHours(selectInfo.pages));
            dispatch(stateFlag(""));
            setCurrent(current - 1);
          }
        }
        break;

      case "CLASS":
        break;

      default:
        break;
    }
  };

  const setTIme = () =>
    setTimeout(() => {
      dispatch(removeAux());
    }, 500);

  const onChange = (page) => {
    if (navegation === "USER") {
      // TODO NAVEGACION NORMAL SIN FILTROS
      if (selectUser.length && !selectFilter.length) {
        dispatch(getPageUser(page));
        setCurrent(page);
      }
      // TODO NAVEGACION CON FILTROS
      if (selectFilterURL.length > 0) {
        dispatch(filter(`${selectFilterURL}${page}`));
        setCurrent(page);
      }
    } else if (navegation === "TYPE-CLASS") {
      dispatch(getPageTypeClass(page));
      setCurrent(page);
    } else if (navegation === "HOURS") {
      dispatch(getPageHours(page));
      setCurrent(page);
    }
  };

  useEffect(() => {
    optionEffect(navegation);
  }, [selectAux, selectState]);

  useEffect(() => {
    if (selectState === "clear" || selectState === "filter") {
      setCurrent(1);
      dispatch(stateFlag(""));
    }
  }, [selectState]);

  return (
    <div className="container-pagination">
      <Pagination onChange={onChange} total={pages * 10} current={current} />
    </div>
  );
}

export default PaginationComponet;
