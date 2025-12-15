import React from 'react'
import twitter from "../../assets/icons/twitter.png"
import facebook from "../../assets/icons/facebook.png"
import instagram from "../../assets/icons/instagram.png"
import linkedin from "../../assets/icons/linkedin.png"
import youtube from "../../assets/icons/you-tube.png"
import googleplay from "../../assets/icons/google-play.png"
import appstore from "../../assets/icons/apple-store.png"
import footerlogo from "../../assets/icons/footer-logo.png"
import { footerLinks } from '../../../db'

const Footer = () => {
    const product = footerLinks.filter(item => item.title === "Product");
    const solution = footerLinks.filter(item => item.title === "Solutions");
    const resource = footerLinks.filter(item => item.title === "Resources");
    const company = footerLinks.filter(item => item.title === "Company");
    const plan = footerLinks.filter(item => item.title === "Plans and Pricing");

    return (
        <div className='bg-[#050038] px-[30px] pt-10 text-white flex flex-col gap-20'>
            <div className='grid grid-cols-5'>
                <ul className='flex flex-col gap-[7px]'>
                    <h4 className='mb-5 text-[18px] font-bold'>{product[0].title}</h4>
                    {
                        product.map((item) => {
                            return (
                                <li key={item.id} className='text-[16px]'>
                                    <a href="">{item.linkName}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className='flex flex-col gap-[7px]'>
                    <h4 className='mb-5 text-[18px] font-bold'>{solution[0].title}</h4>
                    {
                        solution.map((item) => {
                            return (
                                <li key={item.id} className='text-[16px]'>
                                    <a href="">{item.linkName}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className='flex flex-col gap-[7px]'>
                    <h4 className='mb-5 text-[18px] font-bold'>{resource[0].title}</h4>
                    {
                        resource.map((item) => {
                            return (
                                <li key={item.id} className='text-[16px]'>
                                    <a href="">{item.linkName}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className='flex flex-col gap-[7px]'>
                    <h4 className='mb-5 text-[18px] font-bold'>{company[0].title}</h4>
                    {
                        company.map((item) => {
                            return (
                                <li key={item.id} className='text-[16px]'>
                                    <a href="">{item.linkName}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className='flex flex-col gap-[7px]'>
                    <h4 className='mb-5 text-[18px] font-bold'>{plan[0].title}</h4>
                    {
                        plan.map((item) => {
                            return (
                                <li key={item.id} className='text-[16px]'>
                                    <a href="">{item.linkName}</a>
                                </li>
                            )
                        })
                    }
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