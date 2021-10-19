const bookmarkButton = document.getElementById('bookmarkButton');
const menuButtons = document.querySelector('.hamburger');
const hamburgerButton = document.getElementById('menu-button');
const closeMenuButton = document.getElementById('close-button');
const menu = document.getElementById('menu');
const openModalBtn = document.querySelectorAll('[data-button]');
const closeModalBtn = document.getElementById('closeModal');
const radioBtn = document.querySelectorAll('[data-radio]');
const payCard = document.querySelectorAll('[data-pay]');
const stand = document.querySelectorAll('[data-stand]');
const modal = document.getElementById('modal');
const modalDiv = document.querySelector('.modal');

//toggle bookmark
function toggleBookmark() {
    var element = document.getElementById('button-div');
    element.classList.toggle('bookmarked');
    if (element.classList.contains('bookmarked')) {
        bookmarkButton.innerText = 'Bookmarked';
    } else {
        bookmarkButton.innerText = 'Bookmark';
    }
}

//toggle menu
menuButtons.addEventListener('click', () => {
    menu.classList.toggle('menu-active');
    if (menu.classList.contains('menu-active')) {
        hamburgerButton.style.display = 'none';
        closeMenuButton.style.display = 'block';
    } else {
        hamburgerButton.style.display = 'block';
        closeMenuButton.style.display = 'none';
    }
});

//open Modal
openModalBtn.forEach((openModal) => {
    openModal.addEventListener('click', () => {
        modal.style.display = 'block';
        uncheckRadio();
        removePayCard();
    });
});

//close Modal
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

//radio button event
for (let i = 0; i < radioBtn.length; i++) {
    radioBtn[i].addEventListener('click', () => {
        removePayCard();
        payCard[i].style.display = 'flex';
        stand[i].style.border = '1px solid #3CB3AB';
    });
}

function removePayCard() {
    for (let i = 0; i < payCard.length; i++) {
        payCard[i].style.display = 'none';
        stand[i].style.border = '1px solid rgba(0, 0, 0, 0.15)';
    }
}

function uncheckRadio() {
    for (let i = 0; i < radioBtn.length; i++) {
        radioBtn[i].checked = false;
    }
}

window.addEventListener('click', () => {
    if (e.target == modalDiv) {
        modal.style.display = 'none';
        uncheckRadio();
        removePayCard();
    }
});
