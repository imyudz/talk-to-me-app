import Chat from "@/components/Chat";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Room({params}: {params: {id: string}}){
    return (
        <div className="h-screen">
            <Header/>
            <main className="max-w-[86rem] grid lg:grid-cols-[1fr_25rem] grid-cols-[1fr] mx-auto my-2 gap-4 h-[70%]">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:grid-rows-2">
                    <div className="p-2 bg-gray-400 rounded-md w-full h-full relative">
                        <video className="w-full h-full overflow-hidden"></video>
                        <span className="absolute bottom-3">Participant Name</span>
                    </div>
                    <div className="p-2 bg-gray-400 rounded-md w-full h-full relative">
                        <video className="w-full h-full overflow-hidden"></video>
                        <span className="absolute bottom-3">Participant Name</span>
                    </div>
                    <div className="p-2 bg-gray-400 rounded-md w-full h-full relative">
                        <video className="w-full h-full overflow-hidden"></video>
                        <span className="absolute bottom-3">Participant Name</span>
                    </div>
                    <div className="p-2 bg-gray-400 rounded-md w-full h-full relative">
                        <video className="w-full h-full overflow-hidden"></video>
                        <span className="absolute bottom-3">Participant Name</span>
                    </div>
                    
                    {/* <div className="p-2 bg-gray-400 rounded-md min-w-full sm:min-w-[calc(50%-1rem)] h-[calc(50%-1rem)] relative">
                        <video></video>
                        <span className="absolute bottom-3">Participant Name</span>
                    </div>
                    <div className="p-2 bg-gray-400 rounded-md min-w-full sm:min-w-[calc(50%-1rem)] h-[calc(50%-1rem)] relative">
                        <video></video>
                        <span className="absolute bottom-3">Participant Name</span>
                    </div>
                    <div className="p-2 bg-gray-400 rounded-md min-w-full sm:min-w-[calc(50%-1rem)] h-[calc(50%-1rem)] relative">
                        <video></video>
                        <span className="absolute bottom-3">Participant Name</span>
                    </div> */}
                    
                </div>
                <Chat/>
            </main>   
            <Footer/>
        </div>
    );
}
