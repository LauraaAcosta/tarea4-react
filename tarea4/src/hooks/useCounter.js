import { useState } from "react";

export const useCounter = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue);

    const handleIncrement = (value = 1) => {
        setCount(currentCount => currentCount + value);
    };

    const handleDecrement = (value = 1) => {
        setCount(currentCount => {
            if (currentCount <= 1) return 1; // Aseguramos que no baje de 1 (primer personaje)
            return currentCount - value;
        });
    };

    const handleReset = () => {
        setCount(initialValue);
    };

    return {
        count,
        handleIncrement,
        handleDecrement,
        handleReset,
    };
};