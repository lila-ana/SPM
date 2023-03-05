import React from "react";
import SolutionDescription from "../../utils/SolutionDescription.json";

export default function SolutionJourney() {
  return (
    <div className="mb-[20px] ">
      <div className="text-[#1b9c85] font-semibold text-[28px] border-b-2 w-[300px] border-[#1b9c85] mb-[20px] mt-[40px]">
        Solution Journey
      </div>
      <div className="grid grid-cols-12 gap-[5px] ">
        {SolutionDescription?.map((items) => (
          <div class=" col-span-2 py-[8px] rounded-b-md  hover:opacity-25 ">
            <div class="flex items-center justify-center mt-[12px]">
              <a
                class="relative block w-full h-[75px]
                    bg-gray-900 group"
                href="##"
              >
                <div
                  class="absolute shadow-lg border-[1px] border-[#1b9c85] bg-[#fcfcfc] rounded-sm w-full h-[75px] text-nunito font-regular flex justify-center items-center tracking-wide inset-0
                             group-hover:opacity-50"
                >
                  {items.abbrevation}
                </div>
                <div class="relative py-4 px-3">
                  <div class="mt-2">
                    <div
                      class="transition-all transform
                                translate-y-8 opacity-0
                                group-hover:opacity-100
                                group-hover:translate-y-0"
                    >
                      <div class="">
                        <p class="text-white font-semibold text-[12px]">{items?.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
