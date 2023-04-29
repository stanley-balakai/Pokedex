import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/pokemon/${searchValue.toLowerCase()}`);
  };

  const handleRandomClick = () => {
    const randomId = Math.floor(Math.random() * 898) + 1;
    router.push(`/pokemon/${randomId}`);
  };

  return (
    <header>
      {/* Add your header styling and structure here */}
      <nav>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search Pokémon"
          />
        </form>
        <button onClick={handleRandomClick}>Random Pokémon</button>
      </nav>
    </header>
  );
};

export default Header;
