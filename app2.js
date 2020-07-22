            
               

         
    
    
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