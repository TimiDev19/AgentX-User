// // "use client";

// // import React, { useEffect, useState } from "react";

// // interface Country {
// //   name: string;
// //   code: string;
// //   flag: string;
// //   dial: string;
// // }

// // export default function CountrySelector() {
// //   const [countries, setCountries] = useState<Country[]>([]);
// //   const [selectedCode, setSelectedCode] = useState<string>("");

// //   useEffect(() => {
// //     async function fetchCountries() {
// //       try {
// //         const res = await fetch(
// //           "https://restcountries.com/v3.1/all?fields=name,cca2,flags,idd"
// //         );
// //         if (!res.ok) {
// //           throw new Error(`API error: ${res.status}`);
// //         }

// //         const data = await res.json();
// //         if (!Array.isArray(data)) {
// //           console.error("Unexpected API response:", data);
// //           return;
// //         }

// //         const mapped: Country[] = data
// //           .map((c: any) => ({
// //             name: c.name.common ?? "",
// //             code: c.cca2 ?? "",
// //             flag: c.flags.png ?? "",
// //             dial: c.idd?.root
// //               ? `${c.idd.root}${c.idd.suffixes?.[0] ?? ""}`
// //               : "",
// //           }))
// //           .filter((c: Country) => c.dial);

// //         mapped.sort((a, b) => a.name.localeCompare(b.name));
// //         setCountries(mapped);
// //       } catch (err) {
// //         console.error("Failed to fetch countries:", err);
// //       }
// //     }

// //     fetchCountries();
// //   }, []);

// //   return (
// //     <div className="w-full max-w-sm mx-auto">
// //       <label className="block mb-2 text-sm font-medium">Select Country</label>
// //       <select
// //         className="w-full border p-2 rounded"
// //         value={selectedCode}
// //         onChange={(e) => setSelectedCode(e.target.value)}
// //       >
// //         <option value="">Choose a country</option>
// //         {countries.map((c) => (
// //           <option key={c.code} value={c.code}>
// //             {c.name} ({c.dial})
// //           </option>
// //         ))}
// //       </select>

// //       {selectedCode && (
// //         <div className="mt-4">
// //           <label className="block mb-2 text-sm font-medium">Phone Number</label>
// //           <div className="flex">
// //             <span className="px-3 py-2 border rounded-l-md bg-gray-100 text-sm flex items-center">
// //               {countries.find((c) => c.code === selectedCode)?.dial}
// //             </span>
// //             <input
// //               type="tel"
// //               placeholder="Enter phone number"
// //               className="flex-1 border rounded-r-md p-2"
// //             />
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


// "use client";

// import { IconCaretDown } from "@tabler/icons-react";
// import React, { useEffect, useState } from "react";

// interface Country {
//     name: string;
//     code: string;
//     flag: string;
//     dial: string;
// }

// export default function CountrySelector() {
//     const [countries, setCountries] = useState<Country[]>([]);
//     const [selected, setSelected] = useState<Country | null>(null);
//     const [open, setOpen] = useState(false);
//     const [query, setQuery] = useState("");

//     useEffect(() => {
//         async function fetchCountries() {
//             const res = await fetch(
//                 "https://restcountries.com/v3.1/all?fields=name,cca2,flags,idd"
//             );
//             const data = await res.json();

//             const mapped: Country[] = data
//                 .map((c: any) => ({
//                     name: c.name.common ?? "",
//                     code: c.cca2 ?? "",
//                     flag: c.flags.png ?? "",
//                     dial: c.idd?.root
//                         ? `${c.idd.root}${c.idd.suffixes?.[0] ?? ""}`
//                         : "",
//                 }))
//                 .filter((c: Country) => c.dial);

//             mapped.sort((a, b) => a.name.localeCompare(b.name));
//             setCountries(mapped);

//             // Default: select first
//             if (mapped.length) setSelected(mapped[0]);
//         }
//         fetchCountries();
//     }, []);

//     const filtered = query
//         ? countries.filter((c) =>
//             c.name.toLowerCase().includes(query.toLowerCase())
//         )
//         : countries;

//     return (
//         <div className="w-fit mx-auto ">
//             {/* Country Dropdown */}
//             <div className="relative">
//                 <button
//                     type="button"
//                     onClick={() => setOpen(!open)}
//                     className="flex items-center w-full mr-[20px] rounded-lg px-3 py-2 bg-transparent dark:text-white text-black justify-center"
//                 >

//                     {selected && (
//                         <img src={selected.flag} alt="" className="w-5 h-5 mr-2" />
//                     )}
//                     <span className="flex-1 text-left">
//                         {selected ? `${selected.dial}` : "---"}
//                     </span>
//                     <svg
//                         className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""
//                             }`}
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                     >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </svg>

//                 </button>

//                 {open && (
//                     <div className="absolute bottom-full mb-1 left-0 w-full min-w-[250px] bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
//                         <div className="p-2">
//                             <input
//                                 type="text"
//                                 placeholder="Search country..."
//                                 value={query}
//                                 onChange={(e) => setQuery(e.target.value)}
//                                 className="w-full border px-2 py-1 rounded"
//                             />
//                         </div>
//                         <ul className="max-h-48 overflow-y-auto">
//                             {filtered.map((c) => (
//                                 <li
//                                     key={c.code}
//                                     onClick={() => {
//                                         setSelected(c);
//                                         setOpen(false);
//                                         setQuery("");
//                                     }}
//                                     className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
//                                 >
//                                     <img src={c.flag} alt="" className="w-5 h-5" />
//                                     <span className="ml-auto text-gray-500">{c.dial}</span>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}


//             </div>
//         </div>
//     );
// }


"use client";

import React, { useEffect, useState } from "react";

interface Country {
  name: string;
  code: string;
  flag: string;
  dial: string;
}

interface Props {
  onSelectCode: (dial: string) => void; // 🔑 callback to parent
}

export default function CountrySelector({ onSelectCode }: Props) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selected, setSelected] = useState<Country | null>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchCountries() {
      const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,cca2,flags,idd"
      );
      const data = await res.json();

      const mapped: Country[] = data
        .map((c: any) => ({
          name: c.name.common ?? "",
          code: c.cca2 ?? "",
          flag: c.flags.png ?? "",
          dial: c.idd?.root
            ? `${c.idd.root}${c.idd.suffixes?.[0] ?? ""}`
            : "",
        }))
        .filter((c: Country) => c.dial);

      mapped.sort((a, b) => a.name.localeCompare(b.name));
      setCountries(mapped);

      // Default: select first
      if (mapped.length) {
        setSelected(mapped[0]);
        onSelectCode(mapped[0].dial); // 🔑 notify parent
      }
    }
    fetchCountries();
  }, [onSelectCode]);

  const filtered = query
    ? countries.filter((c) =>
        c.name.toLowerCase().includes(query.toLowerCase())
      )
    : countries;

  return (
    <div className="w-fit mx-auto">
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex items-center w-full mr-[20px] rounded-lg px-3 py-2 bg-transparent dark:text-white text-black justify-center"
        >
          {selected && (
            <img src={selected.flag} alt="" className="w-5 h-5 mr-2" />
          )}
          <span className="flex-1 text-left">
            {selected ? `${selected.dial}` : "---"}
          </span>
          <svg
            className={`w-4 h-4 transition-transform ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {open && (
          <div className="absolute bottom-full mb-1 left-0 w-full min-w-[250px] bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
            <div className="p-2">
              <input
                type="text"
                placeholder="Search country..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full border px-2 py-1 rounded"
              />
            </div>
            <ul className="max-h-48 overflow-y-auto">
              {filtered.map((c) => (
                <li
                  key={c.code}
                  onClick={() => {
                    setSelected(c);
                    setOpen(false);
                    setQuery("");
                    onSelectCode(c.dial); // 🔑 notify parent when changed
                  }}
                  className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
                >
                  <img src={c.flag} alt="" className="w-5 h-5" />
                  <span className="ml-auto text-gray-500">{c.dial}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
