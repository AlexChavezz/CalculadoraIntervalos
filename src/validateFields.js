import { getMinValues, getMaxValues, getFrecuencia } from "./getValuesFields.js";

export const validateFields = (array = []) => {    
    let isValidate = true;
    array.forEach( value => {
        if( !value ){
            isValidate = false;
        }
    });
    return isValidate;
}

export const isValidate = () => {
    let isValidate = true;
    const minValues = getMinValues();
    const maxValues = getMaxValues();
    const frecuanciaValues = getFrecuencia();

    let isValidatedMinFields = validateFields(minValues);
    let isValidatedMaxFields = validateFields(maxValues);
    let isFrecuenciaValidate = validateFields(frecuanciaValues);
    const fildsAreValidate = [isValidatedMinFields, isValidatedMaxFields, isFrecuenciaValidate]    
    fildsAreValidate.forEach( value => {
        if( !value ){
            isValidate = false;
        }
    })
    return isValidate;
}

