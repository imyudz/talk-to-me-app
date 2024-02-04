interface IButton{
    title: string
    type: 'button' | 'submit' | 'reset'
}


export default function Button({title, type}: IButton){
    return(
        <button className='bg-primary-light hover:bg-opacity-80 transition duration-300 font-medium w-full text-primary-dark rounded-md py-2' type={type}>
            <span>{title}</span>
        </button>
    );
}