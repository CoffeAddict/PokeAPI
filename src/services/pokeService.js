/**
 * PokeService module to interact with the PokeAPI.
 */

// TODO: add env variable with api url
const POKE_API_URL = '';

/**
 * Fetch Pokémon data by name.
 *
 * @param {string} name - The name of the Pokémon to fetch.
 * @returns {Promise<Object>} - A promise that resolves to the Pokémon data.
 * @throws {Error} - Throws an error if the fetch fails or if the Pokémon is not found.
 */
export const fetchPokemonByName = async (name) => {
  try {
    const response = await fetch(`${POKE_API_URL}/pokemon/${name}`);

    // Check if the response is okay (status code in the range 200-299)
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};