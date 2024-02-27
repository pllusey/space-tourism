import ContentSelector from "../components/ContentSelector/ContentSelector";
import { useState } from "react";
import Inner from "../components/Inner/Inner";

export default function Technology({
  technology,
  pageName,
}) {
  const currentPage = pageName;

  const { name, description, image } = technology;
  const [selectedName, setSelectedName] = useState(technology[0].name);
  const [selectedDescription, setSelectedDescription] = useState(
    technology[0].description
  );
  const [selectedImage, setSelectedImage] = useState(technology[0].image);

  const selectName = (name) => {
    setSelectedName(name);
  };

  const selectDescription = (description) => {
    setSelectedDescription(description);
  };

  const selectImage = (image) => {
    setSelectedImage(image);
  };

  return (
    <Inner>
      <div className="h-screen bg-technology-lg bg-cover bg-center">
        <div className="pl-[10vw] h-screen">
          <h3 className="font-barlow tracking-[0.25rem] pt-[22vh] text-3xl pb-[10vh]">
            <span className="pr-3 font-bold opacity-30">03</span> SPACE LAUNCH
            101
          </h3>
          <div className="flex justify-around min-h-[50vh] pt-[2vh] w-[50vw]">
            <div className="font-bellefair flex justify-center items-center">
            <ContentSelector
                technology={technology}
                selectDescription={selectDescription}
                selectName={selectName}
                selectImage={selectImage}
                currentPage={currentPage}
              />
            </div>
            <div className="">
              <h4 className="font-barlow text-xl tracking-widest font-extralight pb-5 ">
                THE TERMINOLOGY...
              </h4>
              <h1 className="name font-bellefair text-6xl pb-6 min-w-[35vw]">
                {selectedName.toUpperCase()}
              </h1>
              <p className="description text-lg font-extralight tracking-wide leading-loose w-[33vw]">
                {selectedDescription}
              </p>
            </div>
          </div>
        </div>
        <img
          src={selectedImage}
          alt=""
          className="image fixed top-[30vh] right-0 h-[60vh] w-[35vw]"
        />
      </div>
    </Inner>
  );
}
