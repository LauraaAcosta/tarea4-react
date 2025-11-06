import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();
    const isLogged = localStorage.getItem('isLogged') === 'true';

    const onLogout = () => {
        localStorage.removeItem('isLogged');
        
        // Redirigir al Login
        navigate('/login', {
            replace: true
        });
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Simpsons App
                </Link>
                
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav me-auto">
                        <NavLink 
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                            to="/"
                        >
                            Home
                        </NavLink>
                        
                        <NavLink 
                            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} 
                            to="/register"
                        >
                            Registro
                        </NavLink>
                    </div>
                    
                    <div className="d-flex">
                        {isLogged 
                            ? (
                                <button 
                                    className="btn btn-outline-danger" 
                                    onClick={onLogout}
                                >
                                    Logout
                                </button>
                            )
                            : (
                                <NavLink 
                                    className="btn btn-outline-success" 
                                    to="/login"
                                >
                                    Login
                                </NavLink>
                            )
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};