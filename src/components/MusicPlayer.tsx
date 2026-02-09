"use client";

import Image from "next/image";
import { iconAlbumArt, iconNext, iconPlay, iconPrevious, iconRepeat, iconShuffle, iconVolume } from "../../public/img/assetsimg";

// TODO: Import dependencies yang diperlukan
// import { motion } from "motion/react";
// import { ... } from "lucide-react";

export function MusicPlayer() {
  // TODO: Implementasikan state management untuk playing, paused, loading

  // TODO: Implementasikan handler untuk play/pause

  // TODO: Implementasikan komponen music player sesuai desain Figma
  // Struktur yang perlu dibuat:
  // - Container dengan background dan shadow animations
  // - Album artwork dengan rotation dan scale animations
  // - Equalizer bars dengan stagger effect
  // - Progress bar dengan fill animation
  // - Control buttons (play/pause, skip, volume)

  return (
    <div className="w-full items-center">
      <div className="flex flex-col w-125 h-87.5 rounded-3xl mx-auto p-16 bg-pause">

        <div className="relative flex flex-col w-full m-16 h-35.5 items-start">
          <div id="judul-lagu-group" className="flex w-full h-30 items-center gap-24">
            <div id="artwork-lagu" className="flex w-30 h-30 bg-album-gradient rounded-xl items-center justify-center">
              <Image id="icon-player" src={iconAlbumArt} alt="icon-player" width={48} height={60} />
            </div>
            <div id="judul-lagu" className="flex flex-col justify-center gap-8 h-17">
              <h1 className="text-lg font-bold">Awesome Song Title</h1>
              <h2 className="text-sm">Amazing Artist</h2>
            </div>
          </div>
          <div className="flex absolute bottom-0 w-full gap-24 h-4xl ">
            <div className="w-30"></div>
            <div className="h-full flex items-end gap-4">
              <div className="w-[8px] h-16 bg-primary-300">&nbsp;</div>
              <div className="w-[8px] h-16 bg-primary-300">&nbsp;</div>
              <div className="w-[8px] h-16 bg-primary-300">&nbsp;</div>
              <div className="w-[8px] h-16 bg-primary-300">&nbsp;</div>
              <div className="w-[8px] h-16 bg-primary-300">&nbsp;</div>
            </div>
          </div>
        </div>

        <div id="play-progress" className="w-full h-8 bg-gray-800 rounded-full mb-10">
          <div className="w-2/5 h-8 bg-gray-400 rounded-l-full">&nbsp;</div>
        </div>

        <div id="play-time" className="flex justify-between text-xs text-neutral-500 my-1">
          <span>1:23</span>
          <span>3:45</span>
        </div>

        <div id="controls-gropup" className="flex items-center justify-center gap-[25.67px] h-24 text-xs text-neutral-500 my-20">
          <div id="control-button-shuffle" className="w-36 h-36 rounded-md flex items-center justify-center bg-neutral-800">
            <Image id="icon-player" src={iconShuffle} alt="icon-player" width={20} height={20} />
          </div>
          <div id="control-button-previous" className="w-36 h-36 rounded-md flex items-center justify-center bg-neutral-800">
            <Image id="icon-player" src={iconPrevious} alt="icon-player" width={20} height={20} />
          </div>
          <div id="control-button-play" className="w-52 h-52 rounded-full flex items-center justify-center bg-primary-300">
            <Image id="icon-player" src={iconPlay} alt="icon-player" width={20} height={20} />
          </div>
          <div id="control-button-next" className="w-36 h-36 rounded-md flex items-center justify-center bg-neutral-800">
            <Image id="icon-player" src={iconNext} alt="icon-player" width={20} height={20} />
          </div>
          <div id="control-button-repeat" className="w-36 h-36 rounded-md flex items-center justify-center bg-neutral-800">
            <Image id="icon-player" src={iconRepeat} alt="icon-player" width={20} height={20} />
          </div>
        </div>

        <div className="flex my-10 items-center gap-6">
          <Image id="icon-player" src={iconVolume} alt="icon-player" width={16} height={16} />
          <div id="play-progress" className="w-full h-4 bg-gray-800 rounded-full">
            <div className="w-4/5 h-4 bg-gray-400 rounded-l-full">&nbsp;</div>
          </div>
        </div>

      </div>
    </div>
  );
}
