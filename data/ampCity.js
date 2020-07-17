// import functions and grab DOM elements

// initialize state
const jcm800 = {
    id: 'jcm800',
    name: 'Marshall',
    image: '../images/Marshall.jpg',
    description: 'A British rock and Roll classic for the ages.',
    category: 'tube-amp',
    price: 2000.00,
    cost: 500.00
};

const markV = {
    id: 'markv',
    name: 'Mesa-Boogie',
    image: '../images/Mesa.jpg',
    description: 'California Crunch at it\'s finest.',
    category: 'tube-amp',
    price: 2500.00,
    cost: 600.00
};

const dragonSlayer = {
    id: 'dragonslayer',
    name: 'Lanham',
    image: '../images/Lanham.jpg',
    description: 'Hand built in Portland, Oregon and guaranteed to melt faces.',
    category: 'tube-amp',
    price: 2400.00,
    cost: 700.00
};

const twinReverb = {
    id: 'twinReverb',
    name: 'Fender',
    image: '../images/fender.jpg',
    description: 'THE classic American tube tone!',
    category: 'combo-amp',
    price: 2100.00,
    cost: 500.00
};

const rockverb = {
    id: 'rockverb',
    name: 'Orange',
    image: '../images/orange.jpg',
    description: 'From classic to doomtastic, this one\'s got it all!',
    category: 'tube-amp',
    price: 2300.00,
    cost: 600.00
};

const amps = [jcm800, markV, dragonSlayer, twinReverb, rockverb];
export default amps;



// set event listeners to update state and DOM