import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { API_BASE_URL } from "../api/endPoint";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // console.log(userName);
  // console.log(email);

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      userName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(8, "Must be 8 characters or more")
        .matches(/[a-z]+/, "One lowercase character")
        .matches(/[A-Z]+/, "One uppercase character")
        .matches(/[@$!%*#?&]+/, "One special character")
        .matches(/\d+/, "One number"),
    }),

    // onSubmit: (values) =>{
    //   console.log(values)
    // }
  });
  let login = {
    email,
    password,
  };
  const HandleSubmit = (e) => {
    e.preventDefault();
    //     axios
    //     .post(`${API_BASE_URL}/user/login`, login, {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     })
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error, "errorrrrrrrrrrrrrrr");
    //     });
    axios
      .post(`${API_BASE_URL}user/login`, login)
      .then((response) => {
        localStorage.setItem("accessToken", response?.data?.accessToken);
        window.location.replace("/admin");
        console.log(response, "thi is response");
      })
      .catch((err) => {
        setMessage(err?.response?.data?.message?.message);

        console.log(err);
      });
  };

  console.log(login, "formik.errors");

  // drop-shadow-md
  return (
    <div className="h-screen grid items-center justify-center ">
      <form
        onSubmit={HandleSubmit}
        className="grid items-center justify-center rounded-[10px] border-solid border-[#1b9c85] border-[1px] w-[400px]  "
      >
        <div className="m-[10px] drop-shadow-[#1b9c85] ">
          <div className="m-[10px]">
            <input
              className="border-[1px] border-[#1b9c85] p-2 font-light rounded-[10px] font-nunito w-[300px]"
              id="userName"
              name="userName"
              label="User Name"
              type="text"
              placeholder="User Name"
              onChange={(e) => setUserName(e.target.value)}
              onBlur={formik.handleBlur}
              // value={formik.values.userName}

              // onChange= {(e) => setUserName (e.target.value)}
            />
            {formik.touched.userName && formik.errors.userName ? (
              <p>{formik.errors.userName}</p>
            ) : null}
          </div>

          <div className="m-[10px]">
            <input
              className="border-[1px] border-[#1b9c85] font-light p-2 rounded-[10px] font-nunito w-[300px]"
              id="email"
              name="email"
              type="email"
              placeholder="example@example.com"
              onChange={(e) => setEmail(e.target.value)}
              onBlur={formik.handleBlur}
              // value={formik.values.email}
            />
            {formik.touched.email && formik.errors.userName ? (
              <p>{formik.errors.userName}</p>
            ) : null}
          </div>

          <div className="m-[10px]">
            <input
              className={`border-[1px] border-[#1b9c85] font-light p-2 rounded-[10px] font-nunito w-[300px] ${
                formik.touched.name && formik.errors.name
                  ? "text-red-400"
                  : null
              }`}
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              onBlur={formik.handleBlur}
              // value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <p>{formik.errors.password}</p>
            ) : null}
          </div>
        </div>
        <div className="flex m-[10px] gap-[10px] items-center justify-center">
          <button
            type="submit"
            className="bg-[#1b9c85] font-nunito text-sm text-white rounded-[12px]  p-[10px] w-[150px] "
          >
            Login
          </button>
          <button
            type="reset"
            className="bg-[#ffff] border-[#1b9c85] border-[1px] font-nunito text-sm text-[#1b9c85] rounded-[12px]  p-[10px] w-[150px] "
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
