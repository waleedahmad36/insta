import ReelsContainer from "@/components/ReelsContainer";
import Sidebar from "@/components/Sidebar";
import BottomNav from "@/components/BottomNav";
import { MessageCircleCode } from "lucide-react";

export default function Home() {
  return (
    <div className="font-sans flex h-screen w-full bg-black text-white overflow-hidden">
      {/* Sidebar for large screens */}
      <div className="hidden lg:block w-[250px] border-r border-gray-700">
        <Sidebar />
      </div>

      {/* Main Reels container, centered */}
      <div className="flex flex-1 justify-center items-center relative">
        <ReelsContainer />
      </div>

      {/* Bottom nav for small screens only */}
      <div className="lg:hidden fixed bottom-0 w-full z-50">
        <BottomNav />
      </div>


      <div  className="hidden lg:flex absolute right-8 bottom-8 bg-stone-900 py-3 px-4 rounded-xl gap-8"  >
        <div  className="flex gap-2" >
          <MessageCircleCode   />
        <span className="text-sm font-medium">Message</span>
        </div>

        <div  className="flex" >
          <img src="https://avatar.iran.liara.run/public" alt=""    className="w-[20px] h-[20px] rounded-full" />
          <img src="https://avatar.iran.liara.run/public" alt=""    className="w-[20px] h-[20px] rounded-full" />
          <img src="https://avatar.iran.liara.run/public" alt=""    className="w-[20px] h-[20px] rounded-full" />
        </div>
        
      </div>
    </div>
  );
}
