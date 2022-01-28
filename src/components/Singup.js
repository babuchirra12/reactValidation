import React from "react";
import Banner from "../common/imgComponent";
import useForm from "../common/useForm";
import validate from "../common/singUpValidation";
import { Row, Col, Form } from "react-bootstrap";
import InputFeild from "../common/InputFeild";
import CustomBtn from "../common/CustomBtn";
import { Link } from "react-router-dom";
import {  useState } from "react";
const Login = () => {
  const [acceptTerms, setAcceptTerms] = useState(true);
  const [massage, setMessage] = useState();
  function submit() {
    localStorage.setItem("user", JSON.stringify(values));
    setMessage("User added successfully ")
  }
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validate
  );
  const [agreeToAllTerms, setAgreeToAllTerms] = useState(false);
  const handleChangeChk = (chkValue) => {
   // console.log(chkValue.target.checked);
    if (!chkValue.target.checked) {
      setAcceptTerms(true);
    } else {
      setAcceptTerms(false);
    }
    setAgreeToAllTerms(chkValue.target.checked);
  };
 
  return (
    <div className="flex-container">
      <div className="box">
        <Banner />
      </div>
      <div className="box">
        <div className="contentDiv">
          <div className="formDiv">
            <h1 className="text-center signText">SIGN UP</h1>
           <div style={{ textAlign: "center", color: "green" }}>{massage}</div> 
            <form onSubmit={handleSubmit} noValidate>
              <InputFeild
                labelName="Name"
                inputType="text"
                className={`${errors.name && "inputError"}`}
                inputName="name"
                value={values.name}
                erroMsg={errors.name}
                onChange={handleChange}
                placeholder={"ex : John"}
                colSm="12"
                labelSM="12"
              />
              <InputFeild
                labelName="Email"
                inputType={"email"}
                className={`${errors.email && "inputError"}`}
                inputName={"email"}
                value={values.email}
                erroMsg={errors.email}
                onChange={handleChange}
                colSm="12"
                labelSM="12"
                placeholder={"ex : johndoe@email.com"}
              />

              <Row xs={12}>
                <Col>
                  <InputFeild
                    labelName="Phone number"
                    inputType={"number"}
                    className={`${errors.mobile && "inputError"}`}
                    inputName={"mobile"}
                    value={values.mobile}
                    erroMsg={errors.mobile}
                    onChange={handleChange}
                    colSm="12"
                    labelSM="12"
                    placeholder={"0000000000"}
                  />
                </Col>
                <Col>
                  <InputFeild
                    labelName="Date of Birth"
                    inputType={"date"}
                    className={`${errors.date && "inputError"}`}
                    inputName={"date"}
                    value={values.date}
                    erroMsg={errors.date}
                    onChange={handleChange}
                    colSm="12"
                    labelSM="12"
                    placeholder={"DD/MM/YY"}
                  />
                </Col>
              </Row>
              <InputFeild
                labelName="Password"
                inputType={"password"}
                className={`${errors.pwd && "inputError"}`}
                inputName={"pwd"}
                value={values.pwd}
                erroMsg={errors.pwd}
                onChange={handleChange}
                colSm="12"
                labelSM="12"
                placeholder={"Enter new password"}
              />
              <div>
                <Form.Group className="mb-2" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    checked={agreeToAllTerms}
                    onChange={(event) => {
                      handleChangeChk(event);
                    }}
                    label=" I accept the Terms & conditions."
                  />
                </Form.Group>
              </div>
              <CustomBtn
                btnType="submit"
                btnName={"SignUp"}
                className={"sundayTechBtn"}
                disabled={acceptTerms}
              />
              <p className="text-center mt-2"> Or Log in using</p>
              <div className="text-center mt-2">
                Already have an account? <Link to="/">Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
