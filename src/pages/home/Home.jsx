import React from 'react'
import star from '../../assets/icons/star.png'
import halfstar from '../../assets/icons/star-half.png'
import getAppIcon from '../../assets/icons/get-app-icon.png'
import getApp from '../../assets/icons/getapp.png'
import capterra from '../../assets/icons/capterra.png'
import section1 from '../../assets/images/section-1.png'
import walmart from "../../assets/icons/Walmart.png"
import cisco from "../../assets/icons/cisco.png"
import volvo from "../../assets/icons/Volvo.png"
import deloitte from "../../assets/icons/deloitte.png"
import okta from "../../assets/icons/okta.png"
import section4 from '../../assets/images/section-4.png'

const Home = () => {
  return (
    <div>
      {/* ----- section 1 ------ */}

      <div className="flex py-[60px] px-[160px] gap-[40px] justify-between items-center">
        <div className="flex flex-col gap-[16px] w-full max-w-[440px]">
          <h1 className='text-[48px] font-bold text-[#050038] leading-[56px]'>Take ideas from better to best</h1>
          <p className='text-[18px] text-[#050038] opacity-72 leading-[24px]'>Miro is your team's visual platform to connect, collaborate, and create — together.</p>

          <form action="" className='flex flex-col gap-[10px]'>
            <input type="email" placeholder='Enter your work email' className='px-[20px] py-[8px] border border-[#9B99AF] rounded-full w-full outline-none' />
            <input type="submit" value="Sign up free →" className='px-[20px] py-[8px] text-white cursor-pointer rounded-full bg-[#4262FF] w-full outline-none' />
          </form>

          <div className="bg-[#F5F5F7] flex p-[15px] items-center justify-between gap-[18px] w-max">
            <div>
              <div className="flex gap-[5px]">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={halfstar} alt="" />
              </div>

              <p className="text-[#050038] text-[10px]">Based on 5149+ reviews:</p>
            </div>

            <div className='flex gap-[14px] items-center'>
              <img src={getAppIcon} alt="" className='w-max h-max' />
              <img src={getApp} alt="" className='w-max h-max' />
              <img src={capterra} alt="" className='w-max h-max' />
            </div>
          </div>
        </div>

        <div className="">
          <img src={section1} alt="" />
        </div>
      </div>

      {/* ----- section 2 ------ */}

      <div className="py-[60px] px-[160px] flex flex-col items-center gap-[44px]">
        <h2 className="text-[#050038] text-[18px] opacity-60">Trusted by 45M+ users</h2>

        <ul className="flex items-center w-full justify-between">
          <a href="" className='w-max'>
            <li>
              <img src={walmart} alt="" />
            </li>
          </a>
          <a href="" className='w-max'>
            <li>
              <img src={cisco} alt="" />
            </li>
          </a>
          <a href="" className='w-max'>
            <li>
              <img src={volvo} alt="" />
            </li>
          </a>
          <a href="" className='w-max'>
            <li>
              <img src={deloitte} alt="" />
            </li>
          </a>
          <a href="" className='w-max'>
            <li>
              <img src={okta} alt="" />
            </li>
          </a>
        </ul>
      </div>

      {/* ----- section 3 ------ */}

      <div className="py-[60px] px-[160px] flex flex-col gap-[50px] items-center">
        <h1 className="text-[48px] font-bold text-[#050038] max-w-[480px] leading-[56px] text-center">
          Collaborate without
          constraints</h1>

        <div className="grid grid-cols-3 w-full gap-[20px]">
          <div className="flex flex-col gap-[26px]">
            <h3 className="text-[#050038] font-bold text-[24px]">Free forever</h3>

            <p className="text-[#050038] opacity-60">Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our <a href="" className='text-[#4262FF]'>pricing plans</a> for more features.</p>
          </div>
          <div className="flex flex-col gap-[26px]">
            <h3 className="text-[#050038] font-bold text-[24px]">Free forever</h3>

            <p className="text-[#050038] opacity-60">Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our <a href="" className='text-[#4262FF]'>pricing plans</a> for more features.</p>
          </div>
          <div className="flex flex-col gap-[26px]">
            <h3 className="text-[#050038] font-bold text-[24px]">Free forever</h3>

            <p className="text-[#050038] opacity-60">Our free plan gives you unlimited team members, 3 boards, and 300+ expert-made templates. Signing up with your work email lets you bring in your team faster. See our <a href="" className='text-[#4262FF]'>pricing plans</a> for more features.</p>
          </div>
        </div>

        <a href="" className='text-[15px] text-white bg-[#4262FF] px-[17px] py-[10px] mt-[15px] w-max rounded-full flex items-center cursor-pointer'>
          <button className='cursor-pointer'>Sign up free →</button>
        </a>
      </div>

      {/* ----- section 4 ------ */}

      <div className="px-[160px] flex justify-between items-center">
        <div className="max-w-[453px] flex flex-col gap-[20px]">
          <h1 className="text-[48px] font-bold text-[#050038] max-w-[480px] leading-[56px]">Work together, wherever you work</h1>
          <p className="text-[#050038] opacity-60">In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>

          <a href="" className='text-[#4262FF] underline'>Learn more →</a>
        </div>

        <div className="">
          <img src={section4} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home