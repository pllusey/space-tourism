import { motion } from "framer-motion";

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
      <div>
        {currentPage === "Destination" && (
          <>
            {destinations.map((destination) => (
              <motion.button
                whileHover={{
                  
                }}
                key={destination.id}
                className="font-barlow font-light text-xl tracking-wider w-fit pr-[2vw] pb-3"
                onClick={() => {
                  selectName(destination.name),
                    selectDescription(destination.description),
                    selectImage(destination.image),
                    selectDistance(destination.distance),
                    selectTime(destination.time);
                }}
              >
                {destination.name.toUpperCase()}
              </motion.button>
            ))}
          </>
        )}

        {currentPage === "Crew" && (
          <>
            <ul className="flex justify-between">
              {crew.map((member) => (
                <motion.button
                  key={member.id}
                  className="w-4 h-4 rounded-full bg-white bg-opacity-50"
                  onClick={() => {
                    selectName(member.name),
                      selectDescription(member.description),
                      selectImage(member.image),
                      selectRole(member.role);
                  }}
                ></motion.button>
              ))}
            </ul>
          </>
        )}

        {currentPage === "Technology" && (
          <>
            {technology.map((tech) => (
              <motion.button
                key={tech.id}
                onClick={() => {
                  selectName(tech.name),
                    selectDescription(tech.description),
                    selectImage(tech.image);
                }}
              >
                {tech.id + 1}
              </motion.button>
            ))}
          </>
        )}
      </div>
    </>
  );
}
