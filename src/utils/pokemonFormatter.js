/**
 * Formats Pokémon data from the API response.
 * @param {Array} data - The raw Pokémon data from the API.
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
        next: !!data.next,
        results: data.results.map(pokemon => ({
            name: pokemon.name,
            isBookmarked: false
        }))
    }
}

/**
 * Formats Pokémon search like search results
 * @param {Array} data - The raw Pokémon data from the API.
 * @returns {Array} The formatted Pokémon Listdata.
 */
export const formatPokemonSearchData = (data) => {
    return {
        count: 1,
        next: false,
        results: [
            {
                name: data.name,
                isBookmarked: false
            },
        ]
    }
}

/**
 * Formats Pokémon details data from the API response.
 * @param {Array} data - The raw Pokémon data from the API.
 * @returns {Array} The formatted Pokémon details data.
 */
export const formatPokemonDetailsData = (data) => {
    return {
        name: data.name,
        height: data.height,
        weight: data.weight,
        types: data.types.map(type => type.type.name),
        image: data.sprites.other['official-artwork'].front_default,
    }
}