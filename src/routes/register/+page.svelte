<script>
    let color = "White"
    let namn = "" 
    let email= ""
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
    
        if ( users.filter(user => user.username == namn ).length >0){
            alert("Använarnamn upptaget"+"\n" + "vänligen välje ett nyt")
        }
        else{    
            let new_user = {username: namn, password: kod, email: email, color: color};
            
            alert("Välkommen"+"\n" +namn+ "\nmejl: " + email + "\nlösenord: "+ kod )
            users = [...users, new_user];
            $users_store = JSON.stringify(users);
        }
    }

</script>

<main>
    <div class= "container">
        <h1>
            Registrering
        </h1>
        <form on:submit|preventDefault={handleSubmit}>
            <div class= "va" style="width: 100px; height: 100px; border-radius: 50%; overflow:hidden; background-color:{color};">
            </div>
            <label for="name">Namn:</label>
            <input type="text" id="name" bind:value={namn}>
            <label for="e-postadress">e-postadress:</label>
            <input type="email" id="e-postadress" bind:value={email} >
            <label for="lösenord">Lösenord:</label>
            <input type="password" id="lösenord" bind:value={kod}>
            <label for="favoritfärg">Favoritfärg:</label>
            <select id = "favoritfärg" bind:value={color}>
                <option value="blue">Blå</option>
                <option value="yellow">Gul</option>
                <option value="red">Röd</option>
                <option value="green">Grön</option>
                <option value="pink">Rosa</option>
                <option value="purple">Lila</option>
                <option value="magenta">Magenta</option>
            </select>
            <input type="submit" id="knapp" value="Registrera">
        </form>
        har du redan ett konto<a href="{base}/login">Logain här</a>
    </div>
</main>

<style>
    .container{
        border: solid 5px rosybrown;
        border-radius: 10px;
        width: 35%;
        height: 80%;
        background-color: #8d6e90;
        margin: auto;
        display:flex;
        flex-direction: column;
        justify-content:space-evenly;
        align-items: center;
        min-width: 300px;
        min-height: 500px;
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
