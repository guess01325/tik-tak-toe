




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
    reset.addEventListener("click",resetGame);
    
    
    
    const winArray = [["div-One","div-Two","div-Three"],["div-Four","div-Five",'div-Six'],['div-Seven',"div-Eight","div-Nine"],["div-One","div-Five","div-Seven"],["div-Two","div-Five","div-Eight"],["div-Two","div-Six","div-Nine"],["div-One","div-Five","div-Nine"],["div-Three","div-Five","div-Seven"]]
    let playerX = []
    let playerO = []
    
    
    
    
    function nextTurn(event){
                if(event.target.textContent == ""){
                    event.target.textContent = turn
                   if (turn == playerOne){
                       playerX.push(event.target.id)
                       console.log(playerX);
                       turn = playerTwo
                   }
                    else {
                       turn = playerOne
                       playerO.push(event.target.id)
                       console.log(playerO);
                   }
                   status.textContent = turn + " is next"
                   checkWin()

                }
                
                
            }
            function checkWin(){
              for (i = 0;i < winArray.length; i++){
                  let playerXMatchCount = 0
                  let playerOMatchCount = 0
                  for (j = 0; j < winArray[i].length; j++){
                      if (playerX.includes(winArray[i][j])){
                          playerXMatchCount++

                    }
                    if (playerO.includes(winArray[i][j])){
                        playerOMatchCount++ 
                
                    }
                    if (playerXMatchCount === 3){
                        status.textContent= " player 1 wins"
                    }
                    if (playerOMatchCount === 3){
                        status.textContent= " player 2 wins"
                    }
                        

                

                  }
              } 
                }
                    
                
            
          function resetGame(){
              playerX = []
              playerO = []
    cellOne.textContent =""
    cellTwo.textContent=""
    cellThree.textContent=""
    cellFour.textContent =""
    cellFive.textContent=""
    cellSix.textContent=""
    cellSeven.textContent=""
    cellEight.textContent=""
    cellNine.textContent=""
    status.textContent="x is next "
    turn = playerOne





          }

        
})
            
            
            
        
    
   
            

                
            
            
            
            
        
 













































