// Your code goes here
let btnList = document.querySelectorAll('.destination .btn');
btnList[0].addEventListener('click', (event) => { event.target.style.backgroundColor = 'red'; });
btnList[1].addEventListener('click', (event) => { event.target.style.backgroundColor = 'white'; });
btnList[2].addEventListener('click', (event) => { event.target.style.backgroundColor = 'blue'; });

let imgChange = document.querySelector('.content-destination img')
imgChange.addEventListener('mouseover', (event) => { event.target.src = 'img/island.jpg'});

let navList = document.querySelector('.nav');

document.addEventListener('keydown', (blue) => { navList.style.backgroundColor = 'blue' });

let trigger = document.querySelector('.logo-heading');
trigger.addEventListener('dblclick', (green)=> {navList.style.backgroundColor = 'green' });

trigger.addEventListener('drag', (red)=>{document.querySelector('header').style.backgroundColor = 'red'})

trigger.addEventListener('dragend', (white)=>{document.querySelector('header').style.backgroundColor = 'white'})

window.addEventListener('load', (pink)=> {navList.style.backgroundColor = 'pink'});

window.addEventListener('beforeprint', (orange) => { navList.style.backgroundColor = 'orange' });

window.addEventListener('afterprint', (yellow) => { navList.style.backgroundColor = 'yellow' });

window.addEventListener('scroll', (purple) => { navList.style.backgroundColor = 'purple' });

let links = document.querySelector('.nav-link');
links.addEventListener('click', (event) => {event.preventDefault()});
