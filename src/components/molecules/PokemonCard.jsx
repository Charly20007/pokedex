import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PokemonCard = ({ name, url }) => {
  const getPokemonId = (url) => {
    const parts = url.split("/");
    return parts[parts.length - 2];
  };

  const pokemonId = getPokemonId(url);
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

  return (
    <Link to={`/pokemon/${pokemonId}`} className="max-w-xs rounded overflow-hidden shadow-lg my-2 bg-white">
      <img className="w-full h-48 object-contain p-4" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 capitalize">{name}</div>
        <p className="text-gray-700 text-base">ID: {pokemonId}</p>
      </div>
    </Link>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default PokemonCard;

