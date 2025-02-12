<script>
    import ElizaBot from 'elizabot';
    const eliza = new ElizaBot();
    let chat = [{ user: 'Eliza', message: eliza.getInitial() }];

    import { enhance } from "$app/forms";
    
    async function write(message) {
        TODO: chat = [...chat,{user:'you',message: message}]
        
        var element = document.getElementById("visible");
        element.style.display = "flex"; 
        
        await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));

        var element = document.getElementById("visible");
        element.style.display = "none"; 

        TODO: chat = [...chat,{user:'Eliza',message: eliza.transform(message)}]

    }

</script>

<main>
    <section>
        {#each chat as c}
            <article class={c.user}><p>{c.message}</p></article>
        {/each}
        <article id="visible">
            <span class="circle"></span>
            <span class="circle"></span>
            <span class="circle"></span>
        </article>
    </section>

    
    <form  method="post"
    use:enhance={({ formElement, formData, action, cancel }) => {
    cancel(); //don't post anything to server
    const text = formData.get("text"); // what does "text" refer to?
    write(text);

    // TODO: reset the form using _____.reset() - what do we want to reset? the element or the data?

    }}>
            
        <label for="Chat">Chatta:</label>
        <input name="text" type="text" id="Chat" required placeholder ="Aa">
        <input type="submit" id="knapp" value="skicka">
    </form>
</main>

<style>
    main{
        width: 70vw;
        height: 80vh;
        background-color: #d7ff92;
        color: #000000;
    }
    section{
        height: 86%;
        overflow-y:scroll;
    }
    main section{
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
        width: 90%;
        background-color: #cfd55a;
    }
    .Eliza{
        background-color: #4f622d;
        margin-right: 150px;
        margin-bottom: 5px;
        border-radius: 10px;
    }
    .you{
        text-align: end;
        background-color: #0c3d17;
        margin-left: 150px;
        margin-bottom: 5px;
        color: #ffffff;
        border-radius: 10px;
    }
    .circle{
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: #ffc0cb;
        animation-name: skriver;
        animation-duration: 1000ms;
        animation-timing-function: ease-in-out;
    }
            .circle:nth-child(1) {
                animation-delay: 0ms; 
            }
            .circle:nth-child(2) {
                animation-delay: 333ms; 
            }
            .circle:nth-child(3) {
                animation-delay: 666ms; 
            }
    #visible{
        height: 30px;
        width: 100px;
        border-radius: 10px;
        background-color: #f2e85c;
        display:none;
        justify-content: center;
        align-items: center;
    }
    @keyframes skriver{
        0% { transform: scale(1); }
        25% {transform: scale(1.2);}
        50% { transform: scale(1.4); }
        75% {transform: scale(1.2);}
        100% { transform: scale(1);}
    }

</style>
