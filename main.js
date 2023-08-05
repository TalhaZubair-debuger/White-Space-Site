var HideBtn = document.querySelector('.about-me-ka-btn');
var paragragh = document.querySelector('.paragragh');

HideBtn.addEventListener('click', () => {
    paragragh.classList.remove('hide');
    // bestSellingDesc2.classList.remove('active');
    HideBtn.classList.add('hide');
})