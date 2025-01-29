<script>
    let username = []
    let letter = []


</script>

<p>username {username}</p>

<form>
    <label for="letter">Next letter:</label>
    <input type="text" id="letter" bind:value={letter}>
</form>


<style>
    form{
        color: black;
    }
</style>