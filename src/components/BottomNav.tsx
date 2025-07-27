import { Home, Search, PlusSquare, Heart, User } from "lucide-react";

const BottomNav = () => {
  return (
    <div className="flex justify-between items-center px-6 py-3">
      <Home className="w-6 h-6" />
      <Search className="w-6 h-6" />
      <PlusSquare className="w-6 h-6" />
      <Heart className="w-6 h-6" />
      <User className="w-6 h-6" />
    </div>
  );
};

export default BottomNav;
