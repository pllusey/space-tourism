import { data } from "../util.js";

export default function Destination() {
  return (
    <>
      <div className="h-screen bg-destination-lg bg-center bg-no-repeat bg-cover">
        <div className=" w-[55vw] h-screen font-barlow">
          <h5 className="block pt-[25vh] text-2xl w-fit tracking-[.25rem] leading-relaxed ml-[13vw]">
            <span className="pr-3 font-bold opacity-30">01</span> PICK YOUR
            DESTINATION
          </h5>
          <img
            src={data.destinations[0].image}
            className="ml-[20vw] mt-[10vh] w-[27vw] h-[50vh]"
          />
        </div>
        <div className="absolute bottom-[10vh] right-[15vw] w-[27vw] h-[60vh]">
          <ul className="flex">
            <li className="font-barlow font-light text-xl tracking-wider w-fit pr-[2vw] pb-3">
              {data.destinations[0].name.toUpperCase()}
            </li>
            <li className="font-barlow font-light text-xl tracking-wider w-fit pr-[2vw] pb-3">
              {data.destinations[1].name.toUpperCase()}
            </li>
            <li className="font-barlow font-light text-xl tracking-wider w-fit pr-[2vw] pb-3">
              {data.destinations[2].name.toUpperCase()}
            </li>
            <li className="font-barlow font-light text-xl tracking-wider w-fit pr-[2vw] pb-3">
              {data.destinations[3].name.toUpperCase()}
            </li>
          </ul>
          <h1 className="text-8xl font-bellefair py-[5vh]">
            {data.destinations[0].name.toUpperCase()}
          </h1>
          <p className=" font-light text-sm opacity-70 tracking-wider leading-loose pb-14">
            {data.destinations[0].description}
          </p>
          <ul className="h-auto flex">
            <li className="pt-4 pr-20">
              <span className="font-barlow tracking-widest font-light opacity-50">
                AVG. DISTANCE
              </span>
              <br /> <span className="font-bellefair text-2xl opacity-80">{data.destinations[0].distance} KM</span>
            </li>
            <li className="pt-4 pr-20">
              <span className="font-barlow tracking-widest font-light opacity-50">
                EST. TRAVEL TIME
              </span>
              <br /> <span className="font-bellefair text-2xl opacity-80">{data.destinations[0].time} DAYS</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
