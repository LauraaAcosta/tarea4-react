import { useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";

export const RegisterPage = () => {
    const navigate = useNavigate();

    const { 
        username, 
        email,
        password, 
        handleChange, 
        handleReset 
    } = useForm({
        username: "",
        email: "",
        password: "",
    });

    const onRegisterSubmit = (event) => {
        event.preventDefault();

        if (!username || !email || !password) return;

        handleReset();

        navigate("/login", { replace: true });
    };
    
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Registro de Usuario</h2>
            
            <form onSubmit={onRegisterSubmit} className="col-md-5 mx-auto card p-4 shadow">
                <div className="mb-3">
                    <label className="form-label">Usuario:</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Nombre de usuario"
                        value={username}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="ejemplo@correo.com"
                        value={email}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Contraseña:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>

                <button 
                    type="submit" 
                    className="btn btn-success btn-block mt-3"
                >
                    Registrarse
                </button>
            </form>
        </div>
    );
};