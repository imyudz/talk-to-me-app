'use client'
import { Cam, Mic, Muted, NoScreen, NoVideo, Phone, Screen } from "@/Icons";
import { useState } from "react";


export default function Footer(){

    const [isMuted, setIsMuted] = useState<boolean>(false);
    const [isCameraOff, setIsCameraOff] = useState<boolean>(false);
    const [isScreenShareOff, setIsScreenShareOff] = useState<boolean>(false);

    return(
        <footer className="fixed bottom-0 bg-gray-900 w-full py-5 pb-8">
            <div className="grid grid-cols-3 items-center justify-center">
                <span className="ml-5 text-xl">10:55</span>
                <div className="flex justify-center gap-4 items-center">
                    {
                        !isMuted ? 
                            <Mic width={60} height={47} className="bg-gray-400 p-2 rounded-xl cursor-pointer hover:bg-zinc-600" onClick={() => setIsMuted(true)}/>
                            : <Muted width={60} height={47} className="bg-red-500 p-2 rounded-xl cursor-pointer hover:bg-red-400" onClick={() => setIsMuted(false)}/>
                    }
                    {
                        !isCameraOff ?
                            <Cam width={60} height={47} className="bg-gray-400 p-3 rounded-xl cursor-pointer hover:bg-zinc-600" onClick={() => setIsCameraOff(true)}/>
                            : <NoVideo width={60} height={47} className="bg-red-500 p-1 rounded-xl cursor-pointer hover:bg-red-400" onClick={() => setIsCameraOff(false)}/>
                    }
                    {
                        ! isScreenShareOff ?
                            <Screen width={60} height={47} className="bg-gray-400 p-3 rounded-xl cursor-pointer hover:bg-zinc-600" onClick={() => setIsScreenShareOff(true)}/>
                            : <NoScreen width={60} height={47} className="bg-red-500 p-3 rounded-xl cursor-pointer hover:bg-red-400" onClick={() => setIsScreenShareOff(false)}/>
                    }
                    <Phone width={60} height={47} className="bg-primary-light p-3 rounded-xl cursor-pointer hover:bg-red-500 transition"/>
                </div>
            </div>
            
        </footer>
    );
}