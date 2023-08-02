import React from "react";
import VideoCard from "@/components/VideoCard";
import MusicCard from "@/components/MusicCard";
import Link from "next/link";
import UserLayout from "@/components/UserLayout";

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
    <>
      <UserLayout>
        <section className="bg-white">
          <div className="bg-[#EFF5F5]">
            <div className="grid max-w-screen-xl px-4 pt-5 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-6">
                <p className="max-w-2xl mb-2 font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
                  From checkout to global sales tax compliance, companies around
                  the world use Flowbite to simplify their payment stack.
                </p>
                <h1 className="max-w-3xl mb-8 text-5xl font-extrabold tracking-tight leading-none">
                  Belajar tanpa batas akses dengan Course Online kami.
                </h1>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primer focus:ring-4 hover:bg-indigo-700"
                >
                  Get started
                </Link>
              </div>
              <div className="hidden lg:mt-0 lg:col-span-6 lg:flex">
                <img src="/person.png" alt="mockup" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
            {videos.map((video) => (
              <VideoCard key={video.id} videoId={video.videoId} />
            ))}
          </div>
        </section>
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
    </>
  );
}
