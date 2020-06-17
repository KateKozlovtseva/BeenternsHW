
function fun1() {
    let rng=document.getElementById('size'); //rng - это ползунок
    let i1=document.getElementById('i1'); // i1 - input
    let im=document.getElementsByClassName('heart')[0];
    i1.value=`${rng.value} %`;
    im.style.width = `${rng.value}%`;
}

function fun2() {
    let rng2=document.getElementById('blur'); //rng - это ползунок
    let i2=document.getElementById('i2'); // i1 - input
    let im2=document.getElementById('heart');
    i2.value=`${rng2.value} px`;
    im2.style.filter = `blur(${rng2.value}px)`;
}

function hoverFunc(event) {
    if(event.target.classList && event.target.classList.contains('element-area')){
        const container = event.target.querySelector('.element-area-img');
        container.style.backgroundColor = "#FEC30F";
    }
    
}
function hoverFuncZero(event) {
    if(event.target.classList && event.target.classList.contains('element-area')){
        const container = event.target.querySelector('.element-area-img');
        container.style.backgroundColor = "white";
    }
    
}

document.addEventListener('mouseenter', hoverFunc, {capture: true});
document.addEventListener('mouseleave', hoverFuncZero, {capture: true});



// Обработка события click

document.getElementById('element-area1').addEventListener('click', {
    shouldDisplay: false,
    handleEvent(event) { 
    if (this.shouldDisplay) {
        document.querySelector('.say').style.display = 'none';
    }
    else{
        document.querySelector('.say').style.display = 'block';
    }
    this.shouldDisplay = !this.shouldDisplay;
    } 
  });



// Обработка события mouseenter & mouseleave

document.getElementById('element-area2').addEventListener('mouseenter', {
    handleEvent (event) {
        document.getElementById('enotsize').style.width = '150%';    
    }
});

document.getElementById('element-area2').addEventListener('mouseleave', {
    handleEvent (event) {
        document.getElementById('enotsize').style.width = '100%';    
    }
});

// Обработка события wheel

let deg = 0;
document.getElementById('element-area3').addEventListener('wheel', {
    handleEvent (event) {
        document.getElementById('enotrotate').style.transform = `rotate(${deg}deg)`; 
        deg += 5;
    }
});

document.getElementById('element-area3').addEventListener('mouseleave', {
    handleEvent (event) {
        document.getElementById('enotrotate').style.transform = `rotate(0deg)`;    
    }
});

// Обработка события dblclick

document.getElementById('element-area4').addEventListener('dblclick', {
    shouldMirror: false,
    handleEvent(event) { 
    if (this.shouldMirror) {
        document.getElementById('dblenot').style.transform = 'scale(1, 1)';
    }
    else{
        document.getElementById('dblenot').style.transform = 'scale(1, -1)';
    }
    this.shouldMirror = !this.shouldMirror;
    } 
  });


// Обработка события keypress

document.getElementById('element-area5').addEventListener('contextmenu', {
    shouldDisplayText: false,
    handleEvent(event) { 
    document.addEventListener('contextmenu', event => event.preventDefault());
    if (this.shouldDisplayText) {
        document.querySelector('.textmenu').style.display = 'none';
    }
    else{
        document.querySelector('.textmenu').style.display = 'block';
    }
    this.shouldDisplayText = !this.shouldDisplayText;
    } 
  });