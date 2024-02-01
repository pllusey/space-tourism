import Navbar from "../components/Navbar";

export default function Root() {
  return (
    <>
      <div className="h-screen bg-[url('/src/assets/home/background-home-desktop.jpg')] bg-center bg-no-repeat bg-cover text-white">
        <header className="mb-24">
          <Navbar />
        </header>
        <main className="flex">
          <div className="relative left-[15%] top-44 max-w-[450px]">
            <h5 className="font-barlow text-[28px] font-thin">
              SO, YOU WANT TO TRAVEL TO
            </h5>
            <h1 className="font-bellefair text-[150px]">SPACE</h1>
            <p className="text-wrap font-thin leading-8">
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </p>
          </div>
          <button className="absolute left-[65%] top-[54%] font-bellefair text-4xl bg-white text-black w-72 h-72 rounded-full">
            EXPLORE
          </button>
        </main>
      </div>
    </>
  );
}
