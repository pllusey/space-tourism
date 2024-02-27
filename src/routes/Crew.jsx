import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ContentSelector from "../components/ContentSelector/ContentSelector";
import { easeIn } from "framer-motion";
import Inner from "../components/Inner/Inner";

export default function Crew({ crew, pageName }) {
  const currentPage = pageName;
  const { name, description, image, role } = crew;
  const [selectedName, setSelectedName] = useState(crew[0].name);
  const [selectedDescription, setSelectedDescription] = useState(
    crew[0].description
  );
  const [selectedImage, setSelectedImage] = useState(crew[0].image);
  const [selectedRole, setSelectedRole] = useState(crew[0].role);

  const selectName = (name) => {
    setSelectedName(name);
  };

  const selectDescription = (description) => {
    setSelectedDescription(description);
  };

  const selectImage = (image) => {
    setSelectedImage(image);
  };

  const selectRole = (role) => {
    setSelectedRole(role);
  };

  useGSAP(() => {
    let tl = gsap.timeline();

    tl.from(".role", { y: -10, opacity: 0, duration: 2, transition: easeIn });
    tl.from(".name", { y: -10, opacity: 0, duration: 2, transition: easeIn }, "-=.5");
    tl.from(".description", { y: -10, opacity: 0, duration: 2, transition: easeIn }, "<");
    tl.from(".image", { opacity: 0, duration: 2, transition: easeIn }, "<");
  }, [selectedName]);

  return (
    <>
      <Inner>
        <div className="w-screen h-screen bg-crew-lg bg-cover bg-center">
          <div className="ml-[10vw] h-screen w-[50vw]">
            <h3 className="font-barlow tracking-[0.25rem] pt-[22vh] text-3xl">
              <span className="pr-3 font-bold opacity-30">02</span> MEET YOUR
              CREW
            </h3>
            <h2 className="role font-bellefair text-3xl opacity-40 pt-[10vh] pb-4">
              {selectedRole.toUpperCase()}
            </h2>
            <h1 className="name font-bellefair text-6xl pb-6">
              {selectedName.toUpperCase()}
            </h1>
            <p className="description font-extralight tracking-wide leading-loose max-w-[35vw]">
              {selectedDescription}
            </p>
            <div className="h-10 max-w-[15vw] min-w-[10vw] absolute bottom-[7vh]">
              <ContentSelector
                crew={crew}
                selectDescription={selectDescription}
                selectName={selectName}
                selectImage={selectImage}
                selectRole={selectRole}
                currentPage={currentPage}
              />
            </div>
          </div>
          <img
            src={selectedImage}
            alt=""
            className="image absolute bottom-0 right-[10vw] max-h-[70vh] max-w-[30vw]"
          />
        </div>
      </Inner>
    </>
  );
}
