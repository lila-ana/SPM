import React, { useState } from 'react'
import axios from 'axios';
import { API_BASE_URL } from '../../api/endPoint';
import { useNavigate } from 'react-router-dom';
import Header from '../../header/header';
import Footer from '../../Components/Footer/footer';

export default function Registration() {
   
    const BearerToken = localStorage.getItem("accessToken");
    
    const navigate = useNavigate ();

    const [fullName, setFullName]=useState("")
    const [email, setEmail]= useState("")
    const [department, setDepartment]=useState("")
    const [administrativeRole, setAdministrativeRole]=useState("")
    const [role, setRole]=useState("")
    const [userType, setUserType] = useState('')
    const [IdNo, setIdNo]=useState("")
    const [password, setPassword]=useState("")
    const [confirmPassword, setConfirmPassword]=useState("")
    const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
      const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
      };
    
      const passwordsMatch = () => {
        return password === confirmPassword;
      };

      const handleConfirmPasswordBlur = () => {
        setConfirmPasswordTouched(true);
      };

    const handleUserTypeChange = (e) => {
        const selectedUserType = e.target.value;
        console.log("--->",selectedUserType)
        setUserType(selectedUserType);
           
        let registration={
            fullName:fullName,
            email:email,
            department:department,
            administrativeRole:administrativeRole,
            IdNo:IdNo,
            role: role,
            password:password,
            isAdmin: userType,
            }
            console.log(registration, "input data")

            axios
            .post(`${API_BASE_URL}user/create`, registration, {
              headers: {
                "Content-Type": "application/json",
                accept: "application/json",
                authorization: "Bearer " + BearerToken
            },
            })
            .then((response) => {
                // window.location.replace("/login");    
                navigate("/login");            
                console.log(response, "Change location to login");
            })
            .catch(function (error) {
              console.log(error, "errorrrrrrrrrrrrrrr");
            });
                
            
    };

    // const HandleSubmit=(e)=>{
    //     e.preventDefault();
    //         axios
    //         .post(`${API_BASE_URL}user/create`, registration, {
    //           headers: {
    //             // "Content-Type": "application/json",
    //             accept: "application/json",
    //             authorization: "Bearer " + BearerToken
    //         },
    //         })
    //         .then((response) => {
    //             // window.location.replace("/login");    
    //             navigate("/login");            
    //             console.log(response, "Change location to login");
    //         })
    //         .catch(function (error) {
    //           console.log(error, "errorrrrrrrrrrrrrrr");
    //         });
    //   }
      
return (
    <div>
    <div className="relative flex flex-col justify-center items-center overflow-hidden ">
    <Header/>
        <form
            onSubmit={handleUserTypeChange}
            className='grid items-center justify-center w-[500px] my-[40px] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md shadow-[#faf2c0] dark:bg-gray-800 dark:border-gray-700'
        >
           <div className=''>          
           <div className="grid md:grid-cols-2 md:gap-6 mt-[20px]">
            <div className="relative z-0 w-full mb-6 group ">
                <input 
                    type="text" 
                    name="fullName" 
                    id="fullName" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    onChange={(e)=>setFullName(e.target.value)}
                    required />
                <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full name</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
            <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    onChange={(e)=>setEmail(e.target.value)}
                    required />
            <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>  
        </div>      
        <div className="grid md:grid-cols-2 md:gap-6 mt-[20px]">
        <div className="relative z-0 w-full mb-6 group">
                <input 
                    type="text" 
                    name="department" 
                    id="department" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" "
                    onChange={(e)=>setDepartment(e.target.value)}
                    required />
                <label htmlFor="department" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Department</label>
            </div>
        <div className="relative z-0 w-full mb-6 group">
                <input 
                    type="text" 
                    name="administrativeRole" 
                    id="administrativeRole" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" "
                    onChange={(e)=>setAdministrativeRole(e.target.value)}
                    required />
                <label htmlFor="administrativeRole" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Administrative Role</label>
            </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
                <input 
                    type="text" 
                    name="idNo" 
                    id="idNo" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    onChange={(e)=>setIdNo(e.target.value)}
                    required />
                <label htmlFor="idNo" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ID No.</label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
                <select value={userType} onChange={handleUserTypeChange} className="bg-gray-50 border text-gray-500 border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Choose role</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                    <option value="purchaser">Purchaser</option>
                    <option value="auditor">Auditor</option>
                    <option value="director">Director</option>
                </select>
            </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6 mb-[20px]">
            <div className="relative z-0 w-full group">
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                    placeholder=" " 
                    value={password} 
                    onChange={handlePasswordChange}
                    required/> 
            <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        </div>
        <div className="relative z-0 w-full group">
            <input 
                type="password" 
                name="confirmPassword" 
                id="confirmPassword" 
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                placeholder=" " 
                value={confirmPassword} 
                onBlur={handleConfirmPasswordBlur}
                onChange={handleConfirmPasswordChange}
                required />
            <label htmlFor="confirmPassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
        </div>
                {passwordsMatch() ? (
                <p></p>
            ) : (
                <p className='text-[10px] font-normal text-[#d99000]'>Passwords do not match</p>
            )}
        </div>
    <div className='flex items-center justify-center gap-[60px] mb-[20px]'>
        <button 
            // onClick={handleClick}
            type="submit" 
            className="text-white bg-[#AD8317] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Submit
        </button>
        <button 
            type="reset" 
            className="text-white bg-[#AD8317] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Cancel
        </button>
    </div>

</div>
           
          
        </form>
        </div>
        <Footer/>
    </div>
  )
}
