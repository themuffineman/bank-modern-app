import {logo} from '../assets'
import styles from '../style'
import { footerLinks, socialMedia } from '../constants'
const Footer = () => 
  (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col m-8 w-full`}>
        <div className='flex flex-1 flex-col justify-start mr-10'>
          <img src={logo} alt="logo" className='w-[266px] h-[72px] object-contain'/>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make payments reliable and safe</p>
        </div>
        <div className='flex-[1.5] flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((footerlink)=>(
            <div key={footerlink.id} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-poppins font-semibold text-[18px] leading-[27px] text-white mb-4'>
                {footerlink.title}
              </h4>
              <ul>
                {footerlink.links.map((link,index)=>(
                  <li key={link.name} className={`${index !== footerlink.links.length-1 ? "mb-4" : "mb-0"} font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>2021 HooBank. All rights reserved</p>
        <div className='flex flex-row md:mt-0 mt-6'>
            {socialMedia.map((icon, index)=>(
              <img src={icon.icon} key={icon.id} alt={icon.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== icon.length-1 ? "mr-6" : "mr-0"}`}/>
            ))}
        </div>
      </div>
    </section>
  )


export default Footer