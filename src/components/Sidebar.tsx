import { Home, Film, Send, Compass, User, User2, Settings, Plus, LogOut } from "lucide-react";
import Image from "next/image";
import WaleedStagramLogo from "./WaleedStagramLogo";

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-between h-full p-4">
      {/* Top Logo */}
        <WaleedStagramLogo/>

      {/* Menu */}
      <div className="mt-10 flex flex-col gap-4">
        <NavItem icon={<Home size={24} />} label="Home" />
        <NavItem icon={<Film size={24} />} label="Reels" />
        <NavItem icon={<Send size={24} />} label="Messages" />
        <NavItem icon={<Compass size={24} />} label="Explore" />
        <NavItem icon={<User2 size={24} />} label="Profile" />
        <NavItem icon={<Settings size={24} />} label="Settings" />
        <NavItem icon={<Plus size={24} />} label="Create Post" />
      </div>

      <div  className="mt-10"  >
        <div className="flex items-center gap-3 px-2 py-2 hover:bg-white/10 rounded-lg cursor-pointer text-red-500">
      <LogOut className="w-6 h-6" />
      <span>Logout</span>
    </div>
      </div>

      {/* Profile at bottom */}
      <div className="mt-auto flex items-center gap-2 px-2">
        <img
          src="https://picsum.photos/200"
          alt="Profile"
          width={32}
          height={32}
          className="rounded-full"
        />
        <span className="font-medium">waleedahmad_09 .</span>
      </div>
    </div>
  );
}

function NavItem({ icon, label }:{ icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 px-2 py-2 hover:bg-white/10 rounded-lg cursor-pointer">
      {icon}
      <span>{label}</span>
    </div>
  );
}
