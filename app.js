function grabImage(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data);
        document.getElementById("doggo").src = data.message 
    });
}
