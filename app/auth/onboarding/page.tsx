// "use client"
// import Image from 'next/image'
// import React, { useState } from 'react'
// import ellipse from "@/assets/Ellipse 17.png"
// import ellipse1 from "@/assets/Ellipse 16.png"
// import ellipse2 from "@/assets/Ellipse 15.png"
// import ellipse3 from "@/assets/Ellipse 14.png"
// import ellipse4 from "@/assets/Ellipse 13.png"
// import ellipse5 from "@/assets/Ellipse 12.png"
// import ellipse6 from "@/assets/Ellipse 6.png"
// import logo from "@/assets/logo.png"
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'
// import CountrySelector from '@/components/CountrySelector'
// import { IconArrowNarrowRight } from '@tabler/icons-react'
// import LanguageSelector from '@/components/LanguageSelector'

// const page = () => {
//     const [value, setValue] = useState('');
//     const [toast, setToast] = useState(false)
//     const [isComplete, setIsComplete] = useState(false);
//     const [hasText, setHasText] = useState(false);
//     const [hasTexts, setHasTexts] = useState(false);

//     // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     //     setHasText(e.target.value.trim().length > 0);
//     // };

//     // const handleChanges = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     //     setHasText(e.target.value.trim().length > 0);
//     // };

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setHasText(e.target.value.trim().length > 0);
//     };

//     const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setHasTexts(e.target.value.trim().length > 0);
//     };

//     const handleErr = () => {
//         setToast(true)
//     }


//     // API Integration
//     const [phone, setPhone] = useState('');
//     const [error, setError] = useState('');
//     const router = useRouter();

//     const handleNext = async () => {
//         router.push(`/auth/selectLanguage`);
//     };

//     return (
//         <div className=' w-[100vw] h-[100dvh] bg-white dark:bg-[#000000] relative flex items-center justify-center'>
//             <div className=' absolute h-full w-full bg-transparent flex items-center justify-center z-[3]'>
//                 <Image
//                     src={ellipse}
//                     alt=''
//                     className=''
//                 />
//             </div>
//             <div className=' absolute h-full w-full bg-transparent flex items-center justify-center z-[3]'>
//                 <Image
//                     src={ellipse1}
//                     alt=''
//                     className=''
//                 />
//             </div>
//             <div className=' absolute h-full w-full bg--transparent flex items-center justify-center z-[4]'>
//                 <Image
//                     src={ellipse2}
//                     alt=''
//                     className=''
//                 />
//             </div>
//             <div className=' absolute h-full w-full bg-g-transparent flex items-center justify-center z-[5]'>
//                 <Image
//                     src={ellipse3}
//                     alt=''
//                     className=''
//                 />
//             </div>
//             <div className=' absolute h-full w-full bg-g-transparent flex items-center justify-center z-[6]'>
//                 <Image
//                     src={ellipse4}
//                     alt=''
//                     className=''
//                 />
//             </div>
//             <div className=' absolute h-full w-full bg-g-transparent flex items-center justify-center z-[7]'>
//                 <Image
//                     src={ellipse5}
//                     alt=''
//                     className=''
//                 />
//             </div>
//             <div className=' absolute h-full w-full bg-g-transparent flex items-center justify-center z-[7]'>
//                 <Image
//                     src={ellipse6}
//                     alt=''
//                     className=''
//                 />
//             </div>

//             <div className=' absolute h-full w-full bg-slate-900/60 flex flex-col items-center justify-end z-[8]'>
//                 <div className='hidden lg:block w-[100vw] mx-auto bg-[#f6f5f5] dark:bg-black py-[30px]'>
//                     <div className=' w-[70%] m-auto'>
//                         <p className=' text-[#0000008C] dark:text-slate-600 text-[13px] mb-[10px]'>What's your name?</p>
//                         <form className=' font-bold text-2xl mb-[10px] flex items-center pb-[10px] border-b border-b-[#0000001A] dark:border-b-[#0000001A]'>
//                             <input id="custom-number"
//                                 type="text"
//                                 onChange={handleChange}
//                                 placeholder='Enter' className='bg-transparent appearance-none focus:outline-none text-black dark:text-slate-600' />
//                         </form>
//                         <p className=' text-[#0000008C] dark:text-slate-600 text-[13px] mb-[10px]'>What's your family name?</p>
//                         <form className=' font-bold text-2xl mb-[10px] flex items-center pb-[10px] border-b border-b-[#0000001A] dark:border-b-[#0000001A]'>
//                             <input id="custom-number"
//                                 type="text"
//                                 onChange={handleChanges}
//                                 placeholder='Enter' className='bg-transparent appearance-none focus:outline-none text-black dark:text-slate-600' />
//                         </form>
//                         {
//                             toast && <p className=' text-red-500'>Invalid Credentials!</p>
//                         }
//                         <div className=' w-full flex items-center justify-between'>
//                             {
//                                 hasText && hasTexts ?
//                                     <button onClick={handleNext} className=' w-[99%] text-center bg-black dark:bg-[#AB4FA8] text-white py-[10px] px-[100px] rounded-md hover:bg-black/60 dark:hover:bg-[#AB4FA8]/60 duration-500'>Proceed</button>
//                                     :
//                                     <button onClick={handleErr} className=' w-[99%] text-center bg-black/60 dark:bg-[#AB4FA8]/60 text-white py-[10px] px-[100px] rounded-md hover:bg-black/60 dark:hover:bg-[#AB4FA8]/60 duration-500'>Proceed</button>
//                             }
//                         </div>
//                     </div>
//                 </div>

//                 <div className=' lg:hidden w-screen bg-white dark:bg-black py-[10px] rounded-t-2xl block px-[10px]'>
//                     <Link href={"/termsandconditions"} className=' mx-auto block h-[4px] w-[32px] rounded-full bg-[#0000001A] dark:bg-[#FFFFFF1A] dark:border dark:border-[#FFFFFF00] mb-[20px]'></Link>
//                     <p className=' text-[#0000008C] dark:text-slate-600 text-[13px] mb-[10px]'>What's your name?</p>
//                     <form className=' font-bold text-2xl mb-[10px] flex items-center pb-[10px] border-b border-b-[#0000001A] dark:border-b-[#0000001A]'>
//                         <input id="custom-number"
//                             type="text"
//                             onChange={handleChange}
//                             placeholder='Enter' className='bg-transparent appearance-none focus:outline-none text-black dark:text-slate-600' />
//                     </form>
//                     <p className=' text-[#0000008C] dark:text-slate-600 text-[13px] mb-[10px]'>What's your family name?</p>
//                     <form className=' font-bold text-2xl mb-[10px] flex items-center pb-[10px] border-b border-b-[#0000001A] dark:border-b-[#0000001A]'>
//                         <input id="custom-number"
//                             type="text"
//                             onChange={handleChanges}
//                             placeholder='Enter' className='bg-transparent appearance-none focus:outline-none text-black dark:text-slate-600' />
//                     </form>
//                     {
//                         hasText && hasTexts ?
//                             <button onClick={handleNext} className=' h-[52px] mb-[10px] text-[15px] font-bold w-full text-center bg-black dark:bg-[#AB4FA8] text-white py-[10px] px-[100px] rounded-xl hover:bg-black/60 dark:hover:bg-[#AB4FA8]/60 duration-500 flex items-center justify-center'>Proceed <IconArrowNarrowRight stroke={2} size={14} className=' ml-[4px]' /></button>
//                             :
//                             <button onClick={handleErr} className=' h-[52px] mb-[10px] text-[15px] font-bold w-full text-center bg-black/60 dark:bg-[#AB4FA8]/60 text-white py-[10px] px-[100px] rounded-xl hover:bg-black/60 dark:hover:bg-[#AB4FA8]/60 duration-500 flex items-center justify-center'>Proceed <IconArrowNarrowRight stroke={2} size={14} className=' ml-[4px]' /></button>
//                     }

//                     {/* <Link href="/" className=' w-full mb-[10px] text-[15px] font-bold block text-center bg-red-500 text-white py-[10px] px-[100px] rounded-md hover:bg-red-500/60 duration-500'>Cancel</Link> */}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default page




// "use client"
// import Image from 'next/image'
// import React, { useState } from 'react'
// import ellipse from "@/assets/Ellipse 17.png"
// import ellipse1 from "@/assets/Ellipse 16.png"
// import ellipse2 from "@/assets/Ellipse 15.png"
// import ellipse3 from "@/assets/Ellipse 14.png"
// import ellipse4 from "@/assets/Ellipse 13.png"
// import ellipse5 from "@/assets/Ellipse 12.png"
// import ellipse6 from "@/assets/Ellipse 6.png"
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'
// import { IconArrowNarrowRight } from '@tabler/icons-react'

// const Page = () => {
//   const [firstName, setFirstName] = useState("")
//   const [lastName, setLastName] = useState("")
//   const [hasText, setHasText] = useState(false)
//   const [hasTexts, setHasTexts] = useState(false)
//   const [toast, setToast] = useState(false)
//   const [error, setError] = useState("")
//   const router = useRouter()

//   // Hardcoded API endpoint
//   const ONBOARD_URL = "https://api-test.kardiboxes.com/api/auth/onboard"

//   const handleNext = async () => {
//     const token = localStorage.getItem("token")
//     if (!token) {
//       setError("No auth token found, please login again.")
//       setToast(true)
//       return
//     }

//     try {
//       const res = await fetch(ONBOARD_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`
//         },
//         body: JSON.stringify({
//           firstName,
//           lastName
//         })
//       })

//       if (!res.ok) {
//         const data = await res.json().catch(() => ({}))
//         throw new Error(data.message || "Failed to save name")
//       }

//       // ✅ Success: move to language selection
//       router.push("/auth/selectLanguage")
//     } catch (err: any) {
//       console.error(err)
//       setError(err.message || "Something went wrong")
//       setToast(true)
//     }
//   }

//   const handleErr = () => {
//     setToast(true)
//     setError("Please fill in both first and last name")
//   }

//   return (
//     <div className="w-[100vw] h-[100dvh] bg-white dark:bg-[#000000] relative flex items-center justify-center">
//       {/* Background ellipses */}
//       <div className="absolute h-full w-full flex items-center justify-center z-[3]">
//         <Image src={ellipse} alt="" />
//       </div>
//       <div className="absolute h-full w-full flex items-center justify-center z-[3]">
//         <Image src={ellipse1} alt="" />
//       </div>
//       <div className="absolute h-full w-full flex items-center justify-center z-[4]">
//         <Image src={ellipse2} alt="" />
//       </div>
//       <div className="absolute h-full w-full flex items-center justify-center z-[5]">
//         <Image src={ellipse3} alt="" />
//       </div>
//       <div className="absolute h-full w-full flex items-center justify-center z-[6]">
//         <Image src={ellipse4} alt="" />
//       </div>
//       <div className="absolute h-full w-full flex items-center justify-center z-[7]">
//         <Image src={ellipse5} alt="" />
//       </div>
//       <div className="absolute h-full w-full flex items-center justify-center z-[7]">
//         <Image src={ellipse6} alt="" />
//       </div>

//       {/* Main Content */}
//       <div className="absolute h-full w-full bg-slate-900/60 flex flex-col items-center justify-end z-[8]">
//         {/* Desktop */}
//         <div className="hidden lg:block w-[100vw] mx-auto bg-[#f6f5f5] dark:bg-black py-[30px]">
//           <div className="w-[70%] m-auto">
//             <p className="text-[#0000008C] dark:text-slate-600 text-[13px] mb-[10px]">
//               What's your name?
//             </p>
//             <form className="font-bold text-2xl mb-[10px] flex items-center pb-[10px] border-b border-b-[#0000001A] dark:border-b-[#0000001A]">
//               <input
//                 type="text"
//                 value={firstName}
//                 onChange={(e) => {
//                   setFirstName(e.target.value)
//                   setHasText(e.target.value.trim().length > 0)
//                 }}
//                 placeholder="Enter"
//                 className="bg-transparent appearance-none focus:outline-none text-black dark:text-slate-600"
//               />
//             </form>
//             <p className="text-[#0000008C] dark:text-slate-600 text-[13px] mb-[10px]">
//               What's your family name?
//             </p>
//             <form className="font-bold text-2xl mb-[10px] flex items-center pb-[10px] border-b border-b-[#0000001A] dark:border-b-[#0000001A]">
//               <input
//                 type="text"
//                 value={lastName}
//                 onChange={(e) => {
//                   setLastName(e.target.value)
//                   setHasTexts(e.target.value.trim().length > 0)
//                 }}
//                 placeholder="Enter"
//                 className="bg-transparent appearance-none focus:outline-none text-black dark:text-slate-600"
//               />
//             </form>

//             {toast && <p className="text-red-500">{error}</p>}

//             <div className="w-full flex items-center justify-between">
//               {hasText && hasTexts ? (
//                 <button
//                   onClick={handleNext}
//                   className="w-[99%] text-center bg-black dark:bg-[#AB4FA8] text-white py-[10px] px-[100px] rounded-md hover:bg-black/60 dark:hover:bg-[#AB4FA8]/60 duration-500"
//                 >
//                   Proceed
//                 </button>
//               ) : (
//                 <button
//                   onClick={handleErr}
//                   className="w-[99%] text-center bg-black/60 dark:bg-[#AB4FA8]/60 text-white py-[10px] px-[100px] rounded-md"
//                 >
//                   Proceed
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Mobile */}
//         <div className="lg:hidden w-screen bg-white dark:bg-black py-[10px] rounded-t-2xl block px-[10px]">
//           <Link
//             href={"/termsandconditions"}
//             className="mx-auto block h-[4px] w-[32px] rounded-full bg-[#0000001A] dark:bg-[#FFFFFF1A] mb-[20px]"
//           ></Link>

//           <p className="text-[#0000008C] dark:text-slate-600 text-[13px] mb-[10px]">
//             What's your name?
//           </p>
//           <form className="font-bold text-2xl mb-[10px] flex items-center pb-[10px] border-b border-b-[#0000001A] dark:border-b-[#0000001A]">
//             <input
//               type="text"
//               value={firstName}
//               onChange={(e) => {
//                 setFirstName(e.target.value)
//                 setHasText(e.target.value.trim().length > 0)
//               }}
//               placeholder="Enter"
//               className="bg-transparent appearance-none focus:outline-none text-black dark:text-slate-600"
//             />
//           </form>
//           <p className="text-[#0000008C] dark:text-slate-600 text-[13px] mb-[10px]">
//             What's your family name?
//           </p>
//           <form className="font-bold text-2xl mb-[10px] flex items-center pb-[10px] border-b border-b-[#0000001A] dark:border-b-[#0000001A]">
//             <input
//               type="text"
//               value={lastName}
//               onChange={(e) => {
//                 setLastName(e.target.value)
//                 setHasTexts(e.target.value.trim().length > 0)
//               }}
//               placeholder="Enter"
//               className="bg-transparent appearance-none focus:outline-none text-black dark:text-slate-600"
//             />
//           </form>

//           {toast && <p className="text-red-500">{error}</p>}

//           {hasText && hasTexts ? (
//             <button
//               onClick={handleNext}
//               className="h-[52px] mb-[10px] text-[15px] font-bold w-full text-center bg-black dark:bg-[#AB4FA8] text-white py-[10px] px-[100px] rounded-xl hover:bg-black/60 dark:hover:bg-[#AB4FA8]/60 duration-500 flex items-center justify-center"
//             >
//               Proceed <IconArrowNarrowRight stroke={2} size={14} className="ml-[4px]" />
//             </button>
//           ) : (
//             <button
//               onClick={handleErr}
//               className="h-[52px] mb-[10px] text-[15px] font-bold w-full text-center bg-black/60 dark:bg-[#AB4FA8]/60 text-white py-[10px] px-[100px] rounded-xl flex items-center justify-center"
//             >
//               Proceed <IconArrowNarrowRight stroke={2} size={14} className="ml-[4px]" />
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Page



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
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { IconArrowNarrowRight } from '@tabler/icons-react'

const Page = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [hasText, setHasText] = useState(false)
  const [hasTexts, setHasTexts] = useState(false)
  const [toast, setToast] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  // Hardcoded API endpoint
  const ONBOARD_URL = "https://api-test.kardiboxes.com/api/auth/onboard"

  // const handleNext = async () => {
  //   const token = sessionStorage.getItem("authToken")
  //   if (!token) {
  //     setError("No auth token found, please signup again.")
  //     setToast(true)
  //     return
  //   }
  
  //   try {
  //     const res = await fetch("https://api-test.kardiboxes.com/api/auth/onboard", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Authorization": `Bearer ${token}`
  //       },
  //       body: JSON.stringify({
  //         userId: 1,          // ⚡ Hardcoded userId for testing
  //         name: firstName,    // required
  //         lastname: lastName  // optional
  //       })
  //     })
  
  //     if (!res.ok) {
  //       const data = await res.json().catch(() => ({}))
  //       console.error("API Error Response:", data)
  //       throw new Error(data.message || data.error || "Failed to save name")
  //     }
  
  //     // ✅ Success → move to language selection
  //     router.push("/auth/selectLanguage")
  //   } catch (err: any) {
  //     console.error(err)
  //     setError(err.message || "Something went wrong")
  //     setToast(true)
  //   }
  // }

  const handleNext = async () => {
    try {
      const token = sessionStorage.getItem("authToken");
      const userId = sessionStorage.getItem("userId");
  
      if (!token || !userId) {
        alert("No auth token or userId found, please login again.");
        router.replace("/auth/phone");
        return;
      }
  
      const res = await fetch("https://api-test.kardiboxes.com/api/auth/onboard", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId,
          name: firstName,   // <- your state for first name
          lastname: lastName // <- your state for last name
        }),
      });
  
      if (!res.ok) {
        throw new Error("Failed to save name");
      }
  
      // ✅ On success → go to select language
      router.push("/auth/selectLanguage");
    } catch (err) {
      console.error(err);
      setError("Error saving name");
    }
  };
  
  
  
  

  const handleErr = () => {
    setToast(true)
    setError("Please fill in both first and last name")
  }

  return (
    <div className="w-[100vw] h-[100dvh] bg-white dark:bg-[#000000] relative flex items-center justify-center">
      {/* Background ellipses */}
      <div className="absolute h-full w-full flex items-center justify-center z-[3]">
        <Image src={ellipse} alt="" />
      </div>
      <div className="absolute h-full w-full flex items-center justify-center z-[3]">
        <Image src={ellipse1} alt="" />
      </div>
      <div className="absolute h-full w-full flex items-center justify-center z-[4]">
        <Image src={ellipse2} alt="" />
      </div>
      <div className="absolute h-full w-full flex items-center justify-center z-[5]">
        <Image src={ellipse3} alt="" />
      </div>
      <div className="absolute h-full w-full flex items-center justify-center z-[6]">
        <Image src={ellipse4} alt="" />
      </div>
      <div className="absolute h-full w-full flex items-center justify-center z-[7]">
        <Image src={ellipse5} alt="" />
      </div>
      <div className="absolute h-full w-full flex items-center justify-center z-[7]">
        <Image src={ellipse6} alt="" />
      </div>

      {/* Main Content */}
      <div className="absolute h-full w-full bg-slate-900/60 flex flex-col items-center justify-end z-[8]">
        {/* Desktop */}
        <div className="hidden lg:block w-[100vw] mx-auto bg-[#f6f5f5] dark:bg-black py-[30px]">
          <div className="w-[70%] m-auto">
            <p className="text-[#0000008C] dark:text-slate-600 text-[13px] mb-[10px]">
              What's your name?
            </p>
            <form className="font-bold text-2xl mb-[10px] flex items-center pb-[10px] border-b border-b-[#0000001A] dark:border-b-[#0000001A]">
              <input
                type="text"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value)
                  setHasText(e.target.value.trim().length > 0)
                }}
                placeholder="Enter"
                className="bg-transparent appearance-none focus:outline-none text-black dark:text-slate-600"
              />
            </form>
            <p className="text-[#0000008C] dark:text-slate-600 text-[13px] mb-[10px]">
              What's your family name?
            </p>
            <form className="font-bold text-2xl mb-[10px] flex items-center pb-[10px] border-b border-b-[#0000001A] dark:border-b-[#0000001A]">
              <input
                type="text"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value)
                  setHasTexts(e.target.value.trim().length > 0)
                }}
                placeholder="Enter"
                className="bg-transparent appearance-none focus:outline-none text-black dark:text-slate-600"
              />
            </form>

            {toast && <p className="text-red-500">{error}</p>}

            <div className="w-full flex items-center justify-between">
              {hasText && hasTexts ? (
                <button
                  onClick={handleNext}
                  className="w-[99%] text-center bg-black dark:bg-[#AB4FA8] text-white py-[10px] px-[100px] rounded-md hover:bg-black/60 dark:hover:bg-[#AB4FA8]/60 duration-500"
                >
                  Proceed
                </button>
              ) : (
                <button
                  onClick={handleErr}
                  className="w-[99%] text-center bg-black/60 dark:bg-[#AB4FA8]/60 text-white py-[10px] px-[100px] rounded-md"
                >
                  Proceed
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden w-screen bg-white dark:bg-black py-[10px] rounded-t-2xl block px-[10px]">
          <Link
            href={"/termsandconditions"}
            className="mx-auto block h-[4px] w-[32px] rounded-full bg-[#0000001A] dark:bg-[#FFFFFF1A] mb-[20px]"
          ></Link>

          <p className="text-[#0000008C] dark:text-slate-600 text-[13px] mb-[10px]">
            What's your name?
          </p>
          <form className="font-bold text-2xl mb-[10px] flex items-center pb-[10px] border-b border-b-[#0000001A] dark:border-b-[#0000001A]">
            <input
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
                setHasText(e.target.value.trim().length > 0)
              }}
              placeholder="Enter"
              className="bg-transparent appearance-none focus:outline-none text-black dark:text-slate-600"
            />
          </form>
          <p className="text-[#0000008C] dark:text-slate-600 text-[13px] mb-[10px]">
            What's your family name?
          </p>
          <form className="font-bold text-2xl mb-[10px] flex items-center pb-[10px] border-b border-b-[#0000001A] dark:border-b-[#0000001A]">
            <input
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
                setHasTexts(e.target.value.trim().length > 0)
              }}
              placeholder="Enter"
              className="bg-transparent appearance-none focus:outline-none text-black dark:text-slate-600"
            />
          </form>

          {toast && <p className="text-red-500">{error}</p>}

          {hasText && hasTexts ? (
            <button
              onClick={handleNext}
              className="h-[52px] mb-[10px] text-[15px] font-bold w-full text-center bg-black dark:bg-[#AB4FA8] text-white py-[10px] px-[100px] rounded-xl hover:bg-black/60 dark:hover:bg-[#AB4FA8]/60 duration-500 flex items-center justify-center"
            >
              Proceed <IconArrowNarrowRight stroke={2} size={14} className="ml-[4px]" />
            </button>
          ) : (
            <button
              onClick={handleErr}
              className="h-[52px] mb-[10px] text-[15px] font-bold w-full text-center bg-black/60 dark:bg-[#AB4FA8]/60 text-white py-[10px] px-[100px] rounded-xl flex items-center justify-center"
            >
              Proceed <IconArrowNarrowRight stroke={2} size={14} className="ml-[4px]" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Page
