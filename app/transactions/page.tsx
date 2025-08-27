"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ellipse from "@/assets/Ellipse 17.png"
import ellipse1 from "@/assets/Ellipse 16.png"
import ellipse2 from "@/assets/Ellipse 15.png"
import ellipse3 from "@/assets/Ellipse 14.png"
import ellipse4 from "@/assets/Ellipse 13.png"
import ellipse5 from "@/assets/Ellipse 12.png"
import ellipse6 from "@/assets/Ellipse 6.png"
import logo from "@/assets/logo.png"
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { IconArrowBackUpDouble, IconArrowNarrowLeft, IconReceipt } from '@tabler/icons-react';

// interface Notifications {
//     _id: string;
//     subject: string;
//     question: string;
//     updatedAt: string;
// }

const page = () => {
    const router = useRouter();

    useEffect(() => {
        const token = sessionStorage.getItem('authToken');
        if (!token) {
            router.replace('/');
        }
    }, []);
    const [value, setValue] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const [validOTP, setValidOTP] = useState(false)

    // ------------TO PULL THE NOTIFICATIONS------------ 
    // const [notifications, setNotifications] = useState<Notifications[]>([]);    
    // useEffect(() => {
    //     fetch("https://toa-hephzibah-backend.onrender.com/api/assignment").then(
    //         response => response.json()
    //     ).then(
    //         data => {
    //             const formattedData = data.map((assignment: any) => ({
    //                 ...assignment,
    //             }));

    //             setNotifications(formattedData);
    //         }
    //     ).catch((error) => console.error('Error fetching courses:', error));
    // }, [])
    const length: number = 0
    return (
        <div className=' w-[100vw] h-[100dvh] bg-[#000000] relative flex items-start justify-center'>
            <div className=' h-[calc(100vh-150px)] bg-[#f6f5f5] dark:bg-black w-full z-[25] flex flex-col items-center justify-end'>
                <div className=' h-full overflow-y-scroll w-full bg-transparent dark:bg-transparent rounded-t-3xl p-2'>
                    <div className=' w-full flex items-center justify-start mb-[20px]'>
                        <Link
                            href={"/settings"}
                            className=' p-1 border border-black text-black rounded-full hover:border-none duration-500 dark:border-white dark:text-white'
                        >
                            <IconArrowNarrowLeft stroke={1} size={30} />
                        </Link>
                    </div>
                    <h1 className=' font-extrabold text-[28px] lg:text-3xl mb-[10px] text-black dark:text-white text-left w-[98%] lg:w-[70%] mx-auto'>Transactions</h1>
                    {length === 0 &&
                        <div className=' w-full h-full flex flex-col items-center justify-center text-black dark:text-white/60'>
                            <div className=' text-[#00000066] dark:text-[#FFFFFF66] p-2 border border-[#00000066] dark:border-[#FFFFFF66] rounded-full mb-[25px]'>
                                <IconReceipt stroke={1} size={55}/>
                            </div>
                            <h1 className=' text-[18px] text-black dark:text-white font-extrabold mb-[15px]'>No Transactions Yet</h1>
                            <p className=' text-[#0000008C] font-thin text-center text-[13px] dark:text-[#FFFFFF8C] w-[80%]'>You have not made any transactions with Agent X till now</p>
                        </div>
                    }
                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default page