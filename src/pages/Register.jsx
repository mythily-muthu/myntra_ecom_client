import axios from "axios";
import { Field, Formik, Form, ErrorMessage } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Button from "../components/Button";
import { ImSpinner10 } from "react-icons/im";

const Register = () => {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  let initialValues = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  };

  // register schema
  let registerSchema = Yup.object().shape({
    name: Yup.string()
      .required("Please Enter UserName")
      .min(3, "Username length should be more than 2"),
    email: Yup.string()
      .email("*should be valid email")
      .required("*Please enter email!"),

    password: Yup.string()
      .min(5, "*Password should contain more than 4 characters.")
      .max(40, "*Password shouldn't exceed 40 characters.")
      .required("*Please enter Password!"),
  });

  const handleRegister = async (values) => {
    // console.log("Registered user:", values);

    try {
      setLoading(true);
      let res = await axios.post(
        "http://localhost:7000/api/auth/register",
        values
      );
      if (res.status === 201) {
        console.log("registered successfull");
        navigate("/login");
      } else {
        console.log("register failed");
      }
    } catch (error) {
      console.error("Error during register:", error.message);
      setLoading(false);
    }
  };
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="flex flex-col bg-gray-100 w-[350px] h-auto border-2 rounded-lg border-black p-6 items-center">
        <p className="text-2xl font-normal uppercase">Register</p>
        <Formik
          initialValues={initialValues}
          validationSchema={registerSchema}
          onSubmit={handleRegister}
        >
          {({ values, errors, touched }) => {
            // console.log("values:", values);
            return (
              <Form className="py-8 flex flex-col gap-y-3">
                {/* name */}
                <div className="flex flex-col gap-y-1">
                  <p className="text-base text-gray-500">Name</p>
                  <Field
                    name="name"
                    placeholder="Name"
                    type="text"
                    className="border border-black px-2 py-1 flex flex-col "
                    values={values.name}
                  />
                  <ErrorMessage name="name" />
                </div>
                {/* email */}
                <div className="flex flex-col gap-y-1">
                  <p className="text-base text-gray-500 ">Email</p>
                  <Field
                    name="email"
                    placeholder="Email"
                    type="email"
                    className="border border-black px-2 py-1 flex flex-col "
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
                {/* confirm pass */}
                <div className="flex flex-col gap-y-1">
                  <p className="text-base text-gray-500">Confirm Password</p>
                  <Field
                    name="confirmpassword"
                    type="password"
                    placeholder="Confirm Password"
                    className="border border-black px-2 flex flex-col py-1"
                    values={values.confirmpassword}
                  />
                  <ErrorMessage name="confirmpassword" />
                </div>
                <div
                  className="hover:underline"
                  onClick={() => navigate("/login")}
                >
                  <p className="text-sm  cursor-pointer">To login click here</p>
                </div>
                {loading ? (
                  <ImSpinner10 className="animate-spin flex justify-center" />
                ) : (
                  <div className="flex justify-center">
                    <Button
                      name={"REGISTER"}
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

export default Register;
