<script>
    let varan = " " 
    import { base } from '$app/paths';
    
    let varor = [{name:"Skinka", status:"köpt", prioritet:0}, {name:"Annanas", status:"köpt", prioritet:0}, {name:"Svamp", status:"köpt", prioritet:0}, {name:"Tomatsås", status:"köpt", prioritet:0}, {name:"Ägg", status:"oköpt", prioritet:0}]
    
    
    function handleSubmit(params){
        if ( varor.filter(vara => vara.name == varan ).length >0){
            alert(varan + " fins redan i listan")
            
        }
        else{
            alert("Varan till lagd")
            let new_vara = {name: varan, status:"oköpt"};
            varor = [...varor, new_vara]
        }
    }

    function remove(index){
        varor.splice(index, 1);
        varor=varor
    }
    function change(index) {
        varor[index].status = "köpt"
    }
    function changeit(index){
        varor[index].status = "oköpt"
    }
    
</script>

<main class="container">
    <h1 class="rubrik">
        Shoppinglist
    </h1>
    <div class="categories_container">
        <section>
            <h2>
                Varor att köpa
            </h2>
            <ul>
                {#each varor as vara,i}
                    {#if vara.status=="oköpt"}
                        <li>
                            {vara.name}<button class = "knap" on:click={()=>remove(i)}>X</button> <button class = "byt" on:click={()=>change(i)}>O</button> <input type="number" id="priority" class="pri" bind:value={varan.prioritet}>
                        </li>
                    {/if}
                
                {/each}
            </ul>
        </section>
        <section>
            <h2>
                Köpta varor
            </h2>
            <ul>
                {#each varor as vara,i}
                    {#if vara.status=="köpt"}
                        <li>
                            {vara.name}<button class = "knap" on:click={()=>remove(i)}>X</button> <button class = "byt" on:click={()=>changeit(i)}>O</button>
                        </li>
                    {/if}
                {/each}
            </ul>
        </section>
    </div>
    <form on:submit|preventDefault={handleSubmit}>
        <label for="varan">Vara:</label>
        <input type="text" id="varan" bind:value={varan}>
        <input type="submit" id="knapp" value="Lägtill">
    </form>
</main>

<style>
    .container{
        background-color:#bd6dab;
        width: 60vw;
        height: 70vh;
        border-radius: 20px;
        display: grid;
        grid-template-rows: 1fr 9fr 1fr;
    }

    .container h1{
        border-radius: 10px;
        background-color:#793e9e;
        justify-self: center;
        align-self: center;
    }

    .categories_container{
        background-color:#558faf;
        height: 100%;
        border-radius: 15px;
        display: grid;
        grid-template-rows: repeat(2,1fr);
        grid-gap: 10px;
    }
    .categories_container section{
        width: 100%;
        height: 100%;
        border-radius: 15px;
    }
    
    .categories_container section:nth-child(even){  
        background-color: rgba(0, 0, 0, 0.1) 
    }
    
    .categories_container section:nth-child(odd){  
        background-color: rgba(0, 0, 0, 0.3) 
    }
    ul{
        list-style-position:inside;
        list-style-type: disc;
    }
    li{
        border: 0,0,1,0;
        border: pink;
    }
    form{
        color: black;
    }
    .pri{
        height: 15px;
        width: 55px;
        color: black;
        font-size: 90%;
    }
    .knap{
        color: red;
    }
    .byt{
        color: greenyellow;
    }
</style>