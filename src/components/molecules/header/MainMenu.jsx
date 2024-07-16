import { Link, useNavigate } from "react-router-dom";
import { deleteToken, token } from "../../../helpers/auth";

const MainMenu = () => {
    const nav = useNavigate();

    const handleSession = () => {
        deleteToken();
        nav("/");
    };

    return (
        <nav className="w-full">
            <ul className="flex justify-end text-gray-100">
                <li className="flex items-center">
                    <Link className="menu-item" to="/">
                        Inicio
                    </Link>
                </li>
            
                {!token() ? (
                    <li className="flex items-center">
                        <Link className="menu-item" to="/login">
                            Iniciar sesión
                        </Link>
                    </li>
                ) : (
                    <li className="flex items-center">
                        <a onClick={handleSession} className="menu-item cursor-pointer">
                            Cerrar sesión
                        </a>
                    </li>
                )}
                {token() ? (
                    <li className="flex items-center ml-2 text-sm text-green-400">
                        Conectado 
                    </li>
                    ) : (
                    <li className="flex items-center ml-2 text-sm text-red-400">
                        Desconectado
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default MainMenu;
