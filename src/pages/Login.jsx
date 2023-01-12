import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
// import FormikControl from "FormikControl"

export default function Login() {
  
  // const [userName, setUserName] = useState("");
  // const [email, setEmail] =useState("");
  // console.log(userName);
  // console.log(email);

  const formik  = useFormik ({
    initialValues: {
      userName:"", 
      email:"",
      password:""
    },

    validationSchema: Yup.object ({
        userName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        email: Yup.string()
          .email("Invalid email")
          .required("Required"),
        password: Yup.string()
          .required("Required")
          .min(8, "Must be 8 characters or more")
          .matches(/[a-z]+/, "One lowercase character")
          .matches(/[A-Z]+/, "One uppercase character")
          .matches(/[@$!%*#?&]+/, "One special character")
          .matches(/\d+/, "One number"),
    }),

    onSubmit: (values) =>{
      console.log(values)
    }

  });

  console.log(formik.errors);
  // drop-shadow-md
  return (
    <div className='h-screen grid items-center justify-center '>
      <form 
        onSubmit={formik.handleSubmit}
        className='grid items-center justify-center rounded-[10px] border-solid border-[#1b9c85] border-[1px] w-[400px] h-[300px] '
      >
        <div className='m-[10px] drop-shadow-[#1b9c85] '>
          <div className='m-[10px]'>
            <input
              className='border-[1px] border-[#1b9c85] p-2 font-light rounded-[10px] font-nunito w-[300px]'
              id="userName"
              name="userName"
              label='User Name'
              type="text"
              placeholder="User Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
            
              // onChange= {(e) => setUserName (e.target.value)}
            />
            {formik.touched.userName && formik.errors.userName ? <p>{formik.errors.userName}</p> : null}
          </div>

          <div className='m-[10px]'>
            <input
              className='border-[1px] border-[#1b9c85] font-light p-2 rounded-[10px] font-nunito w-[300px]'
              id="email"
              name="email"
              type="email"
              placeholder="example@example.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
              {formik.touched.email && formik.errors.userName ? <p>{formik.errors.userName}</p> : null}
          </div>

          <div className='m-[10px]'>
            <input
              className={`border-[1px] border-[#1b9c85] font-light p-2 rounded-[10px] font-nunito w-[300px] ${
                formik.touched.name && formik.errors.name? "text-red-400" : null }` }
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password &&formik.errors.password ? <p>{formik.errors.password}</p> : null}
          </div>
        </div>
        <div className='grid items-center justify-center'>
          <button 
            type="submit"
            disabled={formik.isValid}
            className="bg-[#1b9c85] font-nunito text-sm text-white rounded-[12px]  p-[10px] w-[150px] "
          >
            Login
          </button>
        </div>  
      </form>
    </div>
  )
}
