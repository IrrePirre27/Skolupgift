<script>
    let varor = [{vad:"björk.jpg",namn: "Birch Sapling",pris: 120},{vad:"oak.jpg",namn: "Oak Sapling",pris: 120},{vad:"maple.jpg",namn: "Maple Sapling",pris: 130},{vad:"cherryblossom.jpg",namn: "Cherryblossom Sapling",pris: 150},{vad:"eucalyptus.webp",namn: "Eucalyptus Sapling",pris: 160},{vad:"acacica.jpg",namn: "Acacia Sapling",pris: 160},{vad:"chestnut.jpeg",namn: "Chaestnut Sapling",pris: 150},{vad:"palmtree.webp",namn: "Palmtree Sapling",pris: 200}, {vad:"hazel.jpeg",namn: "Hazel Sapling",pris: 150}]
    let kund = "kundvagn.png"
    let kundvagn = []
    let pris = 0
    let frakt = 0
    let saker = 0
    let cart = false

    function add(index) {
        let varaIkorg = kundvagn.find(obj => obj.vara == varor[index] )
        if (varaIkorg){
            varaIkorg.antal++
        }
        else{
            kundvagn.push({antal: 1, vara: varor[index]})
        }
        kundvagn=kundvagn
        
        for( let k = 0; k < kundvagn.length; k++){
            saker = kundvagn[k].antal + saker
        }
        let mer_pris = varor[index].pris
        if (saker >=5){
            frakt = 350
            saker = 0
        }
        else{
            frakt =200
            saker = 0
        }
        pris = pris + mer_pris
    }
    function se_vagn() {
        cart = !cart
        console.log(cart)
    }
</script>

<div class = "toppen">
    <div class="ej_namn">Home</div>
    <div class="ej_namn">Dealls</div>
    <div class="ej_namn"> Membership</div>
    <div class = "namn"> Sapling Superstore</div>
    <div class="ej_namn">Merch</div>
    <div class="ej_namn">Info</div>
    <div class="ej_namn" ><button class = "knap" on:click={se_vagn}>Cart</button></div>
</div>

<main>
    {#each varor as vara,i}
        <div class="varan">
            <div> <img src={vara.vad} alt={vara.namn}> </div>
            <div> {vara.namn} Price: {vara.pris}</div>
            <button class = "knap" on:click={()=>add(i)}>Add to cart</button>
        </div>
    {/each}
</main>


{#if cart}
    <aside class="kundvagn">
        {#each kundvagn as saker}
        <div>
            {saker.vara.namn} {saker.vara.pris} x{saker.antal}
        </div>
        {/each}
        <div>Shipping: {frakt}</div>
        <div>Total: {pris + frakt}</div>
    </aside>
{/if}



<div class="backdrop">
</div>

<style>
    .toppen{
        display:flex;
        flex-direction:row;
        flex-wrap:nowrap;
        color:#FFFFFF;
        background-color: #633a0b;
        border-color: #FFFFFF;
        border: 3px;
        align-items:center;
    }
    .namn{
        flex: 2;
        color:#FFFFFF;
        background-color: #633a0b;
        border-color: #FFFFFF;
        border-width: 2px; 
        padding: 3px;
    }
    .ej_namn{
        flex: 0.5;
        color:#FFFFFF;
        background-color: #633a0b;
        border-color: #FFFFFF;
        border-width: 2px;
        padding: 3px;
    }
    main{
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        width: 70vw;
        height: 90vh;
        justify-content:space-evenly;
        gap: 1em;
        overflow-x: scroll;
    }
    .varan{
        border-color: #FFFFFF;
        border-width: 2px;
        margin: 10px;
        max-height: 300px;
        max-width: 300px;
        background-color: #4a2b08c3;
        display: flex;
        flex-direction:column;
        padding: 10px;
    }
    .varan img{
        max-height: 30vh;
        max-width: 10vw;
    }
    .se{
        display:none;
    }
    .kundvagn{
        position: fixed;
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        max-height: 400px;
        max-width: 300px;
        top: 100px;
        right: 10px;
        background-color: #3d3006;
        padding: 2px;
        border-color: #FFFFFF;
        border-width: 2px;
        box-shadow: -8px 8px 10px rgba(0,0,0,0.9)
    }
    .backdrop{
        width: 100vw;
        height: 100vh;
        background-color:rgb(15, 85, 15);
        background-size: cover;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }
    
</style>