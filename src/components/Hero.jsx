import React from 'react'
import styles from '../style'
import {robot, discount} from "../assets"
import GetStarted from "./GetStarted"

const Hero = () =>
  (
    <section className={`flex md:flex-row flex-col ${styles.padding}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:p-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-0 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className='w-[32px] h-[32]'/>

          <p className={`${styles.paragraph}`}>
            <span className="text-white">20%</span> Discount for {''}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
            <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
              The next <br className='sm:block hidden'/>
              <span className="text-gradient">Generation</span>{' '}
            </h1>

            <div className='ss:flex hidden mr-0 md:mr-4'>
                <GetStarted/>
            </div>
          </div>
          <h1 className=' w-full font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            Payment Method
          </h1>
          <p className={` ${styles.paragraph} max-w-[470px] mt-5`}>Our team of experts uses a methodology to indentify the credit card most likely to fit our needs. We examine annual percentage rates and annual fees</p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>

        <img src={robot} alt=""  className='w-full h-full relative z-[5]'/>
        <div className=' absolute w-[40%] h-[35%] z-[0] top-0 pink__gradient'/>
        <div className=' absolute w-[80%] h-[80%] z-[1] rounded-full bottom-40 white__gradient'/>
        <div className=' absolute w-[50%] h-[50%] z-[0] right-20 bottom-20 blue__gradient'/>

      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  )

export default Hero