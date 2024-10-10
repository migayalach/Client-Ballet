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
  getPageClass,
  getPageAssistance,
  getPageContact,
  getPageEvent,
  filterInfo,
  stateClear,
  getPageClassStudent,
} from "@/redux/actions";

// JAVASCRIP

// STYLESHEET'
import "./pagination.css";

function PaginationComponet({ pages, navegation, idClass }) {
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
  const selectClass = useSelector(({ root }) => root?.classes);
  const selectAssistance = useSelector(({ root }) => root?.assistance);
  const accessUserData = useSelector(({ root }) => root?.access);
  const selectContact = useSelector(({ root }) => root?.contact);
  const selectListEvent = useSelector(({ root }) => root?.list);
  const selectStudent = useSelector(({ root }) => root?.student);
  // const selectListParams = useSelector(({ root }) => root.qualification);

  const optionEffect = (option) => {
    switch (option) {
      case "USER":
        if (
          selectAux &&
          Object.keys(selectAux).length &&
          selectState === "create"
        ) {
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
          if (selectFilter.length > 0 && !selectUser.length) {
            dispatch(filter(`${selectFilterURL}${current}`));
          } else {
            dispatch(getPageUser(current));
          }
          dispatch(stateFlag(""));
        }
        break;

      case "TYPE-CLASS":
        if (selectState === "edit") {
          if (selectFilter.length > 0 && !selectTypeClass.length) {
            dispatch(filter(`${selectFilterURL}${current}`));
          } else {
            dispatch(getPageTypeClass(current));
          }
          dispatch(stateFlag(""));
        } else if (selectState === "delete") {
          if (selectFilterURL !== "") {
            dispatch(filter(`${selectFilterURL}${current}`));
          } else {
            const lengtTypeClass = selectTypeClass.length;
            if (lengtTypeClass - 1 > 0 && lengtTypeClass - 1 <= 20) {
              dispatch(getPageTypeClass(current));
            } else {
              dispatch(getPageTypeClass(selectInfo.pages));
              setCurrent(current - 1);
            }
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
          if (selectFilter.length > 0 && !selectHours.length) {
            dispatch(filter(`${selectFilterURL}${current}`));
          } else {
            dispatch(getPageHours(current));
          }
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
        const dataUser = accessUserData;
        if (Object.keys(selectClass).length && selectState === "create") {
          const number = selectInfo.pages * 20;
          if (selectInfo.count <= number) {
            dispatch(getPageClass(dataUser?.idUser, selectInfo.pages));
            setCurrent(selectInfo.pages);
            setTIme();
          }
        } else if (selectState === "delete") {
          if (selectFilterURL !== "") {
            dispatch(filter(`${selectFilterURL}${current}`));
          } else {
            const lengtClass = selectClass.length;
            if (lengtClass - 1 > 0 && lengtClass - 1 <= 20) {
              dispatch(getPageClass(dataUser?.idUser, current));
              dispatch(stateFlag(""));
            } else {
              dispatch(getPageClass(dataUser?.idUser, selectInfo.pages));
              dispatch(stateFlag(""));
              setCurrent(current - 1);
            }
          }
        } else if (selectState === "edit") {
          if (selectFilter.length > 0 && !selectClass.length) {
            dispatch(filter(`${selectFilterURL}${current}`));
          } else {
            dispatch(getPageClass(dataUser?.idUser, current));
          }
          dispatch(stateFlag(""));
        }
        break;

      case "LIST-ASSISTANCE-IDCLASS":
        if (Object.keys(selectAux).length && selectState === "create") {
          const number = selectInfo.pages * 20;
          if (selectInfo.count <= number) {
            dispatch(getPageAssistance(idClass, selectInfo.pages));
            setCurrent(selectInfo.pages);
            setTIme();
          }
        } else if (selectState === "delete") {
          if (selectFilterURL !== "") {
            // dispatch(filter(`${selectFilterURL}${current}`));
          } else {
            const lengthAssistance = selectAssistance.length;
            if (lengthAssistance - 1 > 0 && lengthAssistance - 1 <= 20) {
              dispatch(getPageAssistance(idClass, selectInfo.pages));
            } else {
              dispatch(getPageAssistance(idClass, selectInfo.pages));
              setCurrent(current - 1);
            }
          }
          setTIme();
        } else if (selectState === "edit") {
          if (selectFilter.length > 0 && !selectAssistance.length) {
            // dispatch(filter(`${selectFilterURL}${current}`));
          } else {
            dispatch(getPageAssistance(idClass, current));
          }
          dispatch(stateFlag(""));
        }
        break;

      case "CONTACT":
        if (selectState === "edit") {
          // if (selectFilter.length > 0 && !selectTypeClass.length) {
          // dispatch(filter(`${selectFilterURL}${current}`));
          // } else {
          dispatch(getPageContact(current));
          // }
          dispatch(stateFlag(""));
        }
        break;

      case "EVENTS":
        if (selectState === "create") {
          dispatch(getPageEvent(1));
          setCurrent(1);
          setTIme();
        } else if (selectState === "delete") {
          dispatch(getPageEvent(1));
          setCurrent(1);
          dispatch(stateClear());
        }
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
      // TODO NAVEGACION NORMAL SIN FILTROS - USER
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
      // TODO NAVEGACION NORMAL SIN FILTROS - USER
      if (selectTypeClass.length && !selectFilter.length) {
        dispatch(getPageTypeClass(page));
        setCurrent(page);
      }
      // TODO NAVEGACION CON FILTROS
      if (selectFilterURL.length > 0) {
        dispatch(filter(`${selectFilterURL}${page}`));
        setCurrent(page);
      }
    } else if (navegation === "HOURS") {
      if (selectHours.length && !selectFilter.length) {
        dispatch(getPageHours(page));
        setCurrent(page);
      }
      if (selectFilterURL.length > 0) {
        dispatch(filter(`${selectFilterURL}${page}`));
        setCurrent(page);
      }
    } else if (navegation === "CLASS") {
      const dataUser = accessUserData;
      // TODO NAVEGACION NORMAL SIN FILTROS - CLASS
      if (selectClass.length && !selectFilter.length) {
        dispatch(getPageClass(dataUser?.idUser, page));
        setCurrent(page);
      }
      // TODO NAVEGACION NORMAL CON FILTROS - CLASS
      if (selectFilter.length > 0) {
        dispatch(filter(`${selectFilterURL}${page}`));
        setCurrent(page);
      }
    } else if (navegation === "QUALIFICATION") {
      // TODO NAVEGACION NORMAL SIN FILTROS - CLASS
      // TODO NAVEGACION NORMAL CON FILTROS - CLASS
    } else if (navegation === "LIST-ASSISTANCE-IDCLASS") {
      // TODO NAVEGACION NORMAL SIN FILTROS - ASSISTANCE
      dispatch(getPageAssistance(idClass, page));
      setCurrent(page);
      // TODO NAVEGACION CON FILTROS
    } else if (navegation === "CONTACT") {
      // TODO NAVEGACION NORMAL SIN FILTROS - ASSISTANCE
      if (selectContact.length && !selectFilter.length) {
        dispatch(getPageContact(page));
        setCurrent(page);
      }
      // TODO NAVEGACION CON FILTROS
      if (selectFilter.length > 0) {
        console.log(selectInfo);

        dispatch(filterInfo(`${selectFilterURL}${page}`));
        setCurrent(page);
      }
    } else if (navegation === "EVENTS") {
      // TODO NAVEGACION NORMAL SIN FILTROS - EVENTS
      if (selectListEvent.length && !selectFilter.length) {
        dispatch(getPageEvent(page));
        setCurrent(page);
      }
    } else if (navegation === "CLASS-STUDENT") {
      // TODO NAVEGACION NORMAL SIN FILTROS - CLASS-STUDENT
      if (selectStudent.length && !selectFilter.length) {
        dispatch(getPageClassStudent(idClass, page));
        setCurrent(page);
      }
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
      <Pagination
        onChange={onChange}
        total={(pages || 0) * 10}
        current={current}
      />
    </div>
  );
}

export default PaginationComponet;
