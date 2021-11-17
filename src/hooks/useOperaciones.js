import React, { useState } from 'react';

export const useOperaciones = () => {
    const [number1, setNumber1] = useState(0)
    const [number2, setNumber2] = useState(0)

    const sumar = () => {
        const num1 = Number(number1)
        const num2 = Number(number2)

        alert(num1 + num2)
    }

    const restar = () => {
        const num1 = Number(number1)
        const num2 = Number(number2)

        alert(num1 - num2)

    }
    const multiplicar = () => {
        const num1 = Number(number1)
        const num2 = Number(number2)

        alert(num1 * num2)

    }

    return {
        setNumber1,
        setNumber2,
        sumar,
        restar,
        multiplicar
    }
}


