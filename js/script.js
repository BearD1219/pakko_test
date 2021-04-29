let hoverItems = document.querySelectorAll('[data-hover]');
let cards = document.querySelectorAll(".cards__item");
let width = document.documentElement.offsetWidth;
let height = document.documentElement.offsetHeight;
let header = document.querySelector('header');
let banner = document.querySelector(".banner");
hoverAdd();
cardsHover();
window.addEventListener('resize', function() {
    width = document.documentElement.offsetWidth;
    hoverAdd();
    cardsHover();
});

if (scrollY >= 500) {
    header.classList.add('scroll');
    banner.classList.add('scroll');
}
document.addEventListener('scroll', function() {
    if (scrollY >= 500) {
        header.classList.add('scroll');
        banner.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
        banner.classList.remove('scroll');
    }
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