<script>
    import { enhance } from "$app/forms";
    import { base } from '$app/paths';
	import { onMount } from "svelte";

    let default_glossor = [{Svenska:"Hej", Engelska: "Hello", vald:false},{Svenska:"Nej", Engelska: "No", vald:false},{Svenska:"Ja", Engelska: "Yes",vald:false}]
    let aktiv_glossor = [...default_glossor]
    let use_glossor = [...aktiv_glossor]
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

    let egna_glossset = []
    let vilket_sett = "default"

    onMount(()=>{
        let egna_glossor = localStorage.getItem("egna_glossor") 
        if(egna_glossor.length > 0){
            egna_glossset = JSON.parse(egna_glossor)
        }
        console.log(egna_glossset);
        
    })

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
        use_glossor = [...aktiv_glossor]
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
    
    function choose_sett(i) {
        console.log("knappen fungerar");
        use_glossor = [...egna_glossset[i]]
        aktiv_glossor = [...egna_glossset[i]]
        vilket_sett = i + 1
    }
</script>

<div class="backdrop"></div>

<main>
    <div class="eget">
        <a href="{base}/add_glossor">
            <aside class="egna">
                <div class = "line"></div>
                <div class = "line"></div>
                <div class = "line"></div>
            </aside> 
        </a>
    </div>
    <div class = "glossor">
        <h1>Glosor{"\t" + vilket_sett}</h1>
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
    </div>
    <div class = " lisstor">
        {#each egna_glossset as glossset,i}
            <div> <button class = "knap" on:click={()=>choose_sett(i)}>Glosor{i+1}</button> </div>
        {/each}
    </div>
</main>



<style>
    *{
    font-family: 'Open-Dyslexic';
    }
    main{
        height: 100vh;
        width: 100vw;
        display: flex;
    }
    .glossor{
        display: flex;
        height: 100vh;
        width: 100vw;
        align-items: center;
        flex-direction: column;
    }
    .fylli_svar{
        height: 100vh;
        width: 80vw;
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
        background-color: #202020;
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
    .lisstor{
        width: 14vw;
    }
    .eget{
        width: 6vw;
    }
    .egna{
        border-width: 3px;
        border-color: black;
        height: 6vh;
        width: 6vh;
        background-color: rgb(32, 32, 32);
        margin: 10px;
    }
    .line{
        width: 2vw;
        height: 4px;
        background-color: black;
        margin: 8px;
    }
    .backdrop{
        width: 100vw;
        height: 100vh;
        background-color:#242424;
        background-size: cover;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }
</style>