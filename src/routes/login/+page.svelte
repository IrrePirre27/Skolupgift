<script>
    let namn = "" 
    let kod= ""
    
    import { base } from '$app/paths';
    import {users_store} from "$lib/user";
    let users = [];
    
    import { onMount } from 'svelte';
    onMount(() => {
        /*Check if has more then 2 characters*/
        if($users_store.length > 2){
            users = JSON.parse($users_store);
        }
    });

    function handleSubmit(params) {
        if ( users.filter(user => user.username == namn && user.password == kod ).length >0){
            alert("Välkommen tillbacka"+"\n" +namn)
            
        }
        else{
            alert("Ininge användare hittas"+"\n" + "vänligen skapa en ny eller kolla staving")
        }
    }
</script>

<main>
    <div class= "container">
        <h1>
            Inloggning
        </h1>
        <form on:submit|preventDefault={handleSubmit}>
            <label for="name">Namn:</label>
            <input type="text" id="name" bind:value={namn}>
            <label for="lösenord">Lösenord:</label>
            <input type="password" id="lösenord" bind:value={kod}>
            <input type="submit" id="knapp" value="Logga in">
        </form>
        Har du inte ett konto <a href="{base}/register">skapa ett här
        </a>
        
    </div>
</main>

<style>
    .container{
        border: solid 5px rosybrown;
        border-radius: 10px;
        width: 35%;
        height: 50%;
        background-color: #9b779e;
        margin: auto;
        display:flex;
        flex-direction: column;
        justify-content:space-evenly;
        align-items: center;
        min-width: 300px;
        min-height: 300px;
    }  
    
    form{
        color: black;
    }

    main{
        background-image: url("https://t4.ftcdn.net/jpg/05/21/65/59/360_F_521655929_N80d5GaCQJ2VP073PfTXJTe9mkvsNtHE.jpg");
        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 5%;
        min-height: 600px;
    }
</style>
