// import functions and grab DOM elements
import { renderGuitarAmps } from './render-guitar-amps.js';
// initialize state
const jcm800 = {
    code: 'JCM-800',
    name: 'Marshall',
    image: '../images/Marshall.jpg',
    description: 'A British rock and Roll classic for the ages.',
    category: 'tube-amp',
    price: 2000.00,
    cost: 500.00
};

const markV = {
    code: 'Mark-V',
    name: 'Mesa-Boogie',
    image: '../images/Mesa.jpg',
    description: 'California Crunch at it\'s finest.',
    category: 'tube-amp',
    price: 2500.00,
    cost: 600.00
};

const dragonSlayer = {
        code: 'Dragon-Slayer',
        name: 'Lanham',
        image: '../images/Lanham.jpg',
        description: 'Hand built in Portland, Oregon and guaranteed to melt faces.',
        category: 'tube-amp',
        price: 2400.00,
        cost: 700.00
    };
}

const twinReverb = {
    code: 'Twin- Reverb',
    name: 'Fender',
    image: '../images/Fender.jpg',
    description: 'THE classic American tube tone!',
    category: 'combo-amp',
    price: 2100.00,
    cost: 500.00
};

const rockverb = {
    code: 'Rockverb',
    name: 'Orange',
    image: '../images/orange.jpg',
    description: 'From classic to doomtastic, this one\'s got it all!',
    category: 'tube-amp',
    price: 2300.00,
    cost: 600.00
};



// set event listeners to update state and DOM