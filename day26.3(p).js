const winner=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

let arrangement=['E','E','E','E','E','E','E','E','E']

function checkwinner(){
    for (let [n1,n2,n3] of winner){
        if ((arrangement[n1]=='O' && arrangement[n2]=='O' && arrangement[n3]=='O')||(arrangement[n1]=='X' && arrangement[n2]=='X' && arrangement[n3]=='X')){
            // console.log([n1,n2,n3]);
            return 1;

        }

    }


    return 0;

}

const board=document.querySelector('.board');
let turn='O';
// board.addEventListener('click',(event)=>{
//     const element=document.getElementById(event.target.id);
//     const win=document.getElementById('winningMessage');
//     if (arrangement[event.target.id]==='E')
//         {
//     if(turn=='O'){
//         element.innerHTML='O';
//         turn='X';
//         arrangement[event.target.id]='O';
//         if (checkwinner()){
//             win.innerHTML='O is winner'
//         }
//     }
    
//         else{
//             element.innerHTML='X';
//             turn ='O';
//             arrangement[event.target.id]='X';
//             if (checkwinner()){
//                 win.innerHTML='X is winner'
//             }
//         }

//         }
    
        
        
//     })
//---------------------------------------------------
//ABOVE call back function ne variable ma lakhiye.
// const printer=(event)=>{
//     const element=document.getElementById(event.target.id);
//     const win=document.getElementById('winningMessage');
//     if (arrangement[event.target.id]==='E')
//         {
//     if(turn=='O'){
//         element.innerHTML='O';
//         turn='X';
//         arrangement[event.target.id]='O';
//         if (checkwinner()){
//             win.innerHTML='O is winner';
//             //here we have to remove event listener
//             board.removeEventListener('click',printer);
//         }
//     }
    
//         else{
//             element.innerHTML='X';
//             turn ='O';
//             arrangement[event.target.id]='X';
//             if (checkwinner()){
//                 win.innerHTML='X is winner';
//                 //here we have to remove event listener
//                 board.removeEventListener('click',printer);
//             }  
//         }


//         }
    
    
//     }

// board.addEventListener('click',printer)
//--------------------------------------------------------
//aa upar na ma round=9 ni condition add kariye
// let round=0;
// const printer=(event)=>{
//     const element=document.getElementById(event.target.id);
//     const win=document.getElementById('winningMessage');
//     round++
//     if (arrangement[event.target.id]==='E')
//         {
//     if(turn=='O'){
//         element.innerHTML='O';
//         turn='X';
//         arrangement[event.target.id]='O';
//         if (checkwinner()){
//             win.innerHTML='O is winner';
//             //here we have to remove event listener
//             board.removeEventListener('click',printer);
//         }
//     }
    
//         else{
//             element.innerHTML='X';
//             turn ='O';
//             arrangement[event.target.id]='X';
//             if (checkwinner()){
//                 win.innerHTML='X is winner';
//                 //here we have to remove event listener
//                 board.removeEventListener('click',printer);
//             }  
//         }


//         }
//     if (round==9){
//         win.innerHTML='Nobody is winner'
//     }
    
    
//     }

// board.addEventListener('click',printer)
//------------------------------------------------------
//above is without adding return .if round=9 and at last moment someone is winner then its show me 'nobody is winner'
let round=0;
const printer=(event)=>{
    const element=document.getElementById(event.target.id);
    const win=document.getElementById('winningMessage');
    round++
    if (arrangement[event.target.id]==='E')
        {
    if(turn=='O'){
        element.innerHTML='O';
        turn='X';
        arrangement[event.target.id]='O';
        if (checkwinner()){
            win.innerHTML='O is winner';
            //here we have to remove event listener
            board.removeEventListener('click',printer);
            return
        }
    }
    
        else{
            element.innerHTML='X';
            turn ='O';
            arrangement[event.target.id]='X';
            if (checkwinner()){
                win.innerHTML='X is winner';
                //here we have to remove event listener
                board.removeEventListener('click',printer);
                return 
            }  
        }


        }
    if (round==9){
        win.innerHTML='Nobody is winner'
    }
    
    
    }

board.addEventListener('click',printer)

const restart1=document.getElementById('restartButton');
restart1.addEventListener('click',()=>{
    arrangement=['E','E','E','E','E','E','E','E','E'];
    
    //make all cell innerhtml empty
    all_cell=document.querySelectorAll('.cell');
    // console.log(all_cell)
    for (let cell of all_cell){
        cell.innerHTML='';
    }
    //add again event listener on board:
    board.addEventListener('click',printer)
    //turn should start from 'O';
    turn='O'
    round=0;

    const win1=document.getElementById('winningMessage');
    win1.innerHTML='';

})

