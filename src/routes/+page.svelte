<script>
        import { enhance } from "$app/forms";

    let glossor = [{Svenska:"Hej", Engelska: "Hello", vald:false},{Svenska:"Nej", Engelska: "No", vald:false},{Svenska:"Ja", Engelska: "Yes",vald:false}]
    let use_glossor = [...glossor]
    let valda_glossor = []
    let ord = Math.round(Math.random()*(use_glossor.length-1))
    let tries = 0
    let svar = ""
    let correct = 0

    let visa_svar = true
    let right = false
    let wrong = false
    let ord_kvar = false
    let fira = true
    let wait = true

    function handleSubmit(params){
        if (tries === 2){
            visa_svar = false
            wrong = true
        }
        if (svar === use_glossor[ord].Engelska){
            correct = correct + 1
            tries = 0
            visa_svar = true

            right=true
        }
        else{
            tries = tries+1
            wrong = true
        }
        setTimeout(()=>{ if(right){use_glossor.splice(ord,1); if(use_glossor.length >= 1) {use_glossor = use_glossor;slump()}else{ord_kvar = true,fira = false};}; wrong=false;right=false;}, 1000)
        console.log(valda_glossor);
    }
    function slump() {
        if(use_glossor.length >= 1){
        ord = Math.round(Math.random()*(use_glossor.length-1))
        }
    }
    function igen_alla() {
        ord_kvar = false
        fira = true
        console.log("detta händer");
        use_glossor = [...glossor]
    }
    function igen_markerad() {
        if (valda_glossor.length > 0){
            ord_kvar = false
            fira = true
            console.log(use_glossor.length);
            use_glossor = [...valda_glossor]}
        else{
            wait = false
            fira =true
            setTimeout(()=>{wait = true, fira =false}, 2000);
            console.log("timern tar slut");
            
        }
    }
    function selected() {
        use_glossor[ord].vald = !use_glossor[ord].vald
        if (use_glossor[ord].vald)
            valda_glossor = [...valda_glossor, use_glossor[ord]]

        else
            valda_glossor = valda_glossor.filter(glossa =>glossa!= use_glossor[ord])
    }
</script>

<div class="backdrop"></div>

<main>
    <div  class = "fylli_svar", class:klar ={ord_kvar}> 
        <button class = "knap" on:click={()=>selected()}><div class="choose" class:merkt={use_glossor[ord].vald}></div></button>
        <div class= "svar">
            <form  method="post"
            use:enhance={({ formElement, formData, action, cancel }) => {
            cancel(); //don't post anything to server
            formElement.reset()
            handleSubmit()}}>
                <label class:gren ={right} class:red = {wrong} for="Glosor">{use_glossor[ord].Svenska}</label>
                    <input  class = "fyll_i" type="text" id="glosor" required placeholder ="Aa" bind:value={svar} autocomplete="off">
            </form>
            <p class:help={visa_svar}> Rätt svar: {use_glossor[ord].Engelska} </p>
        </div>
    </div>
    <div class = "done", class:klart={fira}>
        <p>Du har stavt alla ord rätt</p>
        <button class = "knap" on:click={()=>igen_alla()}>Starta Om - Alla Ord</button>
        <button class = "knap" on:click={()=>igen_markerad()}>Starta Om - Märkta Ord</button>
    </div>
    <div class = "No_words", class:ta_lungt = {wait}>
        <p>Inga märkta ord</p>
    </div>
</main>

<aside class="egna"></aside>

<style>
    *{
    font-family: 'Open-Dyslexic';
    }
    .fylli_svar{
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .choose{
        border-width: 3px;
        border-color: black;
        border-radius: 50%;
        height: 6vh;
        width: 6vh;
        background-color: rgb(32, 32, 32);
        margin: 10px;
    }
    .merkt{
        background-color: rgb(104, 98, 3);
    }
    .svar{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        font-size: 120%;
    }
    .fyll_i{
        background-color: rgb(32, 32, 32);
        border-color: black;
        border-width: 3px;
        width: 25vw;
        height: 7vh;
        margin: 5px;
    }
    .klar{
        display:none;
    }
    .help{
        display:none;
    }
    .red{
        color: red;
    }
    .gren{
        color: green;
    }
    .done{
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .klart{
        display: none;
    }
    .No_words{
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .ta_lungt{
        display:none;
    }
    .egna{
        border-width: 3px;
        border-color: black;
        border-radius: 50%;
        height: 6vh;
        width: 6vh;
        background-color: rgb(32, 32, 32);
        margin: 10px;
    }
    .backdrop{
        width: 100vw;
        height: 100vh;
        background-color:rgb(36, 36, 36);
        background-size: cover;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }
</style>