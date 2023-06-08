import axios from 'axios';
import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { API_BASE_URL } from '../../../api/endPoint';

export default function Model_19Update() {
  
    const HandleDelete = (e, id) => {
        e.preventDefault();
        axios
          .delete(`${API_BASE_URL}client/${id}`, {
            headers: {
              "Content-Type": "application/json",
              //  accept:"application/json"
              authorization: "Bearer " + BearerToken
            },
    
          })
          .then(function (response) {
            console.log(response);
            
          })
          .catch(function (error) {
            console.log(error, "errorrrrrrrrrrrrrrr");
          });
      };
  
    return (
    <div>
        <div className="pt-[5px]">
            <button
                className="w-[15px]"
                onClick={(e) => HandleDelete(e, items?.id)}
                >
                <AiOutlineCloseCircle className="fill-white w-[20px] h-[20px]" />
            </button>
        </div>  
    </div>
  )
}
