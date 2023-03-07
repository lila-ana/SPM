import React from 'react'
import partnerImage from "../../Image/Screenshot (243).png"

export default function PartnerSST() {
  return (
    
    <div>
        <div className="px-[100px] mt-[40px]">
            <h1 className="mb-[30px] text-[#4E4E4F] font-semibold font-nunito text-[24px] border-b-2 w-[150px] border-[#1b9c85]">
             Partners
            </h1>
        </div>
        <div className='items center justify-center flex'>
            <div className='items-center inline-flex justify-center m-[10px] '>
                <img
                    alt='IE Business Partner'
                    src={partnerImage}
                    className='items-center justify-center w-[700px] h-[530px]'
                />
            </div>
        </div>
    </div>
  )
}
