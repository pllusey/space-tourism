import { data } from "../util";

export default function Crew() {
  return (
    <>
      <div className="w-screen h-screen bg-crew-lg bg-cover bg-center">
        <div className="ml-[12.5vw] h-screen w-[40vw]">
          <h3 className="font-barlow tracking-[0.25rem] pt-[30vh] text-3xl pb-[15vh]">
            <span className="pr-3 font-bold opacity-30">02</span> MEET YOUR CREW
          </h3>
          <h2 className="font-bellefair text-3xl opacity-40 pb-4">{data.crew[0].role.toUpperCase()}</h2>
          <h1 className="font-bellefair text-6xl pb-6">{data.crew[0].name.toUpperCase()}</h1>
          <p className="text-xl font-extralight tracking-wide leading-loose pb-[10vh]">{data.crew[0].description}</p>
          <ul className="flex justify-between max-w-[10vw]">
            <li>
              <input type="radio" />
            </li>
            <li>
              <input type="radio" />
            </li>
            <li>
              <input type="radio" />
            </li>
            <li>
              <input type="radio" />
            </li>
          </ul>
        </div>
        <img src={data.crew[0].image} alt="" className="absolute bottom-0 right-[10vw] max-h-[70vh] max-w-[30vw]"/>
      </div>
    </>
  );
}
