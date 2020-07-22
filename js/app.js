




document.addEventListener('DOMContentLoaded', function (){
    const playerOne = "x"
    const playerTwo = "o"
    let turn = "x"
    
    
    const cellOne = document.getElementById("div-One");
    const cellTwo = document.getElementById("div-Two");
    const cellThree = document.getElementById("div-Three");
    const cellFour =  document.getElementById("div-Four");
    const cellFive = document.getElementById("div-Five");
    const cellSix = document.getElementById("div-Six");
    const cellSeven = document.getElementById("div-Seven");
    const cellEight = document.getElementById("div-Eight");
    const cellNine = document.getElementById("div-Nine");
    const reset = document.getElementById("restart-button");
    let status = document.querySelector(".status");
    
    cellOne.addEventListener("click", nextTurn)
    cellTwo.addEventListener("click", nextTurn);
    cellThree.addEventListener("click", nextTurn)
    cellFour.addEventListener("click", nextTurn);
    cellFive.addEventListener("click", nextTurn);
    cellSix.addEventListener("click", nextTurn);
    cellSeven.addEventListener("click", nextTurn);
    cellEight.addEventListener("click", nextTurn);
    cellNine.addEventListener("click", nextTurn);
    
    
    
    const winArray = [[cellOne,cellTwo,cellThree],[cellFour,cellFive,cellSix],[cellSeven,cellEight,cellNine],[cellOne,cellFive,cellSeven],[cellTwo,cellFive,cellEight],[cellTwo,cellSix,cellNine],[cellOne,cellFive,cellNine],[cellThree,cellFive,cellSeven]]
    
    
    
    
    
    function nextTurn(event){
                if(event.target.textContent == ""){
                    event.target.textContent = turn
                   if (turn == playerOne){
                       turn = playerTwo
                   }
                    else {
                       turn = playerOne
                   }
                   status.textContent = turn + " is next"

                }
                
                
            }
            function checkWin(){
                winArray.forEach(){
                    
                }
            



        
})
            
            
            
        
    
   
            

                
            
            
            
            
        
 













































