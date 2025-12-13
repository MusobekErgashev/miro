import React from 'react'
import twitter from "../../assets/icons/twitter.png"
import facebook from "../../assets/icons/facebook.png"
import instagram from "../../assets/icons/instagram.png"
import linkedin from "../../assets/icons/linkedin.png"
import youtube from "../../assets/icons/you-tube.png"
import googleplay from "../../assets/icons/google-play.png"
import appstore from "../../assets/icons/apple-store.png"
import footerlogo from "../../assets/icons/footer-logo.png"

const Footer = () => {
    return (
        <div className='bg-[#050038] px-[30px] pt-10 text-white flex flex-col gap-20'>
            <div className='grid grid-cols-5'>
                <ul className='flex flex-col gap-[7px] justify-between'>
                    <h4 className='mb-5 text-[18px] font-bold'>Product</h4>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>   
                </ul>
                <ul className='flex flex-col gap-[7px] justify-between'>
                    <h4 className='mb-5 text-[18px] font-bold'>Product</h4>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>   
                </ul>
                <ul className='flex flex-col gap-[7px] justify-between'>
                    <h4 className='mb-5 text-[18px] font-bold'>Product</h4>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>   
                </ul>
                <ul className='flex flex-col gap-[7px] justify-between'>
                    <h4 className='mb-5 text-[18px] font-bold'>Product</h4>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>   
                </ul>
                <ul className='flex flex-col gap-[7px] justify-between'>
                    <h4 className='mb-5 text-[18px] font-bold'>Product</h4>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>
                    <li className='text-[16px]'>
                        <a href="">Online whiteboard</a>
                    </li>   
                </ul>
            </div>

            <div className='flex justify-between border-t border-t-[#9B99AF] py-[55px]'>
                <ul className='flex gap-6 items-center'>
                    <a href="">
                        <li>
                            <img src={twitter} alt="" />
                        </li>
                    </a>
                    <a href="">
                        <li>
                            <img src={facebook} alt="" />
                        </li>
                    </a>
                    <a href="">
                        <li>
                            <img src={linkedin} alt="" />
                        </li>
                    </a>
                    <a href="">
                        <li>
                            <img src={instagram} alt="" />
                        </li>
                    </a>
                    <a href="">
                        <li>
                            <img src={youtube} alt="" />
                        </li>
                    </a>
                    <a href="" className='text-[14px]'>
                        <li>© 2022 Miro</li>
                    </a>
                    <a href="" className='text-[14px]'>
                        <li>Terms of Service</li>
                    </a>
                    <a href="" className='text-[14px]'>
                        <li>Privacy Policy</li>
                    </a>
                    <a href="" className='text-[14px]'>
                        <li>Manage Cookies</li>
                    </a>
                </ul>

                <ul className='flex gap-3'>
                    <a href="">
                        <li>
                            <img src={googleplay} alt="" />
                        </li>
                    </a>
                    <a href="">
                        <li>
                            <img src={appstore} alt="" />
                        </li>
                    </a>
                    <a href="">
                        <li>
                            <img src={footerlogo} alt="" />
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default Footer