import Image from "next/image";
import Container from "./Container";
export default function Header(){
    return (
        <header className='bg-gray-500 px-10 py-7 w-full'>
            <Container>
                <div className='flex justify-between items-center'>
                    <Image
                        alt="Talk to Me!"
                        src="/logo.svg"
                        width={130}
                        height={0}
                    />
                    <Image
                        alt=""
                        src="/hero.svg"
                        width={35}
                        height={0}
                    /> 
                </div>
            </Container>
        </header>
    );
}