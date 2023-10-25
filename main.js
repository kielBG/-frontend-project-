const $body = $('body');

const $laughButton = $('<button class = "laugh">need a laugh?</button>');
$body.append($laughButton);
const $animalButton = $('<button class = "animal-pic">how about a cute animal?</button>')
$body.append($animalButton);
$laughButton.on("click", addJoke);
$animalButton.on("click", generateImg);



  function addJoke() {  
    $.ajax({
        url: 'https://icanhazdadjoke.com/',
        type: 'GET',
        dataType: 'json',
        headers: {
            'Accept': 'application/json'
        },
        success: function (data) {
            let div = $(`<div class="joke">${data.joke}</div>`);
        $("body").append(div);  // Outputs a dad joke to the console
        },
        error: function(error) {
            console.error('Error:', error);
        }
    });
  }
function generateImg() {
  $.ajax({
    url: 'https://random.dog/woof.json',
    type: 'GET',
    dataType: 'json',
    headers: {
        'Accept': 'application/json'
    },
    success: function (data) {
        let div = $(`<img src= ${data.url}></img>`);
    $("body").append(div);  // Outputs a dad joke to the console
    },
    error: function(error) {
        console.error('Error:', error);
    }
})
}
    
    
    