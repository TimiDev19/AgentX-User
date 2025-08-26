"use client"
import React, { useState } from 'react'
import ellipse6 from "@/assets/Ellipse 6.png"
import Link from 'next/link'
import Image from 'next/image'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { IconBell, IconBoxPadding, IconDashboard, IconLayoutGrid, IconNotification } from '@tabler/icons-react'
import { Icon } from 'lucide-react'

const Navbar = () => {
    const [agent, setAgent] = useState(true)
    const [settings, setSettings] = useState(false)
    const [showSettings, setShowSettings] = useState(true)
    const [showNotifications, setShowNotifications] = useState(true)
    const [notifications, setNotificaions] = useState(false)

    const agentLink = () => {
        setSettings(false)
        setNotificaions(false)
        setAgent(true)
        setShowNotifications(true)
        setShowSettings(true)
    }

    const settingsLink = () => {
        setNotificaions(false)
        setAgent(false)
        setSettings(true)
        setShowNotifications(false)
    }

    const notificationsLink = () => {
        setSettings(false)
        setAgent(false)
        setNotificaions(true)
        setShowSettings(false)
    }
    return (
        <div className=' h-[100vh] w-[100vw] absolute flex flex-col items-center justify-end z-[20] bg-slate-900/60'>
            <div className=' h-[150px] w-full bg-[#f6f5f5] dark:bg-black flex items-center justify-center'>
                <div className=' flex flex-col items-center justify-center'>
                    <Link
                        onClick={() => settingsLink()}
                        href={"/settings"}
                        className={`p-1 ${showSettings ? 'block' : 'hidden'} ${settings ? `border border-white rounded-full` : `text-[#00000066] border-[#00000066] border rounded-full`} mx-[20px]  w-[60px] h-[60px] hover:h-[70px] flex items-center justify-center hover:w-[70px] mb-[10px] duration-700`}
                    >
                        <IconLayoutGrid
                            stroke={1}
                        />
                    </Link>
                    <h1 className=' font-bold text-[#00000066] text-[11px]'>More</h1>
                </div>

                <div className=' flex flex-col items-center justify-center'>
                    <Link
                        onClick={() => agentLink()}
                        href={"/adminPage"}
                        className={`p-1 ${agent && `border border-black dark:border-white rounded-full`} mx-[20px] mb-[10px]`}
                    >
                        <Image
                            src={ellipse6}
                            alt=''
                            className={` w-[60px] hover:w-[70px] duration-700`}
                        />
                    </Link>
                    <h1 className=' font-bold text-black text-[11px]'>AgentX</h1>
                </div>

                <div className=' flex flex-col items-center justify-center'>
                <Link
                    onClick={() => notificationsLink()}
                    href={"/notifications"}
                    className={`p-1 ${showNotifications ? 'block' : 'hidden'} ${notifications ? `border border-white rounded-full` : `text-[#00000066] border-[#00000066] border rounded-full`} mx-[20px]  w-[60px] h-[60px] hover:h-[70px] flex items-center justify-center hover:w-[70px] mb-[10px] duration-700`}
                >
                    <IconBell
                        stroke={1}
                    />
                </Link>
                <h1 className=' font-bold text-[#00000066] text-[11px]'>Notifications</h1>
                </div>
            </div>
        </div>
    )
}

export default Navbar