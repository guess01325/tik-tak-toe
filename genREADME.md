
## List
Technologies

1.HTML
2.JavaScript
3.CSS

# HTMl
    I created a container to hold all my Features and My Grid For Tic-Tac-Toe Using divs within divs. 
    
    All having a Different Heiarchy to place the feautres where Needed

### Snippet

``` <div class="container-One">
  <div class="status-Action"></div>
  <div class="status">× is next</div>
    
    <div class="grid">
      <div class= "game-cell" id="div-One"></div>
      <div class= "game-cell" id= "div-Two"></div>
      <div class= "game-cell" id="div-Three"></div>
      <div class= "game-cell" id="div-Four"></div>
      <div class= "game-cell" id="div-Five"></div>
      <div class= "game-cell" id="div-Six"></div>
      <div class= "game-cell" id="div-Seven"></div>
      <div class= "game-cell" id="div-Eight"></div>
      <div class= "game-cell" id="div-Nine"></div>
    </div>
  ```
# CSS:
    I used Display-Flex to get the cells to display right next to each other.
    
    I used Grid collumns anf Rows to display div in a actual row Column Grid

    Used Extra Style for color

### Snippet


```body{
 
  

 justify-content: center;
 display: flex; 
}
.grid {
  display: grid; 
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  margin: 50px;
  

  }```





