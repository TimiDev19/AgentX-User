"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import ellipse from "@/assets/Ellipse 17.png"
import ellipse1 from "@/assets/Ellipse 16.png"
import ellipse2 from "@/assets/Ellipse 15.png"
import ellipse3 from "@/assets/Ellipse 14.png"
import ellipse4 from "@/assets/Ellipse 13.png"
import ellipse5 from "@/assets/Ellipse 12.png"
import ellipse6 from "@/assets/Ellipse 6.png"
import logo from "@/assets/logo.png"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import CountrySelector from '@/components/CountrySelector'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import LanguageSelector from '@/components/LanguageSelector'

const page = () => {
    const [value, setValue] = useState('');
    const [toast, setToast] = useState(false)
    const [isComplete, setIsComplete] = useState(false);
    const [hasText, setHasText] = useState(false);
    const [hasTexts, setHasTexts] = useState(false);

    const handleChange = (e) => {
        setHasText(e.target.value.trim().length > 0);
    };

    const handleChanges = (e) => {
        setHasTexts(e.target.value.trim().length > 0);
    };

    const handleErr = () => {
        setToast(true)
    }


    // API Integration
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleNext = async () => {
        router.push(`/adminPage`);
    };

    return (
        <div className=' w-[100vw] h-[100dvh] bg-white dark:bg-[#000000] relative flex items-center justify-center'>
            <div className=' absolute h-full w-full bg-transparent flex items-center justify-center z-[3]'>
                <Image
                    src={ellipse}
                    alt=''
                    className=''
                />
            </div>
            <div className=' absolute h-full w-full bg-transparent flex items-center justify-center z-[3]'>
                <Image
                    src={ellipse1}
                    alt=''
                    className=''
                />
            </div>
            <div className=' absolute h-full w-full bg--transparent flex items-center justify-center z-[4]'>
                <Image
                    src={ellipse2}
                    alt=''
                    className=''
                />
            </div>
            <div className=' absolute h-full w-full bg-g-transparent flex items-center justify-center z-[5]'>
                <Image
                    src={ellipse3}
                    alt=''
                    className=''
                />
            </div>
            <div className=' absolute h-full w-full bg-g-transparent flex items-center justify-center z-[6]'>
                <Image
                    src={ellipse4}
                    alt=''
                    className=''
                />
            </div>
            <div className=' absolute h-full w-full bg-g-transparent flex items-center justify-center z-[7]'>
                <Image
                    src={ellipse5}
                    alt=''
                    className=''
                />
            </div>
            <div className=' absolute h-full w-full bg-g-transparent flex items-center justify-center z-[7]'>
                <Image
                    src={ellipse6}
                    alt=''
                    className=''
                />
            </div>

            <div className=' absolute h-full w-full bg-slate-900/60 flex flex-col items-center justify-end z-[8]'>
                <div className='hidden lg:block w-[100vw] mx-auto bg-[#f6f5f5] dark:bg-black py-[30px]'>
                    <div className=' w-[70%] m-auto'>
                        <p className=' text-[#0000008C] dark:text-slate-600 text-sm mb-[4px]'>Mobile Number</p>
                        <form className=' font-bold text-2xl mb-[10px] flex items-center'>
                            <input id="custom-number"
                                type="text"
                                inputMode="numeric"
                                onChange={handleChange}
                                placeholder='00 0000 0000' className='bg-transparent appearance-none focus:outline-none text-black dark:text-slate-600' />
                        </form>
                        {
                            toast && <p className=' text-red-500'>Invalid Credentials!</p>
                        }
                        <div className=' w-full flex items-center justify-between'>
                            {
                                hasText ?
                                    <button onClick={handleNext} className=' w-[99%] text-center bg-black dark:bg-[#AB4FA8] text-white py-[10px] px-[100px] rounded-md hover:bg-black/60 dark:hover:bg-[#AB4FA8]/60 duration-500'>Proceed</button>
                                    :
                                    <button onClick={handleErr} className=' w-[99%] text-center bg-black/60 dark:bg-[#AB4FA8]/60 text-white py-[10px] px-[100px] rounded-md hover:bg-black/60 dark:hover:bg-[#AB4FA8]/60 duration-500'>Proceed</button>
                            }
                        </div>
                    </div>
                </div>

                <div className=' lg:hidden w-screen bg-white dark:bg-black py-[10px] rounded-t-2xl block px-[10px]'>

                    <LanguageSelector />
                    <button onClick={handleNext} className=' mb-[10px] text-[15px] font-bold w-full text-center bg-black dark:bg-[#AB4FA8] text-white py-[10px] px-[100px] rounded-md hover:bg-black/60 dark:hover:bg-[#AB4FA8]/60 duration-500 flex items-center justify-center'>Proceed <IconArrowNarrowRight stroke={2} size={14} className=' ml-[4px]' /></button>
                    {/* <Link href="/" className=' w-full mb-[10px] text-[15px] font-bold block text-center bg-red-500 text-white py-[10px] px-[100px] rounded-md hover:bg-red-500/60 duration-500'>Cancel</Link> */}
                </div>
            </div>
        </div>
    )
}

export default page