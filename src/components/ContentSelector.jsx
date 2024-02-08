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
  selectedPage
}) {
  return (
    <>
      <div>
        {selectedPage === "Destination" && (
          <>
            {destinations.map((destination) => (
              <button
                key={destination.id}
                className="font-barlow font-light text-xl tracking-wider w-fit pr-[2vw] pb-3"
                onClick={() => {
                  selectDestination(),
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
        {/* {selectedPage === "Crew" && (
          <>
            {crew.map((member) => (
              <button
                key={member.id}
                onClick={() => {
                  selectCrew(),
                    selectName(member.name.toUpperCase()),
                    selectDescription(member.description),
                    selectImage(member.image),
                    selectRole(member.role.toUpperCase());
                }}
              >
                {member.name.toUpperCase()}
              </button>
            ))}
          </>
        )}
        {selectedPage === "Technology" && (
          <>
            {technology.map((tech) => (
              <button
                key={tech.id}
                onClick={() => {
                  selectTechnology(),
                    selectName(tech.name),
                    selectDescription(tech.description),
                    selectImage(tech.image);
                }}
              >
                {tech.id + 1}
              </button>
            ))}
          </>
        )} */}
      </div>
    </>
  );
}
