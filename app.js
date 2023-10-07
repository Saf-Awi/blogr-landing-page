const productNav = document.getElementById('productNav');
const companyNav = document.getElementById('companyNav');
const connectNav = document.getElementById('connectNav');
const productDrop = document.getElementById('productDrop');
const companyDrop = document.getElementById('companyDrop');
const connectDrop = document.getElementById('connectDrop');
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const navLog = document.getElementById('navLog');
const navLinks = document.querySelectorAll('.flex.mainNav li');

let flippedArrow = null;

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        const clickedArrow = link.querySelector('.flex.mainNav .arrow')
        if (flippedArrow && flippedArrow !== clickedArrow) {
            flippedArrow.classList.remove('flip');
        }
        
        clickedArrow.classList.toggle('flip');
        flippedArrow = clickedArrow;
    
    });
})

function openMobileMenu() {
    navLog.style.display = 'grid';
    openMenu.style.display = 'none';
    closeMenu.style.display = 'grid';
}

function closeMobileMenu() {
    navLog.style.display = 'none';
    openMenu.style.display = 'grid';
    closeMenu.style.display = 'none';
}

function resetDesktop() {
    navLog.style.display = 'grid';
    openMenu.style.display = 'none';
    closeMenu.style.display = 'none';
}

function handleWindowResize() {
    const windowWidth = window.innerWidth;

    if (windowWidth > 768) {
        resetDesktop();
    } else {
        closeMobileMenu();
    }
}

window.addEventListener('load', function () {
    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);
});



productNav.addEventListener('click', function () {
    productDrop.classList.toggle('hidden');
    companyDrop.classList.add('hidden');
    connectDrop.classList.add('hidden');

});

companyNav.addEventListener('click', function () {
    productDrop.classList.add('hidden');
    companyDrop.classList.toggle('hidden');
    connectDrop.classList.add('hidden');
    
});

connectNav.addEventListener('click', function () {
    productDrop.classList.add('hidden');
    companyDrop.classList.add('hidden');
    connectDrop.classList.toggle('hidden');
    
});

openMenu.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);
