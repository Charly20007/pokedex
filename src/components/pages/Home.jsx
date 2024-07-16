import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Loader from "../atoms/Loader";
import PokemonCard from "../molecules/PokemonCard";

const Home = () => {
    const [page, setPage] = useState(1);
    const limit = 20; // Número de resultados por página

    const { data, error, loading } = useFetch( page, limit);

    const handleNextPage = () => {
        setPage(page + 1);
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    if (loading) return <Loader />;
    if (error) return <h1>{error?.message}</h1>;

    return (
        <section className="py-16 max-w-5xl mx-auto">
            <h1 className="text-3xl mb-6 text-center">Presentamos a los Pokemones</h1>
            <div className="grid grid-cols-4 gap-6">
                {data.map((poke) => (
                    <PokemonCard key={poke.id} url={poke.url} name={poke.name} />
                ))}
            </div>
            <div className="flex justify-center mt-6">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
                    onClick={handlePrevPage}
                    disabled={page === 1}
                >
                    Anterior
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 rounded"
                    onClick={handleNextPage}
                >
                    Siguiente
                </button>
            </div>
        </section>
    );
};

export default Home;


