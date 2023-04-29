import { useRouter } from 'next/router';

const LandingPage = () => {
  const router = useRouter();

  const handleRandomClick = () => {
    const randomId = Math.floor(Math.random() * 898) + 1;
    router.push(`/pokemon/${randomId}`);
  };

  return (
    <div>
      {/* Add your landing page styling and structure here */}
      <h1>Welcome to the Pokémon Pokedex!</h1>
      <p>Explore the world of Pokémon by searching or browsing through the Pokedex.</p>
      <button onClick={handleRandomClick}>Go to a random Pokémon</button>
    </div>
  );
};

export default LandingPage;
