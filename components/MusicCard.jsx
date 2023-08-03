import React from "react";
import ReactAudioPlayer from "react-audio-player";

const MusicCard = ({ mp3Src }) => {
  return (
    <ReactAudioPlayer
      src={mp3Src}
      controls
      autoPlay={false} // Set to true if you want the audio to start playing automatically
    />
  );
};

export default MusicCard;
