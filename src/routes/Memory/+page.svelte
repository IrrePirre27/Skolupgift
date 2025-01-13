<script>

let image = "Gräss.jpg"
let potho = ["får 3.jpg", "får4.jpg", "får5.jpg", "får 6.png", "får 7.jpg", "får 8.jpg"]
let cards = []
for (let index = 0; index < 12; index++) {
    cards=[... cards, {image:potho[index%6],flipped:false,matched:false}]
}
function shuffleArray(array) {
    for (var i = array.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
shuffleArray(cards)

let bluePoints = 0
let redPoints = 0
let blueTurn = true
let par =[]

function flip_card(card) {
    if(card.flipped== false){
        card.flipped = !card.flipped
        let flippedCards= cards.filter(card => card.flipped == true && !card.matched )
        
        if (flippedCards.length == 2){
            //check cards
            if (flippedCards[1].image==flippedCards[0].image){
                if(blueTurn == true){
                    bluePoints = bluePoints+1
                }
                else{ redPoints = redPoints+1}
                flippedCards.forEach((card)=> card.matched=true)
                
                par = [...par, flippedCards]
            }
            else{blueTurn = !blueTurn}
            setTimeout(() => {
                cards.forEach((card) => {
                    card.flipped = card.matched;
                });
                
                cards = cards;
                }, 900);
            
        } 
        
    }
    cards=cards
}

function starta_om(){
    shuffleArray(cards)
    redPoints = 0
    bluePoints = 0
    for (let index = 0; index < 12; index++) {
        cards[index].matched = false
        cards[index].flipped = false
        cards=cards
    }
    par = []
}

</script>



<h1> Memory</h1>

<section>
    {#if redPoints+bluePoints == 6}
        <p>Spelet är över</p>
        {#if redPoints>bluePoints}
            Röd vann
        {/if}
        {#if redPoints<bluePoints}
            blå vann
        {/if}
        {#if redPoints===bluePoints}
            Det blev lika
        {/if}
    {/if}
</section>

<main class= "beholare" >
{#each cards as card }
<div class = "card" class:flipped= { card.flipped } on:click={()=>flip_card(card)}>
    <img src={card.image} alt="en bild" class="front">
    <img src={image} alt="en bild på får" class="back">
</div>
    
{/each}
</main>



<aside class = "blue">
    <p>{bluePoints}</p>
</aside>

<aside>
    <p>{redPoints}</p>
</aside>

<aside class = "turn", class:blue= { blueTurn }>
    
</aside>

<aside class = "information">
    <button class = "knap" on:click={starta_om}>Starta om</button> 
</aside>



<style>
    @media (min-height: 500px){
    main{
        grid-template-columns: repeat(4, 100px);
        grid-template-rows: repeat(3, 100px);
    }
    }
    @media (max-height: 500px){
    main{
        grid-template-columns: repeat(6, 100px);
        grid-template-rows: repeat(2, 100px);
    }
    }
        
    h1{
        justify-self: center;
        align-self: center;
    }
    section{
        position: fixed;
        top: 300px;
        left: 700px;
    }
    .beholare div {
        background-color: beige;
        width: 100%;
        height: 100%;
        border: 1px solid black;
    }
    .beholare{
        width: 60vw;
        height: 70vh;
        display: grid;
        border-radius: 20px;
        gap:1em;
    }
    .card img{
        position: absolute;
        backface-visibility: hidden;

    }
    .card{
        position: relative;
        transform-style: preserve-3d;
    }
    .card:not(.flipped):hover{
        transform: scale(1.1);
    }
    .flipped{
        transform: rotateY(180deg);
    }
    .front{
        transform: rotateY(180deg);
    }
    aside{
        width: 100px;
        height: 100px;
        position: fixed;
        bottom: 10px;
        right: 10px;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    p{
        font-size: 30px;
    }
    .blue{
        left: 10px;
        background-color: blue;
    }
    .turn{
        box-shadow: 0 0 10px 10px yellowgreen;
        z-index: -1;
    }
    .information{
        left: 500px;
        background-color: rgb(153, 0, 255);
    }
</style>