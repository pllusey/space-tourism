import './ContentSelector.css'

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
  selectDestination,
  selectCrew,
  selectTechnology,
  currentPage,
}) {
  return (
    <>
      <div className="font-barlow">
        {currentPage === "Destination" && (
          <>
            {destinations.map((destination) => (
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
                className='technology'
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
