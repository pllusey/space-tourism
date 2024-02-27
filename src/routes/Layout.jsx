import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { AnimatePresence, motion } from "framer-motion";

export default function Layout({ data }) {
  let { pathname } = useLocation();
  const { destinations, crew, technology } = data;

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
    <>
      <header className="absolute w-screen h-[20vh] z-20">
        <Navbar />
      </header>
      <AnimatePresence mode="wait">
          <main>
            <Outlet
              selectDestination={selectDestination}
              selectedDestination={selectedDestination}
              selectCrew={selectCrew}
              selectedCrew={selectedCrew}
              selectTechnology={selectTechnology}
              selectedTechnology={selectedTechnology}
            />
          </main>
      </AnimatePresence>
    </>
  );
}
