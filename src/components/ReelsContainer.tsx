import { reels } from "@/app/data";
import Reel from "./Reel";

const ReelsContainer = () => {
  
  return (
    <div className="font-sans flex justify-center items-center h-screen bg-black">
      <div className="reel-container h-[75vh] w-[95vw] sm:w-[80vw] md:w-[60vw] lg:w-[30vw] bg-black rounded-xl flex flex-col gap-8 overflow-auto snap-y snap-mandatory">
        {reels.map((video) => (
          <Reel key={video.id} src={video.src}
          description={video.description}
          username={video.username}
          likes={video.likes}
          shares={video.shares}
          bookmarks={video.bookmarks}

          />
        ))}
      </div>
    </div>
  );
};

export default ReelsContainer;
