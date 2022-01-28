import React, { useState } from "react";

import Banner from "../common/imgComponent";
import InputFeild from "../common/InputFeild";
import CustomBtn from "../common/CustomBtn";
import useForm from "../common/useForm";
import validateLogin from "../common/validateLogin";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const history = useHistory();
  const [message, setMessage] = useState(null);
  const [usersData, setUsersData] = useState({});
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    setUsersData(userData);
  }, []);
  function submit(event) {
    if (usersData === null) {
      setMessage("Users Data empty");
    } else if (
      values.email === usersData.email &&
      values.pwd === usersData.pwd
    ) {
      setMessage("Lagin ");
      history.push("/UserListPage");
    } else {
      setMessage("User not found ");
    }
  }
  const { handleChange, handleSubmit, values, errors } = useForm(
    submit,
    validateLogin
  );

  return (
    <div className="flex-container">
      <div className="box">
        <Banner />
      </div>
      <div className="box">
        <div className="contentDiv">
          <div className="formDiv">
            <form onSubmit={handleSubmit} noValidate>
              <h1 className="text-center signText">Login</h1>
              <p style={{ textAlign: "center", color: "red" }}>{message}</p>
              <InputFeild
                labelName="Email"
                inputType={"email"}
                className={`${errors.email && "inputError"}`}
                inputName={"email"}
                value={values.email || ""}
                erroMsg={errors.email}
                onChange={handleChange}
                colSm="12"
                labelSM="12"
                placeholder={"ex : johndoe@email.com"}
              />
              <InputFeild
                labelName="Password"
                inputType={"password"}
                className={`${errors.pwd && "inputError"}`}
                inputName={"pwd"}
                value={values.pwd || ""}
                erroMsg={errors.pwd}
                onChange={handleChange}
                colSm="12"
                labelSM="12"
                placeholder={"Enter new password"}
              />
              <CustomBtn
                btnType="submit"
                btnName={"Login"}
                className={"sundayTechBtn"}
              />
              <div className="text-center mt-2"> Or Log in using</div>
              <div className="socialIcons1 text-center mt-2">
                <img src="/assets/img/f.svg" alt="Banner" />{" "}
                <img src="/assets/img/t.svg" alt="Banner" />{" "}
                <img src="/assets/img/g.svg" alt="Banner" />
              </div>
              <div className="text-center mt-2">
                Don't have an account? <Link to="/SingUp">Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
