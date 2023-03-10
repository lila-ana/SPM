import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';

export default function RepresentativePop(props) {

function HandleClose() {
    props.modal(false);
  }
  return (
    <div
      className="fixed pin z-50 overflow-auto bg-smoke-light flex"
      onClick={HandleClose}
    >
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-[330px] sm:max-w-lg">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-[10px]">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    onClick={HandleClose}
                    className="text-lg font-medium leading-6 text-gray-900 flex justify-end"
                    id="modal-title"
                  >
                    <AiFillCloseCircle className="flex  fill-[#1b9c85] w-[25px] h-[25px] rounded-full" />
                  </h3>
                  <div className="mt-2">
                    
                    <div className="text-[15px] m-[13px] text-gray-500 border-[#1b9c85] border-[1px] font-light flex items-center justify-center w-[250px] rounded-[5px] h-[30px]">
                      {props?.data?.name}
                    </div>
                    <div className="text-[15px] m-[13px] text-gray-500 border-[#1b9c85] border-[1px] font-light flex items-center justify-center w-[250px] rounded-[5px] h-[30px]">
                      {props?.data?.email}
                    </div>
                    <div className="text-[15px] m-[13px] text-gray-500 border-[#1b9c85] border-[1px] font-light flex items-center justify-center w-[250px] rounded-[5px] h-[30px]">
                      {props?.data?.address}
                    </div>
                    <div className="text-[15px] m-[13px] text-gray-500 border-[#1b9c85] border-[1px] font-light flex items-center justify-center w-[250px] rounded-[5px] h-[30px]">
                      {props?.data?.contact_1}
                    </div>
                    <div className="text-[15px] m-[13px] text-gray-500 border-[#1b9c85] border-[1px] font-light flex items-center justify-center w-[250px] rounded-[5px] h-[30px]">
                      {props?.data?.contact_2}
                    </div>
                    <div className="text-[15px] m-[13px] text-gray-500 border-[#1b9c85] border-[1px] font-light flex items-center justify-center w-[250px] rounded-[5px] h-[30px]">
                      {props?.data?.position}
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
