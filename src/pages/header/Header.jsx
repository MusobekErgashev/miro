import React from 'react'
import logo from "../../assets/icons/logo.png"
import langIcon from "../../assets/icons/lang-header.png"

const Header = () => {
    return (
        <div className='px-[30px] py-5 flex justify-between items-center border-b border-b-[#F0F0F0]'>
            <ul className='flex items-center gap-[17px]'>
                <a href="#">
                    <li className='mb-2.5'>
                        <img src={logo} alt="" className='w-[88px]' />
                    </li>
                </a>

                <a href="#" className='text-[#050038] text-[15px]'>
                    <li>Product</li>
                </a>

                <a href="#" className='text-[#050038] text-[15px]'>
                    <li>Solutions</li>
                </a>

                <a href="#" className='text-[#050038] text-[15px]'>
                    <li>Resources</li>
                </a>

                <a href="#" className='text-[#050038] text-[15px]'>
                    <li>Enterprise</li>
                </a>

                <a href="#" className='text-[#050038] text-[15px]'>
                    <li>Pricing</li>
                </a>
            </ul>

            <ul className='flex gap-[17px] items-center'>
                <li className='flex gap-[7px] items-center text-[15px] text-[#050038]'>
                    <img src={langIcon} alt="" />
                    EN
                </li>

                <a href="#" className='text-[15px] text-[#050038]'>
                    <li>Contact Sales</li>
                </a>

                <a href="#" className='text-[15px] text-[#050038]'>
                    <li>Login</li>
                </a>

                <a href="" className='text-[15px] text-white bg-[#4262FF] px-[17px] py-2.5 rounded-full flex items-center cursor-pointer'>
                    <button className='cursor-pointer'>Sign up free →</button>
                </a>
            </ul>
        </div>
    )
}

export default Header