export const getNumberIntervals = () => {
    const valueIntervals = document.querySelector('#intervals');

    return valueIntervals;
}

export const getMinValues = () => {
    return getValues(".min-value");
}

export const getMaxValues = () => {
    return getValues(".max-value");
}

export const getFrecuencia = () => {
    return getValues('.frecuencia');
}

export const getAllValues = () => {
    const minValues = getMinValues();
    const maxValues = getMaxValues();
    const frecuencia = getFrecuencia();
    return {
        minValues,
        maxValues,
        frecuencia
    }
}


export const getValues = (ref) => {
    const valuesRef = document.querySelectorAll(ref);
    let values = [];
    valuesRef.forEach(({ value }) => {
        values = [ ...values, parseInt(value) ];
    });
    return values;
}