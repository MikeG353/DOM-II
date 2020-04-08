// Your code goes here
let btnList = document.querySelectorAll('.destination .btn')
btnList[0].addEventListener('click', (event) => { event.target.style.backgroundColor = 'red'; });
btnList[1].addEventListener('click', (event) => { event.target.style.backgroundColor = 'white'; });
btnList[2].addEventListener('click', (event) => { event.target.style.backgroundColor = 'blue'; });

let imgChange = document.querySelector('.content-destination img')
imgChange.addEventListener('mouseover', (event) => { event.target.src = 'img/island.jpg'});