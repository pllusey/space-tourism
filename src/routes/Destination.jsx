import { useState, useRef } from "react";
import ContentSelector from "../components/ContentSelector/ContentSelector.jsx";
import NumberAnimation from "../components/NumberAnimation.jsx";
import Inner from "../components/Inner/Inner.jsx";
import { easeIn, motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Destination({ destinations, pageName }) {
  const currentPage = pageName;
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

  useGSAP(() => {
    let tl = gsap.timeline();

    tl.from('.destination-img', { y: 20, opacity: 0, duration: 2, transition: easeIn}, '-=.5');
    tl.from('.name', { x: 20, opacity: 0, duration: 1.5});
    tl.from('.description', { x: 20, opacity: 0, duration: 1.5 });
    tl.from(".distance-and-time", { y: 20, opacity: 0, duration: 1}, '<')
  }, [selectedDescription]);

  return (
    <Inner>
      <div className="h-screen bg-destination-lg bg-center bg-no-repeat bg-cover flex items-center gap-[5vw]">
        <motion.div className="relative w-[50vw] h-screen font-barlow">
          <h5 className="relative top-[22vh] left-[10vw] text-3xl tracking-[.3rem] font-[100]">
            <span className="pr-3 font-bold opacity-30">01</span> PICK YOUR
            DESTINATION
          </h5>
        </motion.div>
        <img
          src={selectedImage}
          className="destination-img aspect-square fixed top-[35vh] left-[15vw] lg:min-w-[25vw]"
        />
        <div className="w-[25vw] h-[50vh] flex flex-col flex-shrink justify-between mt-[20vh]">
          <div className="flex ">
            <ContentSelector
              currentPage={currentPage}
              destinations={destinations}
              selectDescription={selectDescription}
              selectName={selectName}
              selectImage={selectImage}
              selectDistance={selectDistance}
              selectTime={selectTime}
            />
          </div>
          <h1 className="name text-8xl font-bellefair">
            {selectedName.toUpperCase()}
          </h1>
          <p className="description font-light text-md opacity-70 tracking-wider leading-loose">
            {selectedDescription}
          </p>
          <div className="distance-and-time">
            <NumberAnimation
              finalDistance={selectedDistance}
              finalTime={selectedTime}
            />
          </div>
        </div>
      </div>
    </Inner>
  );
}
