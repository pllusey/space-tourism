import "./ContentSelector.css";
import { useEffect, useRef } from "react";

export default function ContentSelector({
  destinations,
  crew,
  technology,
  selectName,
  selectDescription,
  selectImage,
  selectTime,
  selectDistance,
  selectRole,
  currentPage,
}) {
  useEffect(() => {
    const firstButton = document.querySelector('.button-container button');
    if (firstButton) {
      firstButton.focus();
    }
  }, [currentPage]);

  return (
    <>
      <div className="font-barlow button-container">
        {currentPage === "Destination" && (
          <>
            {destinations.map((destination, index) => (
              <button
                key={destination.id}
                className="destination"
                onClick={() => {
                  selectName(destination.name),
                  selectDescription(destination.description),
                  selectImage(destination.image),
                  selectDistance(destination.distance),
                  selectTime(destination.time);
                }}
              >
                {destination.name.toUpperCase()}
              </button>
            ))}
          </>
        )}

        {currentPage === "Crew" && (
          <>
            <ul className="flex justify-between">
              {crew.map((member) => (
                <button
                  key={member.id}
                  className="crew"
                  onClick={() => {
                    selectName(member.name),
                    selectDescription(member.description),
                    selectImage(member.image),
                    selectRole(member.role);
                  }}
                ></button>
              ))}
            </ul>
          </>
        )}

        {currentPage === "Technology" && (
          <>
            {technology.map((tech) => (
              <button
                key={tech.id}
                className="technology"
                onClick={() => {
                  selectName(tech.name),
                  selectDescription(tech.description),
                  selectImage(tech.image);
                }}
              >
                {tech.id + 1}
              </button>
            ))}
          </>
        )}
      </div>
    </>
  );
}
