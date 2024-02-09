import { useState } from "react";
import ContentSelector from "../components/ContentSelector/ContentSelector.jsx";

export default function Destination({
  destinations,
  selectDestination,
  selectedDestination,
  pageName,
}) {
  const currentPage = pageName
  const { name, description, image, distance, time } = destinations;
  const [selectedName, setSelectedName] = useState(destinations[0].name);
  const [selectedDescription, setSelectedDescription] = useState(
    destinations[0].description
  );
  const [selectedImage, setSelectedImage] = useState(destinations[0].image);
  const [selectedDistance, setSelectedDistance] = useState(
    destinations[0].distance
  );
  const [selectedTime, setSelectedTime] = useState(destinations[0].time);

  const selectName = (name) => {
    setSelectedName(name);
  };

  const selectDescription = (description) => {
    setSelectedDescription(description);
  };

  const selectImage = (image) => {
    setSelectedImage(image);
  };

  const selectDistance = (distance) => {
    setSelectedDistance(distance);
  };

  const selectTime = (time) => {
    setSelectedTime(time);
  };

  return (
    <>
      <div className="h-screen bg-destination-lg bg-center bg-no-repeat bg-cover">
        <div className=" w-[55vw] h-screen font-barlow">
          <h5 className="block pt-[25vh] text-2xl w-fit tracking-[.25rem] leading-relaxed ml-[13vw]">
            <span className="pr-3 font-bold opacity-30">01</span> PICK YOUR
            DESTINATION
          </h5>
          <img
            src={selectedImage}
            className="ml-[20vw] mt-[10vh] w-[27vw] h-[50vh]"
          />
        </div>
        <div className="absolute bottom-[10vh] right-[15vw] w-[27vw] h-[60vh]">
          <ContentSelector
            currentPage={currentPage}
            destinations={destinations}
            selectDescription={selectDescription}
            selectName={selectName}
            selectImage={selectImage}
            selectDistance={selectDistance}
            selectTime={selectTime}
          />
          <h1 className="text-8xl font-bellefair py-[5vh]">{selectedName.toUpperCase()}</h1>
          <p className=" font-light text-sm opacity-70 tracking-wider leading-loose pb-14">
            {selectedDescription}
          </p>
          <ul className="h-auto flex">
            <li className="pt-4 pr-20">
              <span className="font-barlow tracking-widest font-light opacity-50">
                AVG. DISTANCE
              </span>
              <br />{" "}
              <span className="font-bellefair text-2xl opacity-80">
                {selectedDistance} KM
              </span>
            </li>
            <li className="pt-4 pr-20">
              <span className="font-barlow tracking-widest font-light opacity-50">
                EST. TRAVEL TIME
              </span>
              <br />{" "}
              <span className="font-bellefair text-2xl opacity-80">
                {selectedTime} DAYS
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
