
<script>
    /** @type {import('./$types').PageData} */
    export let data;


    let pokemons = [];
    import {pokemons_store} from "$lib/pokemons";

    import { onMount } from 'svelte';
    onMount(() => {
        /*Check if has more then 2 characters*/
        if($pokemons_store.length > 2){
            pokemons = JSON.parse($pokemons_store);
        }
        pokemons.push(data.response)
        $pokemons_store = JSON.stringify(pokemons);
        if(pokemons.length > 5){
            pokemons.shift
        }
    });

</script>

{#await data}
<p>.. waiting</p>
{:then pokemon} 

<article>
    {#each Object.entries(pokemon.response.sprites) as sprites}
    {#if typeof sprites[1] == "string"}
    <img src={sprites[1]} />
    {/if}
    {/each}
</article>
<h1>{pokemon.response.name}</h1>

<section>
    <p>{pokemon.response.id}</p>
    <section class="moves">
        {#each pokemon.response.moves as form }
                <p>{form.move.name}</p>

        {/each}
    </section>
    <p>hight {(pokemon.response.height)/10}m - weight {(pokemon.response.weight)/10}kg</p>
</section>


{/await}  



<style>
    .moves{
        height: 150px;
        overflow-y: scroll;
        border: 2px;
        border-color: rgb(17, 65, 0);
    }
    article{
        display: flex;
        width: 90%;
        height: 30%;
        gap: 1em;
        overflow-x: scroll;
    }

</style>    