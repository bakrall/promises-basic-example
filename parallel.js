const cleanRoom = () => new Promise((resolve, reject) => resolve('room is cleaned'));
const removeGarbage = () => new Promise((resolve, reject) => resolve('garbage is removed'));
const winIcecream = () => new Promise((resolve, reject) => resolve('ice cream is won'));

Promise.all([cleanRoom(), removeGarbage(), winIcecream()]).then(() => console.log('all finished'));