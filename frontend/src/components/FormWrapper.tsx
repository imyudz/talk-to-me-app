'use client'
import { useRef, useState } from "react";
import Button from "./Button";
import { Input } from "./Input";

export default function FormWrapper() {

    const [entryMode, setEntryMode] = useState<'join' | 'new'>('join');
    console.log(entryMode);

    const defaultSpanStyle: string = "w-1/2 text-center text-md p-3 rounded-t-lg font-medium text-md cursor-pointer";
    const selectedSpanStyle: string = "text-primary-light bg-gray-600"

    const handleEntryMode = (mode: 'join' | 'new') => {
        setEntryMode(mode);
    };

    const name = useRef<HTMLInputElement>(null);
    const id = useRef<HTMLInputElement>(null);

    return (
        <div className="w-full">
                <div className="flex items-center">
                  <span className={`${defaultSpanStyle} ${entryMode === 'join' && selectedSpanStyle}`} onClick={() => handleEntryMode('join')}>Ingressar</span>
                  <span className={`${defaultSpanStyle} ${entryMode === 'new' && selectedSpanStyle}`} onClick={() => handleEntryMode('new')}>Nova Reunião</span>
                </div>
                <form action="" className="space-y-8 bg-gray-600 px-10 py-12 rounded-b-lg">
                    <Input placeholder="Seu nome" type="text" />
                        {
                            entryMode === 'join' && <Input placeholder="ID da Reunião" type="text"/>
                        }
                    <Button title="Entrar" type="button" />
                </form>
        </div>
    );
}