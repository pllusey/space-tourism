import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";

export default function Layout({ data }) {
  const { destinations, crew, technology } = data;
  const [pages, setPages] = useState({
    destinations: [],
    crew: [],
    technology: [],
  });

  const [selectedDestination, setSelectedDestination] = useState(
    data.destinations[0]
  );
  const [selectedCrew, setSelectedCrew] = useState(data.crew[0]);
  const [selectedTechnology, setSelectedTechnology] = useState(
    data.technology[0]
  );

  const selectDestination = (destination) => {
    setSelectedDestination(destination);
  };
  const selectCrew = (crew) => {
    setSelectedCrew(crew);
  };
  const selectTechnology = (technology) => {
    setSelectedTechnology(technology);
  };

  return (
    <div className="text-white">
      <header className="absolute w-screen h-[20vh]">
        <Navbar />
      </header>
      <Outlet
        selectDestination={selectDestination}
        selectedDestination={selectedDestination}
        selectCrew={selectCrew}
        selectedCrew={selectedCrew}
        selectTechnology={selectTechnology}
        selectedTechnology={selectedTechnology}
      />
    </div>
  );
}
