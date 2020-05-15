//previously, each variable was a promise, now each is a function returning a promise

const cleanRoom = () => new Promise((resolve, reject) => resolve('room is cleaned'));
const removeGarbage = (message) => new Promise((resolve, reject) => resolve(message + ' garbage is removed'));
const winIcecream = (message) => new Promise((resolve, reject) => resolve(message + ' ice cream is won'));

cleanRoom()
	.then(result => removeGarbage(result))
	.then(result => winIcecream(result))
	.then(result => console.log(result));