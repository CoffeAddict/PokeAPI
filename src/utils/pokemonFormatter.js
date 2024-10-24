/**
 * Formats Pokémon data from the API response.
 * @param {Array} data - The raw Pokémon data array from the API.
 * @returns {Array} The formatted Pokémon data.
 */
export const formatPokemonData = (data) => {
    return data.map(pokemon => ({
        id: pokemon.id,
        name: pokemon.name,
        weigth: pokemon.weight,
        height: pokemon.height,
        types: pokemon.types.map(type => type.type.name),
        officialArtwork: pokemon.sprites.other.official_artwork.front_default
    }))
}

/**
 * Formats Pokémon data from the API response.
 * @param {Array} data - The raw Pokémon data array from the API.
 * @returns {Array} The formatted Pokémon data.
 */
export const formatPokemonListData = (data) => {
    return {
        count: data.count,
        results: data.results.map(pokemon => ({
            name: pokemon.name
        }))
    }
}