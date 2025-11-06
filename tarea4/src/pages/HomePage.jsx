import useCounter from '../hooks/useCounter.jsx';
import useFetch from '../hooks/useFetch.jsx';
import { Loading } from '../components/Loading.jsx';
import { CharacterInfo } from '../components/CharacterInfo.jsx';

export const HomePage = () => {
    const { count, handleIncrement, handleDecrement } = useCounter(1);
    const apiUrl = `https://thesimpsonsapi.com/api/characters/${count}`;
    const { data, isLoading, hasError } = useFetch(apiUrl);

    const character = data ? (Array.isArray(data) ? data [0] : data) : null;

    return (
        <div className = "container mt-4">
            <h1 className='text-primary text-center mb-4'>
                Personajes de Los Simpsons
            </h1>

            <hr/>

            {loading && <Loading/>}

            {hasError && (
                <div className='alert alert-danger text-center' role='alert'>
                    Error al cargar: {hasError.message || hasError.toString()}
                    </div>
            )}
            
            {!loading && character && (
                <CharacterInfo character = {character} />
                )}

                <div className='d-flex justify-content-denter gap-3 mt-4'>
                    <button
                    onClick={()=> handleDecrement (1)}
                    disabled={count === 1 || loading}
                    className='btn btn-warning'>
                        Anterior 
                    </button>

                    <button
                    onClick={()=> handleIncrement (1)}
                    disabled={count === 1 || loading}
                    className='btn btn-warning'>
                        Siguiente
                    </button>
                </div>
        </div>
    );
};