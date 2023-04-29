const POKE_API_BASE_URL = 'https://pokeapi.co/api/v2';

export async function getPokemonById(id: number) {
  const response = await fetch(`${POKE_API_BASE_URL}/pokemon/${id}`);
  const data = await response.json();
  return data;
}

export async function getPokemonSpeciesById(id: number) {
  const response = await fetch(`${POKE_API_BASE_URL}/pokemon-species/${id}`);
  const data = await response.json();
  return data;
}
