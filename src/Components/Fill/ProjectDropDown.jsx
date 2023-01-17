import React, { useEffect, useState, useMemo } from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import get from '../../features/get'

export default function ProjectDropDown() {
//  const data = useMemo(() => get.getproject() , [get.getproject()])

  const formik = useFormik ({
    
    initialValues: {
      name:"", 
      email:"",
      address:"",
      contactNumber: "",
      website: "",
      logo: "",
      country:"",
      state:"",
    },

    validationSchema: Yup.object ({
      title: Yup.string()
        .required("Required"),
      client: Yup.string()
        .required("Required"),
      address: Yup.string()
        .required("Required"),
      contactNumber: Yup.string()
        .required("Required"),
      position: Yup.string()
        .required("Required"),
      email: Yup.string()
        .required("Required"),
      vendor: Yup.string()
        .required("Required"),
      solutions: Yup.string()
        .required("Required"),
      contactRole: Yup.string()
        .required("Required"),
    }),

    onSubmit: (values) =>{
      console.log(values)
    }

  })
  // const [data,setData]=useState();
  // useEffect(() => {
  //   axios.get(`client/all-clients`)
  //   .then(res => setData(res.data))
  //   .catch(err => console.log(err))
  // })
  console.log(get.getproject(),"data")
  
  return (
    <div className='grid items-center justify-center '>
      <form
      onSubmit={formik.handleSubmit}
      className='grid items-center justify-center rounded-[10px] border-solid border-[#1b9c85] border-[1px] w-[400px] '
      >
          <div className='m-[1px] w-[350px] '>
        <div className='m-[4px] flex justify-center items-center gap-[5px]'>
          <label className="block mb-[2px] text-sm font-nunito font-normal  w-[120px] text-gray-600 dark:text-white">Client</label>
          <select className="block w-full p-2 text-sm font-nunito text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="" disabled>Choose Client</option>
              {get?.getclient()?.map((items)=>(
                <option value={items?.id}>{items?.name}</option>           
              ))}
          </select>
          </div>
        </div>

        
        <div className='m-[1px] w-[350px] '>
        <div className='m-[4px] flex justify-center items-center gap-[5px]'>
          <label className="block mb-[2px] text-sm font-nunito font-normal  w-[120px] text-gray-600 dark:text-white">Vendor</label>
          <select  className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="" disabled>Choose Vendor</option>
              {get?.getvendor()?.map((items)=>(
                <option value={items?.id}>{items?.name}</option>           
              ))}
          </select>
          </div>
        </div>
        
        
        <div className='m-[1px] w-[350px] '>
        <div className='m-[4px] flex justify-center items-center gap-[5px] mb-[10px]'>
          <label className="block mb-[2px] text-sm font-nunito ffont-normal  w-[120px] text-gray-600 dark:text-white">Solution</label>
          <select  className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="" disabled>Choose Solution</option>
              {get?.getsolutions()?.map((items)=>(
                <option value={items?.id}>{items?.name}</option>           
              ))}
          </select>
          </div>
        </div>

        <div className='mb-[10px]'>
          <div className='flex items-center justify=center gap-[5px] mb-[10px]'>
            <label for="name" className="block mb-2 text-sm font-normal  w-[120px] text-gray-600 dark:text-white">Project Title</label>
            <input 
              type="text" 
              id="name"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          </div>

          <div className='flex items-top justify-top gap-[5px]'>
            <label for="description" className="block mb-2 text-sm font-normal w-[120px] text-gray-600 dark:text-white">Project description</label>
            <input 
              type="text" 
              id="description"
              className="block w-full h-[300px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
          </div>

        </div>
       



        
        {/* <div className='m-[1px] w-[350px] '>
        <div className='m-[4px] flex justify-center items-center gap-[5px]'>
          <label className="block mb-[2px] text-sm font-nunito font-light text-[#696969] w-[120px] dark:text-white">Contact Role</label>
          <select  className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="" disabled>Choose Contract role</option>
              {get?.getContactRole()?.map((items)=>(
                <option value={items?.id}>{items?.name}</option>           
              ))}
          </select>
          </div>
        </div> */}
        

 
        
 
       
          {/* <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id='title'
            name='title'
            type='text'
            placeholder='Project Title'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            values={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? <p>{formik.errors.title}</p> :null}
        
        
        </div>
        
        <div className='m-[10px] '>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id='client'
            name='client'
            type='text'
            placeholder='Client'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            values={formik.values.client}
          />
          {formik.touched.client && formik.errors.client ? <p>{formik.errors.client}</p> :null}
        </div>
        <div className='m-[10px] '>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id='address'
            name='address'
            type='text'
            placeholder='Address'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            values={formik.values.address}
          />
          {formik.touched.address && formik.errors.address ? <p>{formik.errors.address}</p> :null}
        </div>
        <div className='m-[10px] '>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id='contactPerson'
            name='contactPerson'
            type='text'
            placeholder='Contact Person'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            values={formik.values.contactPerson}
          />
          {formik.touched.contactPerson && formik.errors.contactPerson ? <p>{formik.errors.contactPerson}</p> :null}
        </div>
        <div className='m-[10px] '>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id='position'
            name='position'
            type='text'
            placeholder='Position'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            values={formik.values.position}
          />
          {formik.touched.position && formik.errors.position ? <p>{formik.errors.position}</p> :null}
        </div>
        <div className='m-[10px] '>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id='email'
            name='email'
            type='email'
            placeholder='example@exmaple.com'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            values={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> :null}
        </div>
        <div className='m-[10px] '>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id='vendor'
            name='vendor'
            type='text'
            placeholder='Vendor'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            values={formik.values.vendor}
          />
          {formik.touched.vendor && formik.errors.vendor ? <p>{formik.errors.vendor}</p> :null}
        </div>
        <div className='m-[10px] '>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id='solutions'
            name='solutions'
            type='text'
            placeholder='Solutions'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            values={formik.values.solutions}
          />
          {formik.touched.solutions && formik.errors.solutions ? <p>{formik.errors.solutions}</p> :null}
        </div>
        <div className='m-[10px] '>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id='contactRole'
            name='contactRole'
            type='text'
            placeholder='Contact Role'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            values={formik.values.contactRole}
          />
          {formik.touched.contactRole && formik.errors.contactRole ? <p>{formik.errors.contactRole}</p> :null}
        </div> */}
      

      <div className='flex items-center justify-center gap-[60px] my-[10px]'>
        <button
          type="submit"
          className="bg-[#1b9c85] font-nunito text-[15px] font-light text-white rounded-[12px] p-[10px] w-[120px] "
        >
          Submit
        </button>
        <button 
            type="submit"
            className="bg-[#1b9c85] font-nunito text-[15px] font-light text-white rounded-[12px] p-[10px] w-[120px] "
          >
            Cancel
          </button>
      </div>
      </form>  
    </div>
  )
}
