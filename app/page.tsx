"use client";
import CustomContent from "@/component/customContent";
import Programbox from "@/component/programbox";
import Image from "next/image";
import { useState } from "react";
export type BoxMap = {
  [key: string]: number;
};

type DiagProps = {
  currentDiag: { [k: string]: number };
  setcurrentDiag: React.Dispatch<React.SetStateAction<{ [k: string]: number }>>;
};

function Diag({ currentDiag, setcurrentDiag }: DiagProps) {
  return (
    <>
      {Object.entries(currentDiag).map(([boxName, value]) => (
        (value===1&&<Programbox
          key={boxName}
          title={boxName}
          setcurrentDiag={setcurrentDiag}
          innerElement={CustomContent({title:boxName})}
        />)
      ))}
    </>
  );
}

export default function Home() {
  // const [currentTarget, setcurrentTarget] = useState<string | null>(null);
  const buttons = ["About", "Links", "Work", "FAQ", "Contact"];
  const buttonsImages = [
    "about.png",
    "links.png",
    "work.png",
    "faq.webp",
    "contact.png",
  ];
  const [currentDiag, setcurrentDiag] = useState<BoxMap>({});
  console.log(currentDiag);

  return (
    <>
      <div className="bg-white w-svw h-svh flex justify-center items-center relative overflow-hidden">
        <div className="border-2 border-gray-500 flex flex-col overflow-hidden rounded-2xl min-w-[40vw] h-[60%] relative">
          <div className="bg-[#424242] h-[10%] w-full p-3 font-bold text-white text-2xl ">
            Home
          </div>
          <div className="h-[90%] border-2 border-gray-400 rounded-b-2xl  w-full flex flex-col justify-center items-center gap-10">
            <h1 className="lg:text-6xl md:text-4xl text-2xl ">
              Hi!{" "}
              <b className="font-bold cursive text-amber-500">i'm Nishant</b>
            </h1>
            <h2 className="text-gray-500 text-center">
              Fullstack Developer, trying to be founder!
            </h2>

            <div className="flex gap-5">
              {buttons.map((name, i) => (
                <div key={name}>
                  <button
                    className="bg-transparent duration-250 cursor-pointer hover:scale-105 active:scale-90"
                    onClick={(e) => {
                      setcurrentDiag((prev) => ({
                        ...prev,
                        [name]: 1,
                      }));
                    }}
                    name={name}
                  >
                    <div className="flex flex-col items-center">
                      <Image
                        alt={`icon for ${name}`}
                        src={`/icon_${buttonsImages[i]}`}
                        width={50}
                        height={50}
                        style={{ filter: `drop-shadow(3px 3px 0px gray)` }}
                      />
                      <div className="font-mono font-bold text-lg text-center text-gray ml-6 md:ml-0">
                        {name.toLowerCase()}
                      </div>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Diag currentDiag={currentDiag} setcurrentDiag={setcurrentDiag} />
      </div>
    </>
  );
}
