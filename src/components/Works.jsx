import React from 'react'
import styles from '../style'
import { circle, link } from "../assets";

const Works = () => ( 

    <section id="works" className={`flex md:flex-row flex-col ${styles.paddingY}`} >
    <div className={`flex-0 ${styles.flexStart} flex-col xl:px-0 sm:px-0 px-0`}>
        <div className="flex flex-row justify-between items-center w-full">
            <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[150.8px] leading-[20px] w-full content-center ">
            How It Works.
            </h2>
        </div>

        <div className="w-full md:mt-0 mt-6 px-6">
            <ul class="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] list-disc">
                <li>Add our name in the CC section of your email</li>
                 {/* Make Language word as text link which send you to documentation page */}
                <li>Write in our easy-to-use <span className='font-bold cursor-pointer '>language <img src={link} className="w-[20px] h-[20px] inline"/></span> to generate your document</li>
                <li>Click "Send" on your email</li>
                <li>Your generated document will be automatically saved and organized in your Google Drive</li>
                
            </ul>
            </div>
        </div>
    
    
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={circle} alt="circle" className="w-[100%] h-[100%] relative z-[5]" />
    </div>

     
       

    </section>
)


export default Works