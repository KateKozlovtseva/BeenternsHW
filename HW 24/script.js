let i1 = document.getElementById('i1');
let rng = document.getElementById('size');
let im = document.getElementsByClassName('heart')[0];
rng.oninput = function fun1() {
    i1.value = `${rng.value} %`;
    im.style.width = `${rng.value}%`;
}
let i2 = document.getElementById('i2');
let rng2 = document.getElementById('blur');
rng2.oninput = function fun2() {
    i2.value=`${rng2.value} px`;
    im.style.filter = `blur(${rng2.value}px)`;
}

// Hover
function hoverFunc(event) {
    if(event.target.classList && event.target.classList.contains('element-area')){
        const container = event.target.querySelector('.element-area-img');
        container.style.backgroundColor = "#FEC30F";
    }  
}

function hoverFuncZero(event) {
    if(event.target.classList?.contains('element-area')){ // аналогично event.target.classList && event.target.classList.contains('element-area')
        const container = event.target.querySelector('.element-area-img');
        container.style.backgroundColor = "white";
    }  
}

document.addEventListener('mouseenter', hoverFunc, {capture: true});
document.addEventListener('mouseleave', hoverFuncZero, {capture: true});

// Обработка события click
let say = document.querySelector('.say');
document.getElementById('element-area1').addEventListener('click', {
    shouldDisplay: false,
    handleEvent(event) { 
    if (this.shouldDisplay) {
        say.style.display = 'none';
    }
    else{
        say.style.display = 'block';
    }
    this.shouldDisplay = !this.shouldDisplay;
    } 
  });

// Обработка события mouseenter & mouseleave
let enotSize = document.getElementById('enotsize');
document.getElementById('element-area2').addEventListener('mouseenter', {
    handleEvent (event) {
        enotSize.style.width = '150%';    
    }
});

document.getElementById('element-area2').addEventListener('mouseleave', {
    handleEvent (event) {
        enotSize.style.width = '100%';    
    }
});

// Обработка события wheel
let deg = 0;
let enotRotate = document.getElementById('enotrotate');
document.getElementById('element-area3').addEventListener('wheel', {
    handleEvent (event) {
        enotRotate.style.transform = `rotate(${deg}deg)`; 
        deg += 5;
    }
});

document.getElementById('element-area3').addEventListener('mouseleave', {
    handleEvent (event) {
        enotRotate.style.transform = `rotate(0deg)`;    
    }
});

// Обработка события dblclick
let dblEnot = document.getElementById('dblenot');
document.getElementById('element-area4').addEventListener('dblclick', {
    shouldMirror: false,
    handleEvent(event) { 
    if (this.shouldMirror) {
        dblEnot.style.transform = 'scale(1, 1)';
    }
    else{
        dblEnot.style.transform = 'scale(1, -1)';
    }
    this.shouldMirror = !this.shouldMirror;
    } 
  });

// Обработка события contextmenu
let textMenu = document.querySelector('.textmenu');
document.getElementById('element-area5').addEventListener('contextmenu', {
    shouldDisplayText: false,
    handleEvent(event) { 
    document.addEventListener('contextmenu', event => event.preventDefault());
    if (this.shouldDisplayText) {
        textMenu.style.display = 'none';
    }
    else{
        textMenu.style.display = 'block';
    }
    this.shouldDisplayText = !this.shouldDisplayText;
    } 
  });