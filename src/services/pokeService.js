/**
 * PokeService module to interact with the PokeAPI.
 */

import { defineQueryParams } from "../utils/defineQueryParams";

const POKE_API_URL = import.meta.env.VITE_POKE_API_URL;
const useMock = import.meta.env.VITE_USE_MOCK === 'true'


/**
 * Fetch Pokémon data by name.
 *
 * @param {string} name - The name of the Pokémon to fetch.
 * @returns {Promise<Object>} - A promise that resolves to the Pokémon data.
 * @throws {Error} - Throws an error if the fetch fails or if the Pokémon is not found.
 */
export const getPokemonByName = async (name = 'ditto') => {

    const apiUrl = !useMock
    ? `${POKE_API_URL}/pokemon/${name}`
    : '/mock/pokemon.json'

    try {
        const response = await fetch(apiUrl)

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
        throw error;
    }
};

/**
 * Fetch a list of Pokémon.
 *
 * @param {number} limit - The maximum number of Pokémon to fetch. default: 20
 * @param {number} offset - The offset for the pagination.
 * @returns {Promise<Object>} - A promise that resolves to the Pokémon list.
 * @throws {Error} - Throws an error if the fetch fails.
 */
export const getPokemonList = async (offset, name, limit = 10000, ) => {

    const apiUrl = !useMock
    ? `${POKE_API_URL}/pokemon`
    : '/mock/pokemonList.json'

    const params = defineQueryParams({offset, name, limit})

    try {
        const response = await fetch(`${apiUrl}?${params}`);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Pokémon list:', error);
        throw error;
    }
};