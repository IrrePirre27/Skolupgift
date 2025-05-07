<script>
    let lista = [0,1,2,3,4]
    let ram = false
    function klick(i) {
        ram = !ram
    }
</script>


<main>

    <p>
        Wow det funkar
    </p>
{#each lista as nuber,i}
    <div class = "box" class:ram={ram} on:click={()=>klick(i)}><li>{i}</li></div>
{/each}
</main>


<style>


    main{
        display: grid;
        -ms-grid-row-span: 4;
        -ms-grid-column-span: 3;
        height: 70vh;
        width: 60vw;
    }
    .box{
        color: black;
        background-color: red;
        padding: 5px;
        margin: 3px;
        grid-area: 1;
    }
    .ram{
        border-color: black;
        border-style: dotted;
        border-width: 2px;
    }

*{
    font-family: 'Open-Dyslexic';
}

</style>
