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
const input = document.querySelectorAll('[data-input]');
const submitButton = document.querySelectorAll('[data-submit]');
const itemsLeft = document.querySelectorAll('[data-left]');
const itemsLeftModal = document.querySelectorAll('[data-leftModal]');
const totalAmount = document.getElementById('totalAmount');
const totalBackers = document.getElementById('totalBackers');
const progressBar = document.getElementById('progres');
const modalForm = document.getElementById('modal-form');
const successForm = document.getElementById('success-form');
const successBtn = document.getElementById('successBtn');
const dataSection = document.querySelectorAll('[data-section]');
let backed = 89914;
let backers = 5007;
let bambooLeft = 101;
let blackLeft = 64;
let mahoganyLeft = 0;

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
        modal.style.display = 'flex';
        modalForm.style.display = 'block';
        uncheckRadio();
        removePayCard();
    });
});

//close Modal
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

//close modal on click
modal.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
        uncheckRadio();
        removePayCard();
    }
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

for (let i = 0; i < submitButton.length; i++) {
    submitButton[i].addEventListener('click', () => {
        if (input[i].value !== '') {
            backed += parseInt(input[i].value);
            backers++;
            input[i].value = '';
            incrementProgressBarValue();
            openSuccesForm();
            closeFormOnSubmit();
            //decrement left by class name
            if (input[i].classList.contains('bamboo-input')) {
                bambooLeft--;
                itemsLeft[i - 1].innerText = bambooLeft;
                itemsLeftModal[i - 1].innerText = bambooLeft;
            } else if (input[i].classList.contains('black-input')) {
                blackLeft--;
                itemsLeft[i - 1].innerText = blackLeft;
                itemsLeftModal[i - 1].innerText = blackLeft;
            } else if (input[i].classList.contains('mahogany-input')) {
                mahoganyLeft--;
                itemsLeft[i - 1].innerText = mahoganyLeft;
                itemsLeftModal[i - 1].innerText = mahoganyLeft;
            }

            //disable forms if left == 0
            if (itemsLeft[i - 1].innerText == 0) {
                openModalBtn[i].disabled = true;
                dataSection[i - 1].classList.add('out-of-stock');
                radioBtn[i].disabled = true;
                stand[i].classList.add('not-available');
            }
        } else {
            modal.style.display = 'block';
        }

        totalAmount.innerText = '$' + backed;
        totalBackers.innerText = backers;
    });
}

//progressBar value
function incrementProgressBarValue() {
    let currentValue = progressBar.value * 1000;
    let newValue = (backed / currentValue) * 100 - 100;
    let value = Math.round(progressBar.value + newValue);
    progressBar.value = value;
}

function closeFormOnSubmit() {
    modalForm.style.display = 'none';
    uncheckRadio();
    removePayCard();
}

function openSuccesForm() {
    successForm.style.display = 'flex';
}

successBtn.addEventListener('click', () => {
    successForm.style.display = 'none';
    modal.style.display = 'none';
});
