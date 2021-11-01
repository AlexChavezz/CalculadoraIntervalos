import { 
    getMC,
    getFa,
    getFr,
    getFra,
    getMediaAritmetica,
    getModa,
    getMediana,
} from './operations.js';
export const createAlert = (type, text) => {
    const divElement = document.createElement('div');
    divElement.className = `alert alert-${type}`;
    divElement.innerHTML = text;
    document.querySelector('.container').appendChild(divElement);
    setTimeout(() => {
        divElement.remove()
    }, 2000)
}

export const createNewStep = (number) => {
    let rows = ''
    for (let i = 1; i <= number; i++) {
        rows = rows + `
        <tr>
            <td>
                <input type="number" placeholder="min" class="min-value" />
                <input type="number" placeholder="max" class="max-value" />
            </td>
            <td>
                <input type="number" placeholder="Frecuencia" class="frecuencia"/>
            </td>
        </tr>`;
    }
    document.querySelector('section').innerHTML = `
     <table class="table-frecuencia">
        <tbody>
            <tr>
                ${rows}
            </tr>
        </tbody>
    </table>
    <button class="btn btn-next" >Calcular</button>
`;
}




export const lastStep = (values) => {
    // console.log(values.frecuencia)
    const mc = getMC(values);
    const fa = getFa(values);
    const fr = getFr(values, fa);
    const fra = getFra(fr);
    const mediaAritmetica = getMediaAritmetica(values, mc, fa);
    // getModa(values, mc);
    const { moda, indice } = getModa(values, mc);
    const mediana = getMediana(values, indice, fa);

    let rows = '';
    for (let i = 0; i <= values.minValues.length - 1; i++) {
        rows = rows + `
        <tr>
            <td>${values.minValues[ i ]}-${values.maxValues[ i ]}</td>
            <td>${values.frecuencia[ i ]}</td>
            <td>${mc[ i ]}</td>
            <td>${fa[ i ]}</td>
            <td>${fr[ i ] % 1 === 0 ? fr[ i ] : fr[ i ].toFixed(2)}</td>
            <td>${fra[ i ]}</td>
        </tr>
        `;
    }
    const content = `
    <table class="table-results">
        <thead>
            <tr>
                <th>
                    Intervalos
                </th>
                <th>
                    Fi
                </th>
                <th>
                    m.c.
                </th>
                <th>
                    Fa
                </th>
                <th>
                    Fr
                </th>
                <th>
                    Fra
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                ${rows}
            </tr>
        </tbody>
    </table>
    <button class="btn btn-see-more" onclick="showModal(${mediaAritmetica}, ${moda}, ${mediana})">Ver más</button>
    `;
    document.querySelector('section').innerHTML = content;
}
