"use client";

import Image from "next/image";
import { iconAlbumArt, iconNext, iconPause, iconPlay, iconPrevious, iconRepeat, iconShuffle, iconVolume } from "../../public/img/assetsimg";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

// TODO: Import dependencies yang diperlukan
// import { motion } from "motion/react";
// import { ... } from "lucide-react";

const eqBar = [1, 1, 1, 1, 1];
const RandomDelay = eqBar.map(() => Math.random() * 10);
const formatTime = (ms: number) => {
    const totalSecomds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSecomds / 60);
    const seconds = totalSecomds % 60;

    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

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
    const volumeProgress = 70;

    const playingDuration = 1000 * 60 * 3.75;
    const [currentMs, setCurrentMs] = useState(0);
    const progressPercentage = (currentMs / playingDuration) * 100;
    const playingTime = formatTime(playingDuration);
    const [currentPlayingTime, setCurrentPlayingTime] = useState("0:00");

    const togglePlay = () => {
        if (playerState === 'loading') return;
        const nextState = playerState === 'playing' ? 'paused' : 'playing';

        setPlayerState('loading');

        setTimeout(() => {
            setPlayerState(nextState);
        }, 500); // --> transisi antara playing dan paused
    };

    useEffect(() => {
        let interval: ReturnType<typeof setInterval> | undefined;
        let intervalValue = 0;

        if (playerState === 'playing') {
            interval = setInterval(() => {
                setCurrentMs((prev) => {
                    intervalValue = prev + 1000;
                    if (intervalValue >= playingDuration) {
                        setPlayerState('paused');
                        return 0;
                    }
                    setCurrentPlayingTime(formatTime(intervalValue));
                    return intervalValue;
                });
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [playerState, playingDuration]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.code === "Space") {
                event.preventDefault();
                togglePlay();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [playerState]);

    const containerVariants = {
        playing: {
            backgroundColor: "var(--play)",
            boxShadow: "0px 0px 40px 10px rgba(124, 58, 237, 0.4)",
            filter: "brightness(100%)",
        },
        paused: {
            backgroundColor: "var(--pause)",
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
            filter: "brightness(100%)",
        },
        loading: {
            backgroundColor: "var(--pause)",
            boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
            filter: "brightness(77%)",
        }
    };

    const btnVariants = {
        initial: {
            scale: 1,
            backgroundColor: "rgba(255, 255, 255, 0)",
        },
        hover: {
            scale: 1.05,
            backgroundColor: "white",
            transition: { type: "spring", stiffness: 400, damping: 17 }
        },
        tap: {
            scale: 0.95,
            transition: { type: "spring", stiffness: 400, damping: 17 }
        },
        loading: {
            scale: 1,
            opacity: 0.5,
            cursor: "not-allowed"
        }
    };

    const iconControlVariant = {
        initial: {
            filter: "brightness(1)"
        },
        hover: {
            filter: "brightness(0)"
        }
    }

    const volumeVariants = {
        initial: {
            backgroundColor: "var(--color-gray-400)"
        },
        hover: {
            backgroundColor: "var(--color-primary-300)"
        }
    };

    return (
        <div className="w-full items-center">
            <motion.div
                initial="loading"
                animate={playerState}
                variants={containerVariants}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col w-125 h-87.5 rounded-3xl mx-auto p-16 bg-pause gap-20">

                <section id="media-info-section" className="relative flex flex-col w-full h-[142px] items-start">
                    <div id="judul-lagu-group" className="flex w-full h-[120px] items-center gap-24">
                        <div
                            id="artwork-lagu"
                            className="flex w-[120px] h-[120px] bg-album-gradient rounded-xl items-center justify-center">
                            <motion.div
                                animate={{
                                    rotate: playerState === 'playing' ? 360 : 0,
                                    scale: playerState === 'playing' ? 1 : (playerState === 'paused' ? 0.95 : 0.9)
                                }}
                                transition={{
                                    rotate: {
                                        duration: playerState === 'playing' ? 20 : 0.5,
                                        repeat: playerState === 'playing' ? Infinity : 0,
                                        ease: playerState === 'playing' ? "linear" : "easeInOut",
                                        repeatType: "loop"
                                    },
                                    scale: {
                                        duration: 0.3
                                    }
                                }}>
                                <Image id="icon-player" src={iconAlbumArt} alt="icon-player" width={48} height={60} />
                            </motion.div>
                        </div>
                        <div id="judul-lagu" className="flex flex-col justify-center gap-8 h-17">
                            <h1 className="text-lg font-bold">Awesome Song Title</h1>
                            <h2 className="text-sm">Amazing Artist</h2>
                        </div>
                    </div>
                    <div className="flex absolute bottom-0 w-full gap-24 h-4xl ">
                        <div className="w-[120px]"></div>
                        <div className="h-full flex items-end gap-4 px-2">
                            {eqBar.map((heightMultiplier, i) => (
                                <motion.div
                                    key={i}
                                    className={`w-8 ${playerState === 'loading' ? 'bg-primary-100' : 'bg-primary-300'}`}
                                    initial={{ height: "20%" }}
                                    animate={{
                                        height: playerState === 'playing' ? "100%" : playerState === 'loading' ? "50%" : "20%",
                                        opacity: playerState === 'loading' ? 0.5 : 1
                                    }}
                                    transition={{
                                        height: {
                                            duration: 0.3,
                                            repeat: playerState === 'playing' ? Infinity : 0,
                                            repeatType: "reverse",
                                            ease: "easeInOut",
                                            delay: RandomDelay[i] * 0.1,
                                        }
                                    }}
                                    style={{
                                        maxHeight: `${heightMultiplier * 100}%`
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section id="play-progress-section" className="w-full h-8 bg-gray-800 rounded-full ">
                    <motion.div
                        id="play-progress-bar"
                        initial={{ width: 0 }}
                        animate={{ width: `${progressPercentage}%` }}
                        transition={{ duration: 0.5 }}
                        className={`h-8 rounded-l-full ${playerState === 'playing' ? 'bg-primary-300' : 'bg-gray-400'}`} />
                </section>

                <section id="play-time-section" className="flex justify-between text-xs text-neutral-500 ">
                    <span>{currentPlayingTime}</span>
                    <span>{playingTime}</span>
                </section>

                <section id="controls-grop-section" className="flex items-center justify-center gap-[25.67px] h-56 text-xs text-neutral-500">
                    <motion.button
                        variants={btnVariants}
                        whileHover={playerState === 'loading' ? "loading" : "hover"}
                        whileTap={playerState === 'loading' ? "loading" : "tap"}
                        disabled={playerState === 'loading'}
                        id="control-button-shuffle"
                        className="w-36 h-36 rounded-md flex items-center justify-center ">
                        <motion.div
                            variants={iconControlVariant}
                            transition={{ duration: 0.2 }}
                            className="flex items-center justify-center"
                        >
                            <Image id="icon-shuffle" src={iconShuffle} alt="icon-player" width={20} height={20} />
                        </motion.div>
                    </motion.button>
                    <motion.button
                        variants={btnVariants}
                        whileHover={playerState === 'loading' ? "loading" : "hover"}
                        whileTap={playerState === 'loading' ? "loading" : "tap"}
                        disabled={playerState === 'loading'}
                        id="control-button-previous"
                        className="w-36 h-36 rounded-md flex items-center justify-center ">
                        <motion.div
                            variants={iconControlVariant}
                            transition={{ duration: 0.2 }}
                            className="flex items-center justify-center"
                        >
                            <Image id="icon-player" src={iconPrevious} alt="icon-player" width={20} height={20} />
                        </motion.div>
                    </motion.button>
                    <motion.button
                        variants={btnVariants}
                        whileHover={playerState === 'loading' ? "loading" : "hover"}
                        whileTap={playerState === 'loading' ? "loading" : "tap"}
                        disabled={playerState === 'loading'}
                        onClick={togglePlay}
                        id="control-button-play"
                        className={`w-52 h-52 rounded-full flex items-center justify-center ${playerState === 'loading' ? 'bg-gray-500' : 'bg-primary-300'}`}>
                        <motion.div
                            variants={iconControlVariant}
                            transition={{ duration: 0.2 }}
                            className="flex items-center justify-center"
                        >
                            <Image id="icon-player" src={playerState === 'playing' ? iconPause : iconPlay} alt="icon-player" width={20} height={20} />
                        </motion.div>
                    </motion.button>
                    <motion.button
                        variants={btnVariants}
                        whileHover={playerState === 'loading' ? "loading" : "hover"}
                        whileTap={playerState === 'loading' ? "loading" : "tap"}
                        disabled={playerState === 'loading'}
                        id="control-button-next"
                        className="w-36 h-36 rounded-md flex items-center justify-center ">
                        <motion.div
                            variants={iconControlVariant}
                            transition={{ duration: 0.2 }}
                            className="flex items-center justify-center"
                        >
                            <Image id="icon-player" src={iconNext} alt="icon-player" width={20} height={20} />
                        </motion.div>
                    </motion.button>
                    <motion.button
                        variants={btnVariants}
                        whileHover={playerState === 'loading' ? "loading" : "hover"}
                        whileTap={playerState === 'loading' ? "loading" : "tap"}
                        disabled={playerState === 'loading'}
                        id="control-button-repeat"
                        className={`w-36 h-36 rounded-md flex items-center justify-center`}>
                        <motion.div
                            variants={iconControlVariant}
                            transition={{ duration: 0.2 }}
                            className="flex items-center justify-center"
                        >
                            <Image id="icon-player" src={iconRepeat} alt="icon-player" width={20} height={20} />
                        </motion.div>
                    </motion.button>
                </section>

                <section id="volume-control-section" className="flex items-center gap-6">
                    <Image id="icon-player" src={iconVolume} alt="icon-player" width={16} height={16} />
                    <motion.div
                        whileHover={playerState === 'loading' ? "initial" : "hover"}
                        initial="initial"
                        id="volume-container"
                        className="w-full h-4 bg-gray-800 rounded-full">
                        <motion.div
                            variants={volumeVariants}
                            id="volume-value"
                            animate={{ width: `${volumeProgress}%` }}
                            className="h-full bg-neutral-400  rounded-l-full"
                        />
                    </motion.div>
                </section>

            </motion.div>
        </div>
    );
}