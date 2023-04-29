import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { getPokemonById, getPokemonSpeciesById } from '../pages/api/pokeApi';

interface PokemonData {
  name: string;
  sprites: {
    front_default: string;
  };
  id: number;
  types: {
    type: {
      name: string;
    };
  }[];
}

interface SpeciesData {
  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string;
    };
  }[];
}

type PokemonProps = {
  id: number;
};

const Pokemon = ({ id }: PokemonProps) => {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [species, setSpecies] = useState<SpeciesData | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchPokemonData = async () => {
      const pokemonData = await getPokemonById(id);
      const speciesData = await getPokemonSpeciesById(id);

      setPokemon(pokemonData);
      setSpecies(speciesData);
    };

    fetchPokemonData();
  }, [id]);

  if (!pokemon || !species) {
    return <div>Loading...</div>;
  }

  const handlePrevClick = () => {
    router.push(`/pokemon/${id - 1}`);
  };

  const handleNextClick = () => {
    router.push(`/pokemon/${id + 1}`);
  };

  return (
    <div>
      {/* Add your Pokemon component styling and structure here */}
      <h1>{pokemon.name}</h1>
      <Image src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Number: {pokemon.id}</p>
      <p>Type: {pokemon.types.map((type) => type.type.name).join(', ')}</p>
      <p>Description: {species.flavor_text_entries[0].flavor_text}</p>
      <button onClick={handlePrevClick} disabled={id <= 1}>
        Previous
      </button>
      <button onClick={handleNextClick} disabled={id >= 898}>
        Next
      </button>
    </div>
  );
};

export default Pokemon;
