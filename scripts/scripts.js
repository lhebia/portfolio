const lhApp = {};

lhApp.init = () => {
    lhApp.addMenuButtonListener();
    lhApp.fillSkills();
    lhApp.fitImageToWidth();
}

lhApp.skills = [
    { icon: '<i class="fab fa-html5"></i>', skillName: 'HTML5' },
    { icon: '<i class="fab fa-css3-alt"></i>', skillName: 'CSS3' },
    { icon: '<i class="fab fa-js-square"></i>', skillName: 'JavaScript' },
    { icon: '<i class="fab fa-react"></i>', skillName: 'React' },
    { icon: '<img src="https://img.icons8.com/ios-filled/50/000000/jquery.png" alt="JQuery Logo"/>', skillName: 'JQuery' },
    { icon: '<i class="fab fa-sass"></i>', skillName: 'SASS' },
    { icon: '<i class="fab fa-git-alt"></i>', skillName: 'Git' },
    { icon: '<i class="fab fa-github"></i>', skillName: 'Github' },
    { icon: `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="48" height="48"
                viewBox="0 0 172 172"
                style=" fill:#000000;" > <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M28.66667,132.58333l54.5885,-102.35433c1.15025,-2.15717 4.26058,-2.11775 5.3535,0.07167l18.89133,37.78267z" fill="#000000"></path><path d="M28.66667,132.55467l19.87317,-122.54642c0.51958,-3.20708 4.82675,-3.90225 6.33175,-1.02125l38.29508,73.401z" fill="#666666"></path><path d="M28.69533,132.53317l0.71667,-0.56258l62.81225,-51.38858l-17.716,-33.95567z" fill="#95a5a6"></path><path d="M28.66667,132.58333l95.55317,-92.13825c2.00308,-1.93142 5.34633,-0.79192 5.75483,1.96008l13.35867,90.17817l-53.75,31.32908c-2.18225,1.2255 -4.84467,1.2255 -7.02692,0z" fill="#cccccc"></path></g></g></svg>`, skillName: 'Firebase' },
    { icon: '<i class="fas fa-universal-access"></i>', skillName: 'WCAG' },
    { icon: `<img src="https://img.icons8.com/material-rounded/96/000000/typescript.png" alt="TypeScript logo"/>`, skillName: 'TypeScript' },
    { icon: '<i class="fab fa-python"></i>', skillName: 'Python3' },
];

lhApp.addMenuButtonListener = () => {
    lhApp.mainMenuBtn = document.querySelector('.mainMenuBtn');
    lhApp.mainMenuBtn.addEventListener('click', () => {
        const nav = document.querySelector('.mainMenuNav');
        nav.classList.toggle('makeVisible');
    })
}

lhApp.fillSkills = () => {
    const skillsContainer = document.querySelector('.skillsContainer');
    lhApp.skills.forEach((skill) => {
        const skillBox = document.createElement('li');
        skillBox.classList.add('toolBox');
        skillBox.innerHTML = `
            <span class="skillLogo" aria-label="Icon for ${skill.skillName}">${skill.icon}</span>
            <span class="skillName">${skill.skillName}</span>
        `;
        skillsContainer.appendChild(skillBox);
    })
}

lhApp.fitImageToWidth = () => {
    let viewportWidth = window.innerWidth;
    let profilePhoto = document.querySelector('#profilePhoto');
    if (viewportWidth <= 768) {
        profilePhoto.src = "./../assets/profilePhotoMobile.jpg";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    lhApp.init();
});
