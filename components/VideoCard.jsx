import { useState, useEffect } from "react";
import YouTube from 'react-youtube';
import axios from 'axios';
import { ClockIcon, HandThumbUpIcon } from '@heroicons/react/24/outline'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export default function VideoCard({ videoId }) {
    const [videoData, setVideoData] = useState({
        title: "Video Title",
        likeCount: 0,
        viewCount: 0,
    });

    useEffect(() => {
        // Fetch video data using YouTube API or any other method
        // Replace 'YOUR_API_KEY' with your actual YouTube API key
        const apiKey = 'AIzaSyDE7BPQ5BFeFd-8ba1oMns5_ADRqvKHuwg';
        axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,statistics&key=${apiKey}`)
            .then(response => {
                const { title } = response.data.items[0].snippet;
                const { likeCount, viewCount } = response.data.items[0].statistics;
                setVideoData({
                    title,
                    likeCount,
                    viewCount,
                });
            })
            .catch(error => {
                console.error('Error fetching video data:', error);
            });
    }, [videoId]);

    const opts = {
        width: '100%',
        height: '100%',
        playerVars: {
            controls: 1,
            disablekb: 1,
        },
    };

    return (
        <Card className="max-w-[20rem]">
            <CardHeader shadow={false} floated={false} color="blue-gray" className="m-0 rounded-b-none h-56">
                <YouTube videoId={videoId} opts={opts} className="h-full border-4 border-red-500" />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {videoData.title}
                </Typography>
            </CardBody>
            <CardFooter className="pt-5 border-t px-3">
                <div className="flex flex-row justify-between mb-4">
                    <div className="flex flex-row items-center">
                        <HandThumbUpIcon className="w-6 h-6 mr-2 text-blue-700" />
                        <p className="text-gray-700 text-base">
                            {videoData.likeCount}
                        </p>
                    </div>
                    <div className="flex flex-row items-center">
                        <ClockIcon className="w-6 h-6 mr-2 text-blue-700" />
                        <p className="text-gray-700 text-base">
                            {videoData.viewCount}
                        </p>
                    </div>
                    <Button
                        size="sm"
                        type="button"
                        className="font-montserrat !bg-red-500 px-6 py-2.5 text-white font-semibold text-xs rounded-md shadow-none hover:shadow-none"
                    >
                        Subscribe
                    </Button>
                </div>
            </CardFooter>
        </Card>
        // <Card className="rounded-lg shadow-lg bg-white max-w-sm">
        //     <YouTube videoId={videoId} opts={opts} className="rounded-t-lg" />
        //     <CardBody>
        //         <div className="divide-solid divide-gray-500">
        //             <h5 className="text-gray-900 text-lg font-medium mb-4 text-center">{videoData.title}</h5>
        //         </div>
        //         <div className="flex flex-row justify-between mb-4">
        //             <div className="flex flex-row items-center">
        //                 <HandThumbUpIcon className="w-6 h-6 mr-2 text-blue-700" />
        //                 <p className="text-gray-700 text-base">
        //                     {videoData.likeCount}
        //                 </p>
        //             </div>
        //             <div className="flex flex-row items-center">
        //                 <ClockIcon className="w-6 h-6 mr-2" />
        //                 <p className="text-gray-700 text-base">
        //                     {videoData.viewCount}
        //                 </p>
        //             </div>
        //             <button
        //                 type="button"
        //                 className="px-6 py-2.5 bg-merah text-putih font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-red-900 hover:shadow-lg focus:bg-red-900 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        //             >
        //                 Subscribe
        //             </button>
        //         </div>
        //     </CardBody>
        // </Card>
    );
}
