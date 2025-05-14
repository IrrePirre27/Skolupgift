<script>
    import { base } from '$app/paths';
    import { enhance } from "$app/forms";

    let Ord_Engelska = ""
    let Ord_Svenska = ""
    let nya_glossor = []
    let egna_glosor = []

    /**
    * @param minLength 
    * @param string 
    * @returns 
    */


    export const isStringInValid = (string, minLength) => {
        return !string || !string?.trim() || !/^[a-zA-Z ]+$/.test(string) || string.length < minLength
    }

    function handleSubmit(params) {
        if(isStringInValid(Ord_Svenska+Ord_Engelska)){alert("Du behöver ej siffror")
        }
        else{
            let nytt_ord = {Svenska:Ord_Svenska, Engelska:Ord_Engelska, vald:false}
            nya_glossor =[...nya_glossor,nytt_ord]
            console.log("detta görs");
            
        }
    }
    function nytSett(params) {
        console.log("vi tar oss hit");
        if(nya_glossor.length >= 3){
            egna_glosor =[...egna_glosor,nya_glossor]
            localStorage.setItem("egna_glossor",JSON.stringify(egna_glosor))
            console.log(localStorage.getItem("egna_glossor"))
            nya_glossor = []
        }
    }
</script>

<div class = "bakrund"></div>

<main>
    <a target="_self" href="{base}/">
        <aside class="egna">
            <div class = "line"></div>
            <div class = "line"></div>
            <div class = "line"></div>
        </aside> 
    </a>
    <div class="add_words">
        <form method="post"
            use:enhance={({ formElement, formData, action, cancel }) => {
            cancel(); //don't post anything to server
            console.log("here")
            formElement.reset()
            handleSubmit()}}>
            <div class = "language">
                <label for="Ord_Svenska">Svenska ordet</label>
                <input  class = "fyll_i" type="text" id="Ord_Svenska" required placeholder ="Aa" autocomplete="off" bind:value={Ord_Svenska}>
            </div>
            <div class = "language">
                <label for="Ord_Engelska">Engelska ordet</label>
                <input  class = "fyll_i" type="text" id="Ord_Engelska" required placeholder ="Aa" autocomplete="off" bind:value={Ord_Engelska}>
            </div>
            <button type="submit">Lägg till</button>
        </form>
    </div>
    <div class= "dessa_ord">
        {#each nya_glossor as glossa,i}
            <div>{glossa.Svenska}{" - "}{glossa.Engelska}</div>
        {/each}
        <button class = "knap" on:click={()=>nytSett()}>Skappa ny glosslista</button>
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
    .add_words{
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-size: 120%;
    }
    form{
        display: flex;
        flex-direction: row;
    }
    .language{
        margin: 1vh;
    }
    .fyll_i{
        background-color: rgb(32, 32, 32);
        border-color: black;
        border-width: 3px;
        width: 25vw;
        height: 7vh;
        margin: 5px;
    }
    .dessa_ord{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 30vw;
    }
    .bakrund{
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