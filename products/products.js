import ampArr from '../data/ampCity.js';
import { renderGuitarAmps } from '../render-guitar-amps.js';
const ampList = document.querySelector('#amps');

for (let i = 0; i < ampArr.length; i ++) {
    const amp = ampArr[i];
    const el = renderGuitarAmps(amp);
    ampList.appendChild(el);
} 

