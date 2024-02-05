import Button from "../components/Button";

export default function Root() {
  return (
    <>
      <div className="h-screen max-h-screen bg-home-lg bg-center bg-no-repeat bg-cover  transition-all duration-300">
        <div className="w-[30vw] absolute flex-col items-center justify-center left-[10vw] top-[40vh]">
          <h5 className="w-full font-barlow text-[2vw] font-thin tracking-widest">
            SO, YOU WANT TO TRAVEL TO
          </h5>
          <h1 className="w-full font-bellefair text-[10vw]">SPACE</h1>
          <p className="text-wrap font-thin leading-8 text-xl">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        <Button />
      </div>
    </>
  );
}
