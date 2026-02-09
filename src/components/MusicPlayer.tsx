"use client";

import Image from "next/image";
import { iconAlbumArt, iconNext, iconPause, iconPlay, iconPrevious, iconRepeat, iconShuffle, iconVolume } from "../../public/img/assetsimg";
import { useState } from "react";

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

  type PlayerStatus = 'playing' | 'paused' | 'loading';
  const [playerState, setPlayerState] = useState<PlayerStatus>('paused');
  const [playerProgress, setPlayerProgress] = useState(35);
  const [volumeProgress, setVolumeProgress] = useState(70);

  const handlePlayerProgressState = (newValue: number) => {
    setPlayerProgress(Math.max(0, Math.min(newValue, 100)));
  }

  const handleVolumeProgressState = (newValue: number) => {
    setVolumeProgress(Math.max(0, Math.min(newValue, 100)));
  }

  return (
    <div className="w-full items-center">
      <div className="flex flex-col w-125 h-87.5 rounded-3xl mx-auto p-16 bg-pause gap-20">

        <section id="media-info-section" className="relative flex flex-col w-full h-[142px] items-start">
          <div id="judul-lagu-group" className="flex w-full h-[120px] items-center gap-24">
            <div id="artwork-lagu" className="flex w-[120px] h-[120px] bg-album-gradient rounded-xl items-center justify-center">
              <Image id="icon-player" src={iconAlbumArt} alt="icon-player" width={48} height={60} />
            </div>
            <div id="judul-lagu" className="flex flex-col justify-center gap-8 h-17">
              <h1 className="text-lg font-bold">Awesome Song Title</h1>
              <h2 className="text-sm">Amazing Artist</h2>
            </div>
          </div>
          <div className="flex absolute bottom-0 w-full gap-24 h-4xl ">
            <div className="w-[120px]"></div>
            <div className="h-full flex items-end gap-4">
              <div className="w-8 h-7 bg-primary-300">&nbsp;</div>
              <div className="w-8 h-17 bg-primary-300">&nbsp;</div>
              <div className="w-8 h-7 bg-primary-300">&nbsp;</div>
              <div className="w-8 h-9 bg-primary-300">&nbsp;</div>
              <div className="w-8 h-16 bg-primary-300">&nbsp;</div>
            </div>
          </div>
        </section>

        <section id="play-progress-section" className="w-full h-8 bg-gray-800 rounded-full ">
          <div className={`h-8 bg-gray-400 rounded-l-full 
            ${playerProgress===100 && ('rounded-r-full')}
            `} style={{ width: `${playerProgress}%` }}>&nbsp;</div>
        </section>

        <section id="play-time-section" className="flex justify-between text-xs text-neutral-500 ">
          <span>1:23</span>
          <span>3:45</span>
        </section>

        <section id="controls-grop-section" className="flex items-center justify-center gap-[25.67px] h-56 text-xs text-neutral-500">
          <div id="control-button-shuffle" className="w-36 h-36 rounded-md flex items-center justify-center bg-neutral-800">
            <Image id="icon-player" src={iconShuffle} alt="icon-player" width={20} height={20} />
          </div>
          <div id="control-button-previous" className="w-36 h-36 rounded-md flex items-center justify-center bg-neutral-800">
            <Image id="icon-player" src={iconPrevious} alt="icon-player" width={20} height={20} />
          </div>
          <div id="control-button-play" className="w-52 h-52 rounded-full flex items-center justify-center bg-primary-300">
            <Image id="icon-player" src={playerState ==='paused' ? iconPause : iconPlay} alt="icon-player" width={20} height={20} />
          </div>
          <div id="control-button-next" className="w-36 h-36 rounded-md flex items-center justify-center bg-neutral-800">
            <Image id="icon-player" src={iconNext} alt="icon-player" width={20} height={20} />
          </div>
          <div id="control-button-repeat" className="w-36 h-36 rounded-md flex items-center justify-center bg-neutral-800">
            <Image id="icon-player" src={iconRepeat} alt="icon-player" width={20} height={20} />
          </div>
        </section>

        <section id="volume-control-section" className="flex items-center gap-6">
          <Image id="icon-player" src={iconVolume} alt="icon-player" width={16} height={16} />
          <div id="play-progress" className="w-full h-4 bg-gray-800 rounded-full">
            <div className={`
              h-4 bg-gray-400 rounded-l-full
              ${volumeProgress===100 && ('rounded-r-full')}
              `}
              style={{ width: `${volumeProgress}%` }}>&nbsp;</div>
          </div>
        </section>

      </div>
    </div>
  );
}
