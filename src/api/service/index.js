// import axios from "axios";

const checkUniqueUserName = (displayName, trainers) => {
  const isUnique = trainers.every(
    (trainer) => trainer.displayName.toLowerCase() !== displayName.toLowerCase()
  );
  return isUnique;
};

export { checkUniqueUserName };
// get pikachu details
