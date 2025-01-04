// let turn ='O';
// let total_turn=0;

// const winner=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

// let arrangement=new Array(9).fill('E');
// //arrangement=['E','E','E','E','E','E','E','E','E']

// // function Checkwinner(){
// //     for (let [num1,num2,num3] of winner){
// //         if (arrangement[num1]=='E' && arrangement[num1])
// //     }
// // }

// const board1=document.querySelector('.board');
// const boardlogic=function(event){
//     if(arrangement[event.target.id]==='E'){}
// }





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

//this function checkwinner1 is depend on all index element is same or not . and it should not be E
function checkwinner1(){
    for (let [n1,n2,n3] of winner){
        if ((arrangement[n1]!="E") && (arrangement[n1]===arrangement[n2] && arrangement[n2]===arrangement[n3])){
            // console.log([n1,n2,n3]);
            return 1
        }
    }
    return 0
}


// how i click on any cell its print 'X' or 'O'?
//this board is parent element of all cell 
const board=document.querySelector('.board');
let turn='O';
let round=0;
board.addEventListener('click',(event)=>{
    //now when i click on any cell its give me id of that cell.
    // console.log(event.target.id);
    // const element=event.target
    const element=document.getElementById(event.target.id)
    //by above we can only type 'O' but we want to type 'X' then we have to take one variable turn='O'
    //---------------------------------
    // if(turn=='O'){
    // element.innerHTML='O';
    // turn='X'}

    // else{
    //     element.innerHTML='X';
    //     turn ='O'
    // }
    //-------------------------------
    

    //now we have to check winner by taking const Winner and Arrangement
    //above changes:and we have to add this 'O' and 'X' in this arrangement array. arragement index and target id is same. so add this  logic in above.
    //-------------------------------------------------
    // if(turn=='O'){
    //     element.innerHTML='O';
    //     turn='X';
    //     arrangement[event.target.id]='O'}
    
    //     else{
    //         element.innerHTML='X';
    //         turn ='O';
    //         arrangement[event.target.id]='X'
    //     }
    //------------------------------------------------

    //By below we can check arrangement
    // console.log(arrangement);
    
    //now we have to check in every turn that is anyone is winning the game or not? by checking arrangement array in every turn that winner ni every posibility ni index ma same 'O' or 'X' hovu joiye.so check winner comes.
    //--------------------------------------------
    // if(turn=='O'){
    //     element.innerHTML='O';
    //     turn='X';
    //     arrangement[event.target.id]='O';
    //     console.log(checkwinner1());
    // }
    
    //     else{
    //         element.innerHTML='X';
    //         turn ='O';
    //         arrangement[event.target.id]='X'
    //         console.log(checkwinner1());
    //     }
    //--------------------------------------------

    //by using checkwinner function its return 1 or 0 . we will use thair reply in if condition as if its come true then winner is that. we will change inner-html of that winning message.
    //---------------------------------------
    // const win=document.getElementById('winningMessage');

    // if(turn=='O'){
    //     element.innerHTML='O';
    //     turn='X';
    //     arrangement[event.target.id]='O';
    //     if (checkwinner()){
    //         win.innerHTML='O is winner'
    //     }
    // }
    
    //     else{
    //         element.innerHTML='X';
    //         turn ='O';
    //         arrangement[event.target.id]='X';
    //         if (checkwinner()){
    //             win.innerHTML='X is winner'
    //         }
    //     }
    //----------------------------------------

    //when i click on any cell its give me 'O' or 'X' but again click on that it can change that value. so if any innerHtMl is present there then don't change.
   
    //AA BELOW IF CONDITION NE BIJI AA RITE PA LAKHI SAKAY
    // if (element.innerHTML=='')==>aa pan lakhi sakay 6e.
    //-------------------------------------------
    // const win=document.getElementById('winningMessage');
    // if (arrangement[event.target.id]==='E')
    //     {
    // if(turn=='O'){
    //     element.innerHTML='O';
    //     turn='X';
    //     arrangement[event.target.id]='O';
    //     if (checkwinner()){
    //         win.innerHTML='O is winner'
    //     }
    // }
    
    //     else{
    //         element.innerHTML='X';
    //         turn ='O';
    //         arrangement[event.target.id]='X';
    //         if (checkwinner()){
    //             win.innerHTML='X is winner'
    //         }
    //     }

    //     }
    //---------------------------------------------

    //by using above code jyare aapan ne winner mali jase to pan jo blank cell par click kar so to to winner change thai jase to tene kai rite rokso.
    //to tena mate check karso ke koi winner hase to win na innerhtml ma kai lakhelu hase nahi tar nahi hoy.
    //--------------------------------------------
    // const win=document.getElementById('winningMessage');
    // if (arrangement[event.target.id]==='E' && win.innerHTML=='')
    //     {
    // if(turn=='O'){
    //     element.innerHTML='O';
    //     turn='X';
    //     arrangement[event.target.id]='O';
    //     if (checkwinner()){
    //         win.innerHTML='O is winner'
    //     }
    // }
    
    //     else{
    //         element.innerHTML='X';
    //         turn ='O';
    //         arrangement[event.target.id]='X';
    //         if (checkwinner()){
    //             win.innerHTML='X is winner'
    //         }
    //     }

    //     }

    //-----------------------------------------
    //jo aapne aa upar vali win.innerHTML=='' no use na karvo hoy to removeeventlistener no use karvo pade tena mate aapne je function addeventlistener ma mukyu 6e tej function ne remove event listener ma mukvu pade.
    // aavu parva mate win.innerHTML=='' aa condition lakhyu tena pahla no code lavi daiye.pa6i aa addeventlistener vala call back ne kai function ma lai laiye.tena mate biji day26.3(p).js laiye tema aa method 6e.tema function nu name printer 6e.
    //----------------------------------------------
    //have aapne  badha cell bharai jase pan koi winner nahi male to te message kevi rite lakhvano?tena mate total turn ne plus karta raho.
    //--------------------------------------------------

    
    // round++
    // const win=document.getElementById('winningMessage');
    // if (arrangement[event.target.id]==='E' && win.innerHTML=='')
    //     {
    // if(turn=='O'){
    //     element.innerHTML='O';
    //     turn='X';
    //     arrangement[event.target.id]='O';
    //     if (checkwinner()){
    //         win.innerHTML='O is winner'
    //     }
    // }
    
    //     else{
    //         element.innerHTML='X';
    //         turn ='O';
    //         arrangement[event.target.id]='X';
    //         if (checkwinner()){
    //             win.innerHTML='X is winner'
    //         }
    //     }

    //     }

    // if (round==9){
    //     win.innerHTML='Nobody is winner'
    // }
    //-----------------------------------------
    //here is problem that when round=9 and winner is someone then its give me wrong message so we have 2 method for correct this error:
    //method-1:by using return method when someone is winner already. so code not executed further.
    //ahiya aapne round ne if vali condition ni undar lakhyu karan ke aapne jo bahar lakhso to ahiye event listening chalu hase to te round ne vadhari dese
    // round++
    // const win=document.getElementById('winningMessage');
    // if (arrangement[event.target.id]==='E' && win.innerHTML=='')
    //     {
        

    //     if(turn=='O'){
    //     element.innerHTML='O';
    //     turn='X';
    //     arrangement[event.target.id]='O';
    //     if (checkwinner()){
    //         win.innerHTML='O is winner'
    //         return
    //     }
    // }
    
    //     else{
    //         element.innerHTML='X';
    //         turn ='O';
    //         arrangement[event.target.id]='X';
    //         if (checkwinner()){
    //             win.innerHTML='X is winner'
    //             return 
    //         }
    //     }

    //     if (round==9){
    //     win.innerHTML='Nobody is winner'
    //     }

    
    // }
    //-------------------------------------------------------
    //METHOD-2:without return method:by adding one extra condition with round=9 that if innerhtml present in message then we dont need to change it.
    round++
    const win=document.getElementById('winningMessage');
    if (arrangement[event.target.id]==='E' && win.innerHTML=='')
        {
        

        if(turn=='O'){
        element.innerHTML='O';
        turn='X';
        arrangement[event.target.id]='O';
        if (checkwinner()){
            win.innerHTML='O is winner'
        
        }
    }
    
        else{
            element.innerHTML='X';
            turn ='O';
            arrangement[event.target.id]='X';
            if (checkwinner()){
                win.innerHTML='X is winner'
                
            }
        }

        if (round==9 && win.innerhtml==''){
        win.innerHTML='Nobody is winner'
        }

    
    }
    //-----------------------------------------------


 
})

//now how to make restart 
const restart1=document.getElementById('restartButton');
restart1.addEventListener('click',()=>{
    arrangement=['E','E','E','E','E','E','E','E','E'];
    
    //make all cell innerhtml empty
    all_cell=document.querySelectorAll('.cell');
    // console.log(all_cell)
    for (let cell of all_cell){
        cell.innerHTML='';
    }
    const win1=document.getElementById('winningMessage')
    win1.innerHTML='';
    
    turn='O';
    round=0;
    

})










