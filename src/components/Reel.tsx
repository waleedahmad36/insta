"use client";
import { useEffect, useRef, useState } from "react";
import { Bookmark, HeartIcon, Share } from "lucide-react";

type ReelProps = {
  src: string;
  username: string;
  description: string;
  likes: string;
  shares: string;
  bookmarks: string;
};

const Reel = ({ src, username, description, likes, shares, bookmarks }: ReelProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showUnmuteBtn, setShowUnmuteBtn] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      async ([entry]) => {
        const video = videoRef.current;
        if (!video) return;

        if (entry.isIntersecting) {
          try {
            video.muted = false;
            await video.play();
            setShowUnmuteBtn(false);
          } catch {
            video.muted = true;
            await video.play();
            setShowUnmuteBtn(true);
          }
        } else {
          video.pause();
          video.muted = true;
        }
      },
      { threshold: 0.75 }
    );

    const currentVideo = videoRef.current;
    if (currentVideo) observer.observe(currentVideo);

    return () => {
      if (currentVideo) observer.unobserve(currentVideo);
    };
  }, []);

  const handleUnmute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.play().catch(() => {});
      setShowUnmuteBtn(false);
    }
  };

  return (
    <div className="relative reel bg-black/60 min-h-[70vh] min-w-full snap-start">
      <video
        ref={videoRef}
        className="w-full h-full object-center"
        src={src}
        loop
        playsInline
        muted
        controls={false}
      />

      {showUnmuteBtn && (
        <button
          onClick={handleUnmute}
          className="absolute top-6 right-6 bg-black/60 text-stone-50 text-sm font-medium px-3 py-1 rounded-lg shadow-md hover:bg-stone-950 transition-all duration-300 hover:shadow-lg cursor-pointer"
        >
          Tap to Unmute 🔊
        </button>
      )}

      {/* Bottom Content */}
      <div className="h-[20%] w-full bg-stone-900/60 absolute bottom-0 rounded-xl">
        <div className="flex px-8 py-2 items-center gap-4">
          <img
            src="/myimg.jpg"
            alt="profile"
            className="w-[30px] h-[30px] rounded-full"
          />
          <h3 className="text-stone-300">{username} .</h3>
          <button className="bg-stone-950 px-2 py-1 rounded-xl border border-stone-700 text-sm">
            Follow
          </button>
        </div>
        <div className="px-8 py-2">
          <p className="text-stone-300 text-sm">{description}</p>
        </div>
      </div>

      {/* Sidebar Actions */}
      <div className="absolute right-0 bottom-5 bg-black/60 min-h-[40%] w-[50px] flex flex-col gap-4 py-8 px-2 rounded-xl">
        <div className="flex flex-col items-center gap-2">
          <HeartIcon className="text-stone-300 w-6 h-6" />
          <span className="text-stone-300 text-xs">{likes}</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Share className="text-stone-300 w-6 h-6" />
          <span className="text-stone-300 text-xs">{shares}</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Bookmark className="text-stone-300 w-6 h-6" />
          <span className="text-stone-300 text-xs">{bookmarks}</span>
        </div>
      </div>
    </div>
  );
};

export default Reel;
