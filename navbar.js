let hamburger = document.getElementsByClassName('ham')[0];
let line1 = document.getElementsByClassName('line1')[0];
let line2 = document.getElementsByClassName('line2')[0];
let dot = document.getElementsByClassName('dot')[0];


// prevents hamburger button from doing transition on page load
hamburger.addEventListener('mouseover', () => {
    if(!line1.classList.contains('transition')) {
    line1.classList.add('transition');
    line2.classList.add('transition');
    dot.classList.add('transition')
    }
});

let card = document.getElementsByClassName('card')[0];
let navbar = document.getElementsByClassName('navbar')[0];

hamburger.addEventListener('click', () => {
    if(!card.classList.contains('card-open-animation')) {
        card.classList.add('card-open-animation');
        card.classList.remove('card-close-animation');
        navbar.classList.add('navbar-open');
        navbar.classList.remove('navbar-close');
    } else if(card.classList.contains('card-open-animation')) {
        card.classList.add('card-close-animation');
        card.classList.remove('card-open-animation');
        navbar.classList.add('navbar-close');
        navbar.classList.remove('navbar-open');
    }
});


let searchbar = document.getElementsByClassName('searchbar')[0];
let searchButton = document.getElementsByClassName('search')[0];

searchButton.addEventListener('click', () => {
    if(!searchbar.classList.contains('searchbar-open')) {
        searchbar.classList.add('searchbar-open');
        searchbar.classList.remove('searchbar-close');
    } else if(searchbar.classList.contains('searchbar-open')) {
        searchbar.classList.add('searchbar-close');
        searchbar.classList.remove('searchbar-open');
    }
});
