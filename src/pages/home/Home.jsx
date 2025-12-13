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
import section5 from '../../assets/images/section-5.png'
import section7 from '../../assets/images/section-7.png'
import section8 from '../../assets/images/section-8.png'
import done from '../../assets/icons/done.png'
import loved1 from '../../assets/icons/loved-1.png'

const Home = () => {
  return (
    <div>
      {/* ----- section 1 ------ */}

      <div className="flex py-[60px] px-40 gap-10 justify-between items-center">
        <div className="flex flex-col gap-4 w-full max-w-[440px]">
          <h1 className='text-[48px] font-bold text-[#050038] leading-14'>Take ideas from better to best</h1>
          <p className='text-[18px] text-[#050038] opacity-72 leading-6'>Miro is your team's visual platform to connect, collaborate, and create — together.</p>

          <form action="" className='flex flex-col gap-2.5'>
            <input type="email" placeholder='Enter your work email' className='px-5 py-2 border border-[#9B99AF] rounded-full w-full outline-none' />
            <input type="submit" value="Sign up free →" className='px-5 py-2 text-white cursor-pointer rounded-full bg-[#4262FF] w-full outline-none' />
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

            <div className='flex gap-3.5 items-center'>
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

      <div className="py-[60px] px-40 flex flex-col items-center gap-11">
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

      <div className="py-[60px] px-40 flex flex-col gap-[50px] items-center">
        <h1 className="text-[48px] font-bold text-[#050038] max-w-[480px] leading-14 text-center">
          Collaborate without
          constraints</h1>

        <div className="grid grid-cols-3 w-full gap-5">
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

        <a href="" className='text-[15px] text-white bg-[#4262FF] px-[17px] py-2.5 mt-[15px] w-max rounded-full flex items-center cursor-pointer'>
          <button className='cursor-pointer'>Sign up free →</button>
        </a>
      </div>

      {/* ----- section 4 ------ */}

      <div className="px-40 flex justify-between items-center">
        <div className="max-w-[453px] flex flex-col gap-5">
          <h1 className="text-[48px] font-bold text-[#050038] max-w-[480px] leading-14">Work together, wherever you work</h1>
          <p className="text-[#050038] opacity-60">In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are.</p>

          <a href="" className='text-[#4262FF] underline'>Learn more →</a>
        </div>

        <div className="">
          <img src={section4} alt="" />
        </div>
      </div>

      {/* ----- section 5 ------ */}

      <div className="px-40 py-[50px] flex justify-between items-center">
        <div className="">
          <img src={section5} alt="" />
        </div>

        <div className="max-w-[453px] flex flex-col gap-5">
          <h1 className="text-[48px] font-bold text-[#050038] max-w-[480px] leading-14">Connect
            your tools,
            close your tabs</h1>
          <p className="text-[#050038] opacity-60">Whether you want to edit your Google Docs, resolve Jira issues, or collaborate over Zoom, Miro has 100+ integrations with tools you already use and love.</p>

          <a href="" className='text-[#4262FF] underline w-max'>Learn more →</a>
        </div>
      </div>

      {/* ----- section 7 ------ */}

      <div className="px-40 flex flex-col gap-8">
        <h1 className="text-[48px] font-bold text-[#050038] leading-14">Built for the way you work</h1>

        <ul className="flex gap-2">
          <li className='text-[#050038] px-4 py-3 cursor-pointer border border-[#F2F2F2] rounded-full'>
            Brainstorming
          </li>
          <li className='text-[#050038] px-4 py-3 cursor-pointer border border-[#F2F2F2] rounded-full'>
            Brainstorming
          </li>
          <li className='text-[#050038] px-4 py-3 cursor-pointer border border-[#F2F2F2] rounded-full'>
            Brainstorming
          </li>
          <li className='text-[#050038] px-4 py-3 cursor-pointer border border-[#F2F2F2] rounded-full'>
            Brainstorming
          </li>
        </ul>

        <div className="flex gap-10 justify-between">
          <div className="max-w-[400px] flex flex-col gap-7 mt-5">
            <h4 className="text-[18px] text-[#050038]">Brainstorming</h4>

            <p className="text-[#050038] opacity-60">Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.</p>

            <a href="" className='text-[#4262FF] underline w-max'>Learn more →</a>
          </div>
          <div className="">
            <img src={section7} alt="" />
          </div>
        </div>
      </div>

      {/* ----- section 8 ------ */}

      <div className="px-40 py-15 flex flex-col gap-8">
        <h1 className="text-[48px] font-bold text-[#050038] leading-14">Built for all kinds of teams</h1>

        <ul className="flex gap-2">
          <li className='text-[#050038] px-4 py-3 cursor-pointer border border-[#F2F2F2] rounded-full'>
            UX & Design
          </li>
          <li className='text-[#050038] px-4 py-3 cursor-pointer border border-[#F2F2F2] rounded-full'>
            UX & Design
          </li>
          <li className='text-[#050038] px-4 py-3 cursor-pointer border border-[#F2F2F2] rounded-full'>
            UX & Design
          </li>
          <li className='text-[#050038] px-4 py-3 cursor-pointer border border-[#F2F2F2] rounded-full'>
            UX & Design
          </li>
        </ul>

        <div className="flex gap-10 justify-between">
          <div className="max-w-[400px] flex flex-col gap-8 mt-8">
            <div className="flex flex-col gap-4">
              <span className="flex gap-3.5 items-center">
                <img src={done} alt="" />
                <p className="text-[18px] text-[#050038] opacity-60">Build low-fi wireframes</p>
              </span>
              <span className="flex gap-3.5 items-center">
                <img src={done} alt="" />
                <p className="text-[18px] text-[#050038] opacity-60">Involve stakeholders in the design processs</p>
              </span>
              <span className="flex gap-3.5 items-center">
                <img src={done} alt="" />
                <p className="text-[18px] text-[#050038] opacity-60">Run engaging design workshops</p>
              </span>
            </div>

            <a href="" className='text-[#4262FF] underline w-max'>Learn more →</a>
          </div>
          <div className="">
            <img src={section8} alt="" />
          </div>
        </div>
      </div>

      {/* ----- section 9 ------ */}

      <div className="bg-[#FFD02F] px-40 py-30 flex flex-col gap-30 items-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-[48px] font-bold text-[#050038] leading-14 max-w-130 text-center">Why companies large and small trust Miro</h1>
          <a href="" className='text-[#050038] text-[18px] text-center underline'>Contact Sales to request a demo</a>
        </div>

        <ul className="grid grid-cols-3 grid-rows-2 gap-8 justify-between w-full">
          <li className="flex flex-col gap-4 items-center">
            <h1 className="text-[62px] font-black text-[#050038]">ISO</h1>
            <p className="text-[18px] text-[#050038] max-w-[332px] text-center">ISO-27001 enterprise-grade security compliant</p>
          </li>
          <li className="flex flex-col gap-4 items-center">
            <h1 className="text-[62px] font-black text-[#050038]">#1</h1>
            <p className="text-[18px] text-[#050038] max-w-[332px] text-center">Visual Collaboration Platform on G2</p>
          </li>
          <li className="flex flex-col gap-4 items-center">
            <h1 className="text-[62px] font-black text-[#050038]">99%</h1>
            <p className="text-[18px] text-[#050038] max-w-[332px] text-center">of the Fortune 100 are customers</p>
          </li>
          <li className="flex flex-col gap-4 items-center">
            <h1 className="text-[62px] font-black text-[#050038]">1,000+</h1>
            <p className="text-[18px] text-[#050038] max-w-[332px] text-center">community- and expert-built templates</p>
          </li>
          <li className="flex flex-col gap-4 items-center">
            <h1 className="text-[62px] font-black text-[#050038]">45M+</h1>
            <p className="text-[18px] text-[#050038] max-w-[332px] text-center">users around the world</p>
          </li>
          <li className="flex flex-col gap-4 items-center">
            <h1 className="text-[62px] font-black text-[#050038]">100+</h1>
            <p className="text-[18px] text-[#050038] max-w-[332px] text-center">integrations with technology partners</p>
          </li>
        </ul>
      </div>

      {/* ----- section 10 ----- */}

      <div className="px-40 w-full flex flex-col py-20 items-center gap-6">
        <h1 className="text-[48px] font-bold text-[#050038] leading-14 max-w-130 text-center">Loved by the world's best teams</h1>
        <a href="" className="text-[#4262FF] w-max px-7 py-2 border rounded-full">See all customer stories →</a>

        <ul className="grid grid-cols-3 gap-14 mt-4">
          <li className="flex flex-col gap-4">
            <h2 className="text-[48px] font-bold text-[#050038]">vmware</h2>

            <p className="text-4.5 text-[#050038] opacity-60">“When the pandemic hit, those of us who thrive on in-person collaboration were worried that our creativity and productivity would suffer. Miro was the perfect tool to help us with collaboration, whiteboarding, and retrospectives while remote.”</p>

            <div className="flex gap-4 items-center mt-5">
              <img src={loved1} alt="" />
              <div className="flex flex-col">
                <p className="text-3 text-[#050038] opacity-60 leading-5">Roxanne Mustafa</p>
                <p className="text-3 text-[#050038] opacity-60 leading-5">Design Team Lead at VMware</p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* ----- section 11 ----- */}

      <div className="mx-40 my-20 bg-[#050038] rounded-2xl py-28 px-5 flex flex-col items-center gap-2">
        <h1 className="text-[48px] font-bold text-white leading-14 max-w-130 text-center">Join 45M+ users today</h1>
        <p className="text-4.5 text-white opacity-60">Start for free — upgrade anytime.</p>
        <a href="" className="text-4.5 text-white opacity-60 underline">Joining as an organization? Contact Sales</a>

        <a href="" className='text-[15px] mt-10 text-white bg-[#4262FF] px-[17px] py-2.5 rounded-full flex items-center cursor-pointer'>
          <button className='cursor-pointer'>Sign up free →</button>
        </a>
      </div>
    </div>
  )
}

export default Home