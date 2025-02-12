<script>

    let color = "transparent";
    let snakecolor = "#0E784D";
    let lettercolor = "#000000";
    let coincolor =   "#FFFF00";
    let size = 24;
    let letters = ".............o..................o....................o........................................o...............................o........................................o....................o..........".split("");
    let pixelsize = 20;
    let pixels
    let skoten = 3
    
    function resetPixels(size){
        //assign random indexes for the letters
        let tempLetters = [];
        letters.forEach((letter)=>{
            let index;
            do{
            index = Math.floor(Math.random() * size*size); 
            }while (tempLetters.length>0 && tempLetters.filter((l) => l.id == index).length != 0)
            tempLetters.push({l:letter,id:index});
        })

        //Construct the grid of list of rows
        pixels = [];
        let row;
        // to keep track of the letters random indices
        let k = 0;
        for(let i = 0; i<size;i++){
            row = []
            for(let j = 0; j<size;j++){
                // get the letter with index k
                let templetter = tempLetters.filter((l) => l.id == k);  
                // if letter at index add letter otherwise empty
                
                row.push(templetter.length>0?{color:templetter[0].l == "." ? lettercolor : coincolor,letter:templetter[0].l}:{color:color,letter:""})
                k++;
            }
            pixels.push(row)
        }
    }
    resetPixels(size)

    let snakecol = 0;
    let snakerow = 0;
    let coldir = 0;
    let rowdir = 0;

    let intervalId;
    // up = 38
    // down = 40
    // right = 39
    // left = 37
    function onKeyDown(e) {
                let move = true

    switch(e.keyCode) {
            case 38:
                rowdir=-1;
                coldir = 0;
                break;
            case 40:
                rowdir=1;
                coldir = 0;
                break;
            case 37:
                coldir=-1;
                rowdir= 0;
                break;
            case 39:
                coldir=1;
                rowdir = 0;
                break;
            case 32:
                if(skoten>=1){
                    let tempcol = snakecol+ coldir;
                    let temprow = snakerow + rowdir;
                    let temppixel = pixels[temprow][tempcol]
                    temppixel.color = color;
                    temppixel.letter = "";
                    move = false
                    skoten = skoten -1
                }
                pixels = pixels
            break;


    }
    if (move){
        let tempcol = snakecol+ coldir;
        let temprow = snakerow + rowdir;
        //check so not outside of grid
        if(temprow> -1 && temprow < size && tempcol > -1 && tempcol < size ){
            snakecol = tempcol;
            snakerow = temprow;
        }
        // reverse direction and reset username if hit wall
        else{
            rowdir= -rowdir;
            coldir = -coldir;
        }   
        }}
    
    // clear the existing interval - we only want one
   
    


    function letterCollision(pixel){

        if (pixel.letter == "."){
        snakecol -= coldir
        snakerow -= rowdir
        }
        else{
        

        pixel.letter = "";
        pixel.color = color
        pixels = pixels
        skoten = skoten + 1
    }
    }
</script>


<main>
    <h1>{skoten}</h1>
    <div class = "the_maze">
        <div class="grid">
            {#each pixels as row, rowIndex}
                <div class="row">
                {#each row as pixel, colIndex}
                    {#if rowIndex == snakerow && colIndex == snakecol}
                        {#if pixel.letter != ""}
                            {letterCollision(pixel)}
                        {/if}
                        <div class="pixel"  style="background: {snakecolor}; 
                            width: {pixelsize}px; height: {pixelsize}px;">
                            {Math.abs(coldir)== 1?(coldir==1)?">":"<":rowdir==1?"v":"^"}
                        </div>
                    {:else}
                    <div class="pixel" style="background: {pixel.color}; 
                            width: {pixelsize}px; height: {pixelsize}px;">
                        {pixel.letter}
                    </div>
                    {/if}
                {/each}
                </div>
            {/each}
        </div>
    </div>
</main>

<div class="backdrop">
</div>

<svelte:window on:keydown|preventDefault={onKeyDown} />
<style>
    .the_maze{
        width: 1000px;
		height: 625px;
		border: solid rgb(0, 255, 68) 5px;
        background-color: rgb(255, 255, 255);
		margin: 0;
		display: flex;
        justify-content: space-around;
        align-items: flex-start;
    }
    main {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin: 0;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        min-height: 100vh;
    
    }
    
    .grid {
        display: grid;
        grid-gap: 0;
        border: #050C48 solid 1px;
        margin-top: 20px;
        background-color: transparent;
    }
    
    .row {
        display: flex;
    }
    
    .pixel {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 80%;
        transition: background 0.1s;
        text-align: center;
    }
    main{
        width: 80vw;
        height: 100vh;
        background-color: rgba(197, 255, 189, 0.942);
        margin: 5vh auto;
        border-radius: 30px;
        border-width: 3px;
        border-color: rgb(9, 204, 25);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
    }
    .backdrop{
        width: 100vw;
        height: 100vh;
        background-color:rgb(15, 1, 43);
        background-size: cover;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }
</style>