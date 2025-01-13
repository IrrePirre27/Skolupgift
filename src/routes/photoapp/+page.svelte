<script>
    let image = "får 3.jpg"
    let photo = "får 6.png"
    let picture = "får5.jpg"
</script>

<main>
    <h1> phootoapp</h1>
    <p>Denna sida innehåller fina bilder</p>
</main>

<div class="photos">
    <div class="image-wrapper">
        <img src={image} alt="ett Får">
    </div>
    <div class="image-wrapper">
        <img src={photo} alt="ett anat Får">
    </div>
    <div class="image-wrapper">
        <img src={picture} alt="ett tredje Får">
    </div>
</div>

<style>
    .image-wrapper{
        flex-grow:1;
        flex-basis: 300px;
        margin:10px;
    }
    .image-wrapper img{ 
        width: 100%; 
        border-radius: 20px;
        border: 2px solid white;
        box-shadow: 4px 8px 10px rgba(0,0,0,0.7)
    }
    .photos{
        display:flex;
        flex-wrap: wrap;
        align-items:center;
        justify-content:center;
        width: 90vw;
        background-color: gainsboro;
    }
    .image-wrapper:hover { 
        flex-grow:2; 
    }
    .image-wrapper:active { 
        transform: scale(0.9); 
    }
    h1{
    text-align: center;
    font-size: 50px;
    margin: 20px;
    color: grey;
    }
</style>