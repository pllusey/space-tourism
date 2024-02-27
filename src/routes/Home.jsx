import Button from "../components/Button/Button";
import Inner from "../components/Inner/Inner";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  useGSAP(() => {
    let tl = gsap.timeline();

    tl.from('.so', { x: -20, opacity: 0, duration: 2}, "+=1");
    tl.from('.ywtt', { x: -20, opacity: 0, duration: 2}, '-=.5');
    tl.from('.h1', { x: -20, opacity: 0, duration: 1.5}, "-=.5");
    tl.from('.para', { x: -20, opacity: 0, duration: 1.5 });
  }, []);

  return (
    <>
      <Inner>
        <div className="bg-home-lg bg-cover bg-no-repeat h-screen">
          <div className="flex-col items-center justify-center ml-[13vw] pt-[35vh]">
            <h5 className="w-full font-barlow text-[2vw] font-thin tracking-widest">
              <span className="so">SO,</span> <span className="ywtt">YOU WANT TO TRAVEL TO...</span>
            </h5>
            <h1 className="h1 w-full font-bellefair text-[10vw]">SPACE</h1>
            <p className="para w-[30vw] text-wrap font-thin leading-8 text-xl">
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>
        <Button />
      </Inner>
    </>
  );
}
