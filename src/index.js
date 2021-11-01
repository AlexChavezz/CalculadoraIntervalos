const showModal = (mediaAritmetica, moda, mediana) => {

    const mediaAritmeticaCopy = mediaAritmetica;
    const modaCopy = moda;
    const medianaCopy = mediana;
    document.querySelector('.modal').style.visibility = 'visible';

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
        </tbody>
    </table>
`;  
}
const handleHidden = () => {
    document.querySelector('.modal').style.visibility = 'hidden';
}