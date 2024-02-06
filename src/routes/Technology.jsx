import { data } from "../util";

export default function Technology() {
  return (
    <>
      <div className="h-screen bg-technology-lg bg-cover bg-center">
        <div className="ml-[12.5vw] h-screen">
          <h3 className="font-barlow tracking-[0.25rem] pt-[30vh] text-3xl pb-[10vh]">
            <span className="pr-3 font-bold opacity-30">03</span> SPACE LAUNCH
            101
          </h3>
          <div className="flex  w-[50vw]">
            <ul className="flex flex-col justify-between px-[3vw]">
              <li>
                <button className="border border-opacity-35  rounded-full w-[4.5rem] h-[4.5rem]">
                  1
                </button>
              </li>
              <li>
                <button className="border border-opacity-35  rounded-full w-[4.5rem] h-[4.5rem]">
                  2
                </button>
              </li>
              <li>
                <button className="border border-opacity-35  rounded-full w-[4.5rem] h-[4.5rem]">
                  3
                </button>
              </li>
            </ul>
            <div>
              <h4 className="font-barlow text-xl tracking-widest font-extralight pb-5">
                THE TERMINOLOGY...
              </h4>
              <h1 className="font-bellefair text-6xl pb-6">
                {data.technology[0].name.toUpperCase()}
              </h1>
              <p className="text-lg font-extralight tracking-wide leading-loose w-[30vw]">
                {data.technology[0].description}
              </p>
            </div>
          </div>
        </div>
        <img
          src={data.technology[0].image}
          alt=""
          className="absolute top-[30vh] right-0 h-[60vh] w-[35vw]"
        />
      </div>
    </>
  );
}
