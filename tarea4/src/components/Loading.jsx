export const Loading = () => {
    return (
        <div className="alert alert-info text-center d-flex align-items-center justify-content-center" role="alert" style={{ height: '200px' }}>
            <div className="spinner-border text-primary me-3" role="status">
                <span className="visually-hidden">Cargando...</span>
            </div>
            <strong>Cargando personaje, por favor espera...</strong>
        </div>
    );
}