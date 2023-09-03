import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon/";

const searchPokemon = async (term) => {
  try {
    const response = await axios.get(`${API_URL}${term}`);
    return response.data;
  } catch (error) {
    return {};
  }
};
const checkUniqueUserName = (displayName, trainers) => {
  const isUnique = trainers.every(
    (trainer) => trainer.displayName.toLowerCase() !== displayName.toLowerCase()
  );
  return isUnique;
};

const addPokemonToUser = (newPokemon, users, id) => {
  const thatuser = users.find((user) => user.id === id);
  thatuser.pokemons.push(newPokemon);

  return users.map((user) => {
    if (user.displayName === id) {
      return thatuser;
    }
    return user;
  });
};

export { checkUniqueUserName, addPokemonToUser, searchPokemon };
// get pikachu details
