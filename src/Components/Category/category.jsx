import React, { useState } from 'react'

export default function Category() {
  
  const [category, SetCategory] = useState()

let group = [
    categoryName,
]

  const HandleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${API_BASE_URL}category/create`, group, {
        headers: {
          // accept: "multipart/form-data",
          accept: "application/json",
          authorization: "Bearer " + BearerToken
        },
      })
      .then(function (response) {
        console.log(response);
        HandleClose();
      })
      .catch(function (error) {
        console.log(error, "errorrrrrrrrrrrrrrr");
      });
  };

    return (
    <div>

    </div>
  )
}

