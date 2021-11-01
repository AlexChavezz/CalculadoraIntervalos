export const getMC = ({ maxValues, minValues }) => {
    const difference = (maxValues[0] - minValues[0]) / 2;
    let MC = [];
    maxValues.forEach(element => {
        MC = [...MC, element - difference];
    });
    return MC;
}

export const getFa = ( {frecuencia = []} ) => {
    const frecuenciaCopy = frecuencia.slice(0);
    frecuenciaCopy.reverse();
    let fa = [];
    for (let i = 0; i <= frecuenciaCopy.length - 1; i++) {
        fa = [...fa, frecuenciaCopy[i] += (frecuenciaCopy[i-1] || 0)];
    }
    return fa;
}

export const getFr = ({ frecuencia }, fa) => {
    const frecuenciaCopy = frecuencia.slice(0);
    const n = fa.reverse()[0];
    let fr = [];
    frecuenciaCopy.forEach(element => {
        fr = [ ...fr, (element / n) * 100 ]
    })
    return fr;
}

export const getFra = ( fr ) => {

    const frCopy = fr.slice(0)
    frCopy.reverse();
    let fra = [];
    for (let i = 0; i <= frCopy.length - 1; i++) {
        fra = [ ...fra, frCopy[i] += (frCopy[i-1] || 0) ]
    }
    return fra.reverse();
}

export const getMediaAritmetica = ({ frecuencia }, mc, fa) => {
    const frecuenciaCopy = frecuencia.slice(0);
    const mcCopy = mc.slice(0);
    const faCopy = fa.slice(0);
    const n = faCopy[0];
    let fXmc = [];
    let sumaFXMc = 0;
    for (let i = 0; i <= frecuenciaCopy.length - 1; i++) {
        fXmc = [...fXmc,  frecuenciaCopy[i] * mcCopy[i]];
        sumaFXMc += fXmc[i];
    }
    const mediaAritmtica = sumaFXMc / n;
    return mediaAritmtica;
}
export const getModa = ({ frecuencia }, mc) => {
    const frecuenciaCopy = frecuencia.slice(0);
    const mcCopy = mc.slice(0);
    let nMayor = 0;
    let indice;
    
    //Encontrar la frecuancia mayor

    for (let i = 0; i <= frecuenciaCopy.length ; i++) {
        if( frecuenciaCopy[i] > nMayor ){
            nMayor = frecuenciaCopy[i];
        }
    }

    //Encontrar indice de la mediana
    
    for (let i = 0; i < frecuenciaCopy.length; i++){
        if(frecuenciaCopy[i] === nMayor){
            indice = i;
            break;
        }
    }
    return {
        moda: mcCopy[indice],
        indice: indice,  
    };
}

export const getMediana = ({minValues, maxValues, frecuencia}, i, fa) => {

    const li = minValues[i];
    // const indice = parseInt(i + 1);
    const fa2 = fa[i+1] - 1;
    const fi = frecuencia[i];
    const ai = (maxValues[i] - minValues[i]) + 1;
    const n = fa[0] / 2;
    const div = n - fa2;
    const medianaOne =  div / fi ;
    const medianaTwo = medianaOne * ai
    const mediana = li + medianaTwo;
    return mediana;
}
