




document.addEventListener('DOMContentLoaded', function (){
    const playerOne = "x"
    const playerTwo = "o"
    let turn = 2
    
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
    
    
    
    
    
    
    let innerDivOneSelect = false
    function clickOne(){
        if (innerDivOneSelect == false){
            if (turn%2 === 0){ 
                cellOne.textContent = playerOne; 
                
            } else {
                
                cellOne.textContent = playerTwo ; 
                
            }
            turn++;
        } 
        innerDivOneSelect = true;
        
    }
    
    let innerDivTwoSelect = false;
    function clickTwo(){
        if (innerDivTwoSelect == false){
            if (turn%2 === 0){ 
                cellTwo.textContent = playerOne; 
                
            } else {
                cellTwo.textContent = playerTwo; 
            }
            
            turn++;
        }
    
        
        innerDivTwoSelect = true;
        status.innerHTML = "o is next"
        
        
    }
    
    let innerDivThreeSelect = false;
    function clickThree(){
        if(innerDivThreeSelect == false){
            if (turn%2 === 0){ 
                cellThree.textContent = playerOne;
                
            } else {
                cellThree.textContent = playerTwo; 
            }
            turn++;
        }
         innerDivThreeSelect = true; 
         status.innerHTML = "x is next"
        
    }
    
    
    let innerDivFourSelect = false;
    function clickFour(){
        if(innerDivFourSelect == false){
            if (turn%2 === 0){
                cellFour.textContent = playerOne;
            } else {
                cellFour.textContent = playerTwo; 
            }
            turn++;    
        }
        innerDivFourSelect = true;
        status.innerHTML = "o is next"
    }
        
    let innerDivFiveSelect = false;
    function clickFive(){
        if(innerDivFiveSelect == false ){
            if (turn%2 === 0){ 
                cellFive.textContent = playerOne; 
            } else {
                cellFive.textContent = playerTwo; 
            }
            turn++;
        }
        innerDivFiveSelect = true;   
        status.innerHTML = "x is next"
    }
    
    let innerDivSixSelect = false;
    function clickSix(){
        if(innerDivSixSelect == false){
            if (turn%2 === 0){ 
                cellSix.textContent = playerOne; 
            } else {
                cellSix.textContent = playerTwo; 
            }
            turn++; 
        }
        innerDivSixSelect = true;
        status.innerHTML = 'o is next'
    }
    
    let innerDivSevenSelect = false;
    function clickSeven(){
        if(innerDivSevenSelect == false){
            if (turn%2 === 0){ 
                cellSeven.textContent = playerOne; 
            } else {
                cellSeven.textContent = playerTwo; 
            }
            turn++; 
        }
           innerDivSevenSelect = true;
           status.innerHTML = "x is next"
    }
    
    
    let innerDivEightSelect = false;
    function clickEight(){
        if (innerDivEightSelect == false){
            if (turn%2 === 0){ 
                cellEight.textContent = playerOne; 
            } else {
                cellEight.textContent = playerTwo; 
            }
            turn++;
        }
           innerDivEightSelect = true;
           status.innerHTML = "o is next" 
    }
    
    let innerDivNineSelect = false;
    function clickNine(){
        if(innerDivNineSelect == false){
            if (turn%2 === 0){ 
                cellNine.textContent = playerOne; 
            } else {
                cellNine.textContent = playerTwo; 
            }
            turn++;   
        }
         innerDivNineSelect = true;
         status.innerHTML = "x is next"
        }
        
        
        function winSelector(){
        let one = document.querySelector("div-one");
        let two = document.querySelector("div-Two");
        let three = document.querySelector("div-Three");
        let four = document.querySelector("div-Four");
        let five = document.querySelector("div-Five");
        let six = document.querySelector("div-Six");
        let seven = document.querySelector("div-Seven");
        let eight = document.querySelector("div-Eight");
        let nine = document.querySelector("div-Nine");
         }


    cellOne.addEventListener("click", clickOne )
    cellTwo.addEventListener("click", clickTwo);
    cellThree.addEventListener("click", clickThree)
    cellFour.addEventListener("click", clickFour);
    cellFive.addEventListener("click", clickFive);
    cellSix.addEventListener("click", clickSix);
    cellSeven.addEventListener("click", clickSeven);
    cellEight.addEventListener("click", clickEight);
    cellNine.addEventListener("click", clickNine);
                    
                    
                                    
 });
 













































