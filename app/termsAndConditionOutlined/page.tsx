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
import { IconArrowNarrowLeft } from '@tabler/icons-react';

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let input = e.target.value.replace(/\D/g, ''); // Strip non-digits
        input = input.slice(0, 4); // Max 10 digits

        // Set completion state
        setIsComplete(input.length === 4);

        // Format: 00 0000 0000
        let formatted = '';
        if (input.length > 0) formatted += input.slice(0, 3);
        if (input.length > 2) formatted += '' + input.slice(3, 4);

        setValue(formatted);
    };
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
                    <h1 className=' font-extrabold text-[24px] lg:text-3xl mb-[10px] text-black dark:text-white text-center w-[98%] lg:w-[70%] mx-auto'>Terms & Conditions</h1>
                    <p className=' text-black dark:text-white/30 text-center mb-[10px] w-[98%] lg:w-[70%] mx-auto'>Read through our terms and conditions</p>
                    <p className=' w-[98%] lg:w-[70%] mx-auto text-black text-center dark:text-white/30 text-[13px] lg:text-sm'>
                        Lorem ipsum dolor sit amet consectetur. Aliquet purus tellus sagittis mauris nibh ornare. Viverra suspendisse nunc nulla semper sed odio. Nunc odio elit convallis tempor non phasellus dignissim donec condimentum. Non vel sit non orci. Ipsum risus platea volutpat nibh aliquam nunc eros. Amet risus elit et in mi volutpat vulputate orci. Sit diam morbi ornare nisl vitae molestie amet placerat. Dis mattis eget nulla tellus aliquet feugiat sagittis pellentesque. Sit aliquam malesuada nisi ultrices. Lectus tempor ut ut fermentum proin imperdiet nunc cursus amet. Tempor erat gravida fringilla pretium ornare et praesent.
                        <br /> <br /> <br />
                        Convallis ac volutpat euismod elementum sed consectetur morbi. Velit nunc id ut id maecenas. Non morbi gravida nunc ut bibendum ornare cras vel. Id ut tincidunt nec montes. Nibh laoreet odio condimentum mollis. Augue euismod nulla diam dui urna cursus diam libero gravida. Risus tellus at nullam volutpat mauris ullamcorper nunc. Mattis neque in faucibus amet lacus elementum condimentum nec elit. Pellentesque fames ac iaculis posuere nulla. Blandit tincidunt eu tristique tellus sit mattis. Dolor suspendisse nisi habitasse tellus posuere sed id.
                    </p>
                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default page