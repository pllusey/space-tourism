import { useState } from "react";
import ContentSelector from "../components/ContentSelector";

export default function Crew({
  crew,
  selectedCrew,
  selectCrew,
  selectPage,
  selectedPage,
}) {
  const { name, description, image, role } = crew;
  const [selectedName, setSelectedName] = useState(crew?.name);
  const [selectedDescription, setSelectedDescription] = useState(
    crew?.description
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

  console.log(crew);
  return (
    <>
      <div className="w-screen h-screen bg-crew-lg bg-cover bg-center">
        <div className="ml-[12.5vw] h-screen w-[40vw]">
          <h3 className="font-barlow tracking-[0.25rem] pt-[30vh] text-3xl pb-[15vh]">
            <span className="pr-3 font-bold opacity-30">02</span> MEET YOUR CREW
          </h3>
          <h2 className="font-bellefair text-3xl opacity-40 pb-4">
            {selectedRole}
          </h2>
          <h1 className="font-bellefair text-6xl pb-6">
            {selectedName}
          </h1>
          <p className="text-xl font-extralight tracking-wide leading-loose pb-[10vh]">
            {selectedDescription}
          </p>
          <ul className="flex justify-between max-w-[10vw]">
            <ContentSelector
              crew={crew}
              selectDescription={selectDescription}
              selectName={selectName}
              selectImage={selectImage}
              selectRole={selectRole}
              selectCrew={selectCrew}
            />
          </ul>
        </div>
        <img
          src={selectedImage}
          alt=""
          className="absolute bottom-0 right-[10vw] max-h-[70vh] max-w-[30vw]"
        />
      </div>
    </>
  );
}
