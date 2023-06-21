import axios from "axios";
import { Field, Formik, Form, ErrorMessage } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Button from "../components/Button";
import { ImSpinner10 } from "react-icons/im";
import { useDispatch } from "react-redux";
import { loginFailure, loginSuccess } from "../redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  let initialValues = {
    email: "",
    password: "",
  };
  let loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("should be valid email")
      .required("Please enter email!"),

    password: Yup.string()
      .min(5, "Password should contain more than 4 characters.")
      .max(40, "Password shouldn't exceed 40 characters.")
      .required("Please enter Password!"),
  });
  const handleLogin = async (values) => {
    // console.log("Login user:", values);
    try {
      setLoading(true);
      let res = await axios.post(
        "http://localhost:7000/api/auth/login",
        values
      );
      if (res.status === 200) {
        // console.log("Login successfull");
        dispatch(loginSuccess(res.data.userDetails));
        navigate("/");
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
      setLoading(false);
      console.error("Error during login:", error.message);
    }
  };
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="flex flex-col bg-gray-100 w-[320px] h-auto border-2 border-black p-6 items-center rounded-md">
        <p className="text-2xl font-normal uppercase">Login</p>
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={handleLogin}
        >
          {({ values, touched, error }) => {
            return (
              <Form className="py-8 flex flex-col gap-y-3">
                {/* email */}
                <div className="flex flex-col gap-y-1">
                  <p className="text-base text-gray-500 ">Email</p>
                  <Field
                    name="email"
                    placeholder="Email"
                    type="email"
                    className="border border-black px-2 py-1 flex flex-col"
                    values={values.email}
                  />
                  <ErrorMessage name="email" />
                </div>
                {/* pass */}
                <div className="flex flex-col gap-y-1">
                  <p className="text-base text-gray-500 ">Password</p>
                  <Field
                    name="password"
                    placeholder="Password"
                    type="password"
                    className="border border-black px-2 py-1 flex flex-col "
                    values={values.password}
                  />
                  <ErrorMessage name="password" />
                </div>
                <div
                  className="hover:underline"
                  onClick={() => navigate("/register")}
                >
                  <p className="text-sm  cursor-pointer">
                    To signup click here
                  </p>
                </div>

                {loading ? (
                  <ImSpinner10 className="animate-spin flex justify-center" />
                ) : (
                  <div className="flex justify-center">
                    <Button
                      name={"LOGIN"}
                      bgColor="bg-gray-300"
                      textColor="text-black"
                      radius="rounded-md"
                      width="w-max"
                      type="submit"
                    />
                  </div>
                )}
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
