import React from "react";
import { Form, Row, Col } from "react-bootstrap";
function InputFeild({
  labelName,
  erroMsg,
  colSm,
  labelSM,
  inputType,
  value,
  inputName,
  placeholder,
  onChange,
}) {
  return (
    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm={labelSM}>
        {labelName}
      </Form.Label>
      <Col sm={colSm}>
        <Form.Control
          type={inputType}
          name={inputName}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {erroMsg && <p className="error">{erroMsg}</p>}
      </Col>
    </Form.Group>
  );
}

export default InputFeild;
