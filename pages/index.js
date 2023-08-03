<<<<<<< HEAD
=======
import React from "react";
>>>>>>> 35af4e8bdbfd99afc16f920befdcbf3d74bec346
import VideoCard from "@/components/VideoCard";
import MusicCard from "@/components/MusicCard";
import Link from "next/link";
import UserLayout from "@/components/UserLayout";
<<<<<<< HEAD
import Image from "next/image";
import Hero from "@/components/Hero";
import Course from "@/components/Course";
=======
>>>>>>> 35af4e8bdbfd99afc16f920befdcbf3d74bec346

const videos = [
  {
    id: 1,
    videoId: "zRAxRdM1NFs",
  },
  {
    id: 2,
    videoId: "FBlHwxNpI70",
  },
  {
    id: 3,
    videoId: "d0LMF1TeL6s",
  },
  {
    id: 4,
    videoId: "d0LMF1TeL6s",
  },
];

const musics = [
  {
    id: 1,
    musicSrc: "/music/nemen.mp3",
  },
  // {
  //   id: 2,
  //   musicSrc: "FBlHwxNpI70",
  // },
  // {
  //   id: 3,
  //   musicSrc: "d0LMF1TeL6s",
  // },
  // {
  //   id: 4,
  //   musicSrc: "d0LMF1TeL6s",
  // },
];

export default function Home() {
  return (
    <UserLayout>
      <Hero />
      <Course />
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {videos.map((video) => (
            <VideoCard key={video.id} videoId={video.videoId} />
          ))}
        </div> */}
      {/* <div className="w-full max-h-min bg-black">
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center mx-6 mt-5">
            {musics.map((music) => (
              <MusicCard key={music.id} mp3Src={music.musicSrc} />
            ))}
          </div>
        </div>
      </div> */}
    </UserLayout>
  );
}
