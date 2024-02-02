'use client'

import Button from "./Button";
import { Input } from "./Input";

export default function FormWrapper() {
    return (
        <div className="w-full">
              <div className="flex items-center">
                <span className="bg-gray-600 w-1/2 text-center text-md p-3 rounded-t-lg font-medium text-primary-light text-md">Ingressar</span>
                <span className="w-1/2 text-center p-3 rounded-t-lg text-md font-medium">Nova Reunião</span>
              </div>
              <form action="" className="space-y-8 bg-gray-600 px-10 py-12 rounded-b-lg">
                  <Input placeholder="Seu nome" type="text" />
                  <Input placeholder="ID da Reunião" type="text" />
    
                  <Button title="Entrar" type="button" />
              </form>
        </div>
    );
}