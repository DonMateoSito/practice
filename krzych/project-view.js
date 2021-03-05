let myDiv = document.getElementById('project-no1');

myDiv.addEventListener('mouseover', () => {
    myDiv.style.backgroundImage = `url('images/2.jpg')`;
});

myDiv.addEventListener('mouseleave', () => {
    myDiv.style.backgroundImage = null;
});