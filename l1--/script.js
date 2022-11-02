'use strict'
const arr

const chelseaSquad =[
    {
        firstName='Kepa'
        lastName='Arrizabalaga'
    },
    {
        firstName='Reece'
        lastName='James'
    },
    {
        firstName='Kai'
        lastName='Havertz'
    },

];

const filteredArray = chelseaSquad.filter((item)=> {
    return item.lastName[0] === 'A';
});

console.log(filteredArray)