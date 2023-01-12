import React from 'react'
import {useFormik} from 'formik';
import * as Yup from 'yup';

export default function Registration() {
  
    const formik = useFormik ({
        
        initialValues: {
            fullName: "",
            gender:"",
            email: "",
            department: "",
            role: "",
            password: "",
            confirmPassword: "",
        },

        validationSchema: Yup.object ({
            name: Yup.string()
                .required("Required"),
            email: Yup.string()
                .email("Invalid email")
                .required("Required"),
            gender: Yup.string()
                .required("Required"),
            department: Yup.string()
                .required("Required"),
            role: Yup.string()
                .required("Required"),
            password: Yup.string()
                .required("Required")
                .min(8, "Must be 8 characters or more")
                .matches(/[a-z]+/, "One lowercase character")
                .matches(/[A-Z]+/, "One uppercase character")
                .matches(/[@$!%*#?&]+/, "One special character")
                .matches(/\d+/, "One number"),
            confirmPassword: Yup.string()
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
    })

return (
    <div className='h-screen grid items-center justify-center'>
        <form
            onSubmit={formik.handleSubmit}
            className='grid items-center justify-center rounded-[10px] border-solid border-[#1b9c85] border-[1px] w-[320px] '
        >
            <div className='m-[10px]'>
                <div className='m-[10px]'>
                    <input
                        className='border-[1px] border-[#1b9c85] font-light text-[14px] p-2 rounded-[10px] font-nunito w-[250px] h-[35px]'
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder='Full Name'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.fullName}
                    />
                    {formik.touched.fullName && formik.errors.fullName ? <p>{formik.errors.fullName}</p> : null}
                </div>
                <div className='m-[10px]'>
                    <input
                        className='border-[1px] border-[#1b9c85] font-light text-[14px] p-2 rounded-[10px] font-nunito w-[250px] h-[35px]'
                        id="gender"
                        name="gender"
                        type="text"
                        placeholder='Gender'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.gender}
                    />
                    {formik.touched.gender && formik.errors.gender ? <p>{formik.errors.gender}</p> : null}
                </div>
                <div className='m-[10px]'>
                    <input
                        className='border-[1px] border-[#1b9c85] font-light text-[14px] p-2 rounded-[10px] font-nunito w-[250px] h-[35px]'
                        id="department"
                        name="department"
                        type="text"
                        placeholder='Department/Team'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.department}
                    />
                    {formik.touched.department && formik.errors.department ? <p>{formik.errors.department}</p> : null}
                </div>
                <div className='m-[10px]'>
                    <input
                        className='border-[1px] border-[#1b9c85] font-light text-[14px] p-2 rounded-[10px] font-nunito w-[250px] h-[35px]'
                        id="role"
                        name="role"
                        type="text"
                        placeholder='Role/Job title'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.role}
                    />
                    {formik.touched.role && formik.errors.role ? <p>{formik.errors.role}</p> : null}
                </div>
                <div className='m-[10px]'>
                    <input
                        className='border-[1px] border-[#1b9c85] font-light text-[14px] p-2 rounded-[10px] font-nunito w-[250px] h-[35px]'
                        id="email"
                        name="email"
                        type="email"
                        placeholder='example@example.com'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
                </div>
                <div className='m-[10px]'>
                    <input
                        className='border-[1px] border-[#1b9c85] font-light text-[14px] p-2 rounded-[10px] font-nunito w-[250px] h-[35px]'
                        id="password"
                        name="password"
                        type="Password"
                        placeholder='Password'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null}
                </div>
                <div className='m-[10px]'>
                    <input
                        className='border-[1px] border-[#1b9c85] font-light text-[14px] p-2 rounded-[10px] font-nunito w-[250px] h-[35px]'
                        id="confirmPassword"
                        name="confirmPassword"
                        type="Password"
                        placeholder='Confirm Password'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? <p>{formik.errors.confirmPassword}</p> : null}
                </div>
            </div>

            <div className='flex items-center justify-center gap-[40px] my-[10px]'>
                <button 
                    type="submit"
                    className="bg-[#1b9c85] font-nunito text-[13px] font-light text-white rounded-[12px] p-[10px] w-[90px] h-[35px] flex justify-center items-center "
                >
                    Register
                </button>
                <button 
                    type="submit"
                    className="bg-[#8f8f8f] font-nunito text-[13px] font-light text-white border-[#8f8f8f] border-[1px] rounded-[12px] p-[10px] w-[90px] h-[35px] flex justify-center items-center"
                >
                    Cancel
                </button>
            </div>
        </form>
    </div>
  )
}
