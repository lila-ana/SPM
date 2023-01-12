import React, {useState} from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import axios from 'axios'
import get from '../../features/get'

export default function VendorFill() {
  
    const [name, setName]=useState(null)
    const [logo, setLogo]=useState(null)
    const [website, setWebsite]=useState(null)
    const [email, setEmail]=useState(null)
    const [contact_phone, setContact_phone]=useState(null)
    const [address, setAddress]=useState(null)
    const [country, setCountry]=useState(null)

    const formik  = useFormik ({ 
        initialValues: {
          name:"", 
          email:"",
          address:"",
          contactNumber: "",
          website: "",
          logo: "",
          country:"",
          
        },
    
        // validationSchema: Yup.object ({
        //  name: Yup.string()
        //     .required("Required"),
        //   email: Yup.string()
        //     .email("Invalid email")
        //     .required("Required"),
        //   address: Yup.string()
        //     // .max("Invalid Address")
        //     .required("Required"),
        //   contactNumber: Yup.string()
        //     // .max("Invalid input")
        //     .required("Required"),
        //   website: Yup.string()
        //     // .max("Invalid input")
        //     .required("Required"),
        //  country: Yup.string()
        //     // .max("Invalid input")
        //     .required("Required"),

          
        // }),
    
      //   onSubmit: (values) =>{
      //     console.log(values)
      // }
    
})

let vendor ={
name,
logo,
website,
email,
contact_phone,
address,
country,
}
const HandleSubmit=(e)=>{
  e.preventDefault();
      axios
      .post(`http://172.16.33.73:8000/api/v1/vendor/create`, vendor, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response);
       
      })
      .catch(function (error) {
        console.log(error, "errorrrrrrrrrrrrrrr");
      });
}
// console.log(vendor,"formik.errors")
console.log(get.getvendor(),"data")

  
return (
    <div className='grid items-center justify-center '>
      <form 
      onSubmit={HandleSubmit}
      className='grid items-center justify-center rounded-[10px] border-solid border-[#1b9c85] border-[1px] w-[500px] h-[500px] '
      >
      <div className='m-[10px]'>
        <div className='m-[10px]'>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id="name"
            name="name"
            type="text"
            placeholder='Vendor Name'
            onChange={(e)=>setName(e.target.value)}
            onBlur={formik.handleBlur}
            // value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null}
        </div>
        <div className='m-[10px]'>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id="email"
            name="email"
            type="email"
            placeholder='example@example.com'
            onChange={(e)=>setEmail(e.target.value)}
            onBlur={formik.handleBlur}
            // value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
        </div>
        
        <div className='m-[10px]'>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id="country"
            name="country"
            type="text"
            placeholder='country'
            onChange={(e)=>setCountry(e.target.value)}
            onBlur={formik.handleBlur}
            // value={formik.values.country}
          />
          {formik.touched.country && formik.errors.country ? <p>{formik.errors.country}</p> : null}
        </div>
        {/* <div className='m-[10px]'>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id="state"
            name="state"
            type="text"
            placeholder='state'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.state}
          />
          {formik.touched.state && formik.errors.state ? <p>{formik.errors.state}</p> : null}
        </div>
         */}
        <div className='m-[10px]'>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id="address"
            name="address"
            type="text"
            placeholder='Address'
            onChange={(e)=>setAddress(e.target.value)}
            onBlur={formik.handleBlur}
            // value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address ? <p>{formik.errors.address}</p> : null}
        </div>
        <div className='m-[10px]'>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id="contact_phone"
            name="contact_phone"
            type="phoneNumber"
            placeholder='Contact Number'
            onChange={(e)=>setContact_phone(e.target.value)}
            onBlur={formik.handleBlur}
            // value={formik.values.contact_phone}
          />
          {formik.touched.contact_phone && formik.errors.contact_phone ? <p>{formik.errors.contact_phone}</p> : null}
        </div>
        <div className='m-[10px]'>
          <input
            className='border-[1px] border-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[350px]'
            id="website"
            name="website"
            type="text"
            placeholder='Website'
            onChange={(e)=>setWebsite(e.target.value)}
            onBlur={formik.handleBlur}
            // value={formik.values.website}
          />
          {formik.touched.website && formik.errors.website ? <p>{formik.errors.website}</p> : null}
        </div>
        <div className='m-[10px] flex gap-3 justify-center items-center'>
          <div className='text-sm border-[1px] border-[#1b9c85] p-2 w-[75px] rounded-[10px] text-nunito text-[#1b9c85] flex justify-center items-center'>
            Logo
          </div>
          <input
            className=' border-[1px] bg-[#1b9c85] p-2 rounded-[10px] font-nunito text-sm w-[260px]'
            id="logo"
            name="logo"
            type="text"
            placeholder='Add image'
            onChange={(e)=>setLogo(e.target.value)}
            onBlur={formik.handleBlur}
            // value={formik.values.logo}
          />
          {formik.touched.logo && formik.errors.logo ? <p>{formik.errors.logo}</p> : null}
        </div>
        
        <div className='flex items-center justify-center gap-[60px] my-[25px]'>
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
      </div>
      </form>

    </div>
  )
}
