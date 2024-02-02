import { ForwardRefRenderFunction, forwardRef } from "react";
interface IInput {
    placeholder: string;
    type: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInput> = ({placeholder, type, ...rest}, ref) => {
    return (
        <div className="w-full">
            <input 
                type={type} 
                placeholder={placeholder}
                ref={ref} 
                {...rest} 
                className='px-4 py-2 outline-none border-transparent border-4 border-solid focus:border-primary-light bg-gray-400 rounded-md w-full placeholder:text-gray-200'
            />
        </div>
    );
}

export const Input = forwardRef(InputBase)