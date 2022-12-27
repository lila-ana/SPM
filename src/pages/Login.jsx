import React from 'react'
import { useFormik } from "formik"
// import * as Success from "success";

export default function Login() {
 
  const formik = useFormik({
    
    initialValues: {
      name: "",
      email: "",
      password:"",
    },

    // validationSchema: Success.object({
    //   name: Success.string()
    //     .max(20, "Name must be 20 characters or less.")
    //     .required("Name is required"),
    //   email: Success.string()
    //     .email("Invalid email address")
    //     .required("Email is required"),
    // }),

    onSubmit: (values) => {
      console.log("form submitted");
      console.log(values);
      router.push({ pathname: "/success", query: values });
    },
  })

  return (
    <div className='h-screen flex items-center justify-center border-solid border-[#1b9c85]' >
        <form 
        onSubmit={formik.handleSubmit}
        className="bg-white rounded-lg border-[1px] border-solid border-[#1b9c85] font-nunito p-[40px]"
        >
        {/* className='border-solid border-[#1b9c85] */}
        {/* Name input field */}
           <div className="pb-2">
                <label
                  htmlFor="name"
                  className={`block font-nunito text-sm pb-2 ${
                    formik.touched.name && formik.errors.name
                      ? "text-red-400"
                      : ""
                  } `}
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : "" }
                </label>
                <p className="text-sm font-nunito text-red-400 "></p>
                <input
                  className='border-[1px] border-[#1b9c85] p-2 rounded-[10px]  focus:border-[#1b9c85] focus:ring-[#1b9c85] font-nunito w-[400px]'
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
              </div>

              {/* Email input field */}
              <div className="pb-2">
                <label
                  htmlFor="email"
                  className={`block font-nunito text-sm pb-2 ${
                    formik.touched.email && formik.errors.email
                      ? "text-re"
                      : ""
                  }`}
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : ""}
                </label>

                <p></p>
                <input
                  className='border-[1px] border-[#1b9c85] p-2 rounded-[10px]  focus:border-[#1b9c85] focus:ring-[#1b9c85] font-nunito w-[400px]'
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
              </div>

              {/* password input field */}
              <div className="pb-2">
                <label
                  htmlFor="password"
                  className={`block font-nunito text-sm pb-2 ${
                    formik.touched.password && formik.errors.password
                      ? "text-re"
                      : ""
                  }`}
                >
                  {formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : ""}
                </label>

                <p></p>
                <input
                  className='border-[1px] border-[#1b9c85] p-2 rounded-[10px]  focus:border-[#1b9c85] focus:ring-[#1b9c85] font-nunito w-[400px]'
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
              </div>

              <button
                type="submit"
                className="bg-[#1b9c85] font-nunito text-sm text-white py-3 mt-6 rounded-[12px] w-[150px] justify-center items-center"
              >
                Login
              </button>
        </form>
    </div>
  )
}
