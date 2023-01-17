import axios from 'axios';
import React from 'react'

export default function Logout() {
    axios
    .post(`${API_BASE_URL}user/logout`, login)
    .then((response) => {
      localStorage.setItem("accessToken", response?.data?.accessToken);
      window.location.replace("/login");
      console.log(response, "thi is response");
    })
    .catch((err) => {
      setMessage(err?.response?.data?.message?.message);

      console.log(err);
    });
};
    
 
    return (
    
    <div>

    </div>
  )
}
