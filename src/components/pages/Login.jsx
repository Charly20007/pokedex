import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setToken } from "../../helpers/auth";
import LoginTemplate from "../templates/LoginTemplate";

const Login = () => {
    const nav = useNavigate();
    const [error, setError] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        };

        // Credenciales hardcodeadas
        const hardcodedEmail = "usuario@gmail.com";
        const hardcodedPassword = "123abc";

        if (data.email === hardcodedEmail && data.password === hardcodedPassword) {
            // Simulamos la obtención de un token
            const fakeToken = "fake-jwt-token";
            setToken(fakeToken);
            nav("/");
        } else {
            setError("Credenciales incorrectas");
        }
    };

    return (
        <LoginTemplate title="Iniciar sesión">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        name="email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                        required
                    />
                </div>
                <div className="text-center pt-1 mb-12 pb-1">
                    <button className="bg-gradient w-full py-2 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300" type="submit">
                        Ingresar
                    </button>
                </div>
                {error && (
                    <p className="text-center p-2 bg-red-100 text-red-800 rounded-md">
                        {error}
                    </p>
                )}
            </form>
        </LoginTemplate>
    );
}

export default Login;
