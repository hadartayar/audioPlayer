import React, { useEffect } from "react";
import Channel from './Channel';

export default function Channels(props) {

  const soundtracks = props.tracks.map((track) => {
    return (
      <Channel
        key={track.title}
        soundName={track.title}
        audio={track.audio}
        color={track.color}
        isPlaying={props.isPlaying}
        isStopped={props.isStopped}
        isLooping={props.isLooping}
        playPause={props.playPause}
        cursor={props.cursor} //Set the track Progress
        currentTime={props.currentTime} //Get the time proggress
      />
    );
  });

  return (
    <div>{soundtracks}</div>
  )
}
