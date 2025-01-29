<script>
    let search 
    import { goto } from "$app/navigation";
    
    let pokemons = [];
    import {pokemons_store} from "$lib/pokemons";
    import { onMount } from 'svelte';
    onMount(() => {
        /*Check if has more then 2 characters*/
        if($pokemons_store.length > 2){
            pokemons = JSON.parse($pokemons_store);

        }

    });
</script>

<form on:submit|preventDefault={()=> goto('/search/'+search.toLowerCase())}>
    <label for="Chat">Sök:</label>
    <input type="text" placeholder="Sök upp en pokemon" bind:value={search} />
</form>

{#each pokemons as pokemon }
<button>
{pokemon.name}
    </button>
{/each}


<style>
    form{
        color: black;
    }

    input{
        color:black;
    }

</style>