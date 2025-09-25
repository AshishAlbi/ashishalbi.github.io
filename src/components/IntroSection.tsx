import { useEffect, useRef } from "react";
import Typed from "typed.js";
import SocialMediaCard from "./socialMediaCard/SocialMediaCard";
import DownloadResumeButton from "./button/DownloadResumeButton";

function IntroSection() {
  const typeRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(typeRef.current, {
      strings: ["Fullstack Developer", "React Developer", "Node.js Developer"],
      typeSpeed: 90,
      backSpeed: 30,
      smartBackspace: false,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="flex w-full h-100 !p-20 !pt-30">
      <div className="flex-1 bg-white dark:bg-gray-800 dark:text-white flex flex-col gap-2.5 items-start relative top-1/4">
        <p className="text-2xl">
          Hello,I'm <span className="font-mono font-semibold">Ashish</span>,
        </p>
        <div>
          <span
            ref={typeRef}
            className="font-serif font-semibold text-3xl w-full h-[5vh]"></span>
        </div>
        <p className="text-2xl">
          With extensive experience dedicated to crafting innovative solutions
          and seamless digital experiences.
        </p>
        <SocialMediaCard />
        <DownloadResumeButton />
      </div>
      <div className="flex-1">TBD</div>
    </div>
  );
}

export default IntroSection;
