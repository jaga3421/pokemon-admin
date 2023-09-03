// import axios from "axios";

const checkUniqueUserName = (displayName, trainers) => {
  const isUnique = trainers.every(
    (trainer) => trainer.displayName.toLowerCase() !== displayName.toLowerCase()
  );
  return isUnique;
};

const addPokemonToUser = (pokemon, users, displayName) => {
  const newPokemon = {
    name: pokemon.name,
    id: pokemon.id,
  };
  const thatuser = users.find((user) => user.displayName === displayName);
  thatuser.pokemons.push(newPokemon);

  return users.map((user) => {
    if (user.displayName === displayName) {
      return thatuser;
    }
    return user;
  });
};

export { checkUniqueUserName, addPokemonToUser };
// get pikachu details
