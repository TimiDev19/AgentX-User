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

//     // const handleChange = (e) => {
//     //     setHasText(e.target.value.trim().length > 0);
//     // };

//     // const handleChanges = (e) => {
//     //     setHasTexts(e.target.value.trim().length > 0);
//     // };

//     const handleErr = () => {
//         setToast(true)
//     }


//     // API Integration
//     const [phone, setPhone] = useState('');
//     const [error, setError] = useState('');
//     const router = useRouter();

//     const handleNext = async () => {
//         router.push(`/adminPage`);
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
//                         <LanguageSelector />
//                         <button onClick={handleNext} className=' w-[99%] text-center bg-black dark:bg-[#AB4FA8] text-white py-[10px] px-[100px] rounded-md hover:bg-black/60 dark:hover:bg-[#AB4FA8]/60 duration-500'>Proceed</button>
//                     </div>
//                 </div>

//                 <div className=' lg:hidden w-screen bg-white dark:bg-black py-[10px] rounded-t-2xl block px-[10px]'>

//                     <LanguageSelector />
//                     <button onClick={handleNext} className='h-[52px] mb-[10px] text-[15px] font-bold w-full text-center bg-black dark:bg-[#AB4FA8] text-white py-[10px] px-[100px] rounded-xl hover:bg-black/60 dark:hover:bg-[#AB4FA8]/60 duration-500 flex items-center justify-center'>Proceed <IconArrowNarrowRight stroke={2} size={14} className=' ml-[4px]' /></button>
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
// import { useRouter } from 'next/navigation'
// import { IconArrowNarrowRight } from '@tabler/icons-react'
// import LanguageSelector from '@/components/LanguageSelector'

// const Page = () => {
//     const [selectedLanguage, setSelectedLanguage] = useState<string>("")
//     const [error, setError] = useState("")
//     const [toast, setToast] = useState(false)
//     const router = useRouter()

//     const handleErr = () => {
//         setToast(true)
//     }

//     const handleNext = async () => {
//         const token = sessionStorage.getItem("authToken")
//         const userId = 1 // ⚡ still hardcoded for now

//         if (!token) {
//             setError("No auth token found, please signup again.")
//             setToast(true)
//             return
//         }

//         if (!selectedLanguage) {
//             setError("Please select a language.")
//             setToast(true)
//             return
//         }

//         try {
//             const res = await fetch("https://api-test.kardiboxes.com/api/auth/onboard/language", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization": `Bearer ${token}`
//                 },
//                 body: JSON.stringify({
//                     userId,
//                     language: selectedLanguage
//                 })
//             })

//             if (!res.ok) {
//                 const data = await res.json().catch(() => ({}))
//                 console.error("API Error Response:", data)
//                 throw new Error(data.message || data.error || "Failed to save language")
//             }

//             // ✅ Success → go to admin page
//             router.push("/adminPage")
//         } catch (err: any) {
//             console.error(err)
//             setError(err.message || "Something went wrong")
//             setToast(true)
//         }
//     }

//     return (
//         <div className=' w-[100vw] h-[100dvh] bg-white dark:bg-[#000000] relative flex items-center justify-center'>
//             <div className=' absolute h-full w-full flex items-center justify-center z-[3]'>
//                 <Image src={ellipse} alt='' />
//             </div>
//             <div className=' absolute h-full w-full flex items-center justify-center z-[3]'>
//                 <Image src={ellipse1} alt='' />
//             </div>
//             <div className=' absolute h-full w-full flex items-center justify-center z-[4]'>
//                 <Image src={ellipse2} alt='' />
//             </div>
//             <div className=' absolute h-full w-full flex items-center justify-center z-[5]'>
//                 <Image src={ellipse3} alt='' />
//             </div>
//             <div className=' absolute h-full w-full flex items-center justify-center z-[6]'>
//                 <Image src={ellipse4} alt='' />
//             </div>
//             <div className=' absolute h-full w-full flex items-center justify-center z-[7]'>
//                 <Image src={ellipse5} alt='' />
//             </div>
//             <div className=' absolute h-full w-full flex items-center justify-center z-[7]'>
//                 <Image src={ellipse6} alt='' />
//             </div>

//             <div className=' absolute h-full w-full bg-slate-900/60 flex flex-col items-center justify-end z-[8]'>
//                 <div className='hidden lg:block w-[100vw] mx-auto bg-[#f6f5f5] dark:bg-black py-[30px]'>
//                     <div className=' w-[70%] m-auto'>
//                         <LanguageSelector onChange={setSelectedLanguage} />
//                         <button 
//                             onClick={selectedLanguage ? handleNext : handleErr}
//                             className=' w-[99%] text-center bg-black dark:bg-[#AB4FA8] text-white py-[10px] px-[100px] rounded-md hover:bg-black/60 dark:hover:bg-[#AB4FA8]/60 duration-500'>
//                             Proceed
//                         </button>
//                         {toast && <p className='text-red-500 mt-2'>{error}</p>}
//                     </div>
//                 </div>

//                 <div className=' lg:hidden w-screen bg-white dark:bg-black py-[10px] rounded-t-2xl block px-[10px]'>
//                     <LanguageSelector onChange={setSelectedLanguage} />
//                     <button 
//                         onClick={selectedLanguage ? handleNext : handleErr}
//                         className='h-[52px] mb-[10px] text-[15px] font-bold w-full text-center bg-black dark:bg-[#AB4FA8] text-white py-[10px] px-[100px] rounded-xl hover:bg-black/60 dark:hover:bg-[#AB4FA8]/60 duration-500 flex items-center justify-center'>
//                         Proceed <IconArrowNarrowRight stroke={2} size={14} className=' ml-[4px]' />
//                     </button>
//                     {toast && <p className='text-red-500 mt-2'>{error}</p>}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Page



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
// import { useRouter } from 'next/navigation'
// import { IconArrowNarrowRight } from '@tabler/icons-react'
// import LanguageSelector from '@/components/LanguageSelector'

// const Page = () => {
//     const [selectedLanguage, setSelectedLanguage] = useState<string>("")
//     const [error, setError] = useState("")
//     const [toast, setToast] = useState(false)
//     const router = useRouter()

//     const handleErr = () => {
//         setToast(true)
//     }

//     const handleNext = async () => {
//         const token = sessionStorage.getItem("authToken")
//         const userId = 1 // ⚡ still hardcoded for now

//         if (!token) {
//             setError("No auth token found, please signup again.")
//             setToast(true)
//             return
//         }

//         if (!selectedLanguage) {
//             setError("Please select a language.")
//             setToast(true)
//             return
//         }

//         try {
//             const res = await fetch("https://api-test.kardiboxes.com/api/auth/set-language", {
//                 method: "PUT", // 👈 changed from POST
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization": `Bearer ${token}`,
//                 },
//                 body: JSON.stringify({
//                     userId: 1,             // still hardcoded for now
//                     language: selected.code, // e.g. "en", "fr"
//                 }),
//             });


//             if (!res.ok) {
//                 const text = await res.text()
//                 console.error("Raw API Response:", text)
//                 throw new Error("Failed to save language")
//             }


//             // ✅ Success → go to admin page
//             router.push("/adminPage")
//         } catch (err: any) {
//             console.error(err)
//             setError(err.message || "Something went wrong")
//             setToast(true)
//         }
//     }

//     return (
//         <div className=' w-[100vw] h-[100dvh] bg-white dark:bg-[#000000] relative flex items-center justify-center'>
//             <div className=' absolute h-full w-full flex items-center justify-center z-[3]'>
//                 <Image src={ellipse} alt='' />
//             </div>
//             <div className=' absolute h-full w-full flex items-center justify-center z-[3]'>
//                 <Image src={ellipse1} alt='' />
//             </div>
//             <div className=' absolute h-full w-full flex items-center justify-center z-[4]'>
//                 <Image src={ellipse2} alt='' />
//             </div>
//             <div className=' absolute h-full w-full flex items-center justify-center z-[5]'>
//                 <Image src={ellipse3} alt='' />
//             </div>
//             <div className=' absolute h-full w-full flex items-center justify-center z-[6]'>
//                 <Image src={ellipse4} alt='' />
//             </div>
//             <div className=' absolute h-full w-full flex items-center justify-center z-[7]'>
//                 <Image src={ellipse5} alt='' />
//             </div>
//             <div className=' absolute h-full w-full flex items-center justify-center z-[7]'>
//                 <Image src={ellipse6} alt='' />
//             </div>

//             <div className=' absolute h-full w-full bg-slate-900/60 flex flex-col items-center justify-end z-[8]'>
//                 <div className='hidden lg:block w-[100vw] mx-auto bg-[#f6f5f5] dark:bg-black py-[30px]'>
//                     <div className=' w-[70%] m-auto'>
//                         <LanguageSelector onChange={setSelectedLanguage} />
//                         <button
//                             onClick={selectedLanguage ? handleNext : handleErr}
//                             className=' w-[99%] text-center bg-black dark:bg-[#AB4FA8] text-white py-[10px] px-[100px] rounded-md hover:bg-black/60 dark:hover:bg-[#AB4FA8]/60 duration-500'>
//                             Proceed
//                         </button>
//                         {toast && <p className='text-red-500 mt-2'>{error}</p>}
//                     </div>
//                 </div>

//                 <div className=' lg:hidden w-screen bg-white dark:bg-black py-[10px] rounded-t-2xl block px-[10px]'>
//                     <LanguageSelector onChange={setSelectedLanguage} />
//                     <button
//                         onClick={selectedLanguage ? handleNext : handleErr}
//                         className='h-[52px] mb-[10px] text-[15px] font-bold w-full text-center bg-black dark:bg-[#AB4FA8] text-white py-[10px] px-[100px] rounded-xl hover:bg-black/60 dark:hover:bg-[#AB4FA8]/60 duration-500 flex items-center justify-center'>
//                         Proceed <IconArrowNarrowRight stroke={2} size={14} className=' ml-[4px]' />
//                     </button>
//                     {toast && <p className='text-red-500 mt-2'>{error}</p>}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Page


"use client";
import Image from "next/image";
import React, { useState } from "react";
import ellipse from "@/assets/Ellipse 17.png";
import ellipse1 from "@/assets/Ellipse 16.png";
import ellipse2 from "@/assets/Ellipse 15.png";
import ellipse3 from "@/assets/Ellipse 14.png";
import ellipse4 from "@/assets/Ellipse 13.png";
import ellipse5 from "@/assets/Ellipse 12.png";
import ellipse6 from "@/assets/Ellipse 6.png";
import { useRouter } from "next/navigation";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import LanguageSelector from "@/components/LanguageSelector";

const Page = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [toast, setToast] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleNext = async () => {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      setError("No auth token found, please signup again.");
      setToast(true);
      return;
    }

    try {
      const res = await fetch(
        "https://api-test.kardiboxes.com/api/auth/set-language",
        {
          method: "PUT", // ✅ must be PUT, not POST
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            userId: 1, // ⚡ still hardcoded
            language: selectedLanguage,
          }),
        }
      );

      if (!res.ok) {
        const text = await res.text();
        console.error("Raw API Response:", text);
        throw new Error("Failed to save language");
      }

      router.push("/adminPage");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong");
      setToast(true);
    }
  };

  return (
    <div className="w-[100vw] h-[100dvh] bg-white dark:bg-[#000000] relative flex items-center justify-center">
      {/* Background shapes */}
      {[ellipse, ellipse1, ellipse2, ellipse3, ellipse4, ellipse5, ellipse6].map(
        (src, i) => (
          <div
            key={i}
            className={`absolute h-full w-full flex items-center justify-center z-[${i +
              3}]`}
          >
            <Image src={src} alt="" />
          </div>
        )
      )}

      <div className="absolute h-full w-full bg-slate-900/60 flex flex-col items-center justify-end z-[10]">
        <div className="hidden lg:block w-[100vw] mx-auto bg-[#f6f5f5] dark:bg-black py-[30px]">
          <div className="w-[70%] m-auto">
            <LanguageSelector onSelect={setSelectedLanguage} />
            <button
              onClick={handleNext}
              disabled={!selectedLanguage}
              className={`w-[99%] text-center py-[10px] px-[100px] rounded-md text-white duration-500 ${
                selectedLanguage
                  ? "bg-black dark:bg-[#AB4FA8] hover:bg-black/60 dark:hover:bg-[#AB4FA8]/60"
                  : "bg-black/40 dark:bg-[#AB4FA8]/40 cursor-not-allowed"
              }`}
            >
              Proceed
            </button>
            {toast && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden w-screen bg-white dark:bg-black py-[10px] rounded-t-2xl block px-[10px]">
          <LanguageSelector onSelect={setSelectedLanguage} />
          <button
            onClick={handleNext}
            disabled={!selectedLanguage}
            className={`h-[52px] mb-[10px] text-[15px] font-bold w-full text-center py-[10px] px-[100px] rounded-xl flex items-center justify-center duration-500 text-white ${
              selectedLanguage
                ? "bg-black dark:bg-[#AB4FA8] hover:bg-black/60 dark:hover:bg-[#AB4FA8]/60"
                : "bg-black/40 dark:bg-[#AB4FA8]/40 cursor-not-allowed"
            }`}
          >
            Proceed <IconArrowNarrowRight stroke={2} size={14} className="ml-2" />
          </button>
          {toast && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Page;

