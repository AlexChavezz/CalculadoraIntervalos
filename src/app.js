import { createAlert, createNewStep, lastStep } from './ui.js';
import { getNumberIntervals, getAllValues } from './getValuesFields.js';
import { isValidate } from './validateFields.js';
const main = () => {


    document.querySelector('form').addEventListener('submit', (event) => {
        event.preventDefault();

        const { value } = getNumberIntervals();
        const number = parseInt(value);
        createNewStep(number);
        const buttom  = document.querySelector('.btn-next');
        if( buttom ){
            buttom.addEventListener('click', ()=>{
                if( isValidate() ){
                    const allValues = getAllValues();
                    lastStep(allValues);
                }else{
                    createAlert('danger','fill all fields');
                }
            })
        }
    });
       
}
main();


