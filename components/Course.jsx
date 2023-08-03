import { Typography } from "@material-tailwind/react";
import VideoCard from "./VideoCard";


export default function Course() {

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

  return (
    <section className="bg-white py-14">
      <div className="px-4 max-w-screen-xl mx-auto">
        <div className="relative w-max">
          <Typography variant="h3" className="font-semibold">Daftar Course</Typography>
          <div className="before:content=[''] before:absolute before:-bottom-3 before:bg-primer before:h-2 before:w-1/2 before:rounded-full"></div>
        </div>
        <div className="mt-5">
          <Typography variant="h5" className="text-center">Video</Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {videos?.map((item) => {
            return (
              <VideoCard
                key={item.id}
                videoId={item.videoId}
              />
            )
          })}
        </div>
        <div className="mt-5">
          <Typography variant="h5" className="text-center">Podcast</Typography>
        </div>
      </div>
    </section>
  )
}
