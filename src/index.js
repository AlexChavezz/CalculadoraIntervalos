const showModal = (mediaAritmetica, moda, mediana, mediaGeometrica, mediaArmonica) => {

    const mediaAritmeticaCopy = mediaAritmetica;
    const modaCopy = moda;
    const medianaCopy = mediana;
    document.querySelector('.modal').style.display = 'flex';

    document.querySelector('.modal-res').innerHTML = `
    <table>
        <tbody>
            <tr>
                <td>Media Aritmetica</td>
                <td>${mediaAritmeticaCopy}</td>
            </tr>
            <tr>
                <td>Moda</td>
                <td>${modaCopy}</td>
            </tr>
            <tr>
                <td>Mediana</td>
                <td>${medianaCopy}</td>
            </tr>
            <tr>
                <td>Media Geometrica</td>
                <td>${mediaGeometrica}</td>
            </tr>
            <tr>
            <td>Media Armonica</td>
            <td>${mediaArmonica}</td>
        </tr>
        </tbody>
    </table>
`;  
}
const handleHidden = () => {
    document.querySelector('.modal').style.display = 'none';
}