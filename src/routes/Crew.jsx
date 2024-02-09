import { useState } from "react";
import ContentSelector from "../components/ContentSelector/ContentSelector";

export default function Crew({
  crew,
  selectedCrew,
  selectCrew,
  pageName,
}) {
  const currentPage = pageName
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

  return (
    <>
      <div className="w-screen h-screen bg-crew-lg bg-cover bg-center">
        <div className="ml-[12.5vw] h-screen w-[40vw]">
          <h3 className="font-barlow tracking-[0.25rem] pt-[30vh] text-3xl pb-[15vh]">
            <span className="pr-3 font-bold opacity-30">02</span> MEET YOUR CREW
          </h3>
          <h2 className="font-bellefair text-3xl opacity-40 pb-4">
            {selectedRole.toUpperCase()}
          </h2>
          <h1 className="font-bellefair text-6xl pb-6">
            {selectedName.toUpperCase()}
          </h1>
          <p className="text-xl font-extralight tracking-wide leading-loose">
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
          className="absolute bottom-0 right-[10vw] max-h-[70vh] max-w-[30vw]"
        />
      </div>
    </>
  );
}
