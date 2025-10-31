"use client";
import { BoxMap } from "@/app/page";
import "./program.css";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type ProgramboxProps = {
  title: string;
  innerElement?: React.ReactNode;
  setcurrentDiag: Dispatch<SetStateAction<BoxMap>>;
//   isvisible:number;
};

export default function Programbox({
  title,
  innerElement,
  setcurrentDiag,
//   isvisible,
}: ProgramboxProps) {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef({ x: 0, y: 0 }); // pointer offset inside the box
  const [dragging, setDragging] = useState(false);
  const [pos, setPos] = useState({ x: 200, y: 200 }); // initial position

  // start drag — compute offset between pointer and element's top-left
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!boxRef.current) return;
    const rect = boxRef.current.getBoundingClientRect();
    offsetRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    setDragging(true);
    // prevent text selection while dragging
    (document.body.style as any).userSelect = "none";
  };
  useEffect(() => {
    if (!dragging) return;

    const handleMove = (e: MouseEvent) => {
      // compute new top-left by subtracting the stored offset
      setPos({
        x: e.clientX - offsetRef.current.x,
        y: e.clientY - offsetRef.current.y,
      });
    };

    const handleUp = () => {
      setDragging(false);
      (document.body.style as any).userSelect = ""; // restore
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
      (document.body.style as any).userSelect = "";
    };
  }, [dragging]);

  return (
    <div
      ref={boxRef}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        // minWidth: "45vw",
        // height: "60%",
        
 
      }}
      className="container border-2 border-gray-600 w-[50vw] h-[65%] flex flex-col overflow-hidden rounded-2xl bg-white "
    >
      <div
        onMouseDown={handleMouseDown}
        className="bg-[#424242] h-[10%] w-full p-3 font-bold text-white text-2xl flex justify-between items-center cursor-grab"
        //grabbing cursor while dragging
        style={{ userSelect: "none", touchAction: "none" as const }}
        onMouseUp={() => setDragging(false)}
      >
        <div>{title}</div>
        <div
          className="cursor-pointer hover:scale-[1.1] active:scale-[0.95]"
          onClick={() =>
            setcurrentDiag((prev) => ({
              ...prev,
              [title]: 0,
            }))
          }
        >
          [x]
        </div>
      </div>

      <div className="h-[90%] border-2 border-gray-400 rounded-b-2xl w-full flex flex-col justify-center items-center gap-10">
        {innerElement}
      </div>
    </div>
  );
}
