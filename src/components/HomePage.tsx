'use client'
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import GitHubCalendar from 'react-github-calendar';
import { loadSlim } from "@tsparticles/slim";
import Image from "next/image";
import TypingEffect from "./TypingEffect";

const App = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initEngine = async () => {
      try {
        await initParticlesEngine(async (engine) => {
          await loadSlim(engine);
        });
        setInit(true);
      } catch (error) {
        console.error("Error initializing particles:", error);
      }
    };

    initEngine();
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 100,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (!init) {
    return <div>Loading particles...</div>;
  }

  return (
    <div className="relative" id="home">
      {/* Particles positioned absolutely within the relative container */}
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        className="absolute inset-0 z-0" 
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
        <div className="text-center">
          <div className="mb-8">
            <Image
              src='/assets/image.png'
              alt="Your image description"
              height={200}
              width={200}
              className="rounded-full mx-auto shadow-lg"
            />
          </div>
          <TypingEffect />
          <div className="bg-slate-800 p-10 opacity-80 flex items-center flex-col gap-5">
            <h2 className="text-white text-3xl font-bold ">Github Stats  </h2>
          <GitHubCalendar
            username='SamyogGhimire'
            // colorScheme='dark'
            blockSize={15}
            blockMargin={5}
            fontSize={14}
            />
            </div>
        </div>
      </div>
    </div>
  );
};

export default App;