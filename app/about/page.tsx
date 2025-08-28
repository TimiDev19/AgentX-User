import React from 'react'
import ellipse6 from "@/assets/Ellipse 6.png"
import Image from 'next/image'
import Phone from "@/assets/aboutPhone.png"
import Phone2 from "@/assets/phone2.png"
import { IconBrandFacebookFilled, IconBrandInstagram, IconBrandLinkedin, IconBrandTelegram, IconBrandThreads, IconBrandTiktok, IconBrandWhatsappFilled, IconBrandX, IconMessage2Filled, IconRun } from '@tabler/icons-react'
import Link from 'next/link'
import DarkLogo from '@/assets/logo.png'

const page = () => {
    return (
        <div className=' bg-black max-h-[100dvh] w-[100vw] overflow-x-hidden overflow-y-scroll'>
            <div className=' min-h-[100dvh] w-[100vw] relative bg-white dark:bg-black'>
                <div className=' z-[2] h-[100dvh] w-[100vw] hidden lg:block gradient p-[20px]'>
                    <Link href={"/adminPage"} className=' h-[10vh] w-full flex items-center justify-center'>
                        <Image src={ellipse6} alt='' className=' h-[82px]' />
                    </Link>
                    <div className=' h-[90vh] w-full flex items-center justify-between p-[3%]'>
                        <div className=' w-[50%] h-full flex flex-col items-center justify-center'>
                            <h1 className=' text-[46px] font-extrabold text-black dark:text-white'>
                                Enhance Your Daily Routine & Tasks with AI-Powered Assistance
                            </h1>
                            <p className=' text-black dark:text-white text-[16px]'>
                                Agent X is an AI-enhanced service aggregation platform designed to simplify your daily life. Our innovative solution offers three intelligent AI bots you can interact with anytime to access sports updates, book flights and hotels, send shipments globally, and much more. <br />
                                So, download Agent X now and let Agent X provide accurate, real-time information and take care of your daily tasks and needs!
                            </p>
                            <div className=' flex items-center justify-start mt-[20px]'>
                                <div className=' h-[48px] w-[162px] playStore mr-[10px] cursor-pointer'></div>
                                <div className=' h-[48px] w-[162px] appStore cursor-pointer'></div>
                            </div>
                        </div>
                        <div className=' w-[55%] h-full flex items-center justify-center'>
                            <Image
                                src={Phone}
                                alt=''
                            />
                        </div>
                    </div>
                </div>
                <div className=' z-[2] min-h-[100dvh] w-[100vw] lg:hidden lighthomegradientmobile p-[20px]'>
                    <Link href={"/adminPage"} className=' h-[10vh] w-full flex items-center justify-center'>
                        <Image src={ellipse6} alt='' className=' w-[62px]' />
                    </Link>
                    <div className=' min-h-[90vh] w-full flex flex-col items-center justify-between p-[3%]'>
                        <div className=' w-[99%] h-full flex flex-col items-center justify-center mb-[20px]'>
                            <h1 className=' text-[28px] font-extrabold text-black dark:text-white'>
                                Enhance Your Daily Routine & Tasks with AI-Powered Assistance
                            </h1>
                            <p className=' text-black dark:text-white text-[16px]'>
                                Agent X is an AI-enhanced service aggregation platform designed to simplify your daily life. Our innovative solution offers three intelligent AI bots you can interact with anytime to access sports updates, book flights and hotels, send shipments globally, and much more. <br />
                                So, download Agent X now and let Agent X provide accurate, real-time information and take care of your daily tasks and needs!
                            </p>
                            <div className=' flex items-center justify-start mt-[20px]'>
                                <div className=' h-[48px] w-[162px] playStore mr-[10px] cursor-pointer'></div>
                                <div className=' h-[48px] w-[162px] appStore cursor-pointer'></div>
                            </div>
                        </div>
                        <div className=' w-[95%] h-full flex items-center justify-center'>
                            <Image
                                src={Phone}
                                alt=''
                            />
                        </div>
                    </div>
                </div>
            </div>


            <div className=' min-h-[100dvh] w-[100vw] relative bg-white dark:bg-[#0000004D]'>
                <div className=' z-[2] h-[100dvh] w-[100vw] hidden lg:block p-[20px]'>
                    <div className=' h-[100vh] w-full flex items-center justify-between p-[3%]'>
                        <div className=' w-[55%] h-full flex items-center justify-center'>
                            <Image
                                src={Phone2}
                                alt=''
                            />
                        </div>
                        <div className=' w-[50%] h-full flex flex-col items-center justify-center'>
                            <h1 className=' text-[16px] text-black dark:text-[#AB4FA8] mb-[30px] w-full'>How It Works</h1>
                            <h1 className=' text-[46px] text-left w-full capitalize font-extrabold text-black dark:text-white'>
                                Just say hello !!
                            </h1>
                            <p className=' text-black dark:text-white text-[16px]'>
                                You can start using Agent X with just a few taps on your phone. Download the app from your app store or gallery, choose the AI bot you want to talk to and say hello! You can also chat with Nora, Adam, and Sarah on popular platforms like WhatsApp, Telegram, and WeChat. Regardless of your location or preference, you can leverage specialized AI assistance to access information faster and manage tasks more efficiently.
                            </p>
                        </div>
                    </div>
                </div>
                <div className=' z-[2] min-h-[150dvh] w-[100vw] lg:hidden p-[20px]'>
                    <div className=' h-[100vh] w-full flex flex-col items-center justify-between p-[3%]'>
                        <div className=' w-[100%] h-full flex flex-col items-center justify-center mb-[20px]'>
                            <h1 className=' text-[16px] text-black dark:text-[#AB4FA8] mb-[30px] w-full'>How It Works</h1>
                            <h1 className=' text-[46px] text-left w-full capitalize font-extrabold text-black dark:text-white'>
                                Just say hello !!
                            </h1>
                            <p className=' text-black dark:text-white text-[16px]'>
                                You can start using Agent X with just a few taps on your phone. Download the app from your app store or gallery, choose the AI bot you want to talk to and say hello! You can also chat with Nora, Adam, and Sarah on popular platforms like WhatsApp, Telegram, and WeChat. Regardless of your location or preference, you can leverage specialized AI assistance to access information faster and manage tasks more efficiently.
                            </p>
                        </div>
                        <div className=' w-[100%] h-full flex items-center justify-center'>
                            <Image
                                src={Phone2}
                                alt=''
                            />
                        </div>
                    </div>
                </div>
            </div>


            <div className=' min-h-[60dvh] w-[100vw] relative bg-white dark:bg-black'>
                <div className=' z-[2] h-[60dvh] w-[100vw] hidden lg:block gradient50vh p-[20px]'>
                    <h1 className=' text-[36px] text-black dark:text-white font-extrabold capitalize w-[50%] text-center mx-auto mb-[10px]'>Best AI powered BOTs to serve all your needs</h1>
                    <p className=' text-[16px] text-black dark:text-[#FFFFFFCC] w-fit mx-auto mb-[15px]'>Try out our powerful AI chatbots for free - No subscription, no upfront fees, no hidden costs:</p>
                    <div className=' p-3 h-[138px] w-[90%] tryAgent mx-auto bg-white dark:bg-black relative rounded-2xl border-white'>
                        <div className=' w-full flex items-center justify-start'>
                            <div className=' px-2 py-1 rounded-full bg-[#AB4FA8] w-fit text-white mr-3'><IconRun size={16} stroke={2} /></div>
                            <h1 className=' text-black dark:text-[#fff] text-[20px] font-extrabold'>Try AgentX</h1>
                        </div>
                        <p className=' text-black dark:text-white text-[16px]'>Take the thrill of football (NFL), basket ball (NBA), cricket and soccer to the next level. Get real-time updates, live match scores, and predict results to earn exciting rewards. Chat with Nora on Agent X or your preferred messaging app now and ask your sports-related questions.</p>
                    </div>
                    <div className=' text-black dark:text-white flex items-center justify-center w-full mt-[10px]'><IconBrandWhatsappFilled className=' mx-1' /> <IconBrandTelegram className=' mx-1' /> <IconMessage2Filled className=' mx-1' /></div>
                </div>
                <div className=' z-[2] min-h-[60dvh] w-[100vw] lg:hidden lighthomegradientmobile p-[20px]'>
                    <h1 className=' text-[24px] text-black dark:text-white font-extrabold capitalize text-center mx-auto mb-[10px]'>Best AI powered BOTs to serve all your needs</h1>
                    <p className=' text-[16px] text-center text-black dark:text-[#FFFFFFCC] w-fit mx-auto mb-[15px]'>Try out our powerful AI chatbots for free - No subscription, no upfront fees, no hidden costs:</p>
                    <div className=' p-3 min-h-[138px] w-[100%] tryAgent mx-auto bg-white dark:bg-black relative rounded-2xl border-white'>
                        <div className=' w-full flex items-center justify-start mb-5'>
                            <div className=' px-2 py-1 rounded-full bg-[#AB4FA8] w-fit text-white mr-3'><IconRun size={16} stroke={2} /></div>
                            <h1 className=' text-black dark:text-[#fff] text-[18px] font-extrabold'>Try AgentX</h1>
                        </div>
                        <p className=' text-black dark:text-white text-[16px]'>Take the thrill of football (NFL), basket ball (NBA), cricket and soccer to the next level. Get real-time updates, live match scores, and predict results to earn exciting rewards. Chat with Nora on Agent X or your preferred messaging app now and ask your sports-related questions.</p>
                    </div>
                    <div className=' text-black dark:text-white flex items-center justify-center w-full mt-[10px]'><IconBrandWhatsappFilled className=' mx-1' /> <IconBrandTelegram className=' mx-1' /> <IconMessage2Filled className=' mx-1' /></div>
                </div>
            </div>

            <div className=' min-h-[100vh] lg:h-[100dvh] w-[100vw] relative bg-white dark:bg-[#0000004D]'>
                <div className=' z-[2] min-h-[100vh] lg:h-[100dvh] w-[100vw] p-[20px]'>
                    <div className=' min-h-[100vh] lg:h-[100vh] w-full flex flex-col-reverse lg:flex-row items-center justify-between p-[3%]'>
                        <div className=' w-[100%] lg:w-[55%] h-full flex items-center justify-center'>
                            <Image
                                src={Phone}
                                alt=''
                            />
                        </div>
                        <div className=' w-[100%] lg:w-[50%] h-full flex flex-col items-center justify-center mb-[20px] lg:mb-[0px]'>
                            <h1 className=' text-[46px] text-left w-full capitalize font-extrabold text-black dark:text-white'>
                                Round-the-Clock Support
                            </h1>
                            <p className=' text-black dark:text-white text-[16px]'>
                                Agent X takes customer support seriously and offers 24/7/365 support to increase engagement, fast-track query resolution, and optimize user experience. So, feel free to call or email us to learn more about our specialized AI bots and what they can do for you.
                                Need help with bookings, shipment tracking, or earning from live game predictions? We’ve got you covered!
                            </p>
                            <div className='w-full flex items-center justify-start mt-[20px]'>
                                <button className=' bg-transparent text-black dark:text-[#AB4FA8] border border-black dark:border-[#AB4FA8] rounded-xl h-[48px] w-[162px] mr-[10px] cursor-pointer'>
                                    Contact Us
                                </button>
                                <button className=' bg-black dark:bg-[#AB4FA8] text-[#fff] border border-black dark:border-[#AB4FA8] rounded-xl h-[48px] w-[162px] mr-[10px] cursor-pointer'>
                                    Email Support
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' min-h-[40vh] w-full bg-black p-[5%] flex flex-col items-center justify-center'>
                <div className=' w-full'>
                    <div className=' w-full flex flex-col lg:flex-row items-center justify-between mb-[40px]'>
                        <Image
                            src={DarkLogo}
                            alt=''
                            className=' mb-[20px] lg:mb-0'
                        />

                        <div className=' flex items-center justify-start w-fit'>
                            <div className=' h-[48px] w-[162px] playStore mr-[10px] cursor-pointer'></div>
                            <div className=' h-[48px] w-[162px] appStore cursor-pointer'></div>
                        </div>
                    </div>

                    <div className=' border-t border-b border-t-[#fff]/10 mb-[10px] border-b-[#fff]/10 flex flex-col lg:flex-row items-center justify-between py-2'>
                        <div className=' min-w-[35%] flex items-center justify-between text-white mb-[10px] lg:mb-0'>
                            <Link href={""} className=' text-[16px]'>Terms & Conditions</Link>
                            <Link href={""} className=' text-[16px]'>Privacy Policy</Link>
                            <Link href={""} className=' text-[16px]'>Contact</Link>
                        </div>
                        <div className=' flex items-center justify-between text-white'>
                            <IconBrandTiktok stroke={2} className='' />
                            <IconBrandThreads stroke={2} className=' ml-[10px]' />
                            <IconBrandFacebookFilled stroke={1} className=' ml-[10px]' />
                            <IconBrandX stroke={2} className=' ml-[10px]' />
                            <IconBrandLinkedin stroke={2} className=' ml-[10px]' />
                            <IconBrandInstagram stroke={2} className=' ml-[10px]' />
                        </div>
                    </div>
                        <div className=' w-full flex items-center justify-center text-white text-[13px]'>
                            <p>Copyright © 2023 All rights reserved</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default page