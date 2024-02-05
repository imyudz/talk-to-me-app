import Image from "next/image";

export default function Chat(){
    return (
        <aside className=" bg-gray-500 p-4 rounded-md hidden lg:block">
            <div className="relative h-full">
                <div className="bg-gray-400 rounded-md p-3 space-y-1">
                    <div>
                        <span className="font-medium text-base text-primary-light">name</span>
                        <span className="float-right text-sm text-primary-light">12:34</span>
                    </div>
                    <div className="text-sm">
                        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae totam quisquam ullam harum excepturi, magnam, veritatis non tenetur minus doloremque explicabo provident mollitia eum autem quae veniam nesciunt fuga magni.</span>
                    </div>
                </div>
                

                <form action="" className="absolute bottom-2 w-full">
                    <div className="flex relative">
                        <input type="text" name="" id="" className="px-3 py-2 outline-none border-transparent border-2 border-solid focus:border-primary-light bg-gray-400 rounded-md w-full  placeholder:text-gray-200"/>
                        <Image src="/send-arrow.svg" width={25} height={20} alt="enviar comentário" className="absolute cursor-pointer right-2 top-2 bg-gray-400"/>
                    </div>


                </form>
            </div>
            

        </aside>
    );
}