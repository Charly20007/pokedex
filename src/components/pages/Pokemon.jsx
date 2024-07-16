import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../atoms/Loader";
import { token } from "../../helpers/auth";

const Pokemon = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [captured, setCaptured] = useState(false); 


    useEffect(() => {
        setLoading(true);
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((resp) => {
                setPokemon(resp.data);
            })
            .catch((err) => {
                console.error("Error fetching Pokemon:", err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    useEffect(() => {
        if (token()) {
            setCaptured(true); //  capturado si hay un token
        } else {
            setCaptured(false);
        }
    }, []);

    if (loading) return <Loader />;

    if (!pokemon) {
        return <div className="text-center">No se encontró el Pokémon</div>;
    }

    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

    return (
        <div className="max-w-5xl mx-auto mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
                <h2 className="text-3xl mb-4 font-bold capitalize">{pokemon.name}</h2>
                <div className="flex items-center justify-center mb-4">
                    <img src={imageUrl} alt={pokemon.name} className="max-w-xs" />
                </div>
                <div className="mb-4">
                    <h3 className="text-xl mb-2 font-semibold">Tipo:</h3>
                    <ul className="flex flex-wrap">
                        {pokemon.types.map((type, index) => (
                            <li key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm m-1">
                                {type.type.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl mb-2 font-semibold">Habilidades:</h3>
                    <ul className="flex flex-wrap">
                        {pokemon.abilities.map((ability, index) => (
                            <li key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm m-1">
                                {ability.ability.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl mb-2 font-semibold">Experiencia Base:</h3>
                    <p>{pokemon.base_experience}</p>
                </div>
                {token() && (
                    <div className="mt-4">
                        <h3 className="text-xl mb-2 font-semibold">Estado de captura:</h3>
                        {captured ? (
                            <p className="text-green-500 font-semibold">Capturado</p>
                        ) : (
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    onClick={() => setCaptured(true)}>
                                Capturar
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Pokemon;

