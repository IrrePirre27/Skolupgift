<script>
    let cup1 = "Cup.png"
    let cup2 = "Cup.png"
    let cup3 = "Cup.png"
    let cups = [cup1,cup2,cup3]
    let shufel = "cups.png"

    let username = ""
    let letter = ""
    let cup 

    let osynlig = true
    let blanda = false
    let spela = true

    function foundIt(i) {
        if(i== cup){
            username +=letter[0]
            letter = ""
            osynlig = true
        }
        else{
            letter = ""
        }
        osynlig = true
    }
    async function handleSubmit() {
        cup = Math.round(Math.random()*2)
        blanda = true
        spela = false
        await new Promise((r) => setTimeout(r, 3000));
        osynlig = false
        blanda = false
        spela = true
    }
</script>

<p>Username: {username}</p>
<div class = bokstav>
<form on:submit|preventDefault={handleSubmit}>
    <label for="letter">Next letter:</label>
    <input type="text" id="letter" bind:value={letter}>
</form>
</div>

<div class = "question", class:se ={osynlig}>
    <p>What cup is the letter in?</p>
</div>

<div class= "cup_game">
    <div class= "cup_game_play", class:mix ={blanda}>
        {#each cups as cup,i}
            <div class = "cup"><button class = "knap" on:click={()=>foundIt(i)}><img src={cup} alt="a cup"></button></div>
        {/each}
    </div>
    <div class= "shufel_cups", class:on = {spela}>
        <div class = min-animation ><img src={shufel} alt="shufeling cups"></div>
    </div>
</div>

<div class="backdrop">
</div>

<style>
    .question{
        color: #fff;
    }
    .se{
        color:#000;
    }
    .bokstav{
        background-color: white;
        width: 13.4vw;
    }
    form{
        color: black;
    }
    .cup_game_play{
        background-color: black;
        display:flex;
        flex-wrap: wrap;
        align-items:center;
        justify-content:center;
        width: 100vw;
    }
    .cup{
        flex-basis: 300px;
        margin:10px;
    }
    .cup:hover { 
        box-shadow: 0 0 10px 10px rgb(28, 0, 33);
    }
    .mix{
        display:none;
    }
    .shufel_cups{
        background-color: black;
        display:flex;
        flex-wrap: wrap;
        align-items:center;
        justify-content:center;
        width: 100vw;
    }
    .shufel_cups img{
        height: 300px;
    }
    .on{
        display:none;
    }
    .backdrop{
        width: 100vw;
        height: 100vh;
        background-color:black;
        background-size: cover;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }
    @keyframes mixing{
        0%{padding-left: 100px;}
        5%{padding-left: 0px;}
        10%{padding-left: 100px;}
        15%{padding-left: 200px;}
        20%{padding-left: 100px;}
        25%{padding-left: 0px;}
        30%{padding-left: 100px;}
        35%{padding-left: 200px;}
        40%{padding-left: 100px;}
        45%{padding-left: 0px;}
        50%{padding-left: 100px;}
        55%{padding-left: 200px;}
        60%{padding-left: 100px;}
        65%{padding-left: 0px;}
        70%{padding-left: 100px;}
        75%{padding-left: 200px;}
        80%{padding-left: 100px;}
        85%{padding-left: 0px;}
        90%{padding-left: 100px;}
        95%{padding-left: 200px;}
        100%{padding-left: 100px;}
    }
        
    .min-animation {
        animation-name: mixing;
        animation-duration: 3s; 
        animation-timing-function: linear; 
    }
</style>