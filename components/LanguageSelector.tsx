// import { useState } from "react";

// const languages = [
//   { code: "en", name: "English", flag: "🇺🇸" },
//   { code: "ar", name: "Arabic", flag: "🇸🇦" },
//   { code: "es", name: "Spanish", flag: "🇪🇸" },
//   { code: "fr", name: "French", flag: "🇫🇷" },
//   { code: "de", name: "German", flag: "🇩🇪" },
// ];

// export default function LanguageSelector() {
//   const [selected, setSelected] = useState(languages[1]); // default Arabic
//   const [open, setOpen] = useState(false);
//   const [search, setSearch] = useState("");

//   const filtered = languages.filter((lang) =>
//     lang.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="w-full mx-auto p-6">
//       {/* Selected Language */}
//       <div
//         className="border-b p-4 cursor-pointer flex justify-between items-center"
//         onClick={() => setOpen(true)}
//       >
//         <div>
//           <p className="text-gray-500 text-sm">Language</p>
//           <p className="text-xl font-semibold">{selected.name}</p>
//         </div>
//         <span className="text-lg">⌄</span>
//       </div>

//       {/* Proceed Button */}
      

//       {/* Language Picker Modal */}
//       {open && (
//         <div className="fixed inset-0 bg-black/50 flex items-end justify-center">
//           <div className="bg-white w-full max-w-md rounded-t-2xl p-4">
//             {/* Search + Done */}
//             <div className="flex justify-between items-center gap-2">
//               <input
//                 type="text"
//                 placeholder="Search Language"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="flex-1 border rounded-lg px-3 py-2"
//               />
//               <button
//                 className="text-blue-500 font-semibold"
//                 onClick={() => setOpen(false)}
//               >
//                 Done
//               </button>
//             </div>

//             {/* Language List */}
//             <div className="mt-4 max-h-60 overflow-y-auto">
//               {filtered.map((lang) => (
//                 <div
//                   key={lang.code}
//                   className={`flex items-center gap-2 p-3 cursor-pointer rounded-lg ${
//                     lang.code === selected.code
//                       ? "bg-gray-100 font-bold"
//                       : "hover:bg-gray-50"
//                   }`}
//                   onClick={() => setSelected(lang)}
//                 >
//                   <span className="text-xl">{lang.flag}</span>
//                   <span>{lang.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// import { useState } from "react";

// const languages = [
//   { code: "en", name: "English", flag: "🇺🇸" },
//   { code: "ar", name: "Arabic", flag: "🇸🇦" },
//   { code: "es", name: "Spanish", flag: "🇪🇸" },
//   { code: "fr", name: "French", flag: "🇫🇷" },
//   { code: "de", name: "German", flag: "🇩🇪" },
// ];

// export default function LanguageSelector({ onChange }: { onChange?: (code: string) => void }) {
//   const [selected, setSelected] = useState(languages[1]); // default Arabic
//   const [open, setOpen] = useState(false);
//   const [search, setSearch] = useState("");

//   const filtered = languages.filter((lang) =>
//     lang.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const handleSelect = (lang: { code: string; name: string; flag: string }) => {
//     setSelected(lang);
//     setOpen(false);
//     if (onChange) {
//       onChange(lang.code); // ✅ tell parent which language was selected
//     }
//   };

//   return (
//     <div className="w-full mx-auto p-6">
//       {/* Selected Language */}
//       <div
//         className="border-b p-4 cursor-pointer flex justify-between items-center"
//         onClick={() => setOpen(true)}
//       >
//         <div>
//           <p className="text-gray-500 text-sm">Language</p>
//           <p className="text-xl font-semibold">{selected.name}</p>
//         </div>
//         <span className="text-lg">⌄</span>
//       </div>

//       {/* Language Picker Modal */}
//       {open && (
//         <div className="fixed inset-0 bg-black/50 flex items-end justify-center">
//           <div className="bg-white w-full max-w-md rounded-t-2xl p-4">
//             {/* Search + Done */}
//             <div className="flex justify-between items-center gap-2">
//               <input
//                 type="text"
//                 placeholder="Search Language"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 className="flex-1 border rounded-lg px-3 py-2"
//               />
//               <button
//                 className="text-blue-500 font-semibold"
//                 onClick={() => setOpen(false)}
//               >
//                 Done
//               </button>
//             </div>

//             {/* Language List */}
//             <div className="mt-4 max-h-60 overflow-y-auto">
//               {filtered.map((lang) => (
//                 <div
//                   key={lang.code}
//                   className={`flex items-center gap-2 p-3 cursor-pointer rounded-lg ${
//                     lang.code === selected.code
//                       ? "bg-gray-100 font-bold"
//                       : "hover:bg-gray-50"
//                   }`}
//                   onClick={() => handleSelect(lang)}
//                 >
//                   <span className="text-xl">{lang.flag}</span>
//                   <span>{lang.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

"use client";
import { useState } from "react";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "ar", name: "Arabic", flag: "🇸🇦" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "de", name: "German", flag: "🇩🇪" },
];

export default function LanguageSelector({
  onSelect,
}: {
  onSelect: (lang: string) => void;
}) {
  const [selected, setSelected] = useState(languages[1]); // default Arabic
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = languages.filter((lang) =>
    lang.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (lang: any) => {
    setSelected(lang);
    onSelect(lang.code); // 👈 pass back up to parent
    setOpen(false);
  };

  return (
    <div className="w-full mx-auto p-6">
      {/* Selected Language */}
      <div
        className="border-b p-4 cursor-pointer flex justify-between items-center"
        onClick={() => setOpen(true)}
      >
        <div>
          <p className="text-gray-500 text-sm">Language</p>
          <p className="text-xl font-semibold">{selected.name}</p>
        </div>
        <span className="text-lg">⌄</span>
      </div>

      {/* Language Picker Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-end justify-center">
          <div className="bg-white w-full max-w-md rounded-t-2xl p-4">
            {/* Search + Done */}
            <div className="flex justify-between items-center gap-2">
              <input
                type="text"
                placeholder="Search Language"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 border rounded-lg px-3 py-2"
              />
              <button
                className="text-blue-500 font-semibold"
                onClick={() => setOpen(false)}
              >
                Done
              </button>
            </div>

            {/* Language List */}
            <div className="mt-4 max-h-60 overflow-y-auto">
              {filtered.map((lang) => (
                <div
                  key={lang.code}
                  className={`flex items-center gap-2 p-3 cursor-pointer rounded-lg ${
                    lang.code === selected.code
                      ? "bg-gray-100 font-bold"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => handleSelect(lang)}
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span>{lang.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

