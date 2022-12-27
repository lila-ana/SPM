import React from 'react'
// import Layout from '../../layout'
import meried from "../../Image/meried.jpg"

export default function FoundersStatement() {    
    return (   
   
        <>
        <div className='text-[#1b9c85]'>          
          <div className='flex flex-row gap-[50px] '>
            <div className='flex flex-col gap-[20px] '>
                <div>
                    <img
                        alt='Meried giving speech'
                        src= {meried}
                        className='w-[2000px] h-[350px] '
                    />
                </div>
                <div className='border-l-4 border-[#1b9c85] grid gap-1 pl-[5px]'>
                    <p className=' text-bold  text-[20px]'>Mr. Meried Bekele</p>
                    <p className=' text-light text-[16px]'>CEO</p>
                </div>
            </div>
            <div className='p-[5px] m-[10px] font-nunito '>
                <p className='pl-[8px] text-semibold border-l-4 h-[40px] border-[#1b9c85] text-[24px] items-center justify-center'>Founder's Statement</p>
                <p className='pt-[15px]'>"Dream  Big, Start Small" was my favorite quote since my lasy year in college. 
                    Now, I have a second one to add in my top list of wise sayings "Good is the enemy of Great" by Jim Collins.
                </p><br></br>
                <p>
                    IE Networks is a company being built on a foundation to last for long and great in what is does we don't settle 
                    for nothing less than excellence. Only best perfromes who are self-mptivated and passionate about thier job stay 
                    with the company.
                </p><br></br>
                <p>
                    Our solutions are the best in the market satisification of clients with our commitment to serviec excellence is what drives us to do better everyday. 
                    We are not in the business of making quick money by chasing obvious opportunities and shor cuts. In fact, we already chose to win though difficult 
                    situations with hard work, competence, consistency and integrity. We lead the markey by creating discipline culture tha will have much bigger effect 
                    on the work ethics of our society and overall technological development of Ethiopia in the medium to long term.
                </p><br></br>
            </div>
          </div>
          
        </div>
        </>
        
   
  )
}
