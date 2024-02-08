import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export default function Layout(data) {
  const [pageName, setPageName] = useState("");
  const selectPage = () => {
    let pageArr = []
    
  }
  const [selectedDestination, setSelectedDestination] = useState('');
  const [selectedCrew, setSelectedCrew] = useState(data.crew);
  const [selectedTecnology, setSelectedTechnology] = useState(data.technology);

  const selectDestination = (destination) => {
    setSelectedDestination(destination);
  };
  const selectCrew = (crew) => {
    setSelectedCrew(crew);
  };
  const selectTechology = (technology) => {
    setSelectedTechnology(technology);
  };

  return (
    <div className="text-white">
      <Navbar />
      <Outlet
        selectDestination={selectDestination}
        selectedDestination={selectedDestination}
        selectCrew={selectCrew}
        selectedCrew={selectedCrew}
        selectTechology={selectTechology}
        selectedTecnology={selectedTecnology}
        // selectPage={selectPage}
        // selectedPage={selectedPage}
      />
    </div>
  );
}
