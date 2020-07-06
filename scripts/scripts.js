const lhApp = {};

lhApp.init = () => {
    console.log('Hello, world');
}

lhApp.mainMenuBtn = document.querySelector('.mainMenuBtn');
lhApp.mainMenuBtn.addEventListener('click', () => {
    const nav = document.querySelector('.mainMenuNav');
    nav.classList.toggle('makeVisible');
})

document.addEventListener("DOMContentLoaded", function () {
    lhApp.init();
});
