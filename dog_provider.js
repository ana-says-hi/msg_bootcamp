
async function gimme_dog() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');

    // Storing data in form of JSON
    var dog_data = await response.json();
    document.getElementById('doggo').src = dog_data.message;
}