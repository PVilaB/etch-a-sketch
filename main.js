const gridTemplate = document.querySelector('.grid-template');
const clearBtn = document.querySelector('.clear-btn');
let rows = 8;
let columns = 8;






// FUNCTIONS



function makeGrid (rows, cols){
    gridTemplate.innerHTML= '';
    gridTemplate.style.setProperty('--grid-rows', rows);
    gridTemplate.style.setProperty('--grid-cols', cols);
    for (let index = 0; index < (rows*cols); index++) {
        const cell = document.createElement('div');
        cell.classList.add('cell'); 
        gridTemplate.appendChild(cell);
        // console.log(index)
    }
    
}

function clear(){
    gridTemplate.innerHTML= '';
    makeGrid(8,8);
};
function gridRange(){
    makeGrid(8,8);
    const rangeValue = document.getElementById('range');
    const rangeLabel = document.getElementById('rangeLabel');
    rangeLabel.innerHTML = '8 x 8';
    console.log(rangeValue.value)
    rangeValue.onchange = () =>{
        let val = rangeValue.value;
        rangeLabel.innerHTML = val + " x " + val;
        // console.log(val);
        makeGrid(val,val);
    }
    clearBtn.onclick = () => clear();
    const cell = document.querySelector('.cell');
    console.log(cell);
    cell.addEventListener('mouseover', ()=>{
        cell.classList.toggle = 'black';
    });
    
};
gridRange()


