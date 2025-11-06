export const CharacterInfo = ({ character }) => {


    if (!character) return null; 

    const imageUrl = character.image || `https://cdn.thesimpsonsapi.com/200/character/${character.id}.webp`;
        return (
        <div className="card text-center shadow-lg mx-auto" style={{ maxWidth: '400px' }}>
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">ID: {character.id || 'N/A'}</h6>
                <img 
                src={imageUrl} 
                alt={character.name || 'Simpsons Character'} 
                className="img-fluid rounded-circle mb-3 border border-warning border-3"
                style={{ width: '150px' }}
                />
                <h1 className="card-title text-primary">{character.name || 'Nombre Desconocido'}</h1>
                <h2 className="card-subtitle mb-2 text-warning">{character.age || 'Edad Desconocida'}</h2>
                <p className="card-text">{character.description || 'No hay descripción disponible.'}</p>
                </div>
                </div>
                );
            };