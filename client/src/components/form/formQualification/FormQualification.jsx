import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";
import InputComponent from "@/components/inputComponent/InputComponent";
import Text from "@/components/text/Text";
import { Button, Form } from "antd";
import TableComponent from "@/components/tableComponent/TableComponent";
import AreaText from "@/components/areaText/AreaText";
import DateComponent from "@/components/date/DateComponent";
import {
  createParamsQualification,
  getParmsId,
  editParams,
} from "@/redux/actions";
import { useDispatch, useSelector } from "react-redux";
import ModalSelect from "@/components/modal/modalSelect/ModalSelect";

function FormQualification({ option, handleState, idClass }) {
  const dispatch = useDispatch();
  const selectData = useSelector(({ root }) => root?.data);
  const selectState = useSelector(({ root }) => root?.state);
  const [list, setList] = useState([]);
  const [flag, setFlag] = useState(false);
  const [update, setUpdate] = useState(false);
  const [head, setHead] = useState({
    title: "",
    dateTest: "",
  });

  const [data, setData] = useState({
    uuid: "",
    item: "",
    calification: 0,
    description: "",
  });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const onChangeHeadTitle = (event) => {
    setHead({ ...head, [event.target.name]: event.target.value });
  };

  const handleHeadDate = (date, dateString) => {
    setHead({
      ...head,
      dateTest: dateString,
    });
  };

  const handleUpdate = (idItem) => {
    const aux = list.find((index) => index.uuid === idItem);
    setData({
      uuid: aux.uuid,
      item: aux.item,
      calification: aux.calification,
      description: aux.description,
    });
    setUpdate(true);
  };

  const handleDelete = (idItem) => {
    const aux = list.filter((index) => index.uuid !== idItem);
    setList([...aux]);
  };

  const onFinish = () => {
    if (!update) {
      data.uuid = uuidv4();
      setList([...list, data]);
    } else {
      const index = list.findIndex((element) => element.uuid === data.uuid);
      list[index] = data;
      setUpdate(false);
    }
    setFlag(true);
  };

  const handleSubmitCalification = () => {
    if (option === "editParam") {
      dispatch(
        editParams({
          idClass: selectData?.idClass,
          idParams: selectData?.idParams,
          ...head,
          params: list,
        })
      );
    } else {
      dispatch(createParamsQualification({ idClass, ...head, params: list }));
      setHead({
        title: "",
        dateTest: "",
      });
      setList([]);
      handleState();
    }
  };

  useEffect(() => {
    if (flag) {
      setTimeout(() => {
        setData({
          uuid: 0,
          item: "",
          calification: 0,
          description: "",
        });
        setFlag(false);
      }, 200);
    }
  }, [flag]);

  useEffect(() => {
    if (option === "editParam") {
      dispatch(getParmsId(localStorage.getItem("numberClass"), idClass));
    }
  }, [option]);

  useEffect(() => {
    if (selectData) {
      setHead({
        title: selectData?.title,
        dateTest: selectData?.dateTest?.substring(0, 10),
      });
      setList([...selectData?.params]);
    }
  }, [selectData]);

  return (
    <div>
      <div>
        <Form
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 10,
          }}
          layout="horizontal"
          style={{
            maxWidth: 500,
          }}
          onFinish={onFinish}
        >
          <Form.Item label="Titulo">
            <InputComponent
              onChange={onChangeHeadTitle}
              name="title"
              placeholder="Primer parcial"
              data={head.title}
            />
          </Form.Item>

          <Form.Item label="Fecha">
            <DateComponent onChange={handleHeadDate} date={head.dateTest} />
          </Form.Item>

          <Form.Item label="Parametro">
            <InputComponent
              onChange={handleChange}
              name="item"
              placeholder="Posicion de pies"
              data={data.item}
            />
          </Form.Item>

          <Form.Item label="Calificación">
            <InputComponent
              onChange={handleChange}
              name="calification"
              placeholder="20 Pts"
              data={data.calification}
            />
          </Form.Item>

          <Form.Item label="Descripcion">
            <AreaText
              onChange={handleChange}
              name="description"
              placeholder="Calificacion de calificación"
              value={data.description}
            />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            <Text text="Crear parametro" />
          </Button>
        </Form>
      </div>

      <div>
        <TableComponent
          data={list}
          render="FORM-PARAM-CALIFICATION"
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </div>

      <Button type="primary" onClick={handleSubmitCalification}>
        <Text text="Crear" />
      </Button>
    </div>
  );
}

export default FormQualification;
