let hoverItems = document.querySelectorAll('[data-hover]');
let cards = document.querySelectorAll(".cards__item");
let width = document.documentElement.offsetWidth;
let height = document.documentElement.offsetHeight;
let header = document.querySelector('header');
let body = document.querySelector("body");
let links = document.querySelectorAll('[data-link]');
let mobileMenu = document.querySelector('.mobile-menu');
let nav = document.querySelector('.nav');
let bannerImg = document.querySelector('.banner__img');

hoverAdd();
cardsHover();
scrollAnimate();
window.addEventListener('resize', function() {
    width = document.documentElement.offsetWidth;
    hoverAdd();
    cardsHover();
    scrollAnimate();
});

for(let link of links) {
    link.addEventListener('click', function(e){
        e.preventDefault();
        if (mobileMenu.classList.contains('close')) {
            mobileMenu.classList.remove('close');
            nav.classList.remove('active');
            body.classList.remove('active');
        };
        let linkName = this.getAttribute('data-link');
        if (linkName == 'top') {
            window.scrollTo({top: 0, behavior: 'smooth'});
            return;
        }
        let linkElem = document.querySelector(linkName);
        let elemScroll = linkElem.offsetTop;
        if (mobileMenu.offsetWidth > 0) {
            if (bannerImg.offsetWidth > 0) {
                window.scrollTo({top: (elemScroll - header.offsetHeight + 22), behavior: 'smooth'});
            } else {
                window.scrollTo({top: (elemScroll - header.offsetHeight), behavior: 'smooth'});
            }
        } else {
            window.scrollTo({top: (elemScroll - header.offsetHeight + 50), behavior: 'smooth'});
        }
    });
}

mobileMenu.addEventListener('click', function() {
    this.classList.toggle('close');
    nav.classList.toggle('active');
    body.classList.toggle('active');
})

// <HOVER>
function hoverAdd() {
    if (width <= 768) {
        for (let hoverItem of hoverItems) {
            hoverItem.classList.remove('hover');
        }
    }
    else {
        for (let hoverItem of hoverItems) {
            hoverItem.classList.add('hover');
        }
    }
}
// </HOVER>

// <CARDS HOVER>
function cardsHover() {
    for (let card of cards) {
        card.addEventListener('mouseover', function(e) {
            if(width > 768) {
                let cardName = this.getAttribute('data-card');
                this.classList.add('card_hover');
                document.getElementById(cardName).classList.add('card_hover');
            }
        });
        card.addEventListener('mouseout', function(e) {
            let cardName = this.getAttribute('data-card');
            this.classList.remove('card_hover');
            document.getElementById(cardName).classList.remove('card_hover');
        });
    }
}
// </CARDS HOVER>

// <SCROLL HEADER>
function scrollAnimate() {
    if (width <= 768 || (width > 768 && scrollY >= 500)) {
        header.classList.add('scroll')
        body.classList.add('scroll');
    }
    document.addEventListener('scroll', function() {
        if (width <= 768 || (width > 768 && scrollY >= 500)) {
            header.classList.add('scroll');
            body.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
            body.classList.remove('scroll');
        }
    })
}
// </SCROLL HEADER>