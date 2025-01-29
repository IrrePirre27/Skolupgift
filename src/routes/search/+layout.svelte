<main>
    <slot></slot>
</main>

<div class="backdrop">
</div>

<style>
    main{
        width: 80vw;
        height: 100vh;
        background-color: rgb(198, 255, 141,0.95);
        margin: 5vh auto;
        border-radius: 30px;
        border-width: 3px;
        border-color: rgb(3, 40, 6);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
    }
    .backdrop{
        width: 100vw;
        height: 100vh;
        background-image: url('Hej.webp');
        background-size: cover;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        filter: blur(5px);
    }
</style>