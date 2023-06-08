import React, { useEffect, useState } from 'react'
import Model_19Create from '../../Components/CRUD/Create/Model_19Create';
import Model_19Get from '../../Components/CRUD/Get/Model_19Get';
import Model_19Update from '../../Components/CRUD/Update/Model_19Update';

export default function Model_19() {
  
return (
    <div>
       <Model_19Create/> 
       <Model_19Get/>
       {/* <Model_19Update/> */}
    </div>
  )
}
