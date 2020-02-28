const fs=require('fs');
const metal = require('metal-name');
const food=require('food-words');

const foodRdm=food[Math.floor(Math.random()*food.length)];

// console.log(`metal:${metal()}`);
console.log(`${metal()} loves having ${foodRdm} at home.`);
