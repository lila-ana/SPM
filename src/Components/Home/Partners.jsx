import React, { Component } from "react";
import { render } from "react-dom";
import "../../style/style.css";

export default function Partner() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const checkNext = () => {
    const labels = document.querySelectorAll("#slider label");
    const nextIndex =
      selectedIndex === labels.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(nextIndex);
  };

  const check = (index) => setSelectedIndex(index);

  return (
    <div>
      <div className="px-[100px] mt-[40px]">
        <h1 className="mb-[30px] text-[#4E4E4F] font-semibold font-nunito text-[24px] border-b-2 w-[150px] border-[#1b9c85]">
          Partners
        </h1>
      </div>
      <div className="flex justify-center flex-wrap sm:-m-0 -mx-4 -mb-10 -mt-4">
        <div className="  md:w-1/4 py-32 md:mb-0 mb-6 flex flex-col text-center items-center">
          <div
            onClick={checkNext}
            className="w-[50px]  h-[50px] inline-flex items-center justify-center rounded-full bg-[#1b9c85] text-white mb-5 flex-shrink-0"
          >
            <button>{"<"}</button>
          </div>
        </div>
        <div className="bg-[#1b9c85] w-[300px] h-[300px] rounded-full shadow-xl shadow-[#bfbfbf] ml-5">
          <div className="md:w-2/4 md:mb-0 mb-6 flex flex-col text-center items-center ">
            <section
              id="slider"
              className="w-16 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0 "
            >
              <input
                type="radio"
                name="slider"
                id="s1"
                checked={selectedIndex === 0}
                onClick={() => check(0)}
              />
              <input
                type="radio"
                name="slider"
                id="s2"
                checked={selectedIndex === 1}
                onClick={() => check(1)}
              />
              <input
                type="radio"
                name="slider"
                id="s3"
                checked={selectedIndex === 2}
                onClick={() => check(2)}
              />
              <label htmlFor="s1" id="slide1">
                <img
                  className="fea"
                  src="https://picsum.photos/200/200"
                  style={{
                    height: "238px !important",
                    width: "100%",
                    marginTop: "48px",
                  }}
                />
              </label>
              <label htmlFor="s2" id="slide2">
                <img
                  className="fea"
                  src="https://picsum.photos/200/200"
                  style={{
                    height: "238px !important",
                    width: "100%",
                    marginTop: "48px",
                  }}
                />
              </label>
              <label htmlFor="s3" id="slide3">
                <img
                  className="fea"
                  src="https://picsum.photos/200/200"
                  style={{
                    height: "238px !important",
                    width: "100%",
                    marginTop: "48px",
                  }}
                />
              </label>
            </section>
          </div>
        </div>

        <div className="md:w-1/4 py-32 md:mb-0 mb-6 flex flex-col text-center items-center">
          <div
            onClick={checkNext}
            className="w-[50px]  h-[50px] inline-flex items-center justify-center rounded-full bg-[#1b9c85] text-white mb-5 flex-shrink-0"
          >
            <button>{">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
