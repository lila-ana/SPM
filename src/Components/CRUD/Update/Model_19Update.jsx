import React, { useState } from 'react'

export default function Model_19Update(props) {
  
    const [datas, setDatas] = useState ();
    const [users, setUsers] = useState();
    const [Id, setId] = useState();
    const [itemType, setItemType] = useState();
    const [model, setModel] = useState();
    const [serial, setSerial] = useState();
    const [date, setDate] = useState();
    const [quantity, setQuantity] = useState();
    const [unitPrice, setUnitPrice] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const [remark, setRemark] = useState();
    const [fullName, setFullName] = useState();
    const [recipientName, setRecipientName] = useState();
    
    function HandleClose() {
        props.modal(false);
      }
    const form = new FormData();
        form.append("Id", Id);
        form.append("itemType", itemType);
        form.append("model", model);
        form.append("serial", serial);
        form.append("date", date);
        form.append("quantity", quantity);
        form.append("unitPrice", unitPrice);
        form.append("totalPrice", totalPrice);

      const HandleSubmit = (e) => {
        e.preventDefault();
        axios
          .patch(`${API_BASE_URL}model_19/${props?.data?.id}`, form, {
            headers: {
              // "Content-Type": "multipart/form-data",
              accept: "multipart/form-data",
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
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 w-[100px]">
                    No.
                </th>
                <th scope="col" class="px-6 py-3 w-[250px]">
                    Detailed description of articles or property                        
                </th>
                <th scope="col" class="px-6 py-3 w-[150px]">
                    Model                        
                </th>
                <th scope="col" class="px-6 py-3 w-[120px]">
                    Serial                        
                </th>
                <th scope="col" class="px-6 py-3 w-[80px] ">
                    Quantity
                </th>
                <th scope="col" class="px-6 py-3 w-[120px] ">
                    Unit Price
                </th>
                <th scope="col" class="px-6 py-3 w-[120px] ">
                    Total Price
                </th>
                <th scope="col" class="px-6 py-3 w-[120px]">
                    Remark
                </th>
                <th scope="col" class="px-6 py-3 w-[120px] font-extrabold">
                    Update
                </th>
            </tr>
        </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {props?.data?.id}
                            {/* {item?.id} */}
                        </td>
                        <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {props?.data?.itemType}
                            {/* {item?.itemType} */}
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {props?.data?.model}
                            {/* {item?.model} */}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {props?.data?.serial}
                           {/* {item?.serial} */}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {/* {item?.quantity} */}
                            {props?.data?.quantity}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {props?.data?.unitPrice}
                           {/* {item?.unitPrice} */}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {props?.data?.totalPrice}
                            {/* {item?.totalPrice} */}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        <button 
                            type="submit" 
                            class="mt-[10px] p-[5px] text-white bg-[#000000] hover:bg-[#AD8317] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              Update
                        </button>
                        </th>
                    
                    </tr>
                </tbody>
            </table>
    </div>
  )
}


// import React, { useState } from 'react';

// const Model_19Update = ({ elements }) => {
//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Description</th>
//         </tr>
//       </thead>
//       <tbody>
//         {elements.map((element, index) => (
//           <tr key={index}>
//             <td>{element.name}</td>
//             <td>{element.description}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// const ElementForm = ({ onAddElement }) => {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newElement = {
//       name,
//       description,
//     };
//     onAddElement(newElement);
//     setName('');
//     setDescription('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Description"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <button type="submit">Add</button>
//     </form>
//   );
// };

// const App = () => {
//   const [elements, setElements] = useState([]);

//   const handleAddElement = (newElement) => {
//     setElements([...elements, newElement]);
//   };

//   return (
//     <div>
//       <ElementForm onAddElement={handleAddElement} />
//       <TablePreview elements={elements} />
//     </div>
//   );
// };

// export default App;
