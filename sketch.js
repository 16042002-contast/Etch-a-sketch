let container = document.querySelector('.container');


let btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
    let length = document.querySelector('#length').value;
    let breadth = document.querySelector('#breadth').value;
    createGrid(length,breadth);

},{once:true});

function createRow(length) {
    let div = document.createElement('div');
    div.classList.add('row');
    for (let i = 1; i <=length; i++) {
        let box = document.createElement('div');
        box.classList.add('lil-div');
        div.appendChild(box);
        
    }

    container.appendChild(div);
}



function createGrid(length,breadth) {
    for (let i = 1; i <=breadth; i++) {
        createRow(length); 
        
    }
    draw();
}

function draw() {
    let allBox = document.querySelectorAll('.lil-div');
    allBox.forEach(box=>{
        box.addEventListener('mouseover',(e)=>{
            let color1 = Math.ceil(Math.random()*255);
            let color2 = Math.ceil(Math.random()*255);
            let color3 = Math.ceil(Math.random()*255);
            
            let tcolor = `rgb(${color1},${color2},${color3})`;
            box.style.backgroundColor = tcolor;
           
            
          
               
        })
    })
}






// let circles = ['red','green','blue','white','yellow'];
// let colors = document.createElement('div');
// colors.classList.add('colors');
// for (let  i= 0;  i<5 ; i++) {
//     let color = document.createElement('div');
//     color.classList.add('color');
//     color.style.backgroundColor = circles[i];
//     colors.appendChild(color);
    
// }
// container.insertBefore(colors,div);









